'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type BracketTeam = {
  id: string
  name: string
  seed: number
  region?: string
}

type BracketMatchup = {
  id: string
  round: number
  team1?: BracketTeam
  team2?: BracketTeam
  winner?: BracketTeam
  matchNumber: number
}

type Bet = {
  id: string
  sport: string
  event: string
  betType: 'moneyline' | 'spread' | 'over-under'
  selection: string
  odds: number
  stake: number
  potentialWin: number
  status: 'pending' | 'won' | 'lost'
  date: string
}

const MARCH_MADNESS_TEAMS: BracketTeam[] = [
  { id: '1', name: 'Duke', seed: 1, region: 'East' },
  { id: '2', name: 'Kansas', seed: 2, region: 'East' },
  { id: '3', name: 'Gonzaga', seed: 3, region: 'East' },
  { id: '4', name: 'UConn', seed: 4, region: 'East' },
  { id: '5', name: 'Houston', seed: 1, region: 'West' },
  { id: '6', name: 'Purdue', seed: 2, region: 'West' },
  { id: '7', name: 'Arizona', seed: 3, region: 'West' },
  { id: '8', name: 'UCLA', seed: 4, region: 'West' },
]

const SPORTSBOOK_EVENTS = [
  {
    id: '1',
    sport: 'football',
    home: 'Kansas City Chiefs',
    away: 'Buffalo Bills',
    homeOdds: -150,
    awayOdds: +130,
    spread: -3.5,
    overUnder: 47.5,
    date: '2024-01-21',
  },
  {
    id: '2',
    sport: 'basketball',
    home: 'Los Angeles Lakers',
    away: 'Boston Celtics',
    homeOdds: +110,
    awayOdds: -130,
    spread: +2.5,
    overUnder: 223.5,
    date: '2024-01-21',
  },
  {
    id: '3',
    sport: 'hockey',
    home: 'Toronto Maple Leafs',
    away: 'Montreal Canadiens',
    homeOdds: -120,
    awayOdds: +100,
    spread: -1.5,
    overUnder: 6.5,
    date: '2024-01-21',
  },
]

