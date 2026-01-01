import { Search, MapPin, Calendar, AlertCircle, MessageCircle, TrendingUp, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BottomNav } from "@/components/bottom-nav"
import { destinations } from "@/lib/mock-data"

export default function HomePage() {
  const featuredDestinations = destinations.slice(0, 3)
  const popularThisWeek = destinations.filter((d) => d.rating >= 4.5).slice(0, 3)
  const topRated = destinations.sort((a, b) => b.rating - a.rating).slice(0, 3)

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground px-4 pt-8 pb-12">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-balance">Explore Sierra Leone</h1>
          <p className="text-primary-foreground/90 mb-6 leading-relaxed">Discover, Book, Travel Safely</p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search destinations, hotels, guides..."
              className="pl-10 bg-card text-foreground border-border"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-lg mx-auto px-4 -mt-6">
        <div className="grid grid-cols-2 gap-3">
          <Link href="/explore">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold text-sm text-center">Destinations</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/services">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <span className="font-semibold text-sm text-center">Book a Service</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/sos">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <span className="font-semibold text-sm text-center">Emergency SOS</span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/help">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-2">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <span className="font-semibold text-sm text-center">WhatsApp Help</span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold">Recommended Near You</h2>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {featuredDestinations.map((destination) => (
            <Link key={destination.id} href={`/destinations/${destination.id}`}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="relative w-32 h-32 flex-shrink-0 bg-muted">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-card/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      {destination.category}
                    </div>
                  </div>
                  <CardContent className="flex-1 p-4 flex flex-col justify-center">
                    <h3 className="font-semibold text-base mb-1 line-clamp-1">{destination.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {destination.region}
                    </p>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{destination.rating}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-secondary" />
          <h2 className="text-xl font-bold">Popular This Week</h2>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {popularThisWeek.map((destination) => (
            <Link key={destination.id} href={`/destinations/${destination.id}`}>
              <Card className="w-48 flex-shrink-0 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-32 bg-muted">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-secondary">Trending</Badge>
                </div>
                <CardContent className="p-3">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-1">{destination.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {destination.region}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 mt-8 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <h2 className="text-xl font-bold">Top-Rated Destinations</h2>
        </div>

        <div className="space-y-3">
          {topRated.map((destination, index) => (
            <Link key={destination.id} href={`/destinations/${destination.id}`}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="text-3xl font-bold text-primary/20 w-8 text-center flex-shrink-0">{index + 1}</div>
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1 line-clamp-1">{destination.name}</h3>
                    <p className="text-xs text-muted-foreground mb-1">{destination.region}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                      <span className="text-xs text-muted-foreground">/ 5.0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
