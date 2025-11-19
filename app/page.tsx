import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Trophy, Brain, TrendingUp, Zap, Target, Users } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-primary">The Future of Sports Engagement</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl">
              <span className="text-foreground">Welcome to </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Top Shelf Sports
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
              Master the game. Dominate fantasy matchups. Elevate your betting strategy. 
              Experience sports in a whole new dimension.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50"
              >
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Three Pillars of Excellence
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Learn Sports */}
            <Card className="group border-primary/20 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Learn Sports</h3>
              <p className="mb-4 text-muted-foreground">
                From beginner to expert. Comprehensive guides, rules, strategies, and insider knowledge 
                for all major sports.
              </p>
              <Link 
                href="/learn" 
                className="text-sm font-medium text-primary hover:underline"
              >
                Start Learning →
              </Link>
            </Card>

            {/* Fantasy Matchups */}
            <Card className="group border-secondary/20 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Fantasy Matchups</h3>
              <p className="mb-4 text-muted-foreground">
                Revolutionary fantasy sports analysis. Get unique insights, AI-powered predictions, 
                and competitive advantages.
              </p>
              <Link 
                href="/fantasy" 
                className="text-sm font-medium text-secondary hover:underline"
              >
                Explore Matchups →
              </Link>
            </Card>

            {/* Betting Experience */}
            <Card className="group border-accent/20 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">Betting Intelligence</h3>
              <p className="mb-4 text-muted-foreground">
                Data-driven betting strategies. Real-time odds analysis, smart recommendations, 
                and risk management tools.
              </p>
              <Link 
                href="/betting" 
                className="text-sm font-medium text-accent hover:underline"
              >
                View Odds →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="mb-2 text-4xl font-bold text-foreground">Real-Time</div>
              <p className="text-muted-foreground">Live updates and instant analytics</p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <div className="mb-2 text-4xl font-bold text-foreground">AI-Powered</div>
              <p className="text-muted-foreground">Machine learning predictions</p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 text-4xl font-bold text-foreground">Community</div>
              <p className="text-muted-foreground">Join thousands of sports enthusiasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-card/90 to-primary/5 p-12 text-center backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
                Ready to Elevate Your Game?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground text-balance">
                Join Top Shelf Sports today and unlock the full potential of your sports knowledge.
              </p>
              <Button 
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50"
              >
                <Link href="/signup">Create Free Account</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">© 2025 Top Shelf Sports. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link href="/contact" className="hover:text-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
