import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CrossFitGamesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/learn">← Back to All Sports</Link>
          </Button>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">CrossFit Games</h1>
            <p className="text-lg text-muted-foreground">The ultimate test of fitness</p>
          </div>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Competition Structure</h2>
            <p className="text-muted-foreground">Athletes compete in multiple workouts testing varied functional movements across broad time and modal domains. Events combine gymnastics, weightlifting, monostructural cardio, and odd-object movements. Workouts are announced close to competition, testing athletes' versatility and adaptability.</p>
          </Card>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Scoring System</h2>
            <p className="text-muted-foreground">Points are awarded based on placement in each workout (1st place = 100 points down to 40th place = 1 point). Total points across all events determine overall winners. The athlete with most points after 10-15 events is crowned "Fittest on Earth."</p>
          </Card>
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Key Abilities</h2>
            <p className="text-muted-foreground">Athletes need strength (heavy lifting), endurance (long workouts), power (explosive movements), speed, agility, coordination, balance, and mental fortitude to handle unknown challenges under extreme fatigue.</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
