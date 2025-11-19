import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DroneRacingPage() {
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
              Drone Racing
            </h1>
            <p className="text-lg text-muted-foreground">
              High-speed FPV racing through technical 3D courses
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">Race Format</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Drone racing pilots fly FPV (First Person View) using goggles that display a live camera feed from their racing drone. 
                Pilots navigate through 3D courses featuring gates, flags, and obstacles at speeds exceeding 100 mph.
              </p>
              <p>
                Races feature qualifying heats of 4-8 pilots flying simultaneously. The fastest pilots advance through bracket-style 
                elimination rounds. Courses combine indoor arenas and outdoor venues with gates suspended at various heights and angles.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">Scoring & Equipment</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Timing is tracked using video transponders on each drone. Pilots must pass through all gates in the correct sequence - 
                missing a gate results in penalties or disqualification. The fastest clean lap wins.
              </p>
              <p>
                Racing drones are custom-built with carbon fiber frames (typically 5-inch props), powerful brushless motors, high-discharge 
                LiPo batteries, and lightweight FPV cameras. Pilots tune their drone's flight characteristics using specialized software.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">Skills & Strategy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Elite pilots master advanced maneuvers: power loops, split-s dives, high-speed turns, and proximity flying. Mental 
                focus is critical as pilots process visual information at extreme speeds while maintaining spatial awareness.
              </p>
              <p>
                Course strategy involves finding optimal racing lines, managing battery power throughout heats, and executing aggressive 
                passes. Pilots must balance speed with control - one crash ends your heat.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
