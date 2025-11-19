import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DrumCorpsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/learn">← Back to All Sports</Link>
          </Button>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Drum Corps</h1>
            <p className="text-lg text-muted-foreground">Elite marching music performance and competition</p>
          </div>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Competition Format</h2>
            <p className="text-muted-foreground">Drum corps feature brass instruments, percussion, and color guard performing 10-12 minute shows on football fields. Corps are judged on music performance (brass and percussion), visual performance (marching and choreography), general effect, and color guard. The season culminates in DCI World Championships each August.</p>
          </Card>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Scoring System</h2>
            <p className="text-muted-foreground">Panels of judges award points in multiple captions totaling 100 possible points. Music, visual, and general effect judges evaluate different aspects. Scores from regional competitions lead to finals placement. The corps with highest total score wins the championship.</p>
          </Card>
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Member Roles</h2>
            <div className="space-y-3">
              <div><strong>Brass:</strong> Trumpet, mellophone, baritone, and tuba players forming the melodic core.</div>
              <div><strong>Battery Percussion:</strong> Snare, tenor, bass, and cymbals providing rhythmic foundation.</div>
              <div><strong>Front Ensemble:</strong> Marimba, vibraphone, synthesizers stationed at field front.</div>
              <div><strong>Color Guard:</strong> Flags, rifles, and sabers providing visual storytelling.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
