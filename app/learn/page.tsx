import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Trophy, Dribbble, ReplyAll as Volleyball, Circle, Target, Hexagon, Goal, Sparkles, Music } from 'lucide-react'

const sports = [
  {
    name: 'American Football',
    slug: 'football',
    icon: Trophy,
    description: 'Master the gridiron with in-depth knowledge of NFL rules, positions, and strategies.',
    color: 'primary'
  },
  {
    name: 'Baseball',
    slug: 'baseball',
    icon: Circle,
    description: 'Learn America\'s pastime from pitching mechanics to advanced statistics.',
    color: 'secondary'
  },
  {
    name: 'Basketball',
    slug: 'basketball',
    icon: Dribbble,
    description: 'Understand the fast-paced game of hoops from fundamentals to pro-level tactics.',
    color: 'accent'
  },
  {
    name: 'Hockey',
    slug: 'hockey',
    icon: Hexagon,
    description: 'Dive into the intensity of ice hockey with rules, positions, and power plays.',
    color: 'primary'
  },
  {
    name: 'Soccer',
    slug: 'soccer',
    icon: Goal,
    description: 'Explore the world\'s most popular sport with comprehensive guides and tactics.',
    color: 'secondary'
  },
  {
    name: 'Rugby',
    slug: 'rugby',
    icon: Volleyball,
    description: 'Decode rugby union and league with detailed breakdowns of scrums and rucks.',
    color: 'accent'
  },
  {
    name: 'Cricket',
    slug: 'cricket',
    icon: Target,
    description: 'Unravel cricket\'s complexities from Test matches to T20 formats.',
    color: 'primary'
  },
  {
    name: 'Golf',
    slug: 'golf',
    icon: Target,
    description: 'Perfect your swing and course management with comprehensive golf fundamentals.',
    color: 'secondary'
  },
  {
    name: 'Disc Golf',
    slug: 'disc-golf',
    icon: Circle,
    description: 'Learn the growing sport of disc golf with throwing techniques and course strategy.',
    color: 'accent'
  },
  {
    name: 'Lacrosse',
    slug: 'lacrosse',
    icon: Hexagon,
    description: 'Master the fastest game on two feet with stick skills and field awareness.',
    color: 'primary'
  },
  {
    name: 'UFC / MMA',
    slug: 'ufc',
    icon: Trophy,
    description: 'Understand mixed martial arts with striking, grappling, and fight strategies.',
    color: 'secondary'
  },
  {
    name: 'Karate Combat',
    slug: 'karate-combat',
    icon: Trophy,
    description: 'Explore modern karate competition with traditional techniques in a combat setting.',
    color: 'accent'
  },
  {
    name: 'Summer Olympics',
    slug: 'summer-olympics',
    icon: Trophy,
    description: 'Discover all 32+ sports featured in the Summer Olympic Games from track to swimming.',
    color: 'primary'
  },
  {
    name: 'Winter Olympics',
    slug: 'winter-olympics',
    icon: Hexagon,
    description: 'Learn about skiing, skating, and all winter sports in the Olympic program.',
    color: 'secondary'
  },
  {
    name: '3 Gun',
    slug: '3-gun',
    icon: Target,
    description: 'Master competitive shooting with rifle, pistol, and shotgun stages.',
    color: 'accent'
  },
  {
    name: 'Paintball',
    slug: 'paintball',
    icon: Circle,
    description: 'Tactical team-based combat sport with markers and paint-filled projectiles.',
    color: 'primary'
  },
  {
    name: 'Airsoft',
    slug: 'airsoft',
    icon: Target,
    description: 'Military simulation sport using replica firearms and plastic BBs.',
    color: 'secondary'
  },
  {
    name: 'NASCAR',
    slug: 'nascar',
    icon: Circle,
    description: 'America\'s premier stock car racing series with high-speed oval competition.',
    color: 'accent'
  },
  {
    name: 'Formula 1',
    slug: 'f1',
    icon: Trophy,
    description: 'The pinnacle of motorsport featuring cutting-edge technology and global circuits.',
    color: 'primary'
  },
  {
    name: 'Drone Racing',
    slug: 'drone-racing',
    icon: Target,
    description: 'High-speed FPV racing through technical courses with custom-built drones.',
    color: 'secondary'
  },
  {
    name: 'Drum Corps',
    slug: 'drum-corps',
    icon: Trophy,
    description: 'Elite marching music ensembles combining brass, percussion, and visual performance.',
    color: 'accent'
  },
  {
    name: 'Puppy Bowl',
    slug: 'puppy-bowl',
    icon: Trophy,
    description: 'The cutest competition featuring adorable puppies playing football-inspired games.',
    color: 'primary'
  },
  {
    name: 'CrossFit Games',
    slug: 'crossfit-games',
    icon: Trophy,
    description: 'Test your fitness across varied functional movements and unknown challenges.',
    color: 'secondary'
  },
  {
    name: 'Street League Skateboarding',
    slug: 'skateboarding',
    icon: Circle,
    description: 'Professional skateboarding competition featuring street-style tricks and courses.',
    color: 'accent'
  },
  {
    name: 'ESports',
    slug: 'esports',
    icon: Trophy,
    description: 'Competitive video gaming across multiple titles and genres worldwide.',
    color: 'primary'
  },
  {
    name: 'Boxing',
    slug: 'boxing',
    icon: Trophy,
    description: 'The sweet science of punching with technique, strategy, and conditioning.',
    color: 'secondary'
  },
  {
    name: 'Wrestling',
    slug: 'wrestling',
    icon: Trophy,
    description: 'Combat sport focused on grappling techniques, takedowns, and pinning.',
    color: 'accent'
  },
  {
    name: 'Cheerleading',
    slug: 'cheerleading',
    icon: Sparkles,
    description: 'High-energy performance combining stunts, tumbling, dance, and synchronized cheers.',
    color: 'primary'
  },
  {
    name: 'Dance',
    slug: 'dance',
    icon: Music,
    description: 'Competitive dance across multiple styles from ballet to hip-hop and contemporary.',
    color: 'secondary'
  },
  {
    name: 'Motocross',
    slug: 'motocross',
    icon: Circle,
    description: 'Off-road motorcycle racing on closed circuits with jumps and challenging terrain.',
    color: 'accent'
  },
  {
    name: 'Cycling',
    slug: 'cycling',
    icon: Circle,
    description: 'Road, track, and mountain bike racing featuring endurance and tactical competition.',
    color: 'primary'
  },
  {
    name: 'Marathons',
    slug: 'marathons',
    icon: Target,
    description: 'Long-distance running events covering 26.2 miles of determination and endurance.',
    color: 'secondary'
  }
]

export default function LearnSportsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-primary">Knowledge is Power</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
              <span className="text-foreground">Learn </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Sports
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground text-balance">
              From beginner fundamentals to advanced strategies. Master the rules, positions, 
              and tactics of the world's most popular sports.
            </p>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sports.map((sport) => {
              const Icon = sport.icon
              return (
                <Link key={sport.slug} href={`/learn/${sport.slug}`}>
                  <Card className={`group h-full border-${sport.color}/20 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-${sport.color}/50 hover:shadow-lg hover:shadow-${sport.color}/20`}>
                    <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-${sport.color}/10 text-${sport.color} transition-transform group-hover:scale-110`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-card-foreground">
                      {sport.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {sport.description}
                    </p>
                    <div className={`mt-4 text-sm font-medium text-${sport.color}`}>
                      Start Learning →
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground text-balance">
            Ready to Become an Expert?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground text-balance">
            Select a sport above to dive deep into comprehensive learning materials, 
            interactive guides, and expert insights.
          </p>
        </div>
      </section>
    </div>
  )
}
