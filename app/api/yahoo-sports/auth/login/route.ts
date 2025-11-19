import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const clientId = process.env.YAHOO_CLIENT_ID
  const redirectUri = process.env.YAHOO_REDIRECT_URI

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: 'Yahoo OAuth credentials not configured' },
      { status: 500 }
    )
  }

  // Build Yahoo OAuth URL
  const authUrl = new URL('https://api.login.yahoo.com/oauth2/request_auth')
  authUrl.searchParams.set('client_id', clientId)
  authUrl.searchParams.set('redirect_uri', redirectUri)
  authUrl.searchParams.set('response_type', 'code')
  authUrl.searchParams.set('language', 'en-us')

  return NextResponse.redirect(authUrl.toString())
}
