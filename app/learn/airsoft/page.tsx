import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AirsoftPage() {
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
              Airsoft
            </h1>
            <p className="text-lg text-muted-foreground">
              Military simulation sport with realistic replica firearms
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
                Airsoft uses replica firearms that shoot 6mm plastic BBs powered by electric, gas, or spring mechanisms. 
                The sport emphasizes military simulation with realistic tactics, loadouts, and scenarios played on diverse 
                terrain from CQB facilities to large outdoor fields.
              </p>
              <p>
                Games range from small 4v4 skirmishes to massive milsim (military simulation) events with 100+ players per side. 
                Matches can last from 10 minutes for quick objectives to full-day operations with respawn systems and mission chains.
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
              <h2 className="text-2xl font-bold text-card-foreground">Hit Calling & Scoring</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Airsoft relies on the honor system - players must call themselves out when hit by a BB. Hits on gear, gun, or 
                body all count. After calling "hit," players raise their weapon and proceed to a designated respawn area or dead zone.
              </p>
              <p>
                Scoring varies by game type: Team Deathmatch counts eliminations, Domination awards points for holding objectives, 
                Search and Destroy requires completing or defending objectives, and milsim events have complex mission-based scoring.
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
              <h2 className="text-2xl font-bold text-card-foreground">Tactical Gameplay</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Unlike paintball, airsoft emphasizes stealth and realistic military tactics. Players use cover and concealment 
                differently, communicate with military-style callouts, and employ authentic squad tactics.
              </p>
              <p>
                The quiet nature of many airsoft guns (especially suppressed replicas) allows for ambush tactics and infiltration 
                plays. Teams often use formations, hand signals, and role-specific loadouts to accomplish objectives.
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
              <h2 className="text-2xl font-bold text-card-foreground">Player Roles</h2>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-card-foreground">Rifleman</h4>
                <p className="text-sm text-muted-foreground">
                  Standard infantry with assault rifle or carbine. Versatile role forming the core of any team with balanced 
                  firepower and mobility.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Support Gunner</h4>
                <p className="text-sm text-muted-foreground">
                  Carries light machine gun with high-capacity magazine to provide suppressive fire and control lanes. 
                  Heavier loadout but devastating firepower.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Designated Marksman</h4>
                <p className="text-sm text-muted-foreground">
                  Long-range precision with scoped rifle. Provides overwatch, intelligence, and eliminates high-value targets. 
                  Requires patience and marksmanship.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Breacher</h4>
                <p className="text-sm text-muted-foreground">
                  CQB specialist with SMG or short rifle, leads room clearing and close-quarters assaults. Fast and aggressive playstyle.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">Medic</h4>
                <p className="text-sm text-muted-foreground">
                  In milsim games, can "revive" hit players with bandage simulation. Critical for sustaining attacks and 
                  preventing respawn delays.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
