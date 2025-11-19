import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function F1Page() {
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
              Formula 1
            </h1>
            <p className="text-lg text-muted-foreground">
              The pinnacle of motorsport engineering and racing
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Championship Format</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Formula 1 features 20 drivers from 10 teams competing in approximately 23 races (called Grand Prix) across the 
                globe from March to December. Each race weekend consists of three practice sessions, qualifying, and the race itself.
              </p>
              <p>
                Two championships run simultaneously: the Drivers' Championship (individual points) and the Constructors' Championship 
                (team points). Both driver results count toward the team total, making strategy crucial for maximizing team success.
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
              <h2 className="text-2xl font-bold text-card-foreground">Points System</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Points are awarded to the top 10 finishers: 25-18-15-12-10-8-6-4-2-1. The driver with the fastest lap earns an 
                additional point (must finish in top 10). Sprint races (held at select events) award points to the top 8 using 
                a reduced scale.
              </p>
              <p>
                Qualifying determines starting grid position through three knockout sessions (Q1, Q2, Q3). The fastest driver in 
                Q3 earns pole position. Grid position is crucial as overtaking on many circuits is difficult.
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
              <h2 className="text-2xl font-bold text-card-foreground">Race Strategy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tire strategy dominates F1 racing. Five tire compounds are available (C0-C5), with three selected per race. Drivers 
                must use at least two different compounds during the race. Tire degradation affects lap times, creating strategic 
                windows for overtaking.
              </p>
              <p>
                DRS (Drag Reduction System) aids overtaking by reducing rear wing drag when within 1 second of the car ahead in 
                designated zones. Teams balance track position, tire condition, and fuel load to optimize race pace and position.
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
              <h2 className="text-2xl font-bold text-card-foreground">Team Structure</h2>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-card-foreground">Driver</h4>
                <p className="text-sm text-muted-foreground">
                  Elite athletes combining precision, speed, and endurance. Must manage complex car settings while racing at 200+ mph 
                  and experiencing 5G+ forces in corners.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Team Principal</h4>
                <p className="text-sm text-muted-foreground">
                  Overall team leader managing operations, personnel, budgets, and strategic direction. The face of the team.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Race Engineers</h4>
                <p className="text-sm text-muted-foreground">
                  Each driver has a race engineer who manages strategy, communicates with the driver, and analyzes real-time data 
                  to optimize performance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Pit Crew</h4>
                <p className="text-sm text-muted-foreground">
                  20+ members execute pit stops in under 2 seconds for tire changes. Choreographed precision at extreme speed - 
                  any mistake costs positions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Aerodynamicists & Engineers</h4>
                <p className="text-sm text-muted-foreground">
                  Hundreds of engineers at factories design, test, and develop cars using cutting-edge technology including wind 
                  tunnels, CFD, and simulators.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
