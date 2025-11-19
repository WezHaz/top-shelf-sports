import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Mock data for demonstration when not authenticated
const mockPlayers = {
  nfl: [
    {
      id: 'nfl-1',
      name: 'Patrick Mahomes',
      team: 'Kansas City Chiefs',
      position: 'QB',
      stats: {
        'Pass Yards': '4,183',
        Touchdowns: 27,
        Completions: '67.2%',
        QBR: 98.5,
      },
    },
    {
      id: 'nfl-2',
      name: 'Josh Allen',
      team: 'Buffalo Bills',
      position: 'QB',
      stats: {
        'Pass Yards': '4,306',
        Touchdowns: 29,
        Completions: '66.5%',
        QBR: 96.3,
      },
    },
    {
      id: 'nfl-3',
      name: 'Bo Nix',
      team: 'Denver Broncos',
      position: 'QB',
      stats: {
        'Pass Yards': '3,775',
        Touchdowns: 29,
        Completions: '66.2%',
        QBR: 77.7,
      },
    },
  ],
  mlb: [
    {
      id: 'mlb-1',
      name: 'Shohei Ohtani',
      team: 'Los Angeles Dodgers',
      position: 'DH/P',
      stats: {
        AVG: '.304',
        HomeRuns: 44,
        RBIs: 95,
        OPS: 1.066,
      },
    },
  ],
  nba: [
    {
      id: 'nba-1',
      name: 'Giannis Antetokounmpo',
      team: 'Milwaukee Bucks',
      position: 'PF',
      stats: {
        PPG: 30.4,
        RPG: 11.5,
        APG: 6.5,
        FG: '55.3%',
      },
    },
  ],
  nhl: [
    {
      id: 'nhl-1',
      name: 'Connor McDavid',
      team: 'Edmonton Oilers',
      position: 'C',
      stats: {
        Goals: 64,
        Assists: 89,
        Points: 153,
        '+/-': '+22',
      },
    },
  ],
  mls: [
    {
      id: 'mls-1',
      name: 'Lionel Messi',
      team: 'Inter Miami CF',
      position: 'FW',
      stats: {
        Goals: 11,
        Assists: 5,
        'Shots/Game': 3.2,
        'Pass%': '87.5%',
      },
    },
  ],
}

export async function POST(request: NextRequest) {
  try {
    const { sport, query } = await request.json()

    console.log('[v0] Search request:', { sport, query })

    const cookieStore = await cookies()
    const accessToken = cookieStore.get('yahoo_access_token')?.value

    if (accessToken) {
      console.log('[v0] User is authenticated, checking Yahoo API availability')
      
      return NextResponse.json({
        players: [],
        source: 'yahoo-api-requires-league',
        authenticated: true,
        message: 'Please use the Yahoo Test page to authenticate and select a league first',
      })
    }

    const sportPlayers = mockPlayers[sport as keyof typeof mockPlayers] || []
    const results = sportPlayers.filter(
      player =>
        player.name.toLowerCase().includes(query.toLowerCase()) ||
        player.team.toLowerCase().includes(query.toLowerCase())
    )

    console.log('[v0] Returning mock results:', results.length)

    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({
      players: results,
      source: 'mock-data',
      authenticated: false,
      message: 'Using mock data. Authenticate via Yahoo Test page for real data.',
    })
  } catch (error) {
    console.error('[v0] Search error:', error)
    return NextResponse.json(
      { error: 'Failed to search players' },
      { status: 500 }
    )
  }
}
