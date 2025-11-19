import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function TennisPage() {
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
              Tennis
            </h1>
            <p className="text-lg text-muted-foreground">
              A game of power, precision, and mental fortitude
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
                Tennis is played on a rectangular court divided by a net. Players use rackets to hit 
                a felt-covered rubber ball over the net into the opponent's court. The sport can be 
                played as singles (one-on-one) or doubles (two-on-two).
              </p>
              <p>
                Courts can be grass (Wimbledon), clay (French Open), or hard court (US Open, Australian Open). 
                Each surface plays differently, affecting ball speed and bounce characteristics.
              </p>
              <p>
                A standard tennis match is best-of-three sets for most tournaments, or best-of-five sets 
                for men's Grand Slam matches. Points are won when the opponent fails to return the ball 
                within the court boundaries.
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
                <h3 className="mb-2 font-semibold text-card-foreground">Points</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Tennis uses a unique scoring system: 0 (love), 15, 30, 40, and game. When tied at 40-40 
                  (deuce), a player must win two consecutive points to win the game.
                </p>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-sm text-muted-foreground">0 points</span>
                  <span className="text-secondary font-medium">Love</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2 pt-2">
                  <span className="text-sm text-muted-foreground">1 point</span>
                  <span className="text-secondary font-medium">15</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2 pt-2">
                  <span className="text-sm text-muted-foreground">2 points</span>
                  <span className="text-secondary font-medium">30</span>
                </div>
                <div className="flex justify-between pb-2 pt-2">
                  <span className="text-sm text-muted-foreground">3 points</span>
                  <span className="text-secondary font-medium">40</span>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-card-foreground">Games & Sets</h3>
                <p className="text-sm text-muted-foreground">
                  A player must win at least 4 points to win a game, and lead by 2 points at deuce. 
                  To win a set, a player must win at least 6 games and lead by 2 games. If tied 6-6, 
                  a tiebreak is played (first to 7 points, win by 2).
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-card-foreground">Match</h3>
                <p className="text-sm text-muted-foreground">
                  Matches are typically best-of-three sets (first to win 2 sets). Grand Slam men's 
                  matches are best-of-five sets (first to win 3 sets).
                </p>
              </div>
            </div>
          </Card>

          {/* Key Techniques */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Key Techniques & Shots</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-card-foreground">Serve:</strong> The most important shot that starts every point. 
                Players have two chances to get the ball into the service box diagonally across the net. A powerful, 
                well-placed serve is a significant weapon.
              </p>
              <p>
                <strong className="text-card-foreground">Forehand & Backhand:</strong> The primary groundstrokes used to 
                rally from the baseline. Modern players use Western or semi-Western grips for heavy topspin.
              </p>
              <p>
                <strong className="text-card-foreground">Volley:</strong> A shot hit before the ball bounces, typically 
                at the net. Effective for finishing points quickly and putting pressure on opponents.
              </p>
              <p>
                <strong className="text-card-foreground">Overhead/Smash:</strong> A powerful shot hit above the head, 
                similar to a serve motion, used to finish points on high balls.
              </p>
              <p>
                <strong className="text-card-foreground">Drop Shot:</strong> A delicate shot that barely clears the net, 
                used to catch opponents off guard when they're positioned deep in the court.
              </p>
              <p>
                <strong className="text-card-foreground">Lob:</strong> A high, arcing shot hit over an opponent at the net, 
                used defensively or offensively to reset the point.
              </p>
            </div>
          </Card>

          {/* Playing Styles */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Playing Styles</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Baseline Player</h3>
                <p className="text-sm text-muted-foreground">
                  Players who stay behind the baseline and rely on consistent, powerful groundstrokes. They excel 
                  in long rallies, hitting deep shots with heavy topspin. Rafael Nadal is the classic example.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Serve-and-Volley</h3>
                <p className="text-sm text-muted-foreground">
                  Aggressive style where players serve and immediately rush to the net to finish points with volleys. 
                  Less common in modern tennis but effective on faster surfaces. Requires excellent net skills.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">All-Court Player</h3>
                <p className="text-sm text-muted-foreground">
                  Versatile players comfortable at baseline and net. They adapt their game based on opponent and 
                  situation. Roger Federer exemplifies this balanced, complete style.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Counter-Puncher</h3>
                <p className="text-sm text-muted-foreground">
                  Defensive specialists with exceptional speed and anticipation. They retrieve seemingly impossible 
                  shots and wear down opponents with consistency. Novak Djokovic's defensive skills are legendary.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Grand Slam Tournaments</h4>
                <p className="text-sm text-muted-foreground">
                  The four Grand Slams are tennis's most prestigious events: Australian Open (hard court), 
                  French Open (clay), Wimbledon (grass), and US Open (hard court). Winning all four in a career 
                  is called a Career Grand Slam.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
