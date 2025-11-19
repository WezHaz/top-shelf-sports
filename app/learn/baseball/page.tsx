import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function BaseballPage() {
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
              Baseball
            </h1>
            <p className="text-lg text-muted-foreground">
              America's pastime - where strategy meets tradition
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
                Baseball is played on a diamond-shaped field with four bases arranged in a 90-foot square. 
                Each team fields 9 players when on defense.
              </p>
              <p>
                Games consist of nine innings, with each inning divided into top (visiting team bats) and 
                bottom (home team bats) halves. Extra innings are played if the score is tied after nine.
              </p>
              <p>
                The batting team tries to score runs by hitting the ball and advancing around the bases, 
                while the fielding team tries to get three outs to end the half-inning.
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
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Run:</strong> A player scores a run by safely reaching 
                home plate after touching all three bases in order (1st, 2nd, 3rd). Each run counts as 1 point.
              </p>
              <p>
                <strong className="text-card-foreground">Home Run:</strong> When a batter hits the ball over the 
                outfield fence in fair territory, they and any runners on base score automatically.
              </p>
              <p>
                <strong className="text-card-foreground">RBI (Run Batted In):</strong> A batter is credited with 
                an RBI when their action causes a run to score (hit, walk with bases loaded, sacrifice fly, etc.).
              </p>
            </div>
          </Card>

          {/* Play Action */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Play Action & Outs</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">At-Bat:</strong> Each batter faces the pitcher until they 
                get a hit, reach base via walk/hit-by-pitch, or make an out. The count (balls and strikes) resets 
                for each new batter.
              </p>
              <p>
                <strong className="text-card-foreground">Strikes & Balls:</strong> Three strikes result in a strikeout (out). 
                Four balls result in a walk (batter advances to first base). A strike is a pitch in the strike zone 
                or a swing-and-miss.
              </p>
              <p>
                <strong className="text-card-foreground">Getting Outs:</strong> Strikeout, fly out (ball caught in the air), 
                ground out (ball thrown to first before runner arrives), force out, tag out, or double/triple plays.
              </p>
              <p>
                <strong className="text-card-foreground">Inning Changes:</strong> After three outs, teams switch from batting 
                to fielding or vice versa. The game continues until 9 innings are complete (or more if tied).
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
                <h3 className="mb-3 text-xl font-semibold text-primary">Pitcher (P)</h3>
                <p className="text-sm text-muted-foreground">
                  The most important defensive position. Throws the ball to the catcher with the goal of getting batters out. 
                  Starting pitchers and relief pitchers have different roles.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Catcher (C)</h3>
                <p className="text-sm text-muted-foreground">
                  Positioned behind home plate, receives pitches, calls the game, and prevents stolen bases. 
                  The field general who directs the defense.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Infielders</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">First Base (1B)</h4>
                    <p className="text-sm text-muted-foreground">
                      Receives throws from other infielders to record outs. Typically taller players with good gloves.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Second Base (2B)</h4>
                    <p className="text-sm text-muted-foreground">
                      Covers second base and the area to the right of it. Key player in turning double plays.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Shortstop (SS)</h4>
                    <p className="text-sm text-muted-foreground">
                      Positioned between second and third base. Often the best athlete on the field with strong arm and range.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Third Base (3B)</h4>
                    <p className="text-sm text-muted-foreground">
                      Guards the "hot corner" where hard-hit balls come frequently. Requires quick reflexes and strong arm.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Outfielders</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Left Field (LF)</h4>
                    <p className="text-sm text-muted-foreground">
                      Covers left portion of outfield. Less demanding arm than right field but requires good speed.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Center Field (CF)</h4>
                    <p className="text-sm text-muted-foreground">
                      Covers the most ground in the outfield. Typically the fastest and best defensive outfielder.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Right Field (RF)</h4>
                    <p className="text-sm text-muted-foreground">
                      Covers right portion of outfield. Requires the strongest arm to make long throws to third base.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Designated Hitter (DH)</h3>
                <p className="text-sm text-muted-foreground">
                  In the American League, a player who bats in place of the pitcher but doesn't play defense. 
                  Allows teams to keep a strong hitter in the lineup.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
