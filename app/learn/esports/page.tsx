import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function EsportsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-4 pt-24 pb-16">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/learn">← Back to All Sports</Link>
          </Button>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">ESports</h1>
            <p className="text-lg text-muted-foreground">Competitive video gaming at the professional level</p>
          </div>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Major Game Categories</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong>MOBA:</strong> League of Legends, Dota 2 - Team-based strategic combat</p>
              <p><strong>FPS:</strong> Counter-Strike, Valorant, Call of Duty - Tactical shooting</p>
              <p><strong>Battle Royale:</strong> Fortnite, PUBG, Apex Legends - Last team standing</p>
              <p><strong>Fighting:</strong> Street Fighter, Tekken - 1v1 combat</p>
              <p><strong>Sports Sims:</strong> FIFA, NBA 2K, Rocket League - Virtual sports</p>
            </div>
          </Card>
          <Card className="mb-8 p-8">
            <h2 className="mb-4 text-2xl font-bold">Competition Structure</h2>
            <p className="text-muted-foreground">Tournaments range from online qualifiers to massive LAN finals with millions in prize pools. Teams compete in leagues and seasonal events. Major championships like The International (Dota 2) and Worlds (League of Legends) attract global viewership in the tens of millions.</p>
          </Card>
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Player Roles (MOBA/FPS)</h2>
            <div className="space-y-3">
              <div><strong>Carry/DPS:</strong> Primary damage dealers focusing on eliminations.</div>
              <div><strong>Support:</strong> Assists teammates, provides utility and vision.</div>
              <div><strong>Tank/Controller:</strong> Initiates fights, controls space and objectives.</div>
              <div><strong>IGL (In-Game Leader):</strong> Calls strategies and coordinates team.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
