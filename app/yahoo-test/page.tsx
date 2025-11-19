'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, XCircle, Loader2 } from 'lucide-react'

type TestResult = {
  name: string
  status: 'pending' | 'success' | 'error'
  message: string
  details?: unknown
}

export default function YahooTestPage() {
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [testing, setTesting] = useState(false)

  const runTests = async () => {
    setTesting(true)
    const results: TestResult[] = []

    // Test 1: Check environment variables
    results.push({
      name: 'Environment Variables',
      status: 'pending',
      message: 'Checking configuration...',
    })
    setTestResults([...results])

    try {
      const envCheck = await fetch('/api/yahoo-sports/auth/login', {
        method: 'HEAD',
      })
      results[0] = {
        name: 'Environment Variables',
        status: envCheck.ok ? 'success' : 'error',
        message: envCheck.ok
          ? 'Yahoo credentials configured'
          : 'Yahoo credentials missing or invalid',
      }
    } catch (error) {
      results[0] = {
        name: 'Environment Variables',
        status: 'error',
        message: 'Failed to check credentials',
      }
    }
    setTestResults([...results])

    // Test 2: Test API Connection
    results.push({
      name: 'API Connection',
      status: 'pending',
      message: 'Testing Yahoo Sports API...',
    })
    setTestResults([...results])

    try {
      const connectionTest = await fetch('/api/yahoo-sports/test-connection')
      const data = await connectionTest.json()

      results[1] = {
        name: 'API Connection',
        status: data.authenticated ? 'success' : 'error',
        message: data.message,
        details: data,
      }
    } catch (error) {
      results[1] = {
        name: 'API Connection',
        status: 'error',
        message: 'Failed to connect to API',
      }
    }
    setTestResults([...results])

    // Test 3: Test Player Search
    results.push({
      name: 'Player Search',
      status: 'pending',
      message: 'Testing player search...',
    })
    setTestResults([...results])

    try {
      const searchTest = await fetch('/api/yahoo-sports/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sport: 'nfl', query: 'Mahomes' }),
      })
      const data = await searchTest.json()

      results[2] = {
        name: 'Player Search',
        status: searchTest.ok ? 'success' : 'error',
        message: searchTest.ok
          ? `Found ${data.players?.length || 0} players (source: ${data.source})`
          : 'Player search failed',
        details: data,
      }
    } catch (error) {
      results[2] = {
        name: 'Player Search',
        status: 'error',
        message: 'Failed to test player search',
      }
    }
    setTestResults([...results])

    setTesting(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case 'error':
        return <XCircle className="h-5 w-5 text-red-400" />
      case 'pending':
        return <Loader2 className="h-5 w-5 text-yellow-400 animate-spin" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/player-scout">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-primary">
              Yahoo Sports API Tests
            </h1>
            <p className="text-muted-foreground">
              Verify connectivity and configuration
            </p>
          </div>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Connection Tests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Run these tests to verify your Yahoo Sports API integration is
                working correctly.
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={runTests}
                  disabled={testing}
                  className="bg-primary text-primary-foreground"
                >
                  {testing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Running Tests...
                    </>
                  ) : (
                    'Run All Tests'
                  )}
                </Button>
                <Link href="/api/yahoo-sports/auth/login">
                  <Button variant="outline">Authenticate with Yahoo</Button>
                </Link>
              </div>
            </div>

            {testResults.length > 0 && (
              <div className="space-y-3 pt-4">
                {testResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-background/50 p-4"
                  >
                    <div className="pt-0.5">{getStatusIcon(result.status)}</div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{result.name}</h3>
                        <span
                          className={`text-xs font-medium ${
                            result.status === 'success'
                              ? 'text-green-400'
                              : result.status === 'error'
                                ? 'text-red-400'
                                : 'text-yellow-400'
                          }`}
                        >
                          {result.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {result.message}
                      </p>
                      {result.details && (
                        <details className="text-xs text-muted-foreground">
                          <summary className="cursor-pointer hover:text-foreground">
                            View details
                          </summary>
                          <pre className="mt-2 overflow-auto rounded bg-muted p-2">
                            {JSON.stringify(result.details, null, 2)}
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <h3 className="mb-2 font-semibold text-secondary">
                1. Environment Variables
              </h3>
              <p className="text-muted-foreground">
                Ensure these environment variables are set in your Vercel
                project:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                <li>
                  <code className="rounded bg-muted px-1">YAHOO_CLIENT_ID</code>
                </li>
                <li>
                  <code className="rounded bg-muted px-1">
                    YAHOO_CLIENT_SECRET
                  </code>
                </li>
                <li>
                  <code className="rounded bg-muted px-1">
                    YAHOO_REDIRECT_URI
                  </code>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-accent">
                2. Yahoo Developer Setup
              </h3>
              <p className="text-muted-foreground">
                Create an app at{' '}
                <a
                  href="https://developer.yahoo.com/apps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  developer.yahoo.com/apps
                </a>{' '}
                with Fantasy Sports API access.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-primary">
                3. Test Connection
              </h3>
              <p className="text-muted-foreground">
                Click "Authenticate with Yahoo" above, then run the tests to
                verify everything is working.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
