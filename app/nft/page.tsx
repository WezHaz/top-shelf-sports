"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wallet, ImageIcon, Upload, DollarSign, TrendingUp, Eye, Heart, Share2, Tag, Check } from "lucide-react"

// Mock NFT marketplace data
const mockNFTs = [
  {
    id: "1",
    name: "Championship Ring #001",
    image: "/golden-championship-ring-nft.jpg",
    price: "2.5",
    currency: "ETH",
    creator: "john.athlete",
    likes: 124,
    views: 456,
    sport: "Basketball",
  },
  {
    id: "2",
    name: "Game Winning Shot",
    image: "/basketball-game-winning-shot-moment-nft.jpg",
    price: "1.8",
    currency: "ETH",
    creator: "sarah.champion",
    likes: 89,
    views: 342,
    sport: "Basketball",
  },
  {
    id: "3",
    name: "Soccer Goal Celebration",
    image: "/soccer-goal-celebration-nft.jpg",
    price: "3.2",
    currency: "ETH",
    creator: "mike.striker",
    likes: 156,
    views: 589,
    sport: "Soccer",
  },
]

export default function NFTPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [activeTab, setActiveTab] = useState("marketplace")

  // NFT creation form
  const [nftName, setNftName] = useState("")
  const [nftDescription, setNftDescription] = useState("")
  const [nftPrice, setNftPrice] = useState("")
  const [nftCurrency, setNftCurrency] = useState("ETH")
  const [nftSport, setNftSport] = useState("")
  const [nftImage, setNftImage] = useState<File | null>(null)
  const [nftImagePreview, setNftImagePreview] = useState("")

  const handleConnectWallet = async () => {
    console.log("[v0] Connecting Web3 wallet")
    // In a real implementation, this would connect to MetaMask or another Web3 wallet
    // For now, we'll simulate the connection
    setTimeout(() => {
      const mockAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
      setWalletAddress(mockAddress)
      setWalletConnected(true)
      alert("Wallet connected successfully!")
    }, 1000)
  }

  const handleDisconnectWallet = () => {
    console.log("[v0] Disconnecting wallet")
    setWalletAddress("")
    setWalletConnected(false)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setNftImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setNftImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleMintNFT = () => {
    if (!walletConnected) {
      alert("Please connect your wallet first!")
      return
    }
    if (!nftName || !nftDescription || !nftPrice || !nftSport || !nftImage) {
      alert("Please fill in all fields and upload an image!")
      return
    }
    console.log("[v0] Minting NFT:", {
      name: nftName,
      description: nftDescription,
      price: nftPrice,
      currency: nftCurrency,
      sport: nftSport,
    })
    alert("NFT minted successfully! It will appear in your collection and the marketplace.")
    // Reset form
    setNftName("")
    setNftDescription("")
    setNftPrice("")
    setNftSport("")
    setNftImage(null)
    setNftImagePreview("")
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-4xl font-bold text-transparent">
            Sports NFT Marketplace
          </h1>
          <p className="text-muted-foreground">Create, buy, and sell unique sports moments and collectibles</p>
        </div>

        {/* Wallet Connection Card */}
        <Card className="mb-8 border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Wallet className="h-6 w-6 text-accent" />
              </div>
              <div>
                {walletConnected ? (
                  <>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground">Wallet Connected</p>
                      <Badge variant="default" className="bg-accent">
                        <Check className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground">{walletAddress}</p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-foreground">No Wallet Connected</p>
                    <p className="text-sm text-muted-foreground">Connect your Web3 wallet to get started</p>
                  </>
                )}
              </div>
            </div>
            {walletConnected ? (
              <Button
                variant="outline"
                onClick={handleDisconnectWallet}
                className="border-destructive/30 text-destructive hover:bg-destructive/10 bg-transparent"
              >
                Disconnect Wallet
              </Button>
            ) : (
              <Button onClick={handleConnectWallet} className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            )}
          </div>
        </Card>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="marketplace">
              <TrendingUp className="mr-2 h-4 w-4" />
              Marketplace
            </TabsTrigger>
            <TabsTrigger value="create">
              <Upload className="mr-2 h-4 w-4" />
              Create NFT
            </TabsTrigger>
            <TabsTrigger value="my-collection">
              <ImageIcon className="mr-2 h-4 w-4" />
              My Collection
            </TabsTrigger>
          </TabsList>

          {/* Marketplace Tab */}
          <TabsContent value="marketplace">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockNFTs.map((nft) => (
                <Card
                  key={nft.id}
                  className="group overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={nft.image || "/placeholder.svg"}
                      alt={nft.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <Badge className="absolute right-3 top-3 bg-secondary">{nft.sport}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-bold text-foreground">{nft.name}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">by @{nft.creator}</p>
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Current Price</p>
                        <p className="text-lg font-bold text-accent">
                          {nft.price} {nft.currency}
                        </p>
                      </div>
                      <div className="flex gap-3 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-xs">{nft.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span className="text-xs">{nft.views}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={!walletConnected}
                      >
                        <DollarSign className="mr-2 h-4 w-4" />
                        Buy Now
                      </Button>
                      <Button variant="outline" size="icon" className="border-primary/30 bg-transparent">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Create NFT Tab */}
          <TabsContent value="create">
            <Card className="border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">Mint Your Sports NFT</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create a unique digital collectible from your sports moments
                </p>
              </div>

              {!walletConnected && (
                <div className="mb-6 rounded-lg border border-accent/30 bg-accent/10 p-4">
                  <p className="text-sm text-accent">Please connect your wallet to create NFTs</p>
                </div>
              )}

              <div className="space-y-6">
                {/* Image Upload */}
                <div>
                  <Label htmlFor="nftImage">Upload Image or Video</Label>
                  <div className="mt-2">
                    {nftImagePreview ? (
                      <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg border border-primary/30">
                        <img
                          src={nftImagePreview || "/placeholder.svg"}
                          alt="NFT Preview"
                          className="h-full w-full object-cover"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() => {
                            setNftImage(null)
                            setNftImagePreview("")
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <label
                        htmlFor="nftImage"
                        className="flex aspect-square w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary/30 bg-background/50 transition-colors hover:border-accent/50 hover:bg-accent/5"
                      >
                        <Upload className="mb-3 h-12 w-12 text-muted-foreground" />
                        <p className="mb-1 text-sm font-medium text-foreground">Click to upload</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG, GIF, or MP4 (Max 100MB)</p>
                        <input
                          id="nftImage"
                          type="file"
                          accept="image/*,video/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          disabled={!walletConnected}
                        />
                      </label>
                    )}
                  </div>
                </div>

                {/* NFT Details */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="nftName">NFT Name</Label>
                    <Input
                      id="nftName"
                      value={nftName}
                      onChange={(e) => setNftName(e.target.value)}
                      placeholder="Championship Ring #001"
                      className="mt-2 border-primary/30 bg-background/50"
                      disabled={!walletConnected}
                    />
                  </div>
                  <div>
                    <Label htmlFor="nftSport">Sport Category</Label>
                    <Select value={nftSport} onValueChange={setNftSport} disabled={!walletConnected}>
                      <SelectTrigger className="mt-2 border-primary/30 bg-background/50">
                        <SelectValue placeholder="Select sport" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basketball">Basketball</SelectItem>
                        <SelectItem value="soccer">Soccer</SelectItem>
                        <SelectItem value="football">Football</SelectItem>
                        <SelectItem value="baseball">Baseball</SelectItem>
                        <SelectItem value="tennis">Tennis</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="nftDescription">Description</Label>
                  <Textarea
                    id="nftDescription"
                    value={nftDescription}
                    onChange={(e) => setNftDescription(e.target.value)}
                    placeholder="Describe your NFT, its significance, and the story behind it..."
                    rows={4}
                    className="mt-2 border-primary/30 bg-background/50"
                    disabled={!walletConnected}
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="nftPrice">Price</Label>
                    <Input
                      id="nftPrice"
                      type="number"
                      step="0.01"
                      value={nftPrice}
                      onChange={(e) => setNftPrice(e.target.value)}
                      placeholder="2.5"
                      className="mt-2 border-primary/30 bg-background/50"
                      disabled={!walletConnected}
                    />
                  </div>
                  <div>
                    <Label htmlFor="nftCurrency">Currency</Label>
                    <Select value={nftCurrency} onValueChange={setNftCurrency} disabled={!walletConnected}>
                      <SelectTrigger className="mt-2 border-primary/30 bg-background/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ETH">ETH (Ethereum)</SelectItem>
                        <SelectItem value="MATIC">MATIC (Polygon)</SelectItem>
                        <SelectItem value="SOL">SOL (Solana)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Minting Info */}
                <div className="rounded-lg border border-border/50 bg-background/50 p-4">
                  <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                    <Tag className="h-5 w-5 text-accent" />
                    Minting Details
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Gas Fee (estimated)</span>
                      <span className="font-medium text-foreground">~0.002 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Fee</span>
                      <span className="font-medium text-foreground">2.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Royalty (on resale)</span>
                      <span className="font-medium text-foreground">10%</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" disabled={!walletConnected}>
                    Preview
                  </Button>
                  <Button
                    onClick={handleMintNFT}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={!walletConnected}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Mint NFT
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* My Collection Tab */}
          <TabsContent value="my-collection">
            <Card className="border-primary/30 bg-card/50 p-12 text-center backdrop-blur-sm">
              <ImageIcon className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-bold text-foreground">No NFTs Yet</h3>
              <p className="mb-6 text-muted-foreground">
                {walletConnected
                  ? "Create your first NFT to start building your collection"
                  : "Connect your wallet to view your NFT collection"}
              </p>
              {walletConnected ? (
                <Button
                  onClick={() => setActiveTab("create")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Create Your First NFT
                </Button>
              ) : (
                <Button onClick={handleConnectWallet} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
