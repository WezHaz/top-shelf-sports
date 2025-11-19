import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.redirect(
      new URL(`/player-scout?error=${error}`, request.url)
    )
  }

  if (!code) {
    return NextResponse.redirect(
      new URL('/player-scout?error=no_code', request.url)
    )
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch(
      'https://api.login.yahoo.com/oauth2/get_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(
            `${process.env.YAHOO_CLIENT_ID}:${process.env.YAHOO_CLIENT_SECRET}`
          ).toString('base64')}`,
        },
        body: new URLSearchParams({
          code,
          redirect_uri: process.env.YAHOO_REDIRECT_URI || '',
          grant_type: 'authorization_code',
        }),
      }
    )

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text()
      console.error('[v0] Token exchange failed:', errorData)
      return NextResponse.redirect(
        new URL('/player-scout?error=token_failed', request.url)
      )
    }

    const tokenData = await tokenResponse.json()
    console.log('[v0] Successfully got access token')

    // Store tokens in cookies (in production, use secure session storage)
    const cookieStore = await cookies()
    cookieStore.set('yahoo_access_token', tokenData.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: tokenData.expires_in,
    })
    cookieStore.set('yahoo_refresh_token', tokenData.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })

    return NextResponse.redirect(
      new URL('/player-scout?auth=success', request.url)
    )
  } catch (error) {
    console.error('[v0] Auth callback error:', error)
    return NextResponse.redirect(
      new URL('/player-scout?error=unknown', request.url)
    )
  }
}
