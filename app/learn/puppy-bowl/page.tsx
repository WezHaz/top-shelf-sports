import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PuppyBowlPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/learn">← Back to All Sports</Link>
          </Button>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Puppy Bowl</h1>
            <p className="text-lg text-muted-foreground">The cutest sporting event of the year</p>
          </div>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Game Setup</h2>
            <p className="text-muted-foreground">Adorable puppies from shelters compete in a miniature football stadium. Two teams (Team Ruff and Team Fluff) play on a small turf field complete with end zones, water bowls as "halftime shows," and toy footballs. The event promotes pet adoption while providing entertainment.</p>
          </Card>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Scoring</h2>
            <p className="text-muted-foreground">Touchdowns are scored when a puppy carries a toy across the goal line (6 points). Penalties are called for infractions like "unnecessary ruffness" and "paw-sonal foul." The game features multiple quarters with a halftime kitten show. MVP is awarded to the most energetic and adorable performer.</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
