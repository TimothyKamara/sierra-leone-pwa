import { Users, MapPin, Calendar, CheckCircle2, Clock, XCircle, TrendingUp, DollarSign, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BottomNav } from "@/components/bottom-nav"

const dashboardStats = [
  { label: "Total Tourists", value: "1,247", change: "+12%", icon: Users, color: "text-ocean-600" },
  { label: "Active Listings", value: "24", change: "+3", icon: MapPin, color: "text-primary" },
  { label: "Total Bookings", value: "384", change: "+23%", icon: Calendar, color: "text-secondary" },
  { label: "Revenue (Mock)", value: "Le 45.2M", change: "+18%", icon: DollarSign, color: "text-forest-600" },
]

const topDestinations = [
  { name: "Tokeh Beach", visits: 324, revenue: "Le 12.5M" },
  { name: "Tacugama Sanctuary", visits: 289, revenue: "Le 9.8M" },
  { name: "Bunce Island", visits: 245, revenue: "Le 8.2M" },
]

const pendingListings = [
  { id: "1", name: "Ocean View Lodge", type: "Hotel", location: "Western Area", submitted: "2025-01-05" },
  { id: "2", name: "Safari Adventures SL", type: "Guide", location: "Northern Province", submitted: "2025-01-06" },
  { id: "3", name: "City Express Transport", type: "Transport", location: "Freetown", submitted: "2025-01-07" },
]

const recentBookings = [
  {
    id: "1",
    customer: "James Wilson",
    service: "Abdul's Beach Tours",
    date: "2025-01-15",
    status: "confirmed",
    amount: "Le 450,000",
  },
  {
    id: "2",
    customer: "Sarah Chen",
    service: "Mountain Trails SL",
    date: "2025-01-18",
    status: "pending",
    amount: "Le 320,000",
  },
  {
    id: "3",
    customer: "Michael Brown",
    service: "Radisson Blu Hotel",
    date: "2025-01-20",
    status: "confirmed",
    amount: "Le 890,000",
  },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-white/90 text-sm mt-1">Analytics & Management Portal</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dashboardStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Most Visited Destinations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Most Visited Destinations
              </CardTitle>
              <CardDescription>Top performing locations this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topDestinations.map((dest, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{dest.name}</span>
                      <div className="flex items-center gap-2">
                        <Eye className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">{dest.visits}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-ocean-600 rounded-full"
                        style={{ width: `${(dest.visits / 324) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Revenue: {dest.revenue}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Payment Summary
              </CardTitle>
              <CardDescription>Mock revenue breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Orange Money</p>
                    <p className="text-xs text-muted-foreground">156 transactions</p>
                  </div>
                  <p className="font-bold text-orange-600">Le 18.5M</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Africell Money</p>
                    <p className="text-xs text-muted-foreground">132 transactions</p>
                  </div>
                  <p className="font-bold text-blue-600">Le 15.2M</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Cash on Arrival</p>
                    <p className="text-xs text-muted-foreground">96 transactions</p>
                  </div>
                  <p className="font-bold text-green-600">Le 11.5M</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Listings */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Listings</CardTitle>
            <CardDescription>New providers awaiting verification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingListings.map((listing) => (
                <div key={listing.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-sm">{listing.name}</p>
                      <Badge variant="outline">{listing.type}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{listing.location}</p>
                    <p className="text-xs text-muted-foreground">Submitted: {listing.submitted}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-secondary hover:bg-secondary/90 cursor-pointer">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Approve
                    </Badge>
                    <Badge variant="destructive" className="cursor-pointer">
                      <XCircle className="h-3 w-3 mr-1" />
                      Reject
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest booking requests from tourists</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <p className="font-semibold text-sm">{booking.customer}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{booking.service}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(booking.date).toLocaleDateString()}
                      </p>
                      <p className="text-xs font-medium text-ocean-600">{booking.amount}</p>
                    </div>
                  </div>
                  <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                    {booking.status === "confirmed" ? (
                      <>
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Confirmed
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3 mr-1" />
                        Pending
                      </>
                    )}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
