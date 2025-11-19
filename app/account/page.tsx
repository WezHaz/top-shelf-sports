"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  Mail,
  Lock,
  Shield,
  Trophy,
  DollarSign,
  Users,
  Activity,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Plus,
  Trash2,
  Edit2,
  Bitcoin,
  Wallet,
} from "lucide-react"

// Mock user data
const mockUser = {
  name: "John Athlete",
  email: "john.athlete@email.com",
  emailVerified: true,
  joinDate: "2024-01-15",
  avatarUrl: "/athlete-profile.png",
}

// Mock activity data
const mockActivities = [
  { id: "1", sport: "Basketball", level: "Intermediate", team: "Warriors Youth League", status: "active" },
  { id: "2", sport: "Soccer", level: "Advanced", team: "FC Thunder", status: "active" },
  { id: "3", sport: "Tennis", level: "Beginner", team: "Court Champions", status: "completed" },
]

// Mock Yahoo connection status
const mockYahooConnection = {
  connected: true,
  email: "john.athlete@yahoo.com",
  leagues: [
    { id: "1", name: "Fantasy Football League 2024", sport: "Football", members: 12 },
    { id: "2", name: "NBA Championship League", sport: "Basketball", members: 10 },
  ],
}

export default function AccountPage() {
  const [user] = useState(mockUser)
  const [activities] = useState(mockActivities)
  const [yahooConnection, setYahooConnection] = useState(mockYahooConnection)

  // Profile settings
  const [displayName, setDisplayName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  // Password change
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // K-12 team submission
  const [teamName, setTeamName] = useState("")
  const [teamSport, setTeamSport] = useState("")
  const [teamLevel, setTeamLevel] = useState("")
  const [teamDescription, setTeamDescription] = useState("")
  const [teamContact, setTeamContact] = useState("")

  // Donation addresses
  const [donationAddresses, setDonationAddresses] = useState([
    { id: "1", type: "Bitcoin", address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", label: "Basketball Team Fund" },
    { id: "2", type: "Ethereum", address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb", label: "Soccer Equipment" },
  ])
  const [newAddressType, setNewAddressType] = useState("")
  const [newAddressValue, setNewAddressValue] = useState("")
  const [newAddressLabel, setNewAddressLabel] = useState("")
  const [showAddAddress, setShowAddAddress] = useState(false)

  const handleSaveProfile = () => {
    console.log("[v0] Saving profile:", { displayName, email })
    alert("Profile updated successfully!")
  }

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    console.log("[v0] Changing password")
    alert("Password changed successfully!")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  const handleVerifyEmail = () => {
    console.log("[v0] Sending verification email to:", email)
    alert("Verification email sent! Please check your inbox.")
  }

  const handleSubmitTeam = () => {
    if (!teamName || !teamSport || !teamLevel || !teamDescription || !teamContact) {
      alert("Please fill in all fields!")
      return
    }
    console.log("[v0] Submitting K-12 team:", { teamName, teamSport, teamLevel, teamDescription, teamContact })
    alert("Team submitted successfully! It will be reviewed and added to the K-12 page.")
    setTeamName("")
    setTeamSport("")
    setTeamLevel("")
    setTeamDescription("")
    setTeamContact("")
  }

  const handleAddDonationAddress = () => {
    if (!newAddressType || !newAddressValue || !newAddressLabel) {
      alert("Please fill in all fields!")
      return
    }
    const newAddress = {
      id: Date.now().toString(),
      type: newAddressType,
      address: newAddressValue,
      label: newAddressLabel,
    }
    setDonationAddresses([...donationAddresses, newAddress])
    setNewAddressType("")
    setNewAddressValue("")
    setNewAddressLabel("")
    setShowAddAddress(false)
  }

  const handleRemoveDonationAddress = (id: string) => {
    setDonationAddresses(donationAddresses.filter((addr) => addr.id !== id))
  }

  const handleDisconnectYahoo = () => {
    console.log("[v0] Disconnecting Yahoo account")
    setYahooConnection({ ...yahooConnection, connected: false })
    alert("Yahoo account disconnected successfully!")
  }

  const handleConnectYahoo = () => {
    console.log("[v0] Redirecting to Yahoo OAuth")
    window.location.href = "/api/yahoo-sports/auth/login"
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-4xl font-bold text-transparent">
            My Account
          </h1>
          <p className="text-muted-foreground">Manage your profile, sports activities, and integrations</p>
        </div>

        {/* Profile Overview Card */}
        <Card className="mb-8 border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <img
              src={user.avatarUrl || "/placeholder.svg"}
              alt="Profile"
              className="h-24 w-24 rounded-full border-4 border-primary/30"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
              <div className="mt-2 flex items-center gap-2">
                {user.emailVerified ? (
                  <Badge variant="default" className="bg-accent">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Email Verified
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <XCircle className="mr-1 h-3 w-3" />
                    Email Not Verified
                  </Badge>
                )}
                <Badge variant="outline">Member since {new Date(user.joinDate).toLocaleDateString()}</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="profile">
              <User className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="activities">
              <Activity className="mr-2 h-4 w-4" />
              Activities
            </TabsTrigger>
            <TabsTrigger value="k12">
              <Users className="mr-2 h-4 w-4" />
              K-12 Teams
            </TabsTrigger>
            <TabsTrigger value="donations">
              <DollarSign className="mr-2 h-4 w-4" />
              Donations
            </TabsTrigger>
            <TabsTrigger value="yahoo">
              <Trophy className="mr-2 h-4 w-4" />
              Yahoo Sports
            </TabsTrigger>
            <TabsTrigger value="security">
              <Shield className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold text-foreground">Profile Settings</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="mt-2 border-primary/30 bg-background/50"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 border-primary/30 bg-background/50"
                  />
                  {!user.emailVerified && (
                    <Button variant="link" onClick={handleVerifyEmail} className="mt-2 p-0 text-accent">
                      Send verification email
                    </Button>
                  )}
                </div>
                <div className="flex justify-end pt-4">
                  <Button
                    onClick={handleSaveProfile}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities">
            <Card className="border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">My Sports Activities</h3>
                <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Activity
                </Button>
              </div>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-4"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{activity.sport}</h4>
                      <p className="text-sm text-muted-foreground">{activity.team}</p>
                      <Badge variant="outline" className="mt-2">
                        {activity.level}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={activity.status === "active" ? "default" : "secondary"}>{activity.status}</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* K-12 Team Submission Tab */}
          <TabsContent value="k12">
            <Card className="border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold text-foreground">Submit K-12 Team</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Share your youth sports team with the community. Submissions will be reviewed before appearing on the
                K-12 page.
              </p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Warriors Youth Basketball"
                    className="mt-2 border-primary/30 bg-background/50"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="teamSport">Sport</Label>
                    <Select value={teamSport} onValueChange={setTeamSport}>
                      <SelectTrigger className="mt-2 border-primary/30 bg-background/50">
                        <SelectValue placeholder="Select sport" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basketball">Basketball</SelectItem>
                        <SelectItem value="soccer">Soccer</SelectItem>
                        <SelectItem value="baseball">Baseball</SelectItem>
                        <SelectItem value="football">Football</SelectItem>
                        <SelectItem value="volleyball">Volleyball</SelectItem>
                        <SelectItem value="tennis">Tennis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="teamLevel">Age/Level</Label>
                    <Select value={teamLevel} onValueChange={setTeamLevel}>
                      <SelectTrigger className="mt-2 border-primary/30 bg-background/50">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="elementary">Elementary (K-5)</SelectItem>
                        <SelectItem value="middle">Middle School (6-8)</SelectItem>
                        <SelectItem value="high">High School (9-12)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="teamDescription">Description</Label>
                  <Textarea
                    id="teamDescription"
                    value={teamDescription}
                    onChange={(e) => setTeamDescription(e.target.value)}
                    placeholder="Tell us about your team, practice schedule, and what makes it special..."
                    rows={4}
                    className="mt-2 border-primary/30 bg-background/50"
                  />
                </div>
                <div>
                  <Label htmlFor="teamContact">Contact Information</Label>
                  <Input
                    id="teamContact"
                    value={teamContact}
                    onChange={(e) => setTeamContact(e.target.value)}
                    placeholder="Email or phone number"
                    className="mt-2 border-primary/30 bg-background/50"
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button
                    onClick={handleSubmitTeam}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    Submit Team for Review
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Donations Tab */}
          <TabsContent value="donations">
            <Card className="border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Donation Addresses</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Configure cryptocurrency and payment addresses to accept donations for your sports activities
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={() => setShowAddAddress(true)}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Address
                </Button>
              </div>

              {showAddAddress && (
                <div className="mb-6 space-y-4 rounded-lg border border-accent/30 bg-background/50 p-4">
                  <h4 className="font-semibold text-foreground">Add New Donation Address</h4>
                  <div>
                    <Label htmlFor="addressType">Type</Label>
                    <Select value={newAddressType} onValueChange={setNewAddressType}>
                      <SelectTrigger className="mt-2 border-primary/30 bg-background/50">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Bitcoin">Bitcoin</SelectItem>
                        <SelectItem value="Ethereum">Ethereum</SelectItem>
                        <SelectItem value="USDC">USDC</SelectItem>
                        <SelectItem value="PayPal">PayPal</SelectItem>
                        <SelectItem value="Venmo">Venmo</SelectItem>
                        <SelectItem value="CashApp">Cash App</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="addressValue">Address/Username</Label>
                    <Input
                      id="addressValue"
                      value={newAddressValue}
                      onChange={(e) => setNewAddressValue(e.target.value)}
                      placeholder="Enter wallet address or payment username"
                      className="mt-2 border-primary/30 bg-background/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="addressLabel">Label</Label>
                    <Input
                      id="addressLabel"
                      value={newAddressLabel}
                      onChange={(e) => setNewAddressLabel(e.target.value)}
                      placeholder="e.g., Basketball Team Equipment Fund"
                      className="mt-2 border-primary/30 bg-background/50"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setShowAddAddress(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddDonationAddress} className="bg-accent text-accent-foreground">
                      Add Address
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {donationAddresses.length === 0 ? (
                  <p className="text-center text-sm text-muted-foreground">No donation addresses configured yet</p>
                ) : (
                  donationAddresses.map((address) => (
                    <div
                      key={address.id}
                      className="flex items-start justify-between rounded-lg border border-border/50 bg-background/50 p-4"
                    >
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          {address.type === "Bitcoin" || address.type === "Ethereum" || address.type === "USDC" ? (
                            <Bitcoin className="h-5 w-5 text-accent" />
                          ) : (
                            <Wallet className="h-5 w-5 text-accent" />
                          )}
                          <Badge variant="outline">{address.type}</Badge>
                        </div>
                        <p className="font-semibold text-foreground">{address.label}</p>
                        <p className="mt-1 break-all font-mono text-sm text-muted-foreground">{address.address}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveDonationAddress(address.id)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </TabsContent>

          {/* Yahoo Sports Tab */}
          <TabsContent value="yahoo">
            <Card className="border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold text-foreground">Yahoo Sports Integration</h3>

              {yahooConnection.connected ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between rounded-lg border border-secondary/30 bg-secondary/5 p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-8 w-8 text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground">Connected to Yahoo Sports</p>
                        <p className="text-sm text-muted-foreground">{yahooConnection.email}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={handleDisconnectYahoo}
                      className="border-destructive/30 text-destructive hover:bg-destructive/10 bg-transparent"
                    >
                      Disconnect
                    </Button>
                  </div>

                  <div>
                    <h4 className="mb-4 font-semibold text-foreground">Your Fantasy Leagues</h4>
                    <div className="space-y-3">
                      {yahooConnection.leagues.map((league) => (
                        <div
                          key={league.id}
                          className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-4"
                        >
                          <div>
                            <p className="font-medium text-foreground">{league.name}</p>
                            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                              <Badge variant="outline">{league.sport}</Badge>
                              <span>{league.members} members</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/50 bg-background/50 p-4">
                    <h4 className="mb-2 font-semibold text-foreground">Integration Features</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        View your fantasy league data
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        Track player performance and stats
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        Get matchup recommendations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        Access real-time updates
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Trophy className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <h4 className="mb-2 text-lg font-semibold text-foreground">Connect Your Yahoo Sports Account</h4>
                  <p className="mb-6 text-muted-foreground">
                    Link your Yahoo account to access fantasy league data and enhance your sports experience
                  </p>
                  <Button
                    onClick={handleConnectYahoo}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Connect to Yahoo Sports
                  </Button>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <Card className="border-primary/30 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="mb-6 text-xl font-bold text-foreground">Security Settings</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-4 font-semibold text-foreground">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="mt-2 border-primary/30 bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="mt-2 border-primary/30 bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="mt-2 border-primary/30 bg-background/50"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button
                        onClick={handleChangePassword}
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Lock className="mr-2 h-4 w-4" />
                        Change Password
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-6">
                  <h4 className="mb-4 font-semibold text-foreground">Email Verification</h4>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">{user.email}</p>
                        <p className="text-sm text-muted-foreground">
                          {user.emailVerified ? "Verified" : "Not verified"}
                        </p>
                      </div>
                    </div>
                    {!user.emailVerified && (
                      <Button
                        onClick={handleVerifyEmail}
                        variant="outline"
                        className="border-accent/30 text-accent hover:bg-accent/10 bg-transparent"
                      >
                        Verify Email
                      </Button>
                    )}
                  </div>
                </div>

                <div className="border-t border-border/50 pt-6">
                  <h4 className="mb-4 font-semibold text-foreground">Account Security</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm text-muted-foreground">Two-factor authentication available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm text-muted-foreground">Secure password encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="text-sm text-muted-foreground">OAuth integrations protected</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
