import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function UFCPage() {
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
              UFC / Mixed Martial Arts
            </h1>
            <p className="text-lg text-muted-foreground">
              The ultimate combat sport testing all martial arts
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
                MMA fights take place in an octagonal cage (30 feet across) with padded canvas floor and chain-link 
                fencing. Fighters compete in weight classes ranging from Strawweight (115 lbs) to Heavyweight (265 lbs).
              </p>
              <p>
                Standard fights are three 5-minute rounds. Championship and main event fights are five 5-minute rounds. 
                There's a 1-minute rest period between rounds where fighters receive coaching and medical attention.
              </p>
              <p>
                Fighters wear 4-ounce fingerless gloves (lighter than boxing), mouth guards, groin protection, and are 
                barefoot. No shoes, headgear, or shirts allowed. Extensive pre-fight medical clearance is required.
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
                Fighter is rendered unconscious or unable to intelligently defend themselves. Referee stops the fight immediately.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Technical Knockout (TKO)</span>
                <span className="text-secondary">Instant Victory</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Referee, doctor, or corner stops the fight due to excessive damage, inability to continue, or lack of defense.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Submission</span>
                <span className="text-secondary">Instant Victory</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fighter taps out (submits) to a choke, joint lock, or other submission hold. Fighter can also verbally submit.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Decision (Unanimous/Split/Majority)</span>
                <span className="text-secondary">Judges' Scorecards</span>
              </div>
              <p className="text-sm text-muted-foreground">
                If fight goes the distance, three judges score each round using the 10-point must system. 
                Winner of round gets 10 points, loser gets 9 or fewer. Dominant rounds can be 10-8 or 10-7.
              </p>

              <div className="flex justify-between border-b border-border/50 pb-3">
                <span className="font-semibold text-card-foreground">Disqualification</span>
                <span className="text-secondary">Rule Violation</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Fighter loses due to illegal strikes, fouls, or refusing to follow referee instructions.
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
              <h2 className="text-2xl font-bold text-card-foreground">Fight Action & Rules</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Legal Techniques:</strong> Punches, kicks, knees, elbows 
                (except 12-to-6 downward elbows), takedowns, submissions, and ground strikes. Fighters can strike 
                standing or on the ground with restrictions.
              </p>
              <p>
                <strong className="text-card-foreground">Illegal Moves:</strong> Eye gouging, biting, hair pulling, 
                groin strikes, headbutts, strikes to back of head/spine, small joint manipulation, and kicking/kneeing 
                a grounded opponent's head (in most jurisdictions).
              </p>
              <p>
                <strong className="text-card-foreground">Clinch Work:</strong> Fighters can tie up against the cage, 
                throw knees and elbows, or work for takedowns. Referee may break stalemates if there's no action.
              </p>
              <p>
                <strong className="text-card-foreground">Ground Fighting:</strong> Dominant positions like mount, back 
                control, and side control score points. Ground and pound (striking from top position) and submission 
                attempts are key tactics.
              </p>
              <p>
                <strong className="text-card-foreground">Stand-Ups:</strong> Referee can stand fighters up from the 
                ground if there's a lack of action or improvement in position. Encourages active fighting.
              </p>
            </div>
          </Card>

          {/* Positions */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Martial Arts Disciplines & Techniques</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Striking Arts</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Boxing</h4>
                    <p className="text-sm text-muted-foreground">
                      Fundamental punching technique, footwork, and head movement. Jabs, crosses, hooks, and uppercuts 
                      form the striking foundation. Elite boxers dominate at distance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Muay Thai / Kickboxing</h4>
                    <p className="text-sm text-muted-foreground">
                      "Art of eight limbs" using fists, elbows, knees, and shins. Devastating clinch work and leg kicks. 
                      Most complete striking system for MMA.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Karate / Taekwondo</h4>
                    <p className="text-sm text-muted-foreground">
                      Traditional martial arts contributing dynamic kicks, timing, and distance management. Produces 
                      knockout artists with unorthodox striking.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Grappling Arts</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Brazilian Jiu-Jitsu (BJJ)</h4>
                    <p className="text-sm text-muted-foreground">
                      Ground fighting and submission system. Leverage and technique over strength. Dominated early UFC 
                      with chokes and joint locks. Essential for any MMA fighter.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Wrestling (Folkstyle/Freestyle/Greco-Roman)</h4>
                    <p className="text-sm text-muted-foreground">
                      Takedowns, top control, and ground positioning. Wrestlers dictate where the fight takes place. 
                      Most successful base in MMA history.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Judo</h4>
                    <p className="text-sm text-muted-foreground">
                      Throwing techniques and clinch work. Transitions seamlessly from standing to ground. Explosive 
                      takedowns in cage clinch situations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Sambo</h4>
                    <p className="text-sm text-muted-foreground">
                      Russian martial art combining judo throws with leg locks. Produces technical grapplers with 
                      aggressive submission hunting.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Fight Strategies & Styles</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Striker / Stand-Up Fighter</h4>
                    <p className="text-sm text-muted-foreground">
                      Keeps the fight standing, uses footwork and takedown defense. Looks for knockout finishes 
                      with powerful strikes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Wrestler / Ground Fighter</h4>
                    <p className="text-sm text-muted-foreground">
                      Takes opponents down and controls from top position. Uses ground and pound or works for submissions. 
                      Neutralizes strikers by controlling the pace.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Well-Rounded / Mixed Style</h4>
                    <p className="text-sm text-muted-foreground">
                      Competent in all areas with no glaring weaknesses. Can adapt strategies mid-fight. Modern MMA 
                      increasingly demands this complete skill set.
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
