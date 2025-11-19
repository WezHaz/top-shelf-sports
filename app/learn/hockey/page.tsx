import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function HockeyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6 text-primary hover:text-primary/80">
            <Link href="/learn">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Sports
            </Link>
          </Button>

          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Hockey
            </h1>
            <p className="text-lg text-muted-foreground">
              The fastest game on ice
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Game Setup</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hockey is played on a 200-foot by 85-foot ice rink with goals at each end. 
                Each team has 6 players on ice: 3 forwards, 2 defensemen, and 1 goalie.
              </p>
              <p>
                Games consist of three 20-minute periods with 15-minute intermissions. The clock runs continuously 
                unless stopped for penalties, goals, or timeouts. Overtime rules vary by league.
              </p>
              <p>
                Teams can make unlimited line changes during stoppages or "on the fly" during play. 
                This allows for fresh players and strategic matchups throughout the game.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Scoring & Special Teams</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Goal:</strong> Worth 1 point. Scored when the puck completely 
                crosses the goal line. The team with more goals at the end wins.
              </p>
              <p>
                <strong className="text-card-foreground">Power Play:</strong> When a team has a player advantage due to 
                opponent penalties (5-on-4 or 5-on-3). Teams score about 20% of power play opportunities.
              </p>
              <p>
                <strong className="text-card-foreground">Penalty Kill:</strong> The shorthanded team tries to prevent 
                goals while down a player. Good penalty kill units can shift momentum.
              </p>
              <p>
                <strong className="text-card-foreground">Short-handed Goal:</strong> A rare but momentum-shifting goal 
                scored by the team with fewer players on ice during a penalty.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Play Action & Rules</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Faceoffs:</strong> Used to start play after stoppages. 
                Two players battle for puck possession. Winning faceoffs provides scoring opportunities.
              </p>
              <p>
                <strong className="text-card-foreground">Offside:</strong> Attacking players cannot enter the offensive 
                zone before the puck. Results in a faceoff outside the zone.
              </p>
              <p>
                <strong className="text-card-foreground">Icing:</strong> Shooting the puck from behind center red line 
                across the opponent's goal line without it being touched. Results in defensive zone faceoff.
              </p>
              <p>
                <strong className="text-card-foreground">Penalties:</strong> Minor (2 min), major (5 min), misconduct (10 min), 
                or game misconduct. Common infractions include tripping, hooking, slashing, and high-sticking.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Player Positions</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Forwards</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Center (C)</h4>
                    <p className="text-sm text-muted-foreground">
                      The playmaker who takes faceoffs, plays both ends of ice, and creates scoring chances. 
                      Requires stamina, hockey IQ, and two-way ability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Left Wing (LW) & Right Wing (RW)</h4>
                    <p className="text-sm text-muted-foreground">
                      Wingers focus on scoring goals, forechecking, and providing width to the attack. 
                      Snipers excel at finishing plays while grinders focus on physical play.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Defensemen</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Left Defense (LD) & Right Defense (RD)</h4>
                    <p className="text-sm text-muted-foreground">
                      Prevent goals, start breakouts, and jump into offense when opportunities arise. 
                      Stay-at-home defensemen prioritize defense while offensive defensemen contribute scoring.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Goalie (G)</h3>
                <p className="text-sm text-muted-foreground">
                  The last line of defense who stops shots and controls rebounds. The most specialized position 
                  requiring unique equipment, technique, and mental toughness. Elite goalies can single-handedly 
                  win games and championships.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
