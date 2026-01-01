import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Hotel, Users, Utensils, Map, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { destinations, tourismServices } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    id: destination.id,
  }))
}

export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = destinations.find((d) => d.id === params.id)

  if (!destination) {
    notFound()
  }

  const nearbyHotels = tourismServices.filter((s) => s.type === "Hotel").slice(0, 2)
  const nearbyGuides = tourismServices.filter((s) => s.type === "Guide").slice(0, 2)

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Image Banner */}
      <div className="relative h-64 bg-muted">
        <img
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <Link href="/explore">
          <Button size="icon" variant="secondary" className="absolute top-4 left-4 rounded-full shadow-lg">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <Badge className="mb-2">{destination.category}</Badge>
          <h1 className="text-3xl font-bold text-white text-balance">{destination.name}</h1>
          <p className="text-white/90 flex items-center gap-1 mt-1">
            <MapPin className="h-4 w-4" />
            {destination.region}
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Description */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
          </CardContent>
        </Card>

        {/* Nearby Services Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Nearby Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Hotel className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{destination.nearbyServices.hotels}</p>
                  <p className="text-xs text-muted-foreground">Hotels</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{destination.nearbyServices.guides}</p>
                  <p className="text-xs text-muted-foreground">Guides</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Utensils className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{destination.nearbyServices.restaurants}</p>
                  <p className="text-xs text-muted-foreground">Restaurants</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Hotels */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Nearby Hotels</h2>
            <Link href="/services?type=Hotel">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {nearbyHotels.map((hotel) => (
              <Card key={hotel.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm">{hotel.name}</h3>
                      {hotel.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{hotel.location}</p>
                    <p className="text-xs font-medium text-primary">{hotel.priceRange}</p>
                  </div>
                  <Link href={`/book?service=${hotel.id}`}>
                    <Button size="sm">Book</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Guides */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Tour Guides</h2>
            <Link href="/services?type=Guide">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {nearbyGuides.map((guide) => (
              <Card key={guide.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm">{guide.name}</h3>
                      {guide.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mb-1 line-clamp-1">{guide.description}</p>
                    <p className="text-xs font-medium text-secondary">{guide.priceRange}</p>
                  </div>
                  <Link href={`/book?service=${guide.id}`}>
                    <Button size="sm" variant="secondary">
                      Book
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Link href={`/book?destination=${destination.id}`}>
            <Button className="w-full" size="lg">
              <Calendar className="h-4 w-4 mr-2" />
              Book a Guide
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full bg-transparent">
            <Map className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
