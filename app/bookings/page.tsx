import { Calendar, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BottomNav } from "@/components/bottom-nav"

const mockBookings = [
  {
    id: "1",
    service: "Abdul's Beach Tours",
    type: "Tour Guide",
    date: "2025-01-15",
    people: 4,
    status: "confirmed",
    location: "River Number Two Beach",
  },
  {
    id: "2",
    service: "Radisson Blu Mammy Yoko Hotel",
    type: "Hotel",
    date: "2025-01-20",
    people: 2,
    status: "pending",
    location: "Freetown",
  },
]

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-4 py-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold">My Bookings</h1>
          <p className="text-primary-foreground/90 text-sm mt-1">Track your travel arrangements</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6">
        {mockBookings.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mb-3" />
              <p className="text-muted-foreground text-center">No bookings yet. Start exploring!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {mockBookings.map((booking) => (
              <Card key={booking.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base">{booking.service}</CardTitle>
                      <CardDescription>{booking.type}</CardDescription>
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
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(booking.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{booking.location}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm">
                      <span className="text-muted-foreground">People:</span>{" "}
                      <span className="font-medium">{booking.people}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
