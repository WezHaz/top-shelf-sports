import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BoxingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/learn">← Back to All Sports</Link>
          </Button>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Boxing</h1>
            <p className="text-lg text-muted-foreground">The sweet science of punching</p>
          </div>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Fight Structure</h2>
            <p className="text-muted-foreground">Professional fights consist of 4-12 rounds (championship fights are 12 rounds) with each round lasting 3 minutes. One-minute rest between rounds. Fighters compete in a square ring wearing gloves (8-10 oz), competing in weight classes from flyweight (112 lbs) to heavyweight (200+ lbs).</p>
          </Card>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Scoring & Winning</h2>
            <p className="text-muted-foreground">Three judges score each round 10-9 (winner gets 10, loser gets 9 or fewer). Knockdowns and dominance affect scores. Fights end by knockout (opponent can't continue), technical knockout (referee stops fight), disqualification, or judges' decision after all rounds.</p>
          </Card>
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Techniques & Strategy</h2>
            <div className="space-y-3">
              <div><strong>Punches:</strong> Jab, cross, hook, uppercut - all targeting head or body.</div>
              <div><strong>Footwork:</strong> Movement and positioning to create angles and evade.</div>
              <div><strong>Defense:</strong> Slips, blocks, parries, and rolls to avoid damage.</div>
              <div><strong>Ring Control:</strong> Cutting off the ring, controlling distance and pace.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
