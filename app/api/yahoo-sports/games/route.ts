import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('yahoo_access_token')?.value

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Not authenticated', authenticated: false },
        { status: 401 }
      )
    }

    console.log('[v0] Fetching user games from Yahoo API')

    // Get user's fantasy games
    const response = await fetch(
      'https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games?format=json',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[v0] Yahoo API error:', response.status, errorText)
      return NextResponse.json(
        { error: 'Yahoo API request failed', details: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('[v0] Yahoo games response:', JSON.stringify(data, null, 2))

    return NextResponse.json({
      data,
      authenticated: true,
    })
  } catch (error) {
    console.error('[v0] Games fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch games', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
