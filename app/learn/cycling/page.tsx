import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function CyclingPage() {
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
              Competitive Cycling
            </h1>
            <p className="text-lg text-muted-foreground">
              Strategy, endurance, and speed on two wheels
            </p>
          </div>

          {/* Sport Overview */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">About Competitive Cycling</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Competitive cycling encompasses multiple disciplines including road racing, track cycling, mountain 
                biking, cyclocross, and BMX. Each discipline requires specific skills, equipment, and racing strategies, 
                but all share the fundamental challenge of human-powered speed.
              </p>
              <p>
                Road cycling features the most prestigious events including the Tour de France, Giro d'Italia, and 
                Vuelta a España (Grand Tours), plus single-day classics and Olympic competitions. Races can be individual 
                time trials or mass-start road races with teams employing complex tactics.
              </p>
              <p>
                The sport combines raw physical power with tactical intelligence. While individual strength matters, 
                cycling is fundamentally a team sport where domestiques sacrifice themselves for team leaders, drafting 
                reduces energy expenditure by 30%, and race positioning is everything.
              </p>
            </div>
          </Card>

          {/* Cycling Disciplines */}
          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Racing Disciplines</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Road Racing</h3>
                <p className="text-sm text-muted-foreground">
                  Mass-start races on paved roads ranging from criteriums (short circuits) to multi-day stage races. 
                  Features sprints, mountain stages, time trials, and tactical team play. Winners determined by cumulative 
                  time, stage victories, or sprint finishes.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Track Cycling</h3>
                <p className="text-sm text-muted-foreground">
                  Racing on indoor or outdoor velodromes with steeply banked oval tracks. Events include sprints, pursuit, 
                  points races, keirin, omnium, and Madison. Requires explosive power, precise bike handling, and tactical 
                  positioning on fixed-gear bikes.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Mountain Biking</h3>
                <p className="text-sm text-muted-foreground">
                  Off-road racing on natural terrain featuring climbs, descents, technical sections, and obstacles. 
                  Includes cross-country (XC), downhill, enduro, and marathon formats. Demands bike handling skills, 
                  technical line choice, and sustained power output.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Cyclocross</h3>
                <p className="text-sm text-muted-foreground">
                  Fall/winter racing on mixed-terrain circuits featuring barriers, stairs, sand, and mud. Riders 
                  frequently dismount to carry bikes over obstacles. Short, intense races (30-60 minutes) with multiple 
                  laps require explosive power and bike handling.
                </p>
              </div>

              <div className="pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Time Trial</h3>
                <p className="text-sm text-muted-foreground">
                  Individual or team races against the clock with staggered starts. Riders use aerodynamic equipment 
                  and positions to maximize speed. No drafting allowed - pure individual effort and power output 
                  over set distances.
                </p>
              </div>
            </div>
          </Card>

          {/* Race Strategy */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Tactics & Strategy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">The Peloton:</strong> The main group of riders bunched 
                together to share the workload of wind resistance. Riding in the peloton saves 20-40% energy compared 
                to riding solo. Position within the peloton is crucial for safety, conserving energy, and responding 
                to attacks.
              </p>
              <p>
                <strong className="text-card-foreground">Breakaways:</strong> Small groups or solo riders escape the 
                peloton to gain time. Teams must decide whether to chase breaks or let them go. Successful breaks 
                require cooperation between riders and the peloton's miscalculation of threat level.
              </p>
              <p>
                <strong className="text-card-foreground">Team Roles:</strong> Domestiques work for team leaders by 
                controlling pace, chasing breaks, fetching supplies, and providing leadouts. Leaders conserve energy 
                until decisive moments. Team tactics determine race outcomes more than individual strength alone.
              </p>
              <div className="rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Key Race Moments</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-card-foreground">Climbs:</strong> Mountains favor lightweight climbers and create time gaps</li>
                  <li><strong className="text-card-foreground">Sprints:</strong> Flat finishes favor explosive power, leadout trains deliver sprinters</li>
                  <li><strong className="text-card-foreground">Attacks:</strong> Sudden accelerations test responsiveness and create selection</li>
                  <li><strong className="text-card-foreground">Echelons:</strong> Crosswinds split the peloton into diagonal pace lines</li>
                </ul>
              </div>
              <p>
                <strong className="text-card-foreground">Energy Management:</strong> Cyclists must balance when to 
                conserve energy in the draft versus when to expend effort attacking or defending position. Managing 
                glycogen stores, hydration, and pacing over multi-hour races separates winners from the pack.
              </p>
            </div>
          </Card>

          {/* Equipment & Training */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Equipment & Training</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Bike Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Modern racing bikes feature carbon fiber frames, electronic shifting, disc brakes, and aerodynamic 
                  designs. Road bikes weigh around 15 pounds (UCI minimum 6.8kg). Power meters measure output in watts, 
                  allowing precise training and pacing. Tire pressure, gearing, and position are optimized for conditions.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Physical Training</h3>
                <p className="text-sm text-muted-foreground">
                  Professional cyclists train 25-35 hours weekly, building enormous aerobic engines. Training includes 
                  long endurance rides, high-intensity intervals, tempo work, and recovery. VO2 max, FTP (functional 
                  threshold power), and power-to-weight ratios quantify fitness. Weight management is crucial for climbers.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Race Categories</h3>
                <p className="text-sm text-muted-foreground">
                  Amateur racing uses category systems (Cat 5 to Cat 1/Pro in USA) based on ability and results. 
                  Upgrading requires points from race placements. Professional cycling includes Continental, Pro Continental, 
                  and WorldTour teams competing at different levels of international competition.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">The Mental Game</h4>
                <p className="text-sm text-muted-foreground">
                  Cycling demands extreme mental toughness. Riders endure pain, tactical complexity, weather extremes, 
                  and crashes. Reading the race, anticipating moves, and maintaining focus over multi-hour efforts 
                  require experience and psychological resilience as much as physical strength.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
