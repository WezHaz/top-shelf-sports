import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GraduationCap, Users, Trophy, Calendar, MapPin, Star, Dumbbell, Heart } from 'lucide-react'
import Link from 'next/link'

export default function CollegePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.2),rgba(255,255,255,0))]" />
        
        <div className="container relative mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-primary">For College Students & Athletes</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl">
              <span className="text-foreground">Connect with </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Campus Sports
              </span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground text-balance md:text-xl">
              Find intramural leagues, club sports, varsity programs, and recreational activities 
              at your college campus. Stay active, make friends, and compete.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50"
              >
                <Link href="#find-programs">Find Campus Programs</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Link href="#resources">Athlete Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Why Join Campus Sports
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              College sports offer more than fitness. They create community, relieve stress, 
              and help you make the most of your college experience.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">Build Community</h3>
              <p className="text-sm text-muted-foreground">
                Make lifelong friends and expand your social network through shared passion.
              </p>
            </Card>

            <Card className="p-6 border-secondary/20 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">Stay Healthy</h3>
              <p className="text-sm text-muted-foreground">
                Combat stress, stay fit, and maintain mental wellness through activity.
              </p>
            </Card>

            <Card className="p-6 border-accent/20 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">Compete & Excel</h3>
              <p className="text-sm text-muted-foreground">
                Challenge yourself in competition from recreational to elite levels.
              </p>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-card-foreground">Develop Skills</h3>
              <p className="text-sm text-muted-foreground">
                Leadership, teamwork, and time management that benefit your career.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Find Programs Section */}
      <section id="find-programs" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Campus Sports Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Discover the perfect fit for your schedule, skill level, and athletic goals. 
              From casual play to championship competition.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-card/90 to-primary/5">
              <Trophy className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Varsity Sports</h3>
              <p className="text-muted-foreground mb-4">
                NCAA Division I, II, III, and NAIA programs competing at the highest level 
                of collegiate athletics.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Scholarships & Financial Aid
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Elite Training Facilities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    National Competition
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                View Varsity Teams
              </Button>
            </Card>

            <Card className="p-8 border-secondary/20 bg-gradient-to-br from-card/90 to-secondary/5">
              <Dumbbell className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Club Sports</h3>
              <p className="text-muted-foreground mb-4">
                Competitive teams that travel and compete regionally or nationally with 
                flexible commitment levels.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Student-Led Organizations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Competitive Tournaments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Balance Academics & Sport
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Browse Club Teams
              </Button>
            </Card>

            <Card className="p-8 border-accent/20 bg-gradient-to-br from-card/90 to-accent/5">
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-card-foreground mb-3">Intramurals</h3>
              <p className="text-muted-foreground mb-4">
                Fun, recreational leagues for all skill levels. Play with friends, meet new 
                people, and stay active.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    No Experience Required
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Flexible Schedules
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Social & Fun Focused
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Join Intramurals
              </Button>
            </Card>
          </div>

          <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <MapPin className="h-12 w-12 text-primary shrink-0" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  Find Programs at Your School
                </h3>
                <p className="text-muted-foreground">
                  Search by university, sport, or program type to discover opportunities at your campus.
                </p>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                Search Your Campus
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Popular Sports Section */}
      <section className="px-4 py-20 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Popular Campus Sports
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Explore sports commonly offered at college campuses. Learn the rules, skills, 
              and what to expect before joining.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Basketball', slug: 'basketball', emoji: '🏀' },
              { name: 'Soccer', slug: 'soccer', emoji: '⚽' },
              { name: 'Volleyball', slug: 'volleyball', emoji: '🏐' },
              { name: 'Flag Football', slug: 'football', emoji: '🏈' },
              { name: 'Ultimate Frisbee', slug: 'ultimate-frisbee', emoji: '🥏' },
              { name: 'Tennis', slug: 'tennis', emoji: '🎾' },
              { name: 'Softball', slug: 'softball', emoji: '🥎' },
              { name: 'Lacrosse', slug: 'lacrosse', emoji: '🥍' },
            ].map((sport) => (
              <Link
                key={sport.slug}
                href={`/learn/${sport.slug}`}
                className="group"
              >
                <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="text-4xl">{sport.emoji}</div>
                    <div>
                      <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {sport.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">Learn more</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar & Events Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Upcoming Events & Registration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Stay informed about tryouts, registration deadlines, tournaments, and campus 
              recreation events.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-8 border-secondary/20 bg-card/50 backdrop-blur-sm">
              <Calendar className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Fall Semester</h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-semibold text-sm text-foreground">Intramural Soccer</div>
                    <div className="text-xs text-muted-foreground">Registration: Aug 15 - Sep 1</div>
                  </div>
                  <div className="text-xs font-medium text-secondary">Open</div>
                </div>
                <div className="flex items-start justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-semibold text-sm text-foreground">Club Volleyball Tryouts</div>
                    <div className="text-xs text-muted-foreground">Tryouts: Sep 10</div>
                  </div>
                  <div className="text-xs font-medium text-primary">Upcoming</div>
                </div>
                <div className="flex items-start justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-semibold text-sm text-foreground">Flag Football League</div>
                    <div className="text-xs text-muted-foreground">Season: Sep 15 - Nov 15</div>
                  </div>
                  <div className="text-xs font-medium text-secondary">Open</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur-sm">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Spring Semester</h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-semibold text-sm text-foreground">Basketball Leagues</div>
                    <div className="text-xs text-muted-foreground">Registration: Jan 10 - Feb 1</div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">Planning</div>
                </div>
                <div className="flex items-start justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-semibold text-sm text-foreground">Softball Tournament</div>
                    <div className="text-xs text-muted-foreground">Event: March 20-22</div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">Planning</div>
                </div>
                <div className="flex items-start justify-between p-4 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-semibold text-sm text-foreground">Track & Field Club</div>
                    <div className="text-xs text-muted-foreground">Registration: Feb 1 - Mar 1</div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">Planning</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="px-4 py-20 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Student Athlete Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Tools, guides, and support to help you balance athletics with academics and 
              make the most of your college sports experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
              <GraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-card-foreground mb-3">Academic Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Time management strategies, tutoring resources, and tips for balancing 
                sports with coursework.
              </p>
              <Button variant="link" className="px-0 text-primary hover:text-primary/80">
                Learn More →
              </Button>
            </Card>

            <Card className="p-6 border-secondary/20 bg-card/50 backdrop-blur-sm">
              <Heart className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold text-card-foreground mb-3">Health & Wellness</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sports medicine, nutrition guidance, mental health support, and injury 
                prevention for student athletes.
              </p>
              <Button variant="link" className="px-0 text-secondary hover:text-secondary/80">
                Get Resources →
              </Button>
            </Card>

            <Card className="p-6 border-accent/20 bg-card/50 backdrop-blur-sm">
              <Trophy className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-bold text-card-foreground mb-3">Career Development</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Leverage your athletic experience for internships, networking, and 
                building leadership skills for your career.
              </p>
              <Button variant="link" className="px-0 text-accent hover:text-accent/80">
                Explore Options →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-card/90 to-primary/5 p-12 text-center backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.1),transparent)]" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
                Ready to Join Campus Sports?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground text-balance">
                Connect with your campus recreation department and discover all the athletic 
                opportunities available to you this semester.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50"
                >
                  Find Your Campus Programs
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Contact Recreation Office
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
