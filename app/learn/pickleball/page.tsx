import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function PickleballPage() {
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
              Pickleball
            </h1>
            <p className="text-lg text-muted-foreground">
              The fastest-growing sport in America
            </p>
          </div>

          {/* Game Overview */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Game Overview</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Pickleball is a paddle sport that combines elements of tennis, badminton, and ping-pong. 
                Played on a badminton-sized court (20' x 44') with a modified tennis net lowered to 36 inches 
                at the sidelines and 34 inches in the middle.
              </p>
              <p>
                The sport uses solid paddles made of wood or composite materials and a perforated plastic ball 
                (similar to a wiffle ball). Pickleball can be played as singles or doubles, with doubles being 
                the most popular format.
              </p>
              <p>
                What makes pickleball unique is the "kitchen" or non-volley zone - a 7-foot area on both sides 
                of the net where players cannot volley the ball. This rule creates strategic gameplay and exciting 
                rallies at the net.
              </p>
            </div>
          </Card>

          {/* Scoring System */}
          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Scoring System</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold text-card-foreground">Scoring Basics</h3>
                <p className="text-sm text-muted-foreground">
                  Only the serving team can score points. Games are typically played to 11 points, and teams 
                  must win by 2 points. Tournament games may be played to 15 or 21 points.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-card-foreground">Serving Rules</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  The serve must be hit underhand with the paddle below waist level. The ball must bounce once 
                  on each side (serve and return) before volleys are allowed - this is called the "two-bounce rule."
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Serve diagonally to opponent's service court</li>
                  <li>• Both players on the serving team get to serve (except at game start)</li>
                  <li>• Server continues until their team commits a fault</li>
                  <li>• Service switches to partner, then to opposing team</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-card-foreground">Calling the Score</h3>
                <p className="text-sm text-muted-foreground">
                  In doubles, three numbers are called: serving team's score, receiving team's score, and 
                  server number (1 or 2). For example: "5-3-2" means serving team has 5, receiving team has 3, 
                  and the second server is serving.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Rules & Strategy */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Key Rules & Strategy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">The Kitchen (Non-Volley Zone):</strong> Players cannot 
                volley the ball while standing in this 7-foot zone adjacent to the net. You can enter to play 
                balls that have bounced, but cannot volley from within or while your momentum carries you into 
                the zone.
              </p>
              <p>
                <strong className="text-card-foreground">Two-Bounce Rule:</strong> The ball must bounce once on 
                the serve and once on the return before players can volley. This prevents serve-and-volley 
                dominance and extends rallies.
              </p>
              <p>
                <strong className="text-card-foreground">Faults:</strong> Common faults include hitting the ball 
                out of bounds, not clearing the net, volleying in the kitchen, or violating service rules. Faults 
                result in loss of serve or a point for the opponent.
              </p>
              <p>
                <strong className="text-card-foreground">Dinking:</strong> A soft shot that arcs over the net and 
                lands in the opponent's kitchen. The dink game is crucial in pickleball - patience and placement 
                matter more than power.
              </p>
              <p>
                <strong className="text-card-foreground">Third Shot Drop:</strong> A strategic shot hit by the 
                serving team after the return of serve. It's a soft shot aimed to land in the opponent's kitchen, 
                allowing the serving team to advance to the net.
              </p>
            </div>
          </Card>

          {/* Essential Skills */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Essential Skills</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Serve & Return</h3>
                <p className="text-sm text-muted-foreground">
                  A consistent, deep serve sets the tone. The underhand serve should land deep in the opponent's 
                  court. Returns should also be deep, giving your team time to advance to the kitchen line.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Dinking</h3>
                <p className="text-sm text-muted-foreground">
                  Master the soft game at the kitchen line. Dinking requires touch, patience, and precision. 
                  The goal is to force your opponent to hit up, creating an opportunity for a put-away shot.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Court Positioning</h3>
                <p className="text-sm text-muted-foreground">
                  Getting to the kitchen line is crucial in doubles. The team that controls the net typically 
                  controls the point. Move forward together and maintain proper spacing with your partner.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Blocking & Resets</h3>
                <p className="text-sm text-muted-foreground">
                  When opponents attack with speed, use soft blocks to absorb pace and drop the ball into the 
                  kitchen. This defensive skill resets the rally and neutralizes aggressive shots.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Why Pickleball is Booming</h4>
                <p className="text-sm text-muted-foreground">
                  Pickleball's accessibility makes it perfect for all ages and skill levels. The smaller court 
                  means less running than tennis, while the strategy keeps it engaging. It's easy to learn but 
                  difficult to master, creating a welcoming community and competitive tournament scene.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
