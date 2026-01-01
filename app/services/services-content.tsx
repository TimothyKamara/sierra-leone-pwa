"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, BadgeCheck, Star, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { tourismServices } from "@/lib/mock-data"

export default function ServicesContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")

  const serviceTypes = ["all", "Hotel", "Guide", "Transport"]

  const filteredServices = tourismServices.filter((service) => {
    const matchesSearch =
      searchQuery === "" ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = selectedType === "all" || service.type === selectedType

    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-4 py-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-2">Tourism Services</h1>
          <p className="text-primary-foreground/90 text-sm mb-4 leading-relaxed">
            Verified hotels, guides, and transport providers
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card text-foreground border-border"
            />
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-card border-b border-border px-4 py-4">
        <div className="max-w-lg mx-auto">
          <label className="text-xs text-muted-foreground mb-1 block">Service Type</label>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === "all" ? "All Services" : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-lg mx-auto px-4 py-6">
        <p className="text-sm text-muted-foreground mb-4">
          {filteredServices.length} {filteredServices.length === 1 ? "service" : "services"} found
        </p>

        {filteredServices.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mb-3" />
              <p className="text-muted-foreground text-center">No services found. Try adjusting your search.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-base">{service.name}</h3>
                        {service.verified && (
                          <BadgeCheck className="h-4 w-4 text-primary flex-shrink-0" aria-label="Verified" />
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs mb-2">
                        {service.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded">
                      <Star className="h-3 w-3 text-accent fill-accent" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{service.description}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {service.location}
                      </p>
                      <p className="text-sm font-semibold text-primary">{service.priceRange}</p>
                    </div>
                    <Link href={`/book?service=${service.id}`}>
                      <Button size="sm">Request Booking</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
