import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function WinterOlympicsPage() {
  const winterSports = [
    { name: 'Alpine Skiing', events: 'Downhill, Slalom, Giant Slalom, Super-G, Combined' },
    { name: 'Cross-Country Skiing', events: 'Sprint, Distance races from 10km to 50km, Relays' },
    { name: 'Ski Jumping', events: 'Individual and Team events from Normal and Large hills' },
    { name: 'Nordic Combined', events: 'Ski Jumping + Cross-Country Skiing' },
    { name: 'Freestyle Skiing', events: 'Moguls, Aerials, Ski Cross, Halfpipe, Slopestyle, Big Air' },
    { name: 'Snowboarding', events: 'Halfpipe, Slopestyle, Big Air, Parallel Giant Slalom, Snowboard Cross' },
    { name: 'Biathlon', events: 'Cross-country skiing with rifle shooting at stations' },
    { name: 'Figure Skating', events: 'Men\'s, Women\'s, Pairs, Ice Dance, Team Event' },
    { name: 'Speed Skating', events: '500m to 10,000m on 400m oval track' },
    { name: 'Short Track Speed Skating', events: 'Fast-paced races on 111m indoor track' },
    { name: 'Ice Hockey', events: 'Men\'s and Women\'s tournaments' },
    { name: 'Curling', events: 'Men\'s, Women\'s, and Mixed Doubles' },
    { name: 'Bobsleigh', events: 'Two-man, Four-man, and Women\'s monobob' },
    { name: 'Skeleton', events: 'Head-first single-person sled racing' },
    { name: 'Luge', events: 'Singles, Doubles, and Team Relay on feet-first sleds' }
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
              Winter Olympics
            </h1>
            <p className="text-lg text-muted-foreground">
              Elite winter sports on snow and ice from around the globe
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
                The Winter Olympic Games showcase the world's premier winter sports athletes competing across 15 disciplines 
                in over 100 events. First held in Chamonix, France in 1924, the Winter Games have grown into a spectacular 
                celebration of snow and ice sports.
              </p>
              <p>
                Held every four years (offset by two years from the Summer Olympics), the Winter Games typically last 16-18 days 
                and attract thousands of athletes from over 90 countries. Events require specialized venues including ski resorts, 
                ice rinks, and sliding tracks.
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
              <h2 className="text-2xl font-bold text-card-foreground">Sport Categories</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Skiing Sports:</strong> Include alpine (downhill racing), nordic 
                (cross-country and jumping), and freestyle disciplines. Athletes compete against the clock or in head-to-head formats.
              </p>
              <p>
                <strong className="text-card-foreground">Skating Sports:</strong> Figure skating emphasizes artistic expression, 
                while speed skating and short track focus on pure speed. Ice hockey combines teamwork with skating skill.
              </p>
              <p>
                <strong className="text-card-foreground">Sliding Sports:</strong> Bobsleigh, skeleton, and luge all involve racing 
                down an ice track at speeds exceeding 80 mph, requiring precision and nerves of steel.
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
              <h2 className="text-2xl font-bold text-card-foreground">All Winter Olympic Sports</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {winterSports.map((sport, index) => (
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Extreme Conditions</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Winter Olympic athletes train and compete in some of the most challenging conditions in sports. Sub-zero 
                temperatures, high winds, and variable snow conditions all impact performance. Events can be postponed due 
                to weather, making mental preparation as important as physical conditioning.
              </p>
              <p>
                Equipment technology plays a crucial role, with aerodynamic suits, specialized skis and boards, and precision-engineered 
                sleds all contributing to fractions of seconds that separate medal winners from the rest of the field.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
