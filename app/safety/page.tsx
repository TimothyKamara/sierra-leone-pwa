import { Shield, CheckCircle2, AlertTriangle, Phone, FileText, Scale } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/bottom-nav"

const safetyFeatures = [
  {
    icon: CheckCircle2,
    title: "Verified Listings Only",
    description: "All hotels, guides, and transport providers undergo thorough verification before approval.",
  },
  {
    icon: Shield,
    title: "Tourist Protection",
    description: "Your safety is our priority. All partners must maintain high safety and quality standards.",
  },
  {
    icon: Phone,
    title: "24/7 Emergency Support",
    description: "Access emergency services and tourist support anytime through our dedicated SOS feature.",
  },
  {
    icon: FileText,
    title: "Clear Terms & Conditions",
    description: "Transparent booking policies and cancellation terms protect your rights as a tourist.",
  },
]

const policies = [
  {
    title: "Verification Policy",
    items: [
      "All service providers must submit valid business registration",
      "Background checks conducted on tour guides",
      "Regular quality audits and customer feedback reviews",
      "Immediate suspension for policy violations",
    ],
  },
  {
    title: "Booking Protection",
    items: [
      "Secure payment processing through trusted local methods",
      "Refund policy for cancellations within 48 hours",
      "Dispute resolution process available",
      "Customer reviews impact provider ratings",
    ],
  },
  {
    title: "Safety Standards",
    items: [
      "Transport providers maintain vehicle safety certifications",
      "Hotels meet basic health and safety requirements",
      "Tour guides trained in first aid and emergency procedures",
      "Regular safety inspections of all listed properties",
    ],
  },
]

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Safety & Trust</h1>
          </div>
          <p className="text-white/90 text-sm">Your safety and trust are our top priorities</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Trust Badge */}
        <Card className="border-ocean-200 bg-ocean-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean-600 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Verified Tourism Platform</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This platform operates under Sierra Leone tourism regulations and maintains strict verification
                  standards for all service providers. All bookings are monitored for quality and safety compliance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Safety Features */}
        <div>
          <h2 className="text-xl font-bold mb-4">Safety Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-xl font-bold mb-4">Platform Policies</h2>
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    {policy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {policy.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Support */}
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Emergency Support Disclaimer
            </CardTitle>
            <CardDescription>Important information about emergency services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm leading-relaxed">
              While this platform provides access to emergency contact information and local authorities, it is not a
              replacement for official emergency services. In case of immediate danger:
            </p>
            <div className="bg-background p-4 rounded-lg space-y-2">
              <p className="text-sm font-semibold">Official Emergency Numbers:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Police</Badge>
                  <span>019</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Ambulance</Badge>
                  <span>999</span>
                </div>
              </div>
            </div>
            <Link href="/sos">
              <Button variant="destructive" className="w-full">
                Access Emergency SOS
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>Get in touch with our support team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you have questions about our policies, need to report a safety concern, or require assistance with your
              booking, our support team is here to help.
            </p>
            <div className="flex gap-3">
              <Link href="/help" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  WhatsApp Support
                </Button>
              </Link>
              <Link href="/bookings" className="flex-1">
                <Button className="w-full">View My Bookings</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Academic Disclaimer */}
        <Card className="border-accent/50 bg-accent/5">
          <CardContent className="p-4">
            <p className="text-xs text-center text-muted-foreground leading-relaxed">
              <strong>Academic Prototype:</strong> This is a demonstration system developed for academic research
              purposes. While it showcases real-world safety features and policies, all data and transactions are
              simulated for educational evaluation.
            </p>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
