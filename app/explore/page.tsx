"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { destinations } from "@/lib/mock-data"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const regions = ["all", ...Array.from(new Set(destinations.map((d) => d.region)))]
  const categories = ["all", "Beach", "Island", "Mountain", "Cultural"]

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      searchQuery === "" ||
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRegion = selectedRegion === "all" || destination.region === selectedRegion
    const matchesCategory = selectedCategory === "all" || destination.category === selectedCategory

    return matchesSearch && matchesRegion && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-4 py-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Explore Destinations</h1>
          <Input
            type="search"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-card text-foreground border-border"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card border-b border-border px-4 py-4">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Region</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region === "all" ? "All Regions" : region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-lg mx-auto px-4 py-6">
        <p className="text-sm text-muted-foreground mb-4">
          {filteredDestinations.length} {filteredDestinations.length === 1 ? "destination" : "destinations"} found
        </p>

        {filteredDestinations.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <MapPin className="h-12 w-12 text-muted-foreground mb-3" />
              <p className="text-muted-foreground text-center">No destinations found. Try adjusting your filters.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {filteredDestinations.map((destination) => (
              <Link key={destination.id} href={`/destinations/${destination.id}`}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 bg-muted">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                      {destination.category}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{destination.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {destination.region}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {destination.description}
                    </p>
                    <div className="mt-3 pt-3 border-t border-border flex gap-4 text-xs text-muted-foreground">
                      <span>{destination.nearbyServices.hotels} Hotels</span>
                      <span>{destination.nearbyServices.guides} Guides</span>
                      <span>{destination.nearbyServices.restaurants} Restaurants</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
