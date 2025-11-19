// Yahoo Sports API Integration
// This file contains helper functions for interacting with the Yahoo Sports API

type YahooSportsConfig = {
  clientId?: string
  clientSecret?: string
  redirectUri?: string
}

export class YahooSportsAPI {
  private config: YahooSportsConfig

  constructor(config: YahooSportsConfig = {}) {
    this.config = {
      clientId: process.env.YAHOO_CLIENT_ID,
      clientSecret: process.env.YAHOO_CLIENT_SECRET,
      redirectUri: process.env.YAHOO_REDIRECT_URI,
      ...config,
    }
  }

  /**
   * Get OAuth authorization URL
   */
  getAuthUrl(): string {
    if (!this.config.clientId || !this.config.redirectUri) {
      throw new Error('Yahoo OAuth credentials not configured')
    }

    const authUrl = new URL('https://api.login.yahoo.com/oauth2/request_auth')
    authUrl.searchParams.set('client_id', this.config.clientId)
    authUrl.searchParams.set('redirect_uri', this.config.redirectUri)
    authUrl.searchParams.set('response_type', 'code')
    authUrl.searchParams.set('language', 'en-us')

    return authUrl.toString()
  }

  /**
   * Exchange authorization code for access token
   */
  async getAccessToken(code: string): Promise<{
    access_token: string
    refresh_token: string
    expires_in: number
  }> {
    if (!this.config.clientId || !this.config.clientSecret || !this.config.redirectUri) {
      throw new Error('Yahoo OAuth credentials not configured')
    }

    const response = await fetch(
      'https://api.login.yahoo.com/oauth2/get_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(
            `${this.config.clientId}:${this.config.clientSecret}`
          ).toString('base64')}`,
        },
        body: new URLSearchParams({
          code,
          redirect_uri: this.config.redirectUri,
          grant_type: 'authorization_code',
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Token exchange failed: ${error}`)
    }

    return response.json()
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshAccessToken(refreshToken: string): Promise<{
    access_token: string
    refresh_token: string
    expires_in: number
  }> {
    if (!this.config.clientId || !this.config.clientSecret) {
      throw new Error('Yahoo OAuth credentials not configured')
    }

    const response = await fetch(
      'https://api.login.yahoo.com/oauth2/get_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(
            `${this.config.clientId}:${this.config.clientSecret}`
          ).toString('base64')}`,
        },
        body: new URLSearchParams({
          refresh_token: refreshToken,
          grant_type: 'refresh_token',
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Token refresh failed: ${error}`)
    }

    return response.json()
  }

  /**
   * Make authenticated request to Yahoo Fantasy API
   */
  async makeRequest(endpoint: string, accessToken: string) {
    const baseUrl = 'https://fantasysports.yahooapis.com/fantasy/v2'
    const url = `${baseUrl}${endpoint}`

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Yahoo API request failed: ${error}`)
    }

    return response.json()
  }

  /**
   * Search for players by name
   * @param sport - The sport league (nfl, mlb, nba, nhl, soccer)
   * @param query - The search query
   * @param accessToken - OAuth access token
   */
  async searchPlayers(sport: string, query: string, accessToken: string) {
    const endpoint = `/league/${sport}.l.example/players;search=${encodeURIComponent(
      query
    )}?format=json`
    return this.makeRequest(endpoint, accessToken)
  }

  /**
   * Get user's fantasy games
   * @param accessToken - OAuth access token
   */
  async getUserGames(accessToken: string) {
    const endpoint = '/users;use_login=1/games?format=json'
    return this.makeRequest(endpoint, accessToken)
  }

  /**
   * Get detailed player statistics
   * @param playerId - The player's unique ID
   * @param accessToken - OAuth access token
   */
  async getPlayerStats(playerId: string, accessToken: string) {
    const endpoint = `/player/${playerId}/stats?format=json`
    return this.makeRequest(endpoint, accessToken)
  }
}

export const yahooSportsAPI = new YahooSportsAPI()
