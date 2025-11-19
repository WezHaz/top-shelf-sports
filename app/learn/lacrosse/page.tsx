import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LacrossePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 text-primary hover:text-primary/80">
            <Link href="/learn">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Sports
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Lacrosse
            </h1>
            <p className="text-lg text-muted-foreground">
              The fastest game on two feet
            </p>
          </div>

          {/* Game Setup */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Game Setup</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Lacrosse is played on a 110-yard field (similar to football) with goals at each end featuring 
                6x6 foot nets. Field lacrosse teams have 10 players per side, while box lacrosse uses smaller indoor arenas with 6 players.
              </p>
              <p>
                Players use long-handled sticks (defense/midfield) or short sticks (attack/midfield) with netted 
                heads to catch, carry, and pass a small rubber ball. The game combines elements of basketball, 
                soccer, and hockey.
              </p>
              <p>
                Games consist of four 15-minute quarters (college/pro) or four 12-minute quarters (high school). 
                Teams can substitute freely during play, similar to hockey line changes.
              </p>
            </div>
          </Card>

          {/* Scoring */}
          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Scoring System</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Goal</span>
                <span className="text-secondary">1 point</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Shooting the ball completely past the goal line into the net. The entire ball must cross 
                the plane of the goal line.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Man-Up Goal</span>
                <span className="text-secondary">1 point (advantage)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Goals scored during power plays when the opposing team has a player in the penalty box. 
                Critical for capitalizing on extra-man opportunities.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Two-Point Goal</span>
                <span className="text-secondary">2 points (rare)</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Only in some professional leagues, goals scored from beyond a designated two-point arc.
              </p>
            </div>
          </Card>

          {/* Play Action */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Play Action & Possession</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Face-Off:</strong> Play begins and restarts with a face-off 
                at midfield, where two players compete for possession. Similar to hockey, but players use their sticks 
                to clamp and rake the ball.
              </p>
              <p>
                <strong className="text-card-foreground">Possession:</strong> Teams advance the ball via passing and 
                running (cradling). At least 4 players must remain on the offensive half once the ball crosses midfield.
              </p>
              <p>
                <strong className="text-card-foreground">Shot Clock:</strong> Teams have 80 seconds to take a shot 
                on goal once they gain possession in their offensive half (college rules). Resets after shots and saves.
              </p>
              <p>
                <strong className="text-card-foreground">Checking:</strong> Defensive players can use stick checks 
                and body checks to dislodge the ball. Stick checks must target the opponent's stick or gloved hands only.
              </p>
              <p>
                <strong className="text-card-foreground">Penalties:</strong> Personal fouls (slashing, cross-checking) 
                result in 1-3 minute non-releasable penalties. Technical fouls award possession with 30-second releasable penalties.
              </p>
            </div>
          </Card>

          {/* Positions */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Player Positions</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Attack</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Attackmen (3 players)</h4>
                    <p className="text-sm text-muted-foreground">
                      Primary scorers who stay in the offensive zone. Use short sticks for quick handling and shooting. 
                      Must have excellent stick skills, shooting accuracy, and dodging ability. Work together in triangle formations.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Midfield</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Midfielders (3 players)</h4>
                    <p className="text-sm text-muted-foreground">
                      Transition players who cover the entire field on both offense and defense. Must be the most 
                      athletic players with excellent endurance. Can use short or long sticks. Often substituted as 
                      lines like in hockey.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Long-Stick Middie (LSM)</h4>
                    <p className="text-sm text-muted-foreground">
                      Defensive-minded midfielder with a long pole. Typically matches up against the opponent's 
                      best offensive midfielder. Critical for transition defense.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Defense</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Defensemen (3 players)</h4>
                    <p className="text-sm text-muted-foreground">
                      Use long sticks (72 inches total) to defend against attackmen. Must be physical, intelligent, 
                      and have strong footwork. Work together in slides and help defense. Stay in the defensive zone.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Goalie (1 player)</h4>
                    <p className="text-sm text-muted-foreground">
                      Last line of defense with the largest stick head. Directs the defense, clears the ball after 
                      saves, and must have quick reflexes. Save percentages above 60% are elite level. Wears 
                      extensive protective equipment.
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
