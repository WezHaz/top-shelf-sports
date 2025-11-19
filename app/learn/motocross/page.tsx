import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function MotocrossPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6 text-primary hover:text-primary/80">
            <Link href="/learn">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Sports
            </Link>
          </Button>

          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Motocross
            </h1>
            <p className="text-lg text-muted-foreground">
              High-flying action on dirt tracks
            </p>
          </div>

          {/* Sport Overview */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">What is Motocross?</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Motocross is an off-road motorcycle racing sport held on enclosed dirt circuits featuring jumps, 
                whoops, berms, and challenging terrain. Riders navigate technical tracks at high speeds, launching 
                their bikes through the air while battling for position.
              </p>
              <p>
                Racing is divided into classes based on engine displacement (250cc, 450cc) and rider experience 
                (Amateur, Pro). Professional series include AMA Supercross (indoor stadiums), AMA Motocross (outdoor 
                nationals), and the Motocross des Nations (international team competition).
              </p>
              <p>
                The sport demands exceptional bike control, physical fitness, mental toughness, and split-second 
                decision-making. Riders must master throttle control, body positioning, line selection, and jumping 
                techniques while maintaining race pace for 30+ minute motos.
              </p>
            </div>
          </Card>

          {/* Race Format */}
          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Race Format & Structure</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Gate Start</h3>
                <p className="text-sm text-muted-foreground">
                  Races begin with riders lined up behind a metal gate that drops after a randomized 30-second board 
                  sequence. The holeshot (first rider to the first turn) provides crucial early position advantage. 
                  Starts are critical for race outcomes.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Moto Format</h3>
                <p className="text-sm text-muted-foreground">
                  Outdoor motocross features two motos (races) per class. Each moto runs 30 minutes plus two laps. 
                  Overall finishing position is determined by combined scores from both motos (1-1 beats 2-2, etc.). 
                  Supercross uses single main events.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Track Features</h3>
                <p className="text-sm text-muted-foreground">
                  Tracks include table tops, doubles, triples, step-ups, rhythm sections, whoops (stutter bumps), 
                  berms (banked turns), and off-camber turns. Outdoor tracks span 1.5-2 miles, while supercross uses 
                  tighter stadium layouts with sharper obstacles.
                </p>
              </div>

              <div className="pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Qualifying</h3>
                <p className="text-sm text-muted-foreground">
                  Practice sessions determine gate position for the main events. In supercross, qualifying leads to 
                  heat races and semi-finals before the main event. Faster qualifiers get preferred inside gate picks 
                  with shorter runs to the first turn.
                </p>
              </div>
            </div>
          </Card>

          {/* Skills & Techniques */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Essential Techniques</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Body Position:</strong> Riders use active body positioning 
                to control the bike through corners, whoops, and jumps. Standing on pegs allows better weight 
                transfer and shock absorption. "Attack position" keeps elbows up, knees gripping, and weight centered.
              </p>
              <p>
                <strong className="text-card-foreground">Jumping:</strong> Proper jump technique involves compressing 
                the suspension on the face, standing and accelerating through the lip, maintaining level flight, and 
                preparing the landing gear. Scrubbing removes height for faster lap times on certain obstacles.
              </p>
              <p>
                <strong className="text-card-foreground">Cornering:</strong> Fast cornering requires proper line 
                selection, braking before the turn, leaning the bike while keeping body upright, weighting the outside 
                peg, and accelerating out of berms. Ruts provide traction but limit line choices.
              </p>
              <p>
                <strong className="text-card-foreground">Whoops:</strong> Navigating whoops (series of small bumps) 
                can be done by skimming (light throttle, floating over tops), jumping through (doubling or tripling), 
                or blitzing (full throttle, using momentum). Technique depends on bike setup and rider skill.
              </p>
              <div className="rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Passing & Race Craft</h4>
                <p className="text-sm text-muted-foreground">
                  Passing requires studying opponents' lines, capitalizing on mistakes, and using alternate lines 
                  through corners or rhythm sections. Block passing (aggressive) and over-under moves (conservative) 
                  are common tactics. Mental toughness and fitness become crucial in late-race situations.
                </p>
              </div>
            </div>
          </Card>

          {/* Equipment & Classes */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Classes & Equipment</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Bike Classes</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-card-foreground">250 Class:</strong> Four-stroke 250cc or two-stroke 125cc 
                  bikes. Lighter, more nimble machines requiring more clutch work and RPM management. Often considered 
                  the development class for younger professionals.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong className="text-card-foreground">450 Class:</strong> Four-stroke 450cc bikes with more power 
                  and torque. Heavier but faster on straights. Premier class featuring the sport's top athletes. 
                  Requires precise throttle control and experience.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Safety Gear</h3>
                <p className="text-sm text-muted-foreground">
                  Riders wear full protective equipment including DOT-approved helmets with goggles, chest protectors, 
                  knee braces or guards, elbow guards, gloves, boots with ankle support, and riding jerseys/pants. 
                  Neck braces help prevent serious injuries during crashes.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Bike Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Professional teams dial in suspension settings, gearing, jetting/mapping, tire selection, and 
                  ergonomics for each track and rider preference. Setup dramatically affects bike handling, jumping 
                  characteristics, and rider comfort over a 30-minute moto.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Physical Demands</h4>
                <p className="text-sm text-muted-foreground">
                  Motocross is one of the most physically demanding motorsports. Riders endure intense cardio and 
                  strength demands while managing 220+ pound bikes through rough terrain. Heart rates reach 180+ BPM 
                  for entire motos. Professional training includes cycling, running, gym work, and practice riding.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
