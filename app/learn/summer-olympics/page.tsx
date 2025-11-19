import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SummerOlympicsPage() {
  const olympicSports = [
    { name: 'Athletics (Track & Field)', events: '48 events including sprints, distance, hurdles, relays, jumps, throws' },
    { name: 'Swimming', events: '35 events from 50m freestyle to 10km marathon swim' },
    { name: 'Gymnastics', events: 'Artistic, Rhythmic, and Trampoline disciplines' },
    { name: 'Basketball', events: 'Men\'s and Women\'s 5x5 and 3x3 tournaments' },
    { name: 'Soccer/Football', events: 'Men\'s and Women\'s tournaments' },
    { name: 'Volleyball', events: 'Indoor and Beach Volleyball' },
    { name: 'Tennis', events: 'Singles, Doubles, and Mixed Doubles' },
    { name: 'Boxing', events: '13 weight classes across men and women' },
    { name: 'Cycling', events: 'Road, Track, Mountain Bike, and BMX' },
    { name: 'Rowing', events: '14 boat classes including singles, doubles, fours, and eights' },
    { name: 'Sailing', events: '10 classes of boats and boards' },
    { name: 'Diving', events: 'Springboard and Platform in various formats' },
    { name: 'Water Polo', events: 'Men\'s and Women\'s tournaments' },
    { name: 'Fencing', events: 'Foil, Épée, and Sabre in individual and team events' },
    { name: 'Judo', events: '15 weight classes across men and women' },
    { name: 'Wrestling', events: 'Freestyle and Greco-Roman styles' },
    { name: 'Weightlifting', events: '10 weight classes' },
    { name: 'Archery', events: 'Individual and Team competitions' },
    { name: 'Shooting', events: 'Rifle, Pistol, and Shotgun disciplines' },
    { name: 'Equestrian', events: 'Dressage, Eventing, and Jumping' },
    { name: 'Canoe/Kayak', events: 'Sprint and Slalom disciplines' },
    { name: 'Triathlon', events: 'Individual and Mixed Team Relay' },
    { name: 'Table Tennis', events: 'Singles and Team competitions' },
    { name: 'Badminton', events: 'Singles, Doubles, and Mixed Doubles' },
    { name: 'Taekwondo', events: '8 weight classes' },
    { name: 'Hockey (Field)', events: 'Men\'s and Women\'s tournaments' },
    { name: 'Handball', events: 'Men\'s and Women\'s tournaments' },
    { name: 'Modern Pentathlon', events: 'Fencing, Swimming, Equestrian, Laser Run' },
    { name: 'Skateboarding', events: 'Park and Street disciplines' },
    { name: 'Sport Climbing', events: 'Boulder, Lead, and Speed climbing' },
    { name: 'Surfing', events: 'Shortboard competition' },
    { name: 'Breaking (Breakdancing)', events: 'B-Boys and B-Girls battles' },
    { name: 'Golf', events: 'Men\'s and Women\'s stroke play' },
    { name: 'Rugby Sevens', events: 'Men\'s and Women\'s 7-a-side tournaments' }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-5xl">
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
              Summer Olympics
            </h1>
            <p className="text-lg text-muted-foreground">
              The world's greatest sporting celebration featuring 32+ disciplines
            </p>
          </div>

          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Overview</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Summer Olympic Games are held every four years, bringing together over 10,000 athletes from 200+ 
                countries to compete in more than 300 events across 32+ sports. First held in ancient Greece and 
                revived in 1896, the Olympics represent the pinnacle of athletic achievement.
              </p>
              <p>
                Athletes compete for Gold, Silver, and Bronze medals in their respective events. Countries accumulate 
                medals throughout the games, with the final medal count often viewed as a measure of sporting excellence.
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
              <h2 className="text-2xl font-bold text-card-foreground">Competition Format</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Most Olympic sports follow a qualification system where athletes must meet certain standards or earn 
                spots through continental and world championships. The games typically last 16 days with opening and 
                closing ceremonies.
              </p>
              <p>
                Events range from individual competitions (athletics, swimming, gymnastics) to team sports (basketball, 
                soccer, volleyball). Some sports like gymnastics and athletics have multiple disciplines within them.
              </p>
            </div>
          </Card>

          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">All Summer Olympic Sports</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {olympicSports.map((sport, index) => (
                <div key={index} className="rounded-lg border border-border/30 bg-background/50 p-4">
                  <h3 className="mb-2 font-semibold text-card-foreground">{sport.name}</h3>
                  <p className="text-sm text-muted-foreground">{sport.events}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Olympic Values</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Olympics are built on three core values: <strong className="text-card-foreground">Excellence</strong> 
                (doing your best), <strong className="text-card-foreground">Friendship</strong> (building a peaceful world 
                through sport), and <strong className="text-card-foreground">Respect</strong> (for yourself, others, and 
                the rules).
              </p>
              <p>
                The Olympic motto "Citius, Altius, Fortius - Communiter" means "Faster, Higher, Stronger - Together," 
                emphasizing both individual achievement and collective unity.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
