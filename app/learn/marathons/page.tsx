import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function MarathonsPage() {
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
              Marathon Running
            </h1>
            <p className="text-lg text-muted-foreground">
              26.2 miles of determination and endurance
            </p>
          </div>

          {/* Sport Overview */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">The Marathon Distance</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The marathon is a long-distance running race covering exactly 26.2 miles (42.195 kilometers). 
                Originating from the legend of Pheidippides running from Marathon to Athens, the modern marathon 
                distance was standardized at the 1908 London Olympics.
              </p>
              <p>
                Marathons range from elite professional races with prize money and Olympic qualification to mass 
                participation events where thousands of runners pursue personal goals. Major marathons include the 
                Boston Marathon, New York City Marathon, Chicago Marathon, London Marathon, Berlin Marathon, and Tokyo 
                Marathon (the World Marathon Majors).
              </p>
              <p>
                Completing a marathon requires months of training, building endurance, managing nutrition, and 
                developing mental toughness. The distance pushes runners to their physical and psychological limits, 
                making the finish line an achievement celebrated by elite athletes and first-timers alike.
              </p>
            </div>
          </Card>

          {/* Race Structure */}
          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Race Day Elements</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Starting Corrals</h3>
                <p className="text-sm text-muted-foreground">
                  Large marathons use wave starts with corrals organized by projected finish time. Elite runners start 
                  first, followed by waves of runners every few minutes. Chip timing ensures accurate individual times 
                  regardless of crossing the start line position.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Course Features</h3>
                <p className="text-sm text-muted-foreground">
                  Courses vary from flat and fast (Berlin, Chicago) to hilly and challenging (Boston, San Francisco). 
                  Point-to-point courses run between two locations while loop courses return to the start area. Certified 
                  courses are precisely measured for record eligibility.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Aid Stations</h3>
                <p className="text-sm text-muted-foreground">
                  Water and sports drink stations appear every 1-2 miles. Runners grab cups on the move, often squeezing 
                  or folding them to drink while running. Some races provide gels, medical support, and portable toilets. 
                  Proper hydration strategy is crucial.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Split Times</h3>
                <p className="text-sm text-muted-foreground">
                  Races display timing clocks at mile markers and halfway points. Runners use splits to monitor pacing 
                  and adjust strategy. "Negative splitting" (running the second half faster) is an effective but 
                  difficult strategy requiring restraint early on.
                </p>
              </div>

              <div className="pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">The Finish Line</h3>
                <p className="text-sm text-muted-foreground">
                  Runners receive finisher medals upon crossing. Chip times calculate gun time (from race start) and 
                  net time (from crossing start line). Results include age-group placements. Recovery areas provide 
                  water, snacks, mylar blankets, and medical attention.
                </p>
              </div>
            </div>
          </Card>

          {/* Training & Preparation */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Training & Preparation</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Training Plans:</strong> Most runners follow 12-20 week plans 
                progressively building weekly mileage from a base. Plans include easy runs, long runs, tempo runs, 
                interval workouts, and rest days. Peak mileage often reaches 40-70 miles per week before tapering.
              </p>
              <p>
                <strong className="text-card-foreground">The Long Run:</strong> Weekly long runs build endurance by 
                gradually increasing distance up to 20-22 miles. These teach the body to burn fat for fuel, build mental 
                toughness, and simulate race-day depletion. Recovery after long runs is essential to prevent injury.
              </p>
              <p>
                <strong className="text-card-foreground">Cross-Training:</strong> Swimming, cycling, strength training, 
                and yoga complement running by building fitness without impact stress. Cross-training maintains 
                cardiovascular fitness during recovery weeks and helps prevent overuse injuries.
              </p>
              <div className="rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Nutrition Strategies</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-card-foreground">Carb Loading:</strong> Increase carbs 2-3 days pre-race to maximize glycogen stores</li>
                  <li><strong className="text-card-foreground">Race Fuel:</strong> Consume 30-60g carbs per hour via gels, chews, or sports drinks</li>
                  <li><strong className="text-card-foreground">Hydration:</strong> Replace fluids lost through sweat, typically 16-32oz per hour</li>
                  <li><strong className="text-card-foreground">Recovery:</strong> Protein and carbs within 30 minutes post-race aid muscle repair</li>
                </ul>
              </div>
              <p>
                <strong className="text-card-foreground">Injury Prevention:</strong> Running creates repetitive impact 
                force. Proper shoes, gradual mileage increases (10% rule), strength training, stretching, foam rolling, 
                and listening to pain signals help prevent common injuries like runner's knee, shin splints, and stress 
                fractures.
              </p>
            </div>
          </Card>

          {/* Race Day Strategy */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Racing Strategy</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Pacing</h3>
                <p className="text-sm text-muted-foreground">
                  Maintaining consistent pace is crucial for marathon success. Going out too fast depletes glycogen 
                  stores and leads to "hitting the wall" around mile 20. Experienced runners use pace calculators to 
                  set realistic goal times based on training and run even or negative splits.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">The Wall</h3>
                <p className="text-sm text-muted-foreground">
                  Around miles 18-22, many runners experience sudden fatigue as glycogen depletes and the body shifts 
                  to fat burning. Proper pacing, nutrition, and mental preparation help push through. Elite runners train 
                  their bodies to burn fat more efficiently, delaying or avoiding the wall.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Mental Strategies</h3>
                <p className="text-sm text-muted-foreground">
                  Breaking the race into smaller segments makes 26.2 miles manageable. Positive self-talk, mantras, 
                  focusing on form, and drawing energy from spectators help overcome difficult moments. The marathon 
                  tests mental toughness as much as physical fitness.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Elite Competition</h3>
                <p className="text-sm text-muted-foreground">
                  Elite marathoners run sub-2:10 (men) and sub-2:25 (women) times. Races feature pack running with late 
                  surges, strategic positioning, and pacers. World records require perfect conditions, course, and 
                  support. The sub-2-hour barrier was broken in a controlled setting but not in official competition.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Post-Race Recovery</h4>
                <p className="text-sm text-muted-foreground">
                  Marathons cause significant muscle damage and inflammation. Recovery includes ice baths, gentle 
                  walking, compression gear, massage, and proper nutrition. Most runners take 2-4 weeks before resuming 
                  normal training and several months before racing another marathon to allow full recovery.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
