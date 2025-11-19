import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function BasketballPage() {
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
              Basketball
            </h1>
            <p className="text-lg text-muted-foreground">
              Fast-paced action where every second counts
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
                Basketball is played on a 94-foot court with a hoop at each end, mounted 10 feet high. 
                Each team has 5 players on the court at once.
              </p>
              <p>
                NBA games consist of four 12-minute quarters. College games have two 20-minute halves. 
                The clock stops for fouls, timeouts, and out-of-bounds plays.
              </p>
              <p>
                Teams must advance the ball past half-court within 8 seconds and attempt a shot within 
                24 seconds (NBA) or 30 seconds (college). This creates constant action and scoring.
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
                <span className="font-semibold text-card-foreground">Three-Point Shot</span>
                <span className="text-secondary">3 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Any field goal made from beyond the three-point arc (23.75 feet in NBA).
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Field Goal</span>
                <span className="text-secondary">2 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Any shot made from inside the three-point line during regular play.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Free Throw</span>
                <span className="text-secondary">1 point</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Uncontested shot from the free-throw line (15 feet) awarded after certain fouls.
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
                <strong className="text-card-foreground">Jump Ball:</strong> Games start with a jump ball at center court. 
                Two players jump to tip the ball to their teammates.
              </p>
              <p>
                <strong className="text-card-foreground">Possession Changes:</strong> After made baskets, the opposing team 
                inbounds the ball. Possession also changes after turnovers, defensive rebounds, and violations.
              </p>
              <p>
                <strong className="text-card-foreground">Fouls:</strong> Personal fouls stop play and may award free throws. 
                Players foul out after 6 personal fouls (NBA) or 5 (college). Team fouls lead to bonus free throws.
              </p>
              <p>
                <strong className="text-card-foreground">Violations:</strong> Traveling (moving without dribbling), double dribble, 
                carrying, three-second lane violation, and shot clock violations result in turnovers.
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
                <h3 className="mb-3 text-xl font-semibold text-primary">Point Guard (PG)</h3>
                <p className="text-sm text-muted-foreground">
                  The floor general who brings the ball up court, runs the offense, and creates plays for teammates. 
                  Typically the best ball-handler and passer. Requires high basketball IQ and leadership.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Shooting Guard (SG)</h3>
                <p className="text-sm text-muted-foreground">
                  Primary perimeter scorer who excels at shooting from outside. Often the best shooter on the team. 
                  Must be able to create their own shot and play solid defense.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Small Forward (SF)</h3>
                <p className="text-sm text-muted-foreground">
                  Versatile wing player who can score inside and out. Often athletic and able to guard multiple positions. 
                  The most well-rounded players who contribute in all areas.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Power Forward (PF)</h3>
                <p className="text-sm text-muted-foreground">
                  Plays close to the basket on both offense and defense. Strong rebounder and interior scorer. 
                  Modern power forwards often have three-point range ("stretch fours").
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Center (C)</h3>
                <p className="text-sm text-muted-foreground">
                  Typically the tallest player who protects the rim, rebounds, and scores in the paint. 
                  Anchors the defense with shot-blocking and provides interior presence on offense.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Modern Basketball</h4>
                <p className="text-sm text-muted-foreground">
                  Today's game features position-less basketball where players have diverse skill sets. 
                  The traditional positions still exist but players are increasingly versatile, with "combo guards," 
                  "point forwards," and "stretch bigs" blurring position lines.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
