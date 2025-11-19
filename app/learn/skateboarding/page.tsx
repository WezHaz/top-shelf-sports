import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SkateboardingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/learn">← Back to All Sports</Link>
          </Button>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Street League Skateboarding</h1>
            <p className="text-lg text-muted-foreground">Professional street skateboarding competition</p>
          </div>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Competition Format</h2>
            <p className="text-muted-foreground">Skaters compete on custom-built street courses featuring stairs, handrails, ledges, and gaps. Competition consists of timed runs (45 seconds) and best trick rounds. Each skater performs two runs and five single trick attempts.</p>
          </Card>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Judging & Scoring</h2>
            <p className="text-muted-foreground">Judges award scores based on difficulty, execution, variety, and flow. Run scores and best four trick scores are combined for final standings. A perfect score is 10.0 for technical difficulty, creativity, and style.</p>
          </Card>
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Trick Categories</h2>
            <div className="space-y-3">
              <div><strong>Flip Tricks:</strong> Kickflips, heelflips, and their variations.</div>
              <div><strong>Grinds:</strong> Sliding on rails and ledges with trucks or deck.</div>
              <div><strong>Airs:</strong> Tricks performed while airborne off ramps.</div>
              <div><strong>Technical:</strong> Complex combinations linking multiple obstacles.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
