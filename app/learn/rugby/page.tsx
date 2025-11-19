import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function RugbyPage() {
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
              Rugby
            </h1>
            <p className="text-lg text-muted-foreground">
              The ultimate team sport - controlled chaos
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
                Rugby Union is played on a 100-meter field with in-goal areas at each end. Each team has 15 players on the field.
                Rugby League uses 13 players per side with slightly different rules.
              </p>
              <p>
                Matches consist of two 40-minute halves. The clock stops only for injuries and disciplinary issues. 
                Play is continuous with players passing backward or running forward.
              </p>
              <p>
                The ball can be passed backward or kicked forward but never passed forward. This creates unique tactical situations 
                and requires constant support play from teammates.
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
            <div className="space-y-4">
              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Try</span>
                <span className="text-secondary">5 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Grounding the ball in the opponent's in-goal area. The primary method of scoring.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Conversion</span>
                <span className="text-secondary">2 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Kick through the posts after a try, taken from a line perpendicular to where try was scored.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Penalty Kick</span>
                <span className="text-secondary">3 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Awarded for opponent infringements. Team can kick for goal instead of taking the penalty.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Drop Goal</span>
                <span className="text-secondary">3 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Kicking the ball through the posts during open play after it bounces off the ground.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Play Action & Set Pieces</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Scrums:</strong> Eight forwards from each team bind together 
                and push to contest possession after minor infringements. A test of power and technique.
              </p>
              <p>
                <strong className="text-card-foreground">Lineouts:</strong> When ball goes out of bounds, teams throw it in. 
                Players lift teammates to catch the ball. Requires timing and teamwork.
              </p>
              <p>
                <strong className="text-card-foreground">Rucks:</strong> Form when a tackled player releases the ball on ground. 
                Players drive over the ball to secure possession. Common phase of play.
              </p>
              <p>
                <strong className="text-card-foreground">Mauls:</strong> Ball carrier is held by opponents while teammates bind on. 
                The group moves forward together, often used near the try line.
              </p>
              <p>
                <strong className="text-card-foreground">Tackles:</strong> Only the ball carrier can be tackled. Players must release 
                the ball when tackled and tackler must release the player. Failure results in penalties.
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
                <h3 className="mb-3 text-xl font-semibold text-primary">Forwards (The Pack)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Props (1, 3) & Hooker (2)</h4>
                    <p className="text-sm text-muted-foreground">
                      Front row of the scrum. Props provide power and stability; hooker hooks the ball in scrums. 
                      The biggest, strongest players.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Locks/Second Row (4, 5)</h4>
                    <p className="text-sm text-muted-foreground">
                      Tall players who win lineout ball and push in scrums. Primary ball winners in set pieces.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Flankers (6, 7) & Number Eight (8)</h4>
                    <p className="text-sm text-muted-foreground">
                      Back row players who are first to breakdowns, make tackles, and carry the ball. 
                      Combine power with mobility.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Backs</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Scrum-half (9)</h4>
                    <p className="text-sm text-muted-foreground">
                      Link between forwards and backs. Passes from breakdowns, makes tactical decisions. 
                      The on-field director.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Fly-half (10)</h4>
                    <p className="text-sm text-muted-foreground">
                      Primary playmaker and kicker. Calls plays, distributes the ball, and controls the game. 
                      Requires vision and decision-making.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Centers (12, 13)</h4>
                    <p className="text-sm text-muted-foreground">
                      Inside center (12) is often a strong runner and defender. Outside center (13) links to wings. 
                      Both distribute and crash through defenses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Wings (11, 14)</h4>
                    <p className="text-sm text-muted-foreground">
                      Fastest players who finish attacking moves and score tries. Also field kicks and counter-attack.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Fullback (15)</h4>
                    <p className="text-sm text-muted-foreground">
                      Last line of defense who catches kicks, counter-attacks, and joins the backline. 
                      Requires positional awareness and kicking ability.
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
