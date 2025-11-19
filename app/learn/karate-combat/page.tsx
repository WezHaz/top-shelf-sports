import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function KarateCombatPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 text-primary hover:text-primary/80">
            <Link href="/learn">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Sports
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Karate Combat
            </h1>
            <p className="text-lg text-muted-foreground">
              Modern full-contact karate in a futuristic format
            </p>
          </div>

          {/* Game Setup */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Competition Setup</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Karate Combat features a unique fighting pit—a sunken, circular arena without ropes or cages, 
                approximately 40 feet in diameter. The continuous action format with no corners forces fighters 
                to remain engaged at all times.
              </p>
              <p>
                Fights consist of three 2-minute rounds for regular bouts, with championship fights featuring five rounds. 
                The shorter, more intense rounds emphasize explosive action and technical karate striking.
              </p>
              <p>
                Fighters compete barefoot wearing gi pants and hand wraps with open-finger gloves. The format 
                combines traditional karate techniques with modern full-contact striking rules, creating a unique 
                blend of martial arts competition.
              </p>
            </div>
          </Card>

          {/* Scoring */}
          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Scoring & Victory Conditions</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Knockout (KO)</span>
                <span className="text-secondary">Instant Victory</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fighter is knocked unconscious or unable to continue. Clean, powerful techniques result in spectacular knockouts.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Technical Knockout (TKO)</span>
                <span className="text-secondary">Instant Victory</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Referee stops the fight when a fighter can't defend themselves or accumulates too much damage. 
                Medical stoppage also results in TKO.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Judges' Decision</span>
                <span className="text-secondary">Points System</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Five judges score based on effective striking, damage, aggression, and technique. Unique scoring 
                emphasizes traditional karate techniques executed with power and precision.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Fan Vote</span>
                <span className="text-secondary">Interactive Element</span>
              </div>
              <p className="text-sm text-muted-foreground">
                In extremely close decisions, live audience and streaming viewers can vote to determine the winner, 
                adding an interactive entertainment element.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Scoring Criteria</span>
                <span className="text-secondary">Quality over Quantity</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Traditional karate techniques (spinning kicks, jumping strikes, precision counter-attacks) score 
                higher than simple punches. Clean, technical striking is rewarded over volume.
              </p>
            </div>
          </Card>

          {/* Play Action */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Fight Rules & Action</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Allowed Techniques:</strong> Punches, all kicks (including 
                spinning and jumping techniques), knees (standing only), and all traditional karate strikes. 
                Emphasis on clean, technical execution.
              </p>
              <p>
                <strong className="text-card-foreground">Limited Clinch:</strong> Brief clinching is allowed for 
                knee strikes, but extended clinch work or grappling is not permitted. Fighters must break and 
                return to striking range. No takedowns or ground fighting.
              </p>
              <p>
                <strong className="text-card-foreground">Illegal Moves:</strong> Elbows, headbutts, groin strikes, 
                strikes to back of head, extended clinch work, takedowns, and ground fighting. Focus remains on 
                standing karate techniques.
              </p>
              <p>
                <strong className="text-card-foreground">Pit Dynamics:</strong> The circular pit with no corners 
                prevents fighters from stalling or avoiding engagement. Constant movement and strategic positioning 
                are essential. The pit edges are slightly raised, creating a natural boundary.
              </p>
              <p>
                <strong className="text-card-foreground">Traditional Elements:</strong> Fighters bow before and after 
                the bout, honoring karate traditions. Respect and sportsmanship are emphasized alongside the 
                competitive intensity.
              </p>
            </div>
          </Card>

          {/* Positions */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Karate Techniques & Styles</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Hand Techniques</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Straight Punches (Tsuki)</h4>
                    <p className="text-sm text-muted-foreground">
                      Traditional straight punches using hip rotation and full body mechanics. Gyaku-zuki (reverse punch) 
                      is the most powerful. Emphasizes speed and precision over wild swings.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Knife Hand & Ridge Hand</h4>
                    <p className="text-sm text-muted-foreground">
                      Open-hand strikes using the edge of the hand. Shuto (knife hand) targets neck and collar bone. 
                      Highly technical strikes that score well when landed clean.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Backfist (Uraken)</h4>
                    <p className="text-sm text-muted-foreground">
                      Whipping strike using the back of the fist. Fast, surprising technique often used in combinations. 
                      Horizontal and vertical variations.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Kicking Techniques</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Front Kick (Mae Geri)</h4>
                    <p className="text-sm text-muted-foreground">
                      Linear thrust kick using the ball of the foot. Targets midsection and head. Fundamental technique 
                      that sets up other strikes and creates distance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Roundhouse Kick (Mawashi Geri)</h4>
                    <p className="text-sm text-muted-foreground">
                      Circular kick using the top of the foot or shin. Most versatile kick in karate. Targets legs, 
                      body, and head. High-level fighters chain multiple roundhouses in combinations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Side Kick (Yoko Geri)</h4>
                    <p className="text-sm text-muted-foreground">
                      Powerful thrust using the edge of the foot. Generates tremendous stopping power. Excellent 
                      for maintaining distance and countering aggressive opponents.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Spinning & Jumping Kicks</h4>
                    <p className="text-sm text-muted-foreground">
                      Spectacular techniques including spinning back kicks, tornado kicks, and flying knees. 
                      High-risk, high-reward moves that score exceptionally well and can end fights instantly.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Fighting Styles & Strategies</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Counter Fighter (Karate Style)</h4>
                    <p className="text-sm text-muted-foreground">
                      Patient, defensive stance waiting for opponent's mistake. Uses footwork to evade then counters 
                      with precision strikes. Traditional karate-ka philosophy of "one strike, one kill."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Aggressive Point Fighter</h4>
                    <p className="text-sm text-muted-foreground">
                      High-volume striker who uses combinations and continuous pressure. Mixes punches and kicks 
                      to overwhelm opponents. Requires excellent cardio and technique.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Knockout Artist</h4>
                    <p className="text-sm text-muted-foreground">
                      Patient striker looking for the one perfect technique. Uses feints and setups to create 
                      knockout opportunities. Often utilizes spinning techniques and head kicks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Distance Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Critical skill in the circular pit. Fighters use footwork to control range, cut angles, 
                      and avoid being cornered. Master level fighters make the pit feel larger through movement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
