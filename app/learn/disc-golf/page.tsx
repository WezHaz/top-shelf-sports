import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DiscGolfPage() {
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
              Disc Golf
            </h1>
            <p className="text-lg text-muted-foreground">
              Master the fastest growing outdoor sport
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
                Disc golf is played on courses with 9 or 18 holes, each featuring a tee pad (starting area) and 
                a target basket with hanging chains. Courses utilize natural terrain like woods, hills, and open fields.
              </p>
              <p>
                Players throw specialized flying discs toward the target, similar to golf but using discs instead of 
                clubs and balls. Each throw counts as one stroke, and the goal is to complete each hole in the fewest throws.
              </p>
              <p>
                Courses are typically free to play in public parks. Players carry multiple discs with different flight 
                characteristics for various shot types (drivers, mid-ranges, putters).
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
                <span className="font-semibold text-card-foreground">Ace</span>
                <span className="text-secondary">1 throw</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Throwing the disc directly into the basket on the tee shot (hole-in-one).
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Eagle</span>
                <span className="text-secondary">Par -2</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Completing a hole two throws under par.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Birdie</span>
                <span className="text-secondary">Par -1</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Completing a hole one throw under par.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Par</span>
                <span className="text-secondary">0</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Completing a hole in the expected number of throws (typically 3 for most holes).
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Bogey</span>
                <span className="text-secondary">Par +1</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Completing a hole one throw over par.
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
              <h2 className="text-2xl font-bold text-card-foreground">Play Action & Rules</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Tee Throw:</strong> Play begins from behind the tee pad. 
                Players typically use distance drivers to achieve maximum distance toward the basket.
              </p>
              <p>
                <strong className="text-card-foreground">Lie & Stance:</strong> Each subsequent throw is made from where 
                the previous throw landed (the lie). Players must establish a legal stance with a supporting point in contact with the lie.
              </p>
              <p>
                <strong className="text-card-foreground">Completion:</strong> A hole is complete when the disc comes to 
                rest in the basket, supported by the chains or resting in the basket's tray.
              </p>
              <p>
                <strong className="text-card-foreground">Out of Bounds:</strong> OB areas (water, roads, marked zones) 
                incur a one-stroke penalty. Play continues from a designated drop zone or one meter from where the disc went OB.
              </p>
              <p>
                <strong className="text-card-foreground">Etiquette:</strong> Maintain pace of play, allow faster groups 
                to play through, and help spot discs. Call "fore" when errant throws endanger others.
              </p>
            </div>
          </Card>

          {/* Positions */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Disc Types & Throws</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Distance Drivers</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">High-Speed Drivers</h4>
                    <p className="text-sm text-muted-foreground">
                      Maximum distance discs (speed 11-14) requiring strong arm speed. Used for long tee shots 
                      and can achieve 300-500+ feet with proper technique.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Fairway Drivers</h4>
                    <p className="text-sm text-muted-foreground">
                      Controllable drivers (speed 6-10) for accuracy and distance. Easier to control than 
                      high-speed drivers, ideal for approach shots and tight fairways.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Mid-Range Discs</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Mid-Ranges (Speed 4-6)</h4>
                    <p className="text-sm text-muted-foreground">
                      Versatile discs for controlled approach shots from 150-250 feet. Offer excellent accuracy 
                      and reliable flight paths. Essential for scrambling and positioning shots.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Putters & Approach</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Putting Putters</h4>
                    <p className="text-sm text-muted-foreground">
                      Slow, stable discs designed for accuracy inside the circle (10 meters/33 feet). 
                      Most important disc for scoring well.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Approach Discs</h4>
                    <p className="text-sm text-muted-foreground">
                      Overstable putters/mid-ranges for short, controlled shots. Useful for windy conditions 
                      and getting around obstacles.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Throwing Techniques</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Backhand</h4>
                    <p className="text-sm text-muted-foreground">
                      Most common throw, similar to traditional frisbee. Natural for right-handed throws that curve left.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Forehand (Sidearm)</h4>
                    <p className="text-sm text-muted-foreground">
                      Thrown with a flicking motion. Curves right for right-handed throwers. Essential for 
                      navigating doglegs and obstacles.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Overhand Throws</h4>
                    <p className="text-sm text-muted-foreground">
                      Tomahawk and thumber throws for getting over obstacles or creating vertical distance.
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
