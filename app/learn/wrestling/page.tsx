import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function WrestlingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/learn">← Back to All Sports</Link>
          </Button>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Wrestling</h1>
            <p className="text-lg text-muted-foreground">Olympic grappling combat sport</p>
          </div>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Match Structure</h2>
            <p className="text-muted-foreground">Folkstyle (college): Three periods - first is 1 minute, second and third are 2 minutes each. Freestyle/Greco-Roman (Olympic): Two 3-minute periods. Wrestlers compete on circular mats with weight classes ranging from 125 lbs to heavyweight.</p>
          </Card>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Scoring System</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong>Takedown:</strong> 2 points for bringing opponent to mat with control</p>
              <p><strong>Escape:</strong> 1 point for getting out from bottom position</p>
              <p><strong>Reversal:</strong> 2 points for going from bottom to top with control</p>
              <p><strong>Near Fall:</strong> 2-4 points for exposing opponent's back to mat</p>
              <p><strong>Pin:</strong> Instant win by holding opponent's shoulders to mat</p>
            </div>
          </Card>
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Wrestling Styles</h2>
            <div className="space-y-3">
              <div><strong>Folkstyle:</strong> American collegiate style emphasizing control and riding time.</div>
              <div><strong>Freestyle:</strong> Olympic style allowing leg attacks and more dynamic action.</div>
              <div><strong>Greco-Roman:</strong> Olympic style prohibiting attacks below the waist, upper body only.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
