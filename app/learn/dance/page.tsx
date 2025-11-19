import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, Users, Target, Play, Award } from 'lucide-react'

export default function DancePage() {
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
              Competitive Dance
            </h1>
            <p className="text-lg text-muted-foreground">
              Where artistry meets athleticism on stage
            </p>
          </div>

          {/* Sport Overview */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Play className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">About Competitive Dance</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Competitive dance combines technical precision, artistic expression, and athletic performance. 
                Dancers perform choreographed routines in various styles, judged on technique, performance 
                quality, choreography, and overall presentation.
              </p>
              <p>
                Competitions feature solo, duo/trio, small group, large group, and production categories across 
                age divisions from Mini (under 8) through Senior (15-19) and Adult. Dancers can compete in 
                recreational or elite competitive levels.
              </p>
              <p>
                Major organizations include Dance Worlds, The Dance Awards, JUMP, NUVO, Velocity, and regional 
                competitions. Studios and convention companies offer intensive training, masterclasses, and 
                scholarship opportunities alongside competitive events.
              </p>
            </div>
          </Card>

          {/* Dance Styles */}
          <Card className="mb-8 border-secondary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Competition Styles</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Ballet</h3>
                <p className="text-sm text-muted-foreground">
                  Classical technique emphasizing turnout, pointed feet, proper alignment, and grace. Foundation 
                  for all dance styles. Requires years of training in positions, barre work, and center combinations.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Jazz</h3>
                <p className="text-sm text-muted-foreground">
                  High-energy style with sharp movements, leaps, turns, and dynamic isolations. Incorporates 
                  ballet technique with contemporary influence. Popular for upbeat, performance-driven routines.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Contemporary</h3>
                <p className="text-sm text-muted-foreground">
                  Emotionally expressive style blending ballet, modern, and jazz. Features floor work, contractions, 
                  extensions, and creative movement. Emphasizes connection between movement and music/lyrics.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Lyrical</h3>
                <p className="text-sm text-muted-foreground">
                  Emotional storytelling through fluid movement, combining ballet and jazz techniques. Interprets 
                  song lyrics with expressive choreography and graceful transitions. Focuses on connection and artistry.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Hip Hop</h3>
                <p className="text-sm text-muted-foreground">
                  Urban dance style featuring popping, locking, breaking, and freestyle. Emphasizes groove, 
                  musicality, and attitude. Can range from old-school to contemporary commercial hip hop styles.
                </p>
              </div>

              <div className="border-b border-border/50 pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Tap</h3>
                <p className="text-sm text-muted-foreground">
                  Percussive style using metal plates on shoes to create rhythmic sounds. Requires precise timing, 
                  clarity, and musicality. Ranges from traditional Broadway to contemporary rhythmic tap.
                </p>
              </div>

              <div className="pb-4">
                <h3 className="mb-2 font-semibold text-card-foreground">Acro/Tumbling</h3>
                <p className="text-sm text-muted-foreground">
                  Combines dance with gymnastics skills like aerials, back handsprings, and contortions. Requires 
                  strength, flexibility, and control. Tricks must flow seamlessly with dance choreography.
                </p>
              </div>
            </div>
          </Card>

          {/* Judging Criteria */}
          <Card className="mb-8 border-accent/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Judging & Scoring</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Routines typically range from 2-3 minutes and are judged by panels of qualified adjudicators. 
                Scores are based on multiple criteria with different weights, and awards are given per category, 
                age division, and overall achievement.
              </p>
              <div className="rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Judging Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-card-foreground">Technique:</strong> Proper execution, alignment, and technical skills</li>
                  <li><strong className="text-card-foreground">Performance:</strong> Stage presence, facials, energy, and commitment</li>
                  <li><strong className="text-card-foreground">Choreography:</strong> Creativity, transitions, formations, and musicality</li>
                  <li><strong className="text-card-foreground">Difficulty:</strong> Complexity of skills and choreographic elements</li>
                  <li><strong className="text-card-foreground">Execution:</strong> Clean, synchronized performance with minimal errors</li>
                  <li><strong className="text-card-foreground">Overall Impression:</strong> Impact, artistry, and total package</li>
                </ul>
              </div>
              <p>
                Competitions award placements (Platinum, High Gold, Gold, Silver) based on score ranges, plus 
                overall rankings within each division. Special awards recognize outstanding choreography, 
                technique, entertainment, and overall performance.
              </p>
            </div>
          </Card>

          {/* Training & Skills */}
          <Card className="mb-8 border-primary/20 bg-card/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">Essential Skills</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Technical Training</h3>
                <p className="text-sm text-muted-foreground">
                  Strong foundation in ballet technique provides the base for all styles. Dancers train multiple 
                  times per week in various styles, progressively building turns, leaps, extensions, and complex 
                  combinations. Proper placement, core strength, and conditioning prevent injury.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-secondary">Flexibility & Strength</h3>
                <p className="text-sm text-muted-foreground">
                  Dancers must develop exceptional flexibility for splits, tilts, and extensions while maintaining 
                  strength for jumps, turns, and endurance. Regular stretching, conditioning, and cross-training 
                  improve performance capabilities and reduce injury risk.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-accent">Performance Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Beyond technique, dancers must project emotion, tell stories, and connect with audiences. Facial 
                  expressions, stage presence, and commitment to character separate good dancers from great performers. 
                  Energy and confidence shine through in competition.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-primary">Musicality & Timing</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding music structure, counting, and rhythm is essential. Dancers learn to interpret 
                  different musical styles, hit accents, and move with dynamics. Syncing with teammates requires 
                  precise timing and awareness of spacing.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-muted/30 p-4">
                <h4 className="mb-2 font-semibold text-card-foreground">Competition Preparation</h4>
                <p className="text-sm text-muted-foreground">
                  Competitive dancers typically train 10-20+ hours per week during competition season. They attend 
                  technique classes, rehearsals, privates, and conventions. Maintaining physical health, managing 
                  injuries, and balancing academics with dance requires dedication and time management.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
