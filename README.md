# Top Shelf Sports

**A comprehensive fantasy sports and sports education platform with Yahoo Fantasy Sports integration**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/wesleyrhawes-gmailcoms-projects/v0-fantasy-sports)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/bRlJzfNBr3M)

## 🎯 Mission

Top Shelf Sports is designed to be the ultimate destination for sports enthusiasts, combining fantasy sports management with comprehensive sports education. Our platform integrates with Yahoo Fantasy Sports API to provide real-time player data, statistics, and fantasy league management while offering educational content across 25+ different sports disciplines.

## 🚀 Features

- **Yahoo Fantasy Sports Integration**: Real-time player stats, game data, and fantasy league management through Yahoo Sports API
- **Player Scout**: Advanced player search and analysis tool with detailed statistics
- **Fantasy Dashboard**: Manage your fantasy teams and track performance
- **Sports Betting Hub**: Information and resources for sports betting enthusiasts
- **Learn Section**: Comprehensive educational content covering 25+ sports including:
  - Traditional sports (Football, Basketball, Baseball, Hockey, Soccer)
  - Combat sports (UFC, Boxing, Wrestling, Karate Combat)
  - Racing sports (F1, NASCAR, Drone Racing)
  - Alternative sports (Esports, Disc Golf, Skateboarding, Drum Corps)
  - Olympic sports (Summer and Winter Olympics)
  - And many more!

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui component library
- **State Management**: React Server Components with client-side interactivity

### Backend
- **API Routes**: Next.js API routes for Yahoo Sports integration
- **Authentication**: OAuth 2.0 for Yahoo Fantasy Sports
- **Runtime**: Node.js with edge runtime support

### External Integrations
- **Yahoo Fantasy Sports API**: Player data, game statistics, and fantasy league management

## 📁 Project Structure

\`\`\`
top-shelf-sports/
├── app/
│   ├── api/
│   │   └── yahoo-sports/          # Yahoo Sports API integration
│   │       ├── auth/               # OAuth authentication
│   │       ├── games/              # Game data endpoints
│   │       ├── players/            # Player data endpoints
│   │       └── search/             # Search functionality
│   ├── betting/                    # Betting information page
│   ├── fantasy/                    # Fantasy sports dashboard
│   ├── learn/                      # Sports education pages (25+ sports)
│   ├── player-scout/               # Player search and analysis
│   ├── yahoo-test/                 # API testing interface
│   ├── layout.tsx                  # Root layout with navigation
│   ├── page.tsx                    # Homepage
│   └── globals.css                 # Global styles and theme
├── components/
│   ├── navbar.tsx                  # Main navigation component
│   ├── theme-provider.tsx          # Dark/light theme support
│   └── ui/                         # shadcn/ui components
├── lib/
│   ├── utils.ts                    # Utility functions
│   └── yahoo-sports.ts             # Yahoo Sports API client
├── hooks/                          # Custom React hooks
├── public/                         # Static assets
└── styles/                         # Additional stylesheets
\`\`\`

## 🏃 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm
- Yahoo Developer Account with API credentials

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`bash
YAHOO_CLIENT_ID=your_yahoo_client_id
YAHOO_CLIENT_SECRET=your_yahoo_client_secret
YAHOO_REDIRECT_URI=http://localhost:3000/api/yahoo-sports/auth/callback
\`\`\`

**Note**: These environment variables are already configured in the v0 workspace. If deploying locally, you'll need to obtain your own Yahoo API credentials from the [Yahoo Developer Network](https://developer.yahoo.com/).

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd top-shelf-sports
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
# or
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
pnpm dev
# or
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Testing Yahoo Sports Integration

1. Navigate to `/yahoo-test` to access the API testing interface
2. Click "Connect to Yahoo" to authenticate
3. Test various API endpoints (games, players, search)

## 🔧 Making Enhancements

### Adding New Sports to Learn Section

1. Create a new page in `app/learn/[sport-name]/page.tsx`:
\`\`\`tsx
export default function SportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Sport Name</h1>
      {/* Your content */}
    </div>
  )
}
\`\`\`

2. Add navigation link in `app/learn/page.tsx`

### Extending Yahoo Sports API Integration

1. Add new endpoints in `app/api/yahoo-sports/[endpoint]/route.ts`
2. Update the Yahoo Sports client in `lib/yahoo-sports.ts` if needed
3. Use the provided helper functions for authentication and API calls

### Customizing UI Components

All UI components are located in `components/ui/` and follow the shadcn/ui pattern:
- Fully customizable with Tailwind CSS
- TypeScript support with proper typing
- Accessible by default (ARIA compliant)

### Theme Customization

Edit `app/globals.css` to customize the color scheme:
\`\`\`css
@theme inline {
  --color-primary: /* your primary color */;
  --color-background: /* your background color */;
  /* ... other design tokens */
}
\`\`\`

### Adding New Features

1. **Client Components**: Create in `components/` for interactive UI
2. **Server Components**: Use by default in `app/` for better performance
3. **API Routes**: Add in `app/api/` for backend functionality
4. **Utilities**: Add helper functions in `lib/utils.ts`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Yahoo Fantasy Sports API](https://developer.yahoo.com/fantasysports/guide/)
- [v0.app Documentation](https://v0.dev/docs)

## 🚢 Deployment

This project is configured for automatic deployment on Vercel:

1. Push changes to your GitHub repository
2. Vercel automatically deploys from the main branch
3. Environment variables are managed in Vercel dashboard

**Live Deployment**: [https://vercel.com/wesleyrhawes-gmailcoms-projects/v0-fantasy-sports](https://vercel.com/wesleyrhawes-gmailcoms-projects/v0-fantasy-sports)

## 🤝 Contributing

Continue building and enhancing this project on [v0.app](https://v0.app/chat/bRlJzfNBr3M)

## 📝 License

This project was built with [v0.app](https://v0.app) and is automatically synced with your v0 deployments.