export default function BettingPage() {
  const [activeTab, setActiveTab] = useState('sportsbook')
  
  // Bracket state
  const [selectedBracket, setSelectedBracket] = useState<'march-madness' | 'other'>('march-madness')
  const [bracket, setBracket] = useState<BracketMatchup[]>([])
  
  // Betting slip state
  const [bettingSlip, setBettingSlip] = useState<Bet[]>([])
  const [myBets, setMyBets] = useState<Bet[]>([
    {
      id: '1',
      sport: 'football',
      event: 'Chiefs vs Bills',
      betType: 'moneyline',
      selection: 'Chiefs',
      odds: -150,
      stake: 100,
      potentialWin: 166.67,
      status: 'won',
      date: '2024-01-14'
    }
  ])
  const [stakeAmount, setStakeAmount] = useState('10')

  const initializeBracket = () => {
    const matchups: BracketMatchup[] = []
    
    // Round 1 matchups (8 teams -> 4 matchups)
    for (let i = 0; i < 4; i++) {
      matchups.push({
        id: `r1-${i}`,
        round: 1,
        team1: MARCH_MADNESS_TEAMS[i * 2],
        team2: MARCH_MADNESS_TEAMS[i * 2 + 1],
        matchNumber: i + 1
      })
    }
    
    // Round 2 matchups (4 teams -> 2 matchups)
    for (let i = 0; i < 2; i++) {
      matchups.push({
        id: `r2-${i}`,
        round: 2,
        matchNumber: i + 1
      })
    }
    
    // Championship
    matchups.push({
      id: 'championship',
      round: 3,
      matchNumber: 1
    })
    
    setBracket(matchups)
  }

  const selectWinner = (matchupId: string, team: BracketTeam) => {
    const updatedBracket = bracket.map(matchup => {
      if (matchup.id === matchupId) {
        return { ...matchup, winner: team }
      }
      return matchup
    })
    
    // Advance winner to next round
    const matchup = bracket.find(m => m.id === matchupId)
    if (matchup) {
      const nextRound = matchup.round + 1
      const nextMatchNumber = Math.ceil(matchup.matchNumber / 2)
      const nextMatchup = updatedBracket.find(
        m => m.round === nextRound && m.matchNumber === nextMatchNumber
      )
      
      if (nextMatchup) {
        if (matchup.matchNumber % 2 === 1) {
          nextMatchup.team1 = team
        } else {
          nextMatchup.team2 = team
        }
      }
    }
    
    setBracket(updatedBracket)
  }

  const addToBettingSlip = (event: any, betType: 'moneyline' | 'spread' | 'over-under', selection: string, odds: number) => {
    const stake = parseFloat(stakeAmount) || 10
    const potentialWin = odds > 0 ? stake * (odds / 100) + stake : stake * (100 / Math.abs(odds)) + stake
    
    const newBet: Bet = {
      id: Date.now().toString(),
      sport: event.sport,
      event: `${event.away} @ ${event.home}`,
      betType,
      selection,
      odds,
      stake,
      potentialWin,
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    }
    
    setBettingSlip([...bettingSlip, newBet])
  }

  const placeBets = () => {
    setMyBets([...myBets, ...bettingSlip])
    setBettingSlip([])
  }

  const calculateOddsDisplay = (odds: number) => {
    return odds > 0 ? `+${odds}` : odds.toString()
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-5xl font-bold text-transparent text-balance">
            Sports Betting Hub
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Build brackets, place bets, and track your wins
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-card/50 border border-border/50">
            <TabsTrigger value="sportsbook" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Sportsbook
            </TabsTrigger>
            <TabsTrigger value="brackets" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Brackets
            </TabsTrigger>
          </TabsList>

          {/* Sportsbook Tab */}
          <TabsContent value="sportsbook" className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Events */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Live Events</h2>
                
                {SPORTSBOOK_EVENTS.map((event) => (
                  <Card key={event.id} className="border-accent/30 bg-card/50 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <Badge variant="outline" className="capitalize mb-2">
                          {event.sport}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground">
                          {event.away} @ {event.home}
                        </h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Moneyline */}
                      <div>
                        <p className="mb-2 text-sm font-semibold text-muted-foreground">Moneyline</p>
                        <div className="grid grid-cols-2 gap-3">
                          <Button
                            variant="outline"
                            className="h-auto flex-col border-primary/30 hover:bg-primary/10 hover:border-primary"
                            onClick={() => addToBettingSlip(event, 'moneyline', event.away, event.awayOdds)}
                          >
                            <span className="text-sm text-muted-foreground">{event.away}</span>
                            <span className="text-lg font-bold text-primary">
                              {calculateOddsDisplay(event.awayOdds)}
                            </span>
                          </Button>
                          <Button
                            variant="outline"
                            className="h-auto flex-col border-primary/30 hover:bg-primary/10 hover:border-primary"
                            onClick={() => addToBettingSlip(event, 'moneyline', event.home, event.homeOdds)}
                          >
                            <span className="text-sm text-muted-foreground">{event.home}</span>
                            <span className="text-lg font-bold text-primary">
                              {calculateOddsDisplay(event.homeOdds)}
                            </span>
                          </Button>
                        </div>
                      </div>

                      {/* Spread */}
                      <div>
                        <p className="mb-2 text-sm font-semibold text-muted-foreground">Spread</p>
                        <div className="grid grid-cols-2 gap-3">
                          <Button
                            variant="outline"
                            className="h-auto flex-col border-secondary/30 hover:bg-secondary/10 hover:border-secondary"
                            onClick={() => addToBettingSlip(event, 'spread', `${event.away} ${event.spread > 0 ? '+' : ''}${event.spread}`, -110)}
                          >
                            <span className="text-sm text-muted-foreground">{event.away}</span>
                            <span className="text-lg font-bold text-secondary">
                              {event.spread > 0 ? '+' : ''}{event.spread} (-110)
                            </span>
                          </Button>
                          <Button
                            variant="outline"
                            className="h-auto flex-col border-secondary/30 hover:bg-secondary/10 hover:border-secondary"
                            onClick={() => addToBettingSlip(event, 'spread', `${event.home} ${event.spread < 0 ? '+' : '-'}${Math.abs(event.spread)}`, -110)}
                          >
                            <span className="text-sm text-muted-foreground">{event.home}</span>
                            <span className="text-lg font-bold text-secondary">
                              {event.spread < 0 ? '+' : '-'}{Math.abs(event.spread)} (-110)
                            </span>
                          </Button>
                        </div>
                      </div>

                      {/* Over/Under */}
                      <div>
                        <p className="mb-2 text-sm font-semibold text-muted-foreground">Total Points</p>
                        <div className="grid grid-cols-2 gap-3">
                          <Button
                            variant="outline"
                            className="h-auto flex-col border-accent/30 hover:bg-accent/10 hover:border-accent"
                            onClick={() => addToBettingSlip(event, 'over-under', `Over ${event.overUnder}`, -110)}
                          >
                            <span className="text-sm text-muted-foreground">Over</span>
                            <span className="text-lg font-bold text-accent">
                              {event.overUnder} (-110)
                            </span>
                          </Button>
                          <Button
                            variant="outline"
                            className="h-auto flex-col border-accent/30 hover:bg-accent/10 hover:border-accent"
                            onClick={() => addToBettingSlip(event, 'over-under', `Under ${event.overUnder}`, -110)}
                          >
                            <span className="text-sm text-muted-foreground">Under</span>
                            <span className="text-lg font-bold text-accent">
                              {event.overUnder} (-110)
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Betting Slip */}
              <div className="space-y-4">
                <Card className="border-primary/30 bg-card/50 p-6 backdrop-blur-sm sticky top-24">
                  <h3 className="mb-4 text-xl font-bold text-primary">Betting Slip</h3>
                  
                  {bettingSlip.length === 0 ? (
                    <p className="text-center text-sm text-muted-foreground py-8">
                      Select bets to add to your slip
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {bettingSlip.map((bet) => (
                        <div key={bet.id} className="rounded-lg border border-border/50 bg-background/50 p-3 space-y-2">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-foreground">{bet.event}</p>
                              <p className="text-xs text-muted-foreground capitalize">{bet.betType}</p>
                              <p className="text-sm text-primary font-semibold">{bet.selection}</p>
                              <p className="text-xs text-muted-foreground">
                                Odds: {calculateOddsDisplay(bet.odds)}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setBettingSlip(bettingSlip.filter(b => b.id !== bet.id))}
                              className="h-6 w-6 p-0"
                            >
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      ))}

                      <div className="space-y-3 pt-4 border-t border-border/50">
                        <div>
                          <Label className="text-sm text-muted-foreground">Stake per bet</Label>
                          <Input
                            type="number"
                            value={stakeAmount}
                            onChange={(e) => setStakeAmount(e.target.value)}
                            className="mt-1 border-primary/30 bg-background/50"
                            placeholder="10"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Total Stake:</span>
                            <span className="font-semibold text-foreground">
                              ${(parseFloat(stakeAmount) * bettingSlip.length).toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Potential Win:</span>
                            <span className="font-bold text-accent">
                              ${bettingSlip.reduce((sum, bet) => {
                                const stake = parseFloat(stakeAmount) || 10
                                return sum + (bet.odds > 0 ? stake * (bet.odds / 100) : stake * (100 / Math.abs(bet.odds)))
                              }, 0).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <Button
                          onClick={placeBets}
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_20px_rgba(180,255,100,0.3)]"
                          size="lg"
                        >
                          Place Bets
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>

                {/* My Bets */}
                <Card className="border-secondary/30 bg-card/50 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold text-secondary">My Bets</h3>
                  {myBets.length === 0 ? (
                    <p className="text-center text-sm text-muted-foreground">No bets placed yet</p>
                  ) : (
                    <div className="space-y-2">
                      {myBets.map((bet) => (
                        <div key={bet.id} className="rounded-lg border border-border/50 bg-background/50 p-3">
                          <div className="flex items-start justify-between mb-1">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-foreground">{bet.event}</p>
                              <p className="text-xs text-muted-foreground">{bet.date}</p>
                              <p className="text-sm text-primary">{bet.selection}</p>
                            </div>
                            <Badge
                              variant={
                                bet.status === 'won' ? 'default' :
                                bet.status === 'lost' ? 'destructive' : 'secondary'
                              }
                              className={bet.status === 'won' ? 'bg-accent text-accent-foreground' : ''}
                            >
                              {bet.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Stake: ${bet.stake.toFixed(2)}</span>
                            {bet.status === 'won' && (
                              <span className="text-accent font-semibold">
                                Won: ${(bet.potentialWin - bet.stake).toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Brackets Tab */}
          <TabsContent value="brackets" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Tournament Brackets</h2>
              <Select value={selectedBracket} onValueChange={(value: any) => setSelectedBracket(value)}>
                <SelectTrigger className="w-64 border-primary/30 bg-card/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="march-madness">March Madness 2024</SelectItem>
                  <SelectItem value="other">World Cup 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {bracket.length === 0 ? (
              <Card className="border-border/50 bg-card/30 p-12 text-center backdrop-blur-sm">
                <div className="mx-auto max-w-md">
                  <svg className="mx-auto mb-4 h-16 w-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <p className="mb-4 text-lg text-muted-foreground">
                    No bracket created yet
                  </p>
                  <Button
                    onClick={initializeBracket}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(255,100,200,0.3)]"
                    size="lg"
                  >
                    Initialize {selectedBracket === 'march-madness' ? 'March Madness' : 'World Cup'} Bracket
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="border-primary/30 bg-card/50 p-8 backdrop-blur-sm overflow-x-auto">
                <div className="min-w-[800px] space-y-8">
                  {/* Round 1 */}
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-primary">Round 1</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {bracket.filter(m => m.round === 1).map((matchup) => (
                        <Card key={matchup.id} className="border-border/50 bg-background/50 p-4">
                          <p className="mb-3 text-xs font-semibold text-muted-foreground">
                            Match {matchup.matchNumber}
                          </p>
                          <div className="space-y-2">
                            {matchup.team1 && (
                              <Button
                                variant={matchup.winner?.id === matchup.team1.id ? 'default' : 'outline'}
                                className={`w-full justify-between ${
                                  matchup.winner?.id === matchup.team1.id 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'border-border/50'
                                }`}
                                onClick={() => selectWinner(matchup.id, matchup.team1!)}
                              >
                                <span className="text-sm">{matchup.team1.name}</span>
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  {matchup.team1.seed}
                                </Badge>
                              </Button>
                            )}
                            {matchup.team2 && (
                              <Button
                                variant={matchup.winner?.id === matchup.team2.id ? 'default' : 'outline'}
                                className={`w-full justify-between ${
                                  matchup.winner?.id === matchup.team2.id 
                                    ? 'bg-primary text-primary-foreground' 
                                    : 'border-border/50'
                                }`}
                                onClick={() => selectWinner(matchup.id, matchup.team2!)}
                              >
                                <span className="text-sm">{matchup.team2.name}</span>
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  {matchup.team2.seed}
                                </Badge>
                              </Button>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Round 2 */}
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-secondary">Semifinals</h3>
                    <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                      {bracket.filter(m => m.round === 2).map((matchup) => (
                        <Card key={matchup.id} className="border-border/50 bg-background/50 p-4">
                          <p className="mb-3 text-xs font-semibold text-muted-foreground">
                            Match {matchup.matchNumber}
                          </p>
                          <div className="space-y-2">
                            {matchup.team1 ? (
                              <Button
                                variant={matchup.winner?.id === matchup.team1.id ? 'default' : 'outline'}
                                className={`w-full justify-between ${
                                  matchup.winner?.id === matchup.team1.id 
                                    ? 'bg-secondary text-secondary-foreground' 
                                    : 'border-border/50'
                                }`}
                                onClick={() => selectWinner(matchup.id, matchup.team1!)}
                              >
                                <span className="text-sm">{matchup.team1.name}</span>
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  {matchup.team1.seed}
                                </Badge>
                              </Button>
                            ) : (
                              <div className="rounded-lg border border-dashed border-border/30 bg-muted/20 p-3 text-center text-xs text-muted-foreground">
                                TBD
                              </div>
                            )}
                            {matchup.team2 ? (
                              <Button
                                variant={matchup.winner?.id === matchup.team2.id ? 'default' : 'outline'}
                                className={`w-full justify-between ${
                                  matchup.winner?.id === matchup.team2.id 
                                    ? 'bg-secondary text-secondary-foreground' 
                                    : 'border-border/50'
                                }`}
                                onClick={() => selectWinner(matchup.id, matchup.team2!)}
                              >
                                <span className="text-sm">{matchup.team2.name}</span>
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  {matchup.team2.seed}
                                </Badge>
                              </Button>
                            ) : (
                              <div className="rounded-lg border border-dashed border-border/30 bg-muted/20 p-3 text-center text-xs text-muted-foreground">
                                TBD
                              </div>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Championship */}
                  <div>
                    <h3 className="mb-4 text-center text-lg font-bold text-accent">Championship</h3>
                    <div className="max-w-md mx-auto">
                      {bracket.filter(m => m.round === 3).map((matchup) => (
                        <Card key={matchup.id} className="border-accent/50 bg-background/50 p-6">
                          <div className="mb-4 text-center">
                            <svg className="mx-auto h-8 w-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                          </div>
                          <div className="space-y-3">
                            {matchup.team1 ? (
                              <Button
                                variant={matchup.winner?.id === matchup.team1.id ? 'default' : 'outline'}
                                className={`w-full justify-between text-base ${
                                  matchup.winner?.id === matchup.team1.id 
                                    ? 'bg-accent text-accent-foreground shadow-[0_0_20px_rgba(180,255,100,0.4)]' 
                                    : 'border-border/50'
                                }`}
                                size="lg"
                                onClick={() => selectWinner(matchup.id, matchup.team1!)}
                              >
                                <span>{matchup.team1.name}</span>
                                <Badge variant="secondary">
                                  {matchup.team1.seed}
                                </Badge>
                              </Button>
                            ) : (
                              <div className="rounded-lg border border-dashed border-border/30 bg-muted/20 p-4 text-center text-sm text-muted-foreground">
                                Waiting for Semifinal 1 Winner
                              </div>
                            )}
                            {matchup.team2 ? (
                              <Button
                                variant={matchup.winner?.id === matchup.team2.id ? 'default' : 'outline'}
                                className={`w-full justify-between text-base ${
                                  matchup.winner?.id === matchup.team2.id 
                                    ? 'bg-accent text-accent-foreground shadow-[0_0_20px_rgba(180,255,100,0.4)]' 
                                    : 'border-border/50'
                                }`}
                                size="lg"
                                onClick={() => selectWinner(matchup.id, matchup.team2!)}
                              >
                                <span>{matchup.team2.name}</span>
                                <Badge variant="secondary">
                                  {matchup.team2.seed}
                                </Badge>
                              </Button>
                            ) : (
                              <div className="rounded-lg border border-dashed border-border/30 bg-muted/20 p-4 text-center text-sm text-muted-foreground">
                                Waiting for Semifinal 2 Winner
                              </div>
                            )}
                          </div>
                          {matchup.winner && (
                            <div className="mt-6 text-center">
                              <Badge className="bg-accent px-6 py-2 text-lg text-accent-foreground shadow-[0_0_20px_rgba(180,255,100,0.3)]">
                                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                                Champion: {matchup.winner.name}
                              </Badge>
                            </div>
                          )}
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
