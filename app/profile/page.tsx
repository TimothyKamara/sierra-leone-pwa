"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Calendar, LogOut, Settings } from "lucide-react"

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/auth/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) return null

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-ocean-50 to-sand-50">
      <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 text-white p-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-ocean-100 flex items-center justify-center">
                  <User className="w-8 h-8 text-ocean-600" />
                </div>
                <div>
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                  <Badge className="mt-2" variant={user.role === "admin" ? "default" : "secondary"}>
                    {user.role === "admin" ? "Service Provider" : "Tourist"}
                  </Badge>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-sand-50">
                <MapPin className="w-5 h-5 text-ocean-600" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Freetown, Sierra Leone</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-sand-50">
                <Calendar className="w-5 h-5 text-ocean-600" />
                <div>
                  <p className="text-sm font-medium">Member Since</p>
                  <p className="text-sm text-muted-foreground">January 2026</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button variant="destructive" className="w-full" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>

        {user.role === "tourist" && (
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Your Activity</CardTitle>
              <CardDescription>Track your bookings and favorites</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-ocean-600">3</p>
                  <p className="text-sm text-muted-foreground">Bookings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-ocean-600">12</p>
                  <p className="text-sm text-muted-foreground">Favorites</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-ocean-600">5</p>
                  <p className="text-sm text-muted-foreground">Visited</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
