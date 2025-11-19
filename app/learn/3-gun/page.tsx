import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ThreeGunPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6 text-primary hover:text-primary/80">
            <Link href="/learn">
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Sports
            </Link>
          </Button>

          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              3 Gun
            </h1>
            <p className="text-lg text-muted-foreground">
              Multi-gun competitive shooting at its finest
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Competition Setup</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                3 Gun is a practical shooting sport where competitors use three types of firearms: a modern rifle, a handgun, 
                and a shotgun. Matches consist of multiple stages that test speed, accuracy, and the ability to transition 
                between weapons.
              </p>
              <p>
                Competitors navigate through courses of fire that include targets at varying distances, moving targets, steel 
                targets, and paper targets. Each stage has unique challenges requiring different shooting positions, movement 
                patterns, and strategies.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <svg className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Scoring System</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Scoring typically uses "time plus" format where your raw time is added to penalties. Penalties are assessed for 
                missed targets (typically 5-10 seconds per miss), procedural errors, and safety violations. The lowest total 
                time wins.
              </p>
              <p>
                Some matches use a "hit factor" system that divides your points by your time, rewarding both speed and accuracy. 
                Major matches may combine multiple stages with overall standings determined by cumulative performance.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Stage Flow</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Each stage begins with the competitor in a designated start position with firearms holstered or staged. At the 
                start signal, competitors engage targets in the most efficient order while moving through the course.
              </p>
              <p>
                Transitions between firearms are critical. Competitors must holster or stage one gun before drawing or retrieving 
                another. Efficient stage planning and smooth weapon transitions often separate winners from the rest of the field.
              </p>
            </div>
          </Card>

          <Card className="border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Equipment & Divisions</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Firearms</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Rifle</h4>
                    <p className="text-sm text-muted-foreground">
                      Typically AR-15 style rifles in .223/5.56mm for intermediate range targets (10-300 yards).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Handgun</h4>
                    <p className="text-sm text-muted-foreground">
                      Semi-automatic pistols in 9mm or larger for close to intermediate range (7-50 yards).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Shotgun</h4>
                    <p className="text-sm text-muted-foreground">
                      12-gauge semi-auto or pump action for close-range and specialized targets like steel poppers.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Competition Divisions</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Tactical Optics</h4>
                    <p className="text-sm text-muted-foreground">
                      Red dot sights on all firearms, most popular division with modern equipment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Open</h4>
                    <p className="text-sm text-muted-foreground">
                      Unlimited modifications including optical sights, compensators, and extended magazines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Limited</h4>
                    <p className="text-sm text-muted-foreground">
                      Iron sights only, limited modifications, emphasizes fundamental shooting skills.
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
