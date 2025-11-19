'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Trophy, Users, Calendar, Plus, X, Search } from 'lucide-react'

type Player = {
  id: string
  name: string
  team: string
  position: string
  points: number
  sport: string
}

type Matchup = {
  id: string
  name: string
  week: number
  sport: string
  myTeam: Player[]
  opponentTeam: Player[]
  myScore: number
  opponentScore: number
  status: 'active' | 'completed'
}

const MOCK_PLAYERS: Player[] = [
  { id: '1', name: 'Patrick Mahomes', team: 'KC', position: 'QB', points: 28.5, sport: 'football' },
  { id: '2', name: 'Christian McCaffrey', team: 'SF', position: 'RB', points: 24.8, sport: 'football' },
  { id: '3', name: 'Tyreek Hill', team: 'MIA', position: 'WR', points: 22.3, sport: 'football' },
  { id: '4', name: 'Travis Kelce', team: 'KC', position: 'TE', points: 18.6, sport: 'football' },
  { id: '5', name: 'Justin Jefferson', team: 'MIN', position: 'WR', points: 20.9, sport: 'football' },
  { id: '6', name: 'Nikola Jokic', team: 'DEN', position: 'C', points: 48.2, sport: 'basketball' },
  { id: '7', name: 'Giannis Antetokounmpo', team: 'MIL', position: 'PF', points: 45.7, sport: 'basketball' },
  { id: '8', name: 'Luka Doncic', team: 'DAL', position: 'PG', points: 43.9, sport: 'basketball' },
  { id: '9', name: 'Aaron Judge', team: 'NYY', position: 'OF', points: 15.5, sport: 'baseball' },
  { id: '10', name: 'Shohei Ohtani', team: 'LAD', position: 'DH/P', points: 18.2, sport: 'baseball' },
]

