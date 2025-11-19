'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">TOP</span>
              <span className="text-secondary"> SHELF</span>
              <span className="text-accent"> SPORTS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link 
              href="/learn" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Learn Sports
            </Link>
            <Link 
              href="/k-12" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
            >
              K-12
            </Link>
            <Link 
              href="/college" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              College
            </Link>
            <Link 
              href="/player-scout" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Player Scout
            </Link>
            <Link 
              href="/fantasy" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
            >
              Fantasy Matchups
            </Link>
            <Link 
              href="/betting" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              Betting
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" asChild className="text-foreground hover:text-primary">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/signup">Create Account</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-primary/20 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link 
                href="/learn" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Learn Sports
              </Link>
              <Link 
                href="/k-12" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              >
                K-12
              </Link>
              <Link 
                href="/college" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                College
              </Link>
              <Link 
                href="/player-scout" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Player Scout
              </Link>
              <Link 
                href="/fantasy" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
              >
                Fantasy Matchups
              </Link>
              <Link 
                href="/betting" 
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                Betting
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" asChild className="w-full text-foreground hover:text-primary">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/signup">Create Account</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
