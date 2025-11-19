import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GolfPage() {
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
              Golf
            </h1>
            <p className="text-lg text-muted-foreground">
              Master the precision sport of golf
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
                Golf is played on courses with 18 holes (or 9 holes for shorter rounds). Each hole consists of 
                a tee box where play begins, a fairway, hazards (bunkers, water), and a green with a flag marking the hole.
              </p>
              <p>
                Players use various clubs (driver, irons, wedges, putter) to hit a small ball from the tee to 
                the hole in as few strokes as possible. Each hole has a designated par (expected number of strokes).
              </p>
              <p>
                Golf can be played individually (stroke play) or in teams. Players alternate shots, and the ball 
                must be played as it lies (with some exceptions).
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
                <span className="font-semibold text-card-foreground">Hole-in-One / Ace</span>
                <span className="text-secondary">1 stroke</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Hitting the ball directly from the tee into the hole in one shot.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Albatross / Double Eagle</span>
                <span className="text-secondary">Par -3</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Completing a hole three strokes under par (extremely rare).
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Eagle</span>
                <span className="text-secondary">Par -2</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Completing a hole two strokes under par.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Birdie</span>
                <span className="text-secondary">Par -1</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Completing a hole one stroke under par.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Par</span>
                <span className="text-secondary">0</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Completing a hole in the expected number of strokes.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Bogey / Double Bogey</span>
                <span className="text-secondary">Par +1 / +2</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Completing a hole one or two strokes over par.
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
              <h2 className="text-2xl font-bold text-card-foreground">Play Action & Course Management</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Tee Shot:</strong> Play begins with a drive from the tee box 
                using a driver or other club. The goal is distance and accuracy to position for the next shot.
              </p>
              <p>
                <strong className="text-card-foreground">Approach Shots:</strong> Subsequent shots from the fairway or rough 
                aim to land the ball on the green, ideally close to the pin.
              </p>
              <p>
                <strong className="text-card-foreground">Putting:</strong> On the green, players use a putter to roll 
                the ball into the hole. Reading the green's slope and speed is crucial.
              </p>
              <p>
                <strong className="text-card-foreground">Hazards & Penalties:</strong> Water hazards and out-of-bounds 
                areas result in penalty strokes. Bunkers (sand traps) don't add strokes but make shots more difficult.
              </p>
              <p>
                <strong className="text-card-foreground">Etiquette:</strong> Golf emphasizes honor, pace of play, 
                repairing divots/ball marks, and maintaining silence during shots.
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
              <h2 className="text-2xl font-bold text-card-foreground">Equipment & Club Types</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Woods & Driver</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Driver (1-Wood)</h4>
                    <p className="text-sm text-muted-foreground">
                      Largest club head, used for maximum distance off the tee. Typically 200-300+ yards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Fairway Woods (3, 5, 7)</h4>
                    <p className="text-sm text-muted-foreground">
                      Used for long shots from the fairway or tee. Smaller than driver but still focused on distance.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Irons</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Long Irons (3-5)</h4>
                    <p className="text-sm text-muted-foreground">
                      Lower loft, greater distance. Used for longer approach shots (150-200 yards).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Mid Irons (6-7)</h4>
                    <p className="text-sm text-muted-foreground">
                      Versatile clubs for approach shots from 120-160 yards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Short Irons (8-9)</h4>
                    <p className="text-sm text-muted-foreground">
                      Higher loft for shorter, more accurate approach shots (100-130 yards).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Wedges & Putter</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Pitching Wedge (PW)</h4>
                    <p className="text-sm text-muted-foreground">
                      Used for approach shots from 80-110 yards and pitch shots around the green.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Sand Wedge (SW)</h4>
                    <p className="text-sm text-muted-foreground">
                      Designed for bunker shots with a wide sole that bounces through sand.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Lob Wedge (LW)</h4>
                    <p className="text-sm text-muted-foreground">
                      Highest loft (58-64°) for short, high shots that stop quickly on the green.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Putter</h4>
                    <p className="text-sm text-muted-foreground">
                      Flat-faced club for rolling the ball on the green. Most used club in the bag.
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
