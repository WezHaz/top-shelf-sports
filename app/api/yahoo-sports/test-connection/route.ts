import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('yahoo_access_token')?.value

    if (!accessToken) {
      return NextResponse.json({
        status: 'error',
        message: 'Not authenticated. Please log in with Yahoo first.',
        authenticated: false,
      })
    }

    // Test API call to get user's fantasy games
    const testUrl =
      'https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games?format=json'

    console.log('[v0] Testing Yahoo API connection...')

    const response = await fetch(testUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    const responseText = await response.text()
    console.log('[v0] Yahoo API response status:', response.status)
    console.log('[v0] Yahoo API response:', responseText)

    if (!response.ok) {
      return NextResponse.json({
        status: 'error',
        message: `API returned status ${response.status}`,
        authenticated: true,
        details: responseText,
        statusCode: response.status,
      })
    }

    let data
    try {
      data = JSON.parse(responseText)
    } catch (e) {
      // Try to parse as XML if JSON fails
      return NextResponse.json({
        status: 'success',
        message: 'Connected to Yahoo Sports API successfully!',
        authenticated: true,
        dataFormat: 'xml',
        rawResponse: responseText.substring(0, 500), // First 500 chars
      })
    }

    return NextResponse.json({
      status: 'success',
      message: 'Connected to Yahoo Sports API successfully!',
      authenticated: true,
      dataFormat: 'json',
      gamesCount: data.fantasy_content?.users?.[0]?.user?.[1]?.games?.count || 0,
    })
  } catch (error) {
    console.error('[v0] Test connection error:', error)
    return NextResponse.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error',
        authenticated: false,
      },
      { status: 500 }
    )
  }
}
