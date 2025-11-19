import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function CheerleadingPage() {
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
              Cheerleading
            </h1>
            <p className="text-lg text-muted-foreground">
              Athleticism, precision, and spirit combined
            </p>
          </div>

          {/* Sport Overview */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">What is Cheerleading?</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Competitive cheerleading is an athletic sport that combines elements of gymnastics, dance, 
                and acrobatics in a high-energy performance. Teams perform coordinated routines featuring 
                stunts, pyramids, tosses, tumbling, jumps, and dance choreography.
              </p>
              <p>
                While sideline cheerleading supports other sports, competitive cheerleading stands on its own 
                as a demanding athletic discipline. Teams compete at various levels from youth to elite, 
                with divisions based on age, skill level, and team size.
              </p>
              <p>
                Modern cheerleading emphasizes safety, requiring proper training in spotting techniques, 
                progressive skill building, and certified coaching. The sport has evolved into a globally 
                recognized athletic competition with national and world championships.
              </p>
            </div>
          </Card>

          {/* Competition Elements */}
          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Routine Elements</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Stunts</h3>
                <p className="text-sm text-muted-foreground">
                  Multi-person structures where bases support flyers in elevated positions. Include 
                  extensions, liberties, scales, arabesques, and more. Require strength, balance, and trust.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Pyramids</h3>
                <p className="text-sm text-muted-foreground">
                  Connected stunts creating impressive multi-level formations. Can involve transitions 
                  between levels, twisting dismounts, and synchronized movements across multiple groups.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Basket Tosses</h3>
                <p className="text-sm text-muted-foreground">
                  Four bases interlock hands to toss a flyer high into the air, who performs tricks like 
                  toe touches, twists, or pikes before being caught. Requires precise timing and technique.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Tumbling</h3>
                <p className="text-sm text-muted-foreground">
                  Gymnastics skills including standing and running tumbling passes. Ranges from cartwheels 
                  and handsprings to layouts, fulls, and double backs depending on division level.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Jumps</h3>
                <p className="text-sm text-muted-foreground">
                  Synchronized jumps like toe touches, herkies, pikes, and front hurdlers. Performed in 
                  formations with precise timing, height, and technique. Often combined in sequences.
                </p>
              </div>

              <div className="pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Dance & Cheer</h3>
                <p className="text-sm text-muted-foreground">
                  Sharp, synchronized choreography and traditional cheer sections with motions, voice, 
                  and crowd-leading elements. Showcases performance quality, facials, and team unity.
                </p>
              </div>
            </div>
          </Card>

          {/* Scoring */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Competition & Scoring</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Routines are typically 2:30 minutes long and performed on a spring floor or mat. Judges 
                score based on difficulty, execution, creativity, and overall impression. Deductions are 
                taken for falls, bobbles, illegal skills, time violations, and safety infractions.
              </p>
              <div className="rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Scoring Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-card-foreground">Difficulty:</strong> Complexity and level of skills performed</li>
                  <li><strong className="text-card-foreground">Execution:</strong> Clean performance with minimal errors</li>
                  <li><strong className="text-card-foreground">Technique:</strong> Proper form, synchronization, and precision</li>
                  <li><strong className="text-card-foreground">Creativity:</strong> Innovative choreography and formations</li>
                  <li><strong className="text-card-foreground">Performance:</strong> Energy, showmanship, and crowd engagement</li>
                </ul>
              </div>
              <p>
                Major competitions include The Cheerleading Worlds, Summit, NCA/NDA Championships, and 
                USA Cheer Nationals. Teams can compete in All-Star cheer (club-based) or scholastic cheer 
                (school-based), each with specific rules and divisions.
              </p>
            </div>
          </Card>

          {/* Team Positions */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Team Positions</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Flyers</h3>
                <p className="text-sm text-muted-foreground">
                  Athletes lifted and tossed in the air during stunts and pyramids. Require excellent balance, 
                  body control, flexibility, and air awareness. Must maintain tight body positions and execute 
                  skills at height while staying focused.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Bases</h3>
                <p className="text-sm text-muted-foreground">
                  Strong athletes who support and lift flyers. Provide stable foundation for stunts, control 
                  tosses, and ensure safe catches. Require strength, stability, proper technique, and the 
                  ability to work in synchronized pairs or groups.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Back Spot</h3>
                <p className="text-sm text-muted-foreground">
                  Positioned behind stunts to provide support, catch from behind, and ensure safety. Guides 
                  the stunt up, assists with transitions, and is responsible for protecting the flyer's head 
                  and upper body during dismounts.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Front Spot</h3>
                <p className="text-sm text-muted-foreground">
                  Assists from the front of stunts, particularly during building and dismounts. Helps guide 
                  flyers up, supports legs during transitions, and catches from the front. Not always required 
                  depending on skill level.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Tumblers</h3>
                <p className="text-sm text-muted-foreground">
                  Athletes who perform tumbling passes during designated sections of the routine. May also 
                  participate in stunts and other elements. Strong tumblers elevate team difficulty scores 
                  and create exciting visual moments.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Position Versatility</h4>
                <p className="text-sm text-muted-foreground">
                  Many athletes train multiple positions to increase team flexibility. While some specialize 
                  as dedicated flyers or bases, cross-training improves overall understanding of stunts and 
                  makes athletes more valuable to their teams.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
