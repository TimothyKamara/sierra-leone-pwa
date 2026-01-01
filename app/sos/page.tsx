"use client"

import { useState } from "react"
import { AlertCircle, Phone, MapPin, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BottomNav } from "@/components/bottom-nav"
import { emergencyContacts } from "@/lib/mock-data"

export default function SOSPage() {
  const [locationShared, setLocationShared] = useState(false)

  const handleSOSPress = () => {
    // In a real app, this would trigger emergency protocols
    alert("Emergency alert sent! Authorities have been notified.")
  }

  const handleShareLocation = () => {
    setLocationShared(true)
    // In a real app, this would share actual GPS coordinates
    setTimeout(() => setLocationShared(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-destructive text-destructive-foreground px-4 py-6">
        <div className="max-w-lg mx-auto text-center">
          <AlertCircle className="h-12 w-12 mx-auto mb-3" />
          <h1 className="text-2xl font-bold">Emergency SOS</h1>
          <p className="text-destructive-foreground/90 text-sm mt-1">Get immediate help in case of emergency</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Emergency Button */}
        <Card className="border-destructive bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-center">Emergency Alert</CardTitle>
            <CardDescription className="text-center">Press this button only in case of real emergency</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="h-32 w-32 rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              onClick={handleSOSPress}
            >
              <div className="flex flex-col items-center gap-2">
                <AlertCircle className="h-12 w-12" />
                <span className="text-lg font-bold">SOS</span>
              </div>
            </Button>
            <p className="text-xs text-center text-muted-foreground max-w-xs">
              This will notify emergency services and share your location
            </p>
          </CardContent>
        </Card>

        {/* Location Sharing */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Share Your Location</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={handleShareLocation}
              disabled={locationShared}
            >
              <MapPin className="h-4 w-4 mr-2" />
              {locationShared ? "Location Shared" : "Share Current Location"}
            </Button>
            {locationShared && (
              <p className="text-xs text-secondary text-center mt-2">
                Your location has been shared with emergency contacts
              </p>
            )}
          </CardContent>
        </Card>

        {/* Safety Instructions */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Safety Tips</AlertTitle>
          <AlertDescription className="text-sm space-y-1">
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Stay calm and assess the situation</li>
              <li>Move to a safe location if possible</li>
              <li>Keep your phone charged and accessible</li>
              <li>Follow instructions from emergency services</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
            <CardDescription>Important numbers you can call for help</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{contact.name}</p>
                    <p className="text-xs text-muted-foreground">{contact.description}</p>
                  </div>
                  <a href={`tel:${contact.number}`}>
                    <Button size="sm" className="ml-3">
                      <Phone className="h-4 w-4 mr-1" />
                      {contact.number}
                    </Button>
                  </a>
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
