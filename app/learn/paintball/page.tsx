import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PaintballPage() {
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
              Paintball
            </h1>
            <p className="text-lg text-muted-foreground">
              Team-based tactical combat with paint-filled projectiles
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Game Setup</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Paintball is played using markers (guns) that shoot gelatin capsules filled with water-soluble dye. Players 
                wear protective masks and compete on fields ranging from natural woodsball terrain to inflatable-bunker speedball 
                courses.
              </p>
              <p>
                Games typically feature two teams of 3-7 players per side (depending on format) competing on fields measuring 
                150-200 feet in length. Matches last from 2-10 minutes with points awarded based on objectives completed.
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
              <h2 className="text-2xl font-bold text-card-foreground">Scoring & Elimination</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Players are eliminated when marked by a paintball that breaks and leaves a mark the size of a quarter or larger. 
                Eliminated players must immediately leave the field with their marker raised. Arguing or wiping marks results 
                in penalties.
              </p>
              <p>
                In tournament play, points are awarded for eliminating opponents (1 point each), hanging the flag or pressing 
                the buzzer (bonus points), and having players alive at the end of the match. The team with the most points after 
                a set number of matches wins.
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
              <h2 className="text-2xl font-bold text-card-foreground">Game Flow</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Matches begin with both teams at their starting stations. At the whistle, players rush to secure bunkers and 
                establish firing lanes. Communication and teamwork are essential as teams coordinate movements and cover each other.
              </p>
              <p>
                Professional matches are fast-paced, often ending in under 3 minutes. Players must balance aggressive pushes 
                with tactical positioning, managing paint supplies while maintaining pressure on opponents.
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
              <h2 className="text-2xl font-bold text-card-foreground">Player Positions</h2>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-card-foreground">Front Player</h4>
                <p className="text-sm text-muted-foreground">
                  Aggressive players who push forward quickly, taking front bunkers and applying pressure on opponents. 
                  Requires speed and bold decision-making.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Mid Player</h4>
                <p className="text-sm text-muted-foreground">
                  Versatile players who control the center field, supporting both front and back players. Must read the 
                  game and adapt positioning.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Back Player</h4>
                <p className="text-sm text-muted-foreground">
                  Provide covering fire from rear bunkers, communicate enemy positions, and control lanes. Requires accuracy 
                  and tactical awareness.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Insert Player</h4>
                <p className="text-sm text-muted-foreground">
                  Specialized role in 5-man formats, reads the field and inserts into gaps created by eliminations.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