export default function FantasyMatchupsPage() {
  const [matchups, setMatchups] = useState<Matchup[]>([
    {
      id: '1',
      name: 'Week 12 Showdown',
      week: 12,
      sport: 'football',
      myTeam: [MOCK_PLAYERS[0], MOCK_PLAYERS[1]],
      opponentTeam: [MOCK_PLAYERS[2], MOCK_PLAYERS[3]],
      myScore: 53.3,
      opponentScore: 40.9,
      status: 'completed'
    }
  ])
  const [showCreateMatchup, setShowCreateMatchup] = useState(false)
  const [newMatchupName, setNewMatchupName] = useState('')
  const [selectedSport, setSelectedSport] = useState('football')
  const [selectedWeek, setSelectedWeek] = useState('1')
  const [myTeam, setMyTeam] = useState<Player[]>([])
  const [opponentTeam, setOpponentTeam] = useState<Player[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectingFor, setSelectingFor] = useState<'my' | 'opponent' | null>(null)

  const filteredPlayers = MOCK_PLAYERS.filter(
    player => 
      player.sport === selectedSport &&
      (player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       player.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
       player.position.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleAddPlayer = (player: Player) => {
    if (selectingFor === 'my' && !myTeam.find(p => p.id === player.id)) {
      setMyTeam([...myTeam, player])
    } else if (selectingFor === 'opponent' && !opponentTeam.find(p => p.id === player.id)) {
      setOpponentTeam([...opponentTeam, player])
    }
    setSearchQuery('')
    setSelectingFor(null)
  }

  const handleRemovePlayer = (playerId: string, from: 'my' | 'opponent') => {
    if (from === 'my') {
      setMyTeam(myTeam.filter(p => p.id !== playerId))
    } else {
      setOpponentTeam(opponentTeam.filter(p => p.id !== playerId))
    }
  }

  const handleCreateMatchup = () => {
    if (!newMatchupName || myTeam.length === 0 || opponentTeam.length === 0) return

    const myScore = myTeam.reduce((sum, player) => sum + player.points, 0)
    const opponentScore = opponentTeam.reduce((sum, player) => sum + player.points, 0)

    const newMatchup: Matchup = {
      id: Date.now().toString(),
      name: newMatchupName,
      week: parseInt(selectedWeek),
      sport: selectedSport,
      myTeam,
      opponentTeam,
      myScore,
      opponentScore,
      status: 'active'
    }

    setMatchups([newMatchup, ...matchups])
    setShowCreateMatchup(false)
    setNewMatchupName('')
    setMyTeam([])
    setOpponentTeam([])
    setSelectedWeek('1')
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-5xl font-bold text-transparent text-balance">
            Fantasy Matchups
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Create weekly matchups, pick your players, and compete for the highest score
          </p>
        </div>

        {/* Create Matchup Button */}
        {!showCreateMatchup && (
          <div className="mb-8 flex justify-center">
            <Button
              onClick={() => setShowCreateMatchup(true)}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_20px_rgba(100,200,255,0.3)]"
              size="lg"
            >
              <Plus className="mr-2 h-5 w-5" />
              Create New Matchup
            </Button>
          </div>
        )}

        {/* Create Matchup Form */}
        {showCreateMatchup && (
          <Card className="mb-8 border-secondary/30 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-secondary">Create Matchup</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowCreateMatchup(false)
                  setMyTeam([])
                  setOpponentTeam([])
                  setNewMatchupName('')
                }}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Matchup Details */}
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <Label htmlFor="matchup-name" className="text-foreground">Matchup Name</Label>
                  <Input
                    id="matchup-name"
                    value={newMatchupName}
                    onChange={(e) => setNewMatchupName(e.target.value)}
                    placeholder="Week 13 Battle"
                    className="mt-2 border-primary/30 bg-background/50"
                  />
                </div>
                <div>
                  <Label htmlFor="sport" className="text-foreground">Sport</Label>
                  <Select value={selectedSport} onValueChange={setSelectedSport}>
                    <SelectTrigger className="mt-2 border-primary/30 bg-background/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="baseball">Baseball</SelectItem>
                      <SelectItem value="hockey">Hockey</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="week" className="text-foreground">Week</Label>
                  <Select value={selectedWeek} onValueChange={setSelectedWeek}>
                    <SelectTrigger className="mt-2 border-primary/30 bg-background/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 18 }, (_, i) => i + 1).map((week) => (
                        <SelectItem key={week} value={week.toString()}>
                          Week {week}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Team Selection */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* My Team */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-primary">My Team</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectingFor('my')}
                      className="border-primary/30 hover:bg-primary/10"
                    >
                      <Plus className="mr-1 h-4 w-4" />
                      Add Player
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {myTeam.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No players selected</p>
                    ) : (
                      myTeam.map((player) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between rounded-lg border border-primary/20 bg-background/50 p-3"
                        >
                          <div>
                            <p className="font-medium text-foreground">{player.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {player.position} - {player.team}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary">{player.points} pts</Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemovePlayer(player.id, 'my')}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Opponent Team */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-secondary">Opponent Team</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectingFor('opponent')}
                      className="border-secondary/30 hover:bg-secondary/10"
                    >
                      <Plus className="mr-1 h-4 w-4" />
                      Add Player
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {opponentTeam.length === 0 ? (
                      <p className="text-sm text-muted-foreground">No players selected</p>
                    ) : (
                      opponentTeam.map((player) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between rounded-lg border border-secondary/20 bg-background/50 p-3"
                        >
                          <div>
                            <p className="font-medium text-foreground">{player.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {player.position} - {player.team}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary">{player.points} pts</Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemovePlayer(player.id, 'opponent')}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Player Selection Modal */}
              {selectingFor && (
                <div className="rounded-lg border border-accent/30 bg-background/80 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="font-semibold text-accent">
                      Select Player for {selectingFor === 'my' ? 'My Team' : 'Opponent Team'}
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectingFor(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search players..."
                        className="border-accent/30 bg-background/50 pl-10"
                      />
                    </div>
                  </div>
                  <div className="max-h-64 space-y-2 overflow-y-auto">
                    {filteredPlayers.map((player) => (
                      <button
                        key={player.id}
                        onClick={() => handleAddPlayer(player)}
                        className="w-full rounded-lg border border-border bg-card/50 p-3 text-left transition-colors hover:border-accent/50 hover:bg-accent/10"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-foreground">{player.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {player.position} - {player.team}
                            </p>
                          </div>
                          <Badge variant="outline">{player.points} pts</Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Create Button */}
              <div className="flex justify-end">
                <Button
                  onClick={handleCreateMatchup}
                  disabled={!newMatchupName || myTeam.length === 0 || opponentTeam.length === 0}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  size="lg"
                >
                  Create Matchup
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Matchups List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Your Matchups</h2>
          {matchups.length === 0 ? (
            <Card className="border-border/50 bg-card/30 p-12 text-center backdrop-blur-sm">
              <Users className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                No matchups yet. Create your first matchup to get started!
              </p>
            </Card>
          ) : (
            matchups.map((matchup) => (
              <Card
                key={matchup.id}
                className="border-primary/30 bg-card/50 p-6 backdrop-blur-sm"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{matchup.name}</h3>
                    <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Week {matchup.week}
                      </span>
                      <Badge variant="outline" className="capitalize">
                        {matchup.sport}
                      </Badge>
                      <Badge
                        variant={matchup.status === 'active' ? 'default' : 'secondary'}
                      >
                        {matchup.status}
                      </Badge>
                    </div>
                  </div>
                  {matchup.status === 'completed' && (
                    <Trophy className="h-8 w-8 text-accent" />
                  )}
                </div>

                {/* Score Display */}
                <div className="mb-6 grid grid-cols-3 gap-4 rounded-lg border border-border/50 bg-background/50 p-4">
                  <div className="text-center">
                    <p className="mb-2 text-sm text-muted-foreground">My Team</p>
                    <p className="text-3xl font-bold text-primary">
                      {matchup.myScore.toFixed(1)}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">VS</span>
                  </div>
                  <div className="text-center">
                    <p className="mb-2 text-sm text-muted-foreground">Opponent</p>
                    <p className="text-3xl font-bold text-secondary">
                      {matchup.opponentScore.toFixed(1)}
                    </p>
                  </div>
                </div>

                {/* Result Banner */}
                {matchup.status === 'completed' && (
                  <div className="mb-6 text-center">
                    {matchup.myScore > matchup.opponentScore ? (
                      <Badge className="bg-accent px-6 py-2 text-lg text-accent-foreground">
                        YOU WIN! 🎉
                      </Badge>
                    ) : matchup.myScore < matchup.opponentScore ? (
                      <Badge className="bg-destructive px-6 py-2 text-lg text-destructive-foreground">
                        YOU LOST
                      </Badge>
                    ) : (
                      <Badge className="bg-muted px-6 py-2 text-lg">TIE</Badge>
                    )}
                  </div>
                )}

                {/* Teams Display */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-primary">My Team</h4>
                    <div className="space-y-2">
                      {matchup.myTeam.map((player) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between rounded-lg border border-primary/20 bg-background/50 p-3"
                        >
                          <div>
                            <p className="font-medium text-foreground">{player.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {player.position} - {player.team}
                            </p>
                          </div>
                          <Badge variant="secondary">{player.points} pts</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-secondary">Opponent Team</h4>
                    <div className="space-y-2">
                      {matchup.opponentTeam.map((player) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between rounded-lg border border-secondary/20 bg-background/50 p-3"
                        >
                          <div>
                            <p className="font-medium text-foreground">{player.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {player.position} - {player.team}
                            </p>
                          </div>
                          <Badge variant="secondary">{player.points} pts</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
