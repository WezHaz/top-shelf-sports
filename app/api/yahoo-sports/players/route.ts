import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const { leagueKey, searchQuery } = await request.json()

    const cookieStore = await cookies()
    const accessToken = cookieStore.get('yahoo_access_token')?.value

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Not authenticated', authenticated: false },
        { status: 401 }
      )
    }

    console.log('[v0] Fetching players from Yahoo API:', { leagueKey, searchQuery })

    // Search players within a specific league
    let url = `https://fantasysports.yahooapis.com/fantasy/v2/league/${leagueKey}/players`
    
    if (searchQuery) {
      url += `;search=${encodeURIComponent(searchQuery)}`
    }
    
    url += '?format=json'

    console.log('[v0] Yahoo API URL:', url)

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[v0] Yahoo API error:', response.status, errorText)
      return NextResponse.json(
        { error: 'Yahoo API request failed', details: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('[v0] Yahoo players response:', JSON.stringify(data, null, 2))

    // Parse Yahoo's response format
    const players = parseYahooPlayers(data)

    return NextResponse.json({
      players,
      source: 'yahoo-api',
      authenticated: true,
    })
  } catch (error) {
    console.error('[v0] Players fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch players', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Helper function to parse Yahoo's complex response format
function parseYahooPlayers(data: any): any[] {
  try {
    // Yahoo API returns a complex nested structure
    const fantasy_content = data.fantasy_content
    if (!fantasy_content) return []

    const league = fantasy_content.league
    if (!league) return []

    const playersData = league[1]?.players
    if (!playersData) return []

    const count = playersData[0]?.count
    if (!count || count === 0) return []

    const players = []
    for (let i = 0; i < count; i++) {
      const playerData = playersData[i]?.player
      if (!playerData) continue

      const player = parsePlayerData(playerData)
      if (player) players.push(player)
    }

    return players
  } catch (error) {
    console.error('[v0] Error parsing Yahoo players:', error)
    return []
  }
}

function parsePlayerData(playerData: any): any | null {
  try {
    const info = playerData[0] || []
    
    let id = ''
    let name = ''
    let team = ''
    let position = ''
    let stats: any = {}

    // Parse player info
    for (const item of info) {
      if (item.player_key) id = item.player_key
      if (item.name) name = item.name.full
      if (item.editorial_team_abbr) team = item.editorial_team_abbr
      if (item.display_position) position = item.display_position
    }

    // Parse stats if available
    const playerStats = playerData[1]?.player_stats
    if (playerStats && playerStats.stats) {
      const statsArray = playerStats.stats
      for (const stat of statsArray) {
        if (stat.stat) {
          const statId = stat.stat.stat_id
          const value = stat.stat.value
          stats[`stat_${statId}`] = value
        }
      }
    }

    if (!id || !name) return null

    return {
      id,
      name,
      team: team || 'Unknown',
      position: position || 'Unknown',
      stats,
    }
  } catch (error) {
    console.error('[v0] Error parsing player data:', error)
    return null
  }
}
