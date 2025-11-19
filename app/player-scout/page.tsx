'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

type Player = {
  id: string
  name: string
  team: string
  position: string
  stats: {
    [key: string]: string | number
  }
}

export default function PlayerScoutPage() {
  const [sport, setSport] = useState('nfl')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([])
  const [searchResults, setSearchResults] = useState<Player[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [infoMessage, setInfoMessage] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/yahoo-sports/test-connection')
        const data = await response.json()
        setIsAuthenticated(data.authenticated || false)
      } catch (err) {
        console.error('[v0] Failed to check auth status:', err)
      }
    }
    checkAuth()
  }, [])

  const handleSearch = async () => {
    if (!searchTerm.trim()) return
    
    setLoading(true)
    setError(null)
    setInfoMessage(null)
    
    try {
      console.log('[v0] Searching for:', searchTerm, 'in sport:', sport)
      const response = await fetch('/api/yahoo-sports/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sport, query: searchTerm }),
      })
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }
      
      const data = await response.json()
      console.log('[v0] Search response:', data)
      
      if (data.message) {
        setInfoMessage(data.message)
      }
      
      setSearchResults(data.players || [])
    } catch (err) {
      console.error('[v0] Search failed:', err)
      setError(err instanceof Error ? err.message : 'Failed to search players')
    } finally {
      setLoading(false)
    }
  }

  const addPlayerToComparison = (player: Player) => {
    if (selectedPlayers.length < 4 && !selectedPlayers.find(p => p.id === player.id)) {
      setSelectedPlayers([...selectedPlayers, player])
    }
  }

  const removePlayer = (playerId: string) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== playerId))
  }

  const sportOptions = [
    { value: 'nfl', label: 'NFL (Football)' },
    { value: 'mlb', label: 'MLB (Baseball)' },
    { value: 'nba', label: 'NBA (Basketball)' },
    { value: 'nhl', label: 'NHL (Hockey)' },
    { value: 'mls', label: 'MLS (Soccer)' },
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-balance md:text-5xl">
            <span className="text-primary">PLAYER</span>{' '}
            <span className="text-secondary">SCOUT</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Compare player stats and performance across sports
          </p>
        </div>

        {!isAuthenticated && (
          <Card className="mb-6 border-accent/30 bg-accent/10 backdrop-blur-sm">
            <CardContent className="flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  Connect to Yahoo Sports for Live Data
                </h3>
                <p className="text-sm text-muted-foreground">
                  Authenticate with Yahoo to access real-time player statistics and your fantasy leagues.
                  Currently showing demo data.
                </p>
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90 whitespace-nowrap">
                <Link href="/api/yahoo-sports/auth/login">
                  Authenticate with Yahoo
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {isAuthenticated && (
          <Card className="mb-6 border-green-500/30 bg-green-500/10 backdrop-blur-sm">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-foreground">Connected to Yahoo Sports</span>
              </div>
              <Link href="/yahoo-test">
                <Button variant="ghost" size="sm" className="text-xs">
                  Test Connection
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Search Section */}
        <Card className="mb-8 border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              Search Players
            </CardTitle>
            <CardDescription>Select a sport and search for players to compare</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row">
              <Select value={sport} onValueChange={setSport}>
                <SelectTrigger className="w-full border-primary/20 md:w-48">
                  <SelectValue placeholder="Select sport" />
                </SelectTrigger>
                <SelectContent>
                  {sportOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <div className="flex flex-1 gap-2">
                <Input
                  placeholder="Enter player name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="border-primary/20"
                />
                <Button 
                  onClick={handleSearch} 
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90"
                >
                  {loading ? 'Searching...' : 'Search'}
                </Button>
              </div>
            </div>

            {infoMessage && (
              <div className="mt-4 rounded-lg border border-secondary/50 bg-secondary/10 p-3">
                <p className="text-sm text-foreground">{infoMessage}</p>
              </div>
            )}

            {error && (
              <div className="mt-4 rounded-lg border border-destructive/50 bg-destructive/10 p-3">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {searchResults.length > 0 && (
              <div className="mt-4 grid gap-2">
                <h3 className="text-sm font-medium text-muted-foreground">Search Results</h3>
                {searchResults.map(player => (
                  <div 
                    key={player.id}
                    className="flex items-center justify-between rounded-lg border border-primary/20 bg-background/50 p-3"
                  >
                    <div>
                      <p className="font-medium text-foreground">{player.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {player.team} • {player.position}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addPlayerToComparison(player)}
                      disabled={selectedPlayers.length >= 4 || selectedPlayers.some(p => p.id === player.id)}
                      className="bg-secondary hover:bg-secondary/90"
                    >
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {!loading && searchTerm && searchResults.length === 0 && !error && (
              <div className="mt-4 text-center text-sm text-muted-foreground">
                No players found. Try a different search term.
              </div>
            )}
          </CardContent>
        </Card>

        {/* Player Comparison Grid */}
        {selectedPlayers.length > 0 && (
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-secondary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Player Comparison
              </h2>
              <Badge variant="outline" className="border-primary text-primary">
                {selectedPlayers.length} / 4 Players
              </Badge>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {selectedPlayers.map(player => (
                <Card key={player.id} className="border-secondary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-secondary">{player.name}</CardTitle>
                        <CardDescription>{player.team}</CardDescription>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removePlayer(player.id)}
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                      >
                        ×
                      </Button>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {player.position}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {Object.entries(player.stats).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{key}</span>
                          <span className="font-semibold text-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <svg className="mb-2 h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10" />
                <path d="M7 12h10" />
                <path d="M7 17h10" />
              </svg>
              <CardTitle className="text-primary">Detailed Stats</CardTitle>
              <CardDescription>
                Access comprehensive player statistics including performance metrics, historical data, and advanced analytics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <svg className="mb-2 h-8 w-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <CardTitle className="text-secondary">Compare Up to 4</CardTitle>
              <CardDescription>
                Side-by-side comparison of up to 4 players to analyze strengths, weaknesses, and overall performance
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <svg className="mb-2 h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <CardTitle className="text-accent">Live Updates</CardTitle>
              <CardDescription>
                Real-time statistics powered by Yahoo Sports API with up-to-date performance data
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
