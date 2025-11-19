import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, Target, Trophy, Heart, MapPin, Calendar, BookOpen, Star } from 'lucide-react'
import Link from 'next/link'

export default function K12Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,191,165,0.2),rgba(255,255,255,0))]" />
        
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2">
              <span className="text-sm font-medium text-secondary">For Parents, Kids & Young Athletes</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl">
              <span className="text-foreground">Empower Your Young </span>
              <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                Athlete's Journey
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
              Connect with local leagues, explore sports opportunities, and build a foundation 
              for lifelong athletic success. From first steps to championship teams.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                asChild
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/50"
              >
                <Link href="#find-leagues">Find Local Leagues</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                <Link href="#resources">Parent Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Youth Sports Section */}
      <section className="px-4 py-20 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Why Youth Sports Matter
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Sports provide more than physical activity. They shape character, build confidence, 
              and create lifelong friendships and memories.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 border-secondary/20 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">Physical Health</h3>
              <p className="text-sm text-muted-foreground">
                Build strength, coordination, and healthy habits that last a lifetime.
              </p>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">Social Skills</h3>
              <p className="text-sm text-muted-foreground">
                Teamwork, communication, and friendship through shared experiences.
              </p>
            </Card>

            <Card className="p-6 border-accent/20 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">Mental Strength</h3>
              <p className="text-sm text-muted-foreground">
                Resilience, focus, and confidence through challenges and victories.
              </p>
            </Card>

            <Card className="p-6 border-secondary/20 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">Life Lessons</h3>
              <p className="text-sm text-muted-foreground">
                Discipline, perseverance, and sportsmanship that apply beyond sports.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Find Local Leagues Section */}
      <section id="find-leagues" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Find the Perfect League
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Connect with local sports organizations in your community. From recreational 
              to competitive, find the right fit for your young athlete.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-8 border-secondary/20 bg-gradient-to-br from-card/90 to-secondary/5">
              <MapPin className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Youth League Directory</h3>
              <p className="text-muted-foreground mb-6">
                Search our comprehensive database of local youth sports leagues by location, 
                sport, age group, and skill level.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Little League Baseball & Softball
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    AYSO & Club Soccer Programs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Basketball Leagues & AAU Teams
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Swimming, Track, Tennis & More
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Search Leagues Near You
              </Button>
            </Card>

            <Card className="p-8 border-primary/20 bg-gradient-to-br from-card/90 to-primary/5">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Season Registration</h3>
              <p className="text-muted-foreground mb-6">
                Stay informed about upcoming registration periods, tryout dates, and season 
                schedules for leagues in your area.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-semibold text-sm text-foreground">Spring Soccer</div>
                    <div className="text-xs text-muted-foreground">Registration Opens Jan 15</div>
                  </div>
                  <div className="text-xs font-medium text-primary">Upcoming</div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-semibold text-sm text-foreground">Summer Baseball</div>
                    <div className="text-xs text-muted-foreground">Registration Opens Feb 1</div>
                  </div>
                  <div className="text-xs font-medium text-primary">Upcoming</div>
                </div>
              </div>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                View All Registration Periods
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Sports Exploration Section */}
      <section className="px-4 py-20 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Explore Different Sports
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Help your child discover their passion. Learn about various sports, age-appropriate 
              activities, and find what excites them most.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Baseball', slug: 'baseball', emoji: '⚾' },
              { name: 'Basketball', slug: 'basketball', emoji: '🏀' },
              { name: 'Soccer', slug: 'soccer', emoji: '⚽' },
              { name: 'Football', slug: 'football', emoji: '🏈' },
              { name: 'Swimming', slug: 'swimming', emoji: '🏊' },
              { name: 'Tennis', slug: 'tennis', emoji: '🎾' },
              { name: 'Track & Field', slug: 'track-field', emoji: '🏃' },
              { name: 'Volleyball', slug: 'volleyball', emoji: '🏐' },
              { name: 'Gymnastics', slug: 'gymnastics', emoji: '🤸' },
            ].map((sport) => (
              <Link
                key={sport.slug}
                href={`/learn/${sport.slug}`}
                className="group"
              >
                <Card className="p-6 border-secondary/20 bg-card/50 backdrop-blur-sm transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{sport.emoji}</div>
                    <div>
                      <h3 className="font-bold text-card-foreground group-hover:text-secondary transition-colors">
                        {sport.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">Learn the basics</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Resources Section */}
      <section id="resources" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Resources for Parents
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Expert guidance to support your young athlete's development and help you 
              navigate the youth sports journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-card-foreground mb-3">Getting Started Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Essential tips for parents new to youth sports, from choosing equipment to 
                understanding commitment levels.
              </p>
              <Button variant="link" className="px-0 text-primary hover:text-primary/80">
                Read Guide →
              </Button>
            </Card>

            <Card className="p-6 border-secondary/20 bg-card/50 backdrop-blur-sm">
              <Target className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold text-card-foreground mb-3">Development Tips</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Age-appropriate training advice, injury prevention, and how to foster a 
                love of sports without pressure.
              </p>
              <Button variant="link" className="px-0 text-secondary hover:text-secondary/80">
                Learn More →
              </Button>
            </Card>

            <Card className="p-6 border-accent/20 bg-card/50 backdrop-blur-sm">
              <Heart className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-bold text-card-foreground mb-3">Supporting Your Athlete</h3>
              <p className="text-sm text-muted-foreground mb-4">
                How to be a positive sports parent, manage wins and losses, and prioritize 
                fun and growth over trophies.
              </p>
              <Button variant="link" className="px-0 text-accent hover:text-accent/80">
                Get Advice →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-secondary/30 bg-gradient-to-br from-card/90 to-secondary/5 p-12 text-center backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,165,0.1),transparent)]" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground text-balance">
                Join thousands of parents and young athletes building confidence, skills, 
                and lifelong memories through youth sports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/50"
                >
                  Find Leagues in Your Area
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10"
                >
                  Download Parent Guide
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
