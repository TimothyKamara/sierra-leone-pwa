"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Smartphone, Wallet, Banknote, ArrowLeft } from "lucide-react"
import Link from "next/link"

const paymentMethods = [
  {
    id: "orange-money",
    name: "Orange Money",
    icon: Smartphone,
    description: "Pay with your Orange Money wallet",
    color: "bg-orange-500",
  },
  {
    id: "africell-money",
    name: "Africell Money",
    icon: Wallet,
    description: "Pay with your Africell Money account",
    color: "bg-blue-500",
  },
  {
    id: "cash",
    name: "Cash on Arrival",
    icon: Banknote,
    description: "Pay when you arrive at the destination",
    color: "bg-green-600",
  },
]

export default function PaymentPage() {
  const router = useRouter()
  const params = useParams()
  const bookingId = params.bookingId as string

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  // Mock booking data
  const booking = {
    id: bookingId,
    service: "Tokeh Beach Resort",
    type: "Hotel",
    date: "Jan 15, 2026",
    guests: 2,
    nights: 3,
    price: 1500000, // Leones
  }

  const handlePayment = () => {
    setProcessing(true)
    // Mock payment processing
    setTimeout(() => {
      setProcessing(false)
      setPaymentComplete(true)
    }, 2000)
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-ocean-50 to-sand-50">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Payment Successful!</CardTitle>
            <CardDescription>Your booking has been confirmed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-sand-50 rounded-lg space-y-2">
              <p className="text-sm text-muted-foreground">Booking Reference</p>
              <p className="text-lg font-bold text-ocean-600">#{booking.id.toUpperCase()}</p>
            </div>
            <div className="space-y-2 text-sm text-left">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service:</span>
                <span className="font-medium">{booking.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Check-in:</span>
                <span className="font-medium">{booking.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-medium">{paymentMethods.find((m) => m.id === selectedMethod)?.name}</span>
              </div>
            </div>
            <Button onClick={() => router.push("/bookings")} className="w-full">
              View My Bookings
            </Button>
            <Button onClick={() => router.push("/")} variant="outline" className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-ocean-50 to-sand-50">
      <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/bookings" className="inline-flex items-center gap-2 mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-2xl font-bold">Complete Payment</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Booking Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{booking.service}</p>
                <p className="text-sm text-muted-foreground">{booking.type}</p>
              </div>
              <Badge>Pending Payment</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">Check-in</p>
                <p className="font-medium">{booking.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium">{booking.nights} nights</p>
              </div>
              <div>
                <p className="text-muted-foreground">Guests</p>
                <p className="font-medium">{booking.guests} people</p>
              </div>
              <div>
                <p className="text-muted-foreground">Total</p>
                <p className="font-bold text-ocean-600">Le {booking.price.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Select Payment Method</CardTitle>
            <CardDescription>Choose how you'd like to pay for your booking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedMethod === method.id
                      ? "border-ocean-600 bg-ocean-50"
                      : "border-border hover:border-ocean-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{method.name}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    {selectedMethod === method.id && <CheckCircle2 className="w-5 h-5 text-ocean-600 flex-shrink-0" />}
                  </div>
                </button>
              )
            })}
          </CardContent>
        </Card>

        {/* Payment Details for Mobile Money */}
        {selectedMethod && selectedMethod !== "cash" && (
          <Card className="border-ocean-200 bg-ocean-50">
            <CardHeader>
              <CardTitle className="text-base">Payment Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                1. Dial <span className="font-bold">*133#</span> on your phone
              </p>
              <p>2. Select "Send Money"</p>
              <p>
                3. Enter merchant code: <span className="font-bold">SL-TOURISM-001</span>
              </p>
              <p>
                4. Enter amount: <span className="font-bold">Le {booking.price.toLocaleString()}</span>
              </p>
              <p>5. Confirm the transaction</p>
              <p className="pt-2 text-xs text-muted-foreground">
                Note: This is a mock payment flow for dissertation purposes. No real transaction will occur.
              </p>
            </CardContent>
          </Card>
        )}

        {selectedMethod === "cash" && (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <p className="text-sm">
                You have selected to pay cash upon arrival. Please bring the exact amount (Le{" "}
                {booking.price.toLocaleString()}) when you check in at {booking.service}.
              </p>
            </CardContent>
          </Card>
        )}

        <Button onClick={handlePayment} disabled={!selectedMethod || processing} className="w-full" size="lg">
          {processing ? "Processing Payment..." : "Confirm Payment"}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Secure payment processing - Your information is protected
        </p>
      </div>
    </div>
  )
}
