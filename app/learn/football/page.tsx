import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function FootballPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 text-primary hover:text-primary/80">
            <Link href="/learn">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Sports
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              American Football
            </h1>
            <p className="text-lg text-muted-foreground">
              Master the most strategic game in sports
            </p>
          </div>

          {/* Game Setup */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Game Setup</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                American football is played on a 100-yard field with 10-yard end zones on each side. 
                Each team fields 11 players at a time, alternating between offense and defense.
              </p>
              <p>
                Games consist of four 15-minute quarters, with a halftime break after the second quarter. 
                The game clock stops for various reasons including incomplete passes, out-of-bounds plays, 
                and timeouts.
              </p>
              <p>
                Each team gets four attempts (downs) to advance the ball 10 yards. Success grants a new set 
                of four downs, while failure results in a turnover to the opposing team.
              </p>
            </div>
          </Card>

          {/* Scoring */}
          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Scoring System</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Touchdown</span>
                <span className="text-secondary">6 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Carrying or catching the ball in the opponent's end zone.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Extra Point (PAT)</span>
                <span className="text-secondary">1 or 2 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                After a touchdown: kick through uprights (1 pt) or run/pass into end zone (2 pts).
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Field Goal</span>
                <span className="text-secondary">3 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Kicking the ball through the opponent's uprights during regular play.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Safety</span>
                <span className="text-secondary">2 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Tackling an opponent with the ball in their own end zone.
              </p>
            </div>
          </Card>

          {/* Play Action */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Play Action & Possession</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Kickoff:</strong> Each half and after scores begin with a kickoff, 
                where one team kicks to the other from the 35-yard line.
              </p>
              <p>
                <strong className="text-card-foreground">Downs System:</strong> The offense has four downs to advance 10 yards. 
                Teams typically punt on 4th down if they haven't gained 10 yards, giving possession to the opponent.
              </p>
              <p>
                <strong className="text-card-foreground">Turnovers:</strong> Possession changes via interceptions (defensive player catches a pass), 
                fumbles (ball carrier drops the ball), turnover on downs (failing to gain 10 yards in 4 attempts), 
                or punts/kickoffs.
              </p>
              <p>
                <strong className="text-card-foreground">Clock Management:</strong> Teams can stop the clock with timeouts 
                (3 per half), incomplete passes, or by running out of bounds. Strategic clock management is crucial 
                in close games.
              </p>
            </div>
          </Card>

          {/* Positions */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Player Positions</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Offense</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Quarterback (QB)</h4>
                    <p className="text-sm text-muted-foreground">
                      The field general who calls plays, throws passes, and hands off the ball. 
                      The most important position on the team.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Running Back (RB)</h4>
                    <p className="text-sm text-muted-foreground">
                      Carries the ball on rushing plays, catches passes, and blocks for the QB.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Wide Receiver (WR)</h4>
                    <p className="text-sm text-muted-foreground">
                      Runs routes and catches passes. Speed and hands are essential.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Tight End (TE)</h4>
                    <p className="text-sm text-muted-foreground">
                      Hybrid position that blocks like linemen and catches like receivers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Offensive Line (OL)</h4>
                    <p className="text-sm text-muted-foreground">
                      Five players (Center, Guards, Tackles) who protect the QB and create running lanes. 
                      The unsung heroes of every offense.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Defense</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Defensive Line (DL)</h4>
                    <p className="text-sm text-muted-foreground">
                      3-4 players who rush the QB and stop running plays at the line of scrimmage.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Linebacker (LB)</h4>
                    <p className="text-sm text-muted-foreground">
                      Versatile defenders who stop runs, cover receivers, and rush the passer. 
                      The quarterbacks of the defense.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Cornerback (CB)</h4>
                    <p className="text-sm text-muted-foreground">
                      Cover wide receivers and defend against passes. Speed and agility are critical.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Safety (S)</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep defenders who provide last line of defense and help in coverage. 
                      Come in Free Safety (FS) and Strong Safety (SS) variants.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Special Teams</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Kicker (K) & Punter (P)</h4>
                    <p className="text-sm text-muted-foreground">
                      Handle field goals, extra points, kickoffs, and punts. Often the difference 
                      in close games.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Long Snapper (LS)</h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized center who snaps the ball to punters and holders.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Return Specialist</h4>
                    <p className="text-sm text-muted-foreground">
                      Returns kickoffs and punts, looking for big plays in field position.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
