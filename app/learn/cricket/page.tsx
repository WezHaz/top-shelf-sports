import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function CricketPage() {
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
              Cricket
            </h1>
            <p className="text-lg text-muted-foreground">
              The gentleman's game with global appeal
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
                Cricket is played on an oval field with a 22-yard pitch in the center. Each team has 11 players. 
                Two batsmen are at the pitch at once, while the fielding team spreads across the field.
              </p>
              <p>
                Three main formats: Test cricket (5 days, 2 innings each), One Day Internationals (50 overs per side), 
                and T20 (20 overs per side). Each format has unique strategies and pacing.
              </p>
              <p>
                An over consists of 6 legal deliveries (pitches) by one bowler. After each over, a different bowler 
                bowls from the opposite end. Teams alternate batting and bowling (fielding).
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
                <span className="font-semibold text-card-foreground">Run</span>
                <span className="text-secondary">1-3 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Batsmen run between wickets after hitting the ball. Each completed run scores 1 point. 
                Can take 2 or 3 runs if time permits.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Boundary (Four)</span>
                <span className="text-secondary">4 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ball reaches the boundary rope after touching the ground. Automatic 4 runs without running.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Boundary (Six)</span>
                <span className="text-secondary">6 points</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ball clears the boundary rope without bouncing. Automatic 6 runs. The most exciting scoring shot.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Extras</span>
                <span className="text-secondary">Varies</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Runs awarded for bowling errors: wides, no-balls, byes, and leg byes. Penalize poor bowling.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Play Action & Dismissals</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Innings:</strong> One team bats until 10 batsmen are out 
                (one must remain), all overs are bowled, or captain declares (Test cricket only). Then teams switch roles.
              </p>
              <p>
                <strong className="text-card-foreground">Ways to Get Out:</strong>
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li><strong>Bowled:</strong> Ball hits the stumps directly</li>
                <li><strong>Caught:</strong> Fielder catches the ball before it bounces</li>
                <li><strong>LBW (Leg Before Wicket):</strong> Ball would have hit stumps but hit batsman's leg</li>
                <li><strong>Run Out:</strong> Fielder hits stumps while batsmen are running</li>
                <li><strong>Stumped:</strong> Wicket-keeper removes bails when batsman is out of crease</li>
                <li><strong>Hit Wicket:</strong> Batsman accidentally knocks over their own stumps</li>
              </ul>
              <p>
                <strong className="text-card-foreground">Winning:</strong> Team with more runs after both teams bat wins. 
                In limited overs, one innings each. In Test cricket, two innings each and draws are possible.
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
                <h3 className="mb-3 text-xl font-semibold text-primary">Batsmen</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Opening Batsmen</h4>
                    <p className="text-sm text-muted-foreground">
                      Face the new ball when it's hardest to bat. Require solid technique and patience 
                      to see off dangerous opening bowlers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Top Order (3-5)</h4>
                    <p className="text-sm text-muted-foreground">
                      Usually the best batsmen who anchor the innings and build the score. 
                      The "number 3" is often the most technically sound.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Middle Order (6-7)</h4>
                    <p className="text-sm text-muted-foreground">
                      Finish the innings and accelerate scoring. Often all-rounders who can bat and bowl.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Lower Order (8-11)</h4>
                    <p className="text-sm text-muted-foreground">
                      Primarily bowlers who bat if needed. The last few wickets (9-11) are often called the "tail."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Bowlers</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Fast Bowlers</h4>
                    <p className="text-sm text-muted-foreground">
                      Bowl at high speeds (85-100+ mph) using pace, bounce, and swing. Take new ball and provide aggression.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Spin Bowlers</h4>
                    <p className="text-sm text-muted-foreground">
                      Bowl slower with spin to deceive batsmen. Off-spinners turn from off to leg side; 
                      leg-spinners turn from leg to off. Crucial on wearing pitches.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">All-Rounders</h4>
                    <p className="text-sm text-muted-foreground">
                      Excel at both batting and bowling. Provide balance to the team and flexibility in tactics.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Wicket-keeper</h3>
                <p className="text-sm text-muted-foreground">
                  Stands behind the stumps to catch balls, effect stumpings, and coordinate the field. 
                  Must have excellent reflexes and often bats in middle order. The busiest player on the field.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Captain</h3>
                <p className="text-sm text-muted-foreground">
                  Sets field placements, manages bowlers, makes tactical decisions, and leads the team. 
                  Cricket captaincy is one of the most strategic roles in sports.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
