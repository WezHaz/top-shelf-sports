import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function SoccerPage() {
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
              Soccer (Football)
            </h1>
            <p className="text-lg text-muted-foreground">
              The beautiful game played worldwide
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
                Soccer is played on a rectangular field (100-130 yards long, 50-100 yards wide) with goals at each end. 
                Each team has 11 players including a goalkeeper.
              </p>
              <p>
                Matches consist of two 45-minute halves with a 15-minute halftime. The clock runs continuously 
                with stoppage time added for injuries and delays. No timeouts are allowed.
              </p>
              <p>
                Players cannot use hands or arms (except goalkeepers in their penalty area). The ball is advanced 
                by dribbling, passing with feet, chest, or head.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Scoring System</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Goal:</strong> Worth 1 point. Scored when the entire ball 
                crosses the goal line between the posts and under the crossbar.
              </p>
              <p>
                <strong className="text-card-foreground">Penalty Kick:</strong> Awarded for fouls in the penalty area. 
                A one-on-one shot from 12 yards out against the goalkeeper. About 75-80% conversion rate.
              </p>
              <p>
                <strong className="text-card-foreground">Free Kick:</strong> Awarded for fouls. Direct free kicks 
                can score directly; indirect free kicks must touch another player first before entering the goal.
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
                <strong className="text-card-foreground">Kickoff:</strong> Starts each half and restarts after goals. 
                Taken from center circle with opponents at least 10 yards away.
              </p>
              <p>
                <strong className="text-card-foreground">Offside:</strong> Attacking player cannot be closer to opponent's 
                goal than second-to-last defender when ball is played forward to them (unless in own half).
              </p>
              <p>
                <strong className="text-card-foreground">Throw-ins:</strong> When ball goes out on sidelines, opposing 
                team throws it in with both hands from over the head, feet on ground.
              </p>
              <p>
                <strong className="text-card-foreground">Corner Kicks & Goal Kicks:</strong> Corner kick awarded when 
                defense sends ball over their own goal line. Goal kick awarded when offense sends it over goal line.
              </p>
              <p>
                <strong className="text-card-foreground">Cards:</strong> Yellow card (caution/warning), two yellows = red. 
                Red card (ejection) - player sent off, team plays down a player for remainder of match.
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
                <h3 className="mb-3 text-xl font-semibold text-primary">Goalkeeper (GK)</h3>
                <p className="text-sm text-muted-foreground">
                  The only player who can use hands (within penalty area). Stops shots, organizes defense, 
                  and distributes the ball to start attacks. Last line of defense.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Defenders</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Center Backs (CB)</h4>
                    <p className="text-sm text-muted-foreground">
                      Anchor the defense, mark strikers, win aerial duels, and clear danger. 
                      Typically strong, tall, and good in the air.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Fullbacks (LB/RB)</h4>
                    <p className="text-sm text-muted-foreground">
                      Play on flanks, defend wide players, and overlap into attack. Modern fullbacks contribute 
                      heavily to offense with crosses and through balls.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Midfielders</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Defensive Midfielders (CDM)</h4>
                    <p className="text-sm text-muted-foreground">
                      Shield the defense, break up attacks, and distribute the ball. The "destroyer" role.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Central Midfielders (CM)</h4>
                    <p className="text-sm text-muted-foreground">
                      Box-to-box players who contribute to both attack and defense. Versatile and high stamina required.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Attacking Midfielders (CAM)</h4>
                    <p className="text-sm text-muted-foreground">
                      Creative playmakers who create chances, assist goals, and link midfield to attack. 
                      The "number 10" role.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Wingers (LW/RW)</h4>
                    <p className="text-sm text-muted-foreground">
                      Attack from wide positions, beat defenders 1v1, deliver crosses, and cut inside to shoot. 
                      Speed and dribbling are key.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Forwards/Strikers (ST)</h3>
                <p className="text-sm text-muted-foreground">
                  Primary goal scorers who finish chances and lead the attack. Target strikers hold up play and 
                  bring others in, while poachers focus purely on scoring. Requires positioning, finishing, and composure.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
