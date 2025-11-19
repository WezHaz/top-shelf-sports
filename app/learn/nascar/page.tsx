import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NASCARPage() {
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
              NASCAR
            </h1>
            <p className="text-lg text-muted-foreground">
              America's premier stock car racing championship
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Race Format</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                NASCAR features 36-40 car fields racing on oval tracks ranging from short tracks (under 1 mile) to superspeedways 
                (2.5+ miles). Races are divided into stages, typically three per race, with points awarded at the end of each stage 
                and for finishing position.
              </p>
              <p>
                The Cup Series season consists of 36 races from February to November, culminating in a playoff format where the 
                top 16 drivers compete for the championship. Each playoff round eliminates drivers until four remain for the 
                final championship race.
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
              <h2 className="text-2xl font-bold text-card-foreground">Points & Scoring</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Points are awarded based on finishing position: 40 points for 1st place down to 1 point for 40th. Stage winners 
                earn 10 bonus points (2nd gets 9, down to 10th place getting 1 point). Race winners receive 5 playoff points that 
                carry through the playoffs.
              </p>
              <p>
                Leading a lap earns 1 bonus point, and leading the most laps earns an additional point. In the playoffs, drivers 
                start with 2,000 points plus playoff points earned during the season, with points resetting after each round.
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
                Pit stop strategy is crucial. Teams must balance fuel mileage, tire wear, and track position. A four-tire change 
                and refueling takes 12-14 seconds. Teams can opt for two-tire stops to save time or fuel-only stops when fuel 
                mileage is critical.
              </p>
              <p>
                Caution flags (yellow flags for incidents) bunch the field and create strategic opportunities. Teams may pit under 
                caution to maintain track position or stay out gambling on strategy. The final 10-20 laps often see aggressive 
                moves as drivers push for position.
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
              <h2 className="text-2xl font-bold text-card-foreground">Team Roles</h2>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-card-foreground">Driver</h4>
                <p className="text-sm text-muted-foreground">
                  Controls the car, provides feedback on handling, manages fuel/tire conservation, and executes race strategy. 
                  Must maintain focus for 3-4 hour races.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Crew Chief</h4>
                <p className="text-sm text-muted-foreground">
                  Team leader who calls race strategy, manages pit stops, and makes car setup decisions. The coach and strategist 
                  of the operation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Pit Crew</h4>
                <p className="text-sm text-muted-foreground">
                  Seven members go over the wall: tire changers, tire carriers, jackman, and fueler. Elite athleticism required - 
                  sub-12 second stops are standard.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Spotter</h4>
                <p className="text-sm text-muted-foreground">
                  Positioned high above the track, provides critical information about traffic, incidents, and gaps. The driver's 
                  eyes for what they can't see.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
