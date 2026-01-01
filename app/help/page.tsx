import { MessageCircle, HelpCircle, MapPin, Sun, Languages, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BottomNav } from "@/components/bottom-nav"

const faqs = [
  {
    question: "What are the best places to visit in Sierra Leone?",
    answer:
      "Sierra Leone offers diverse attractions including River Number Two Beach, Banana Islands, Tacugama Chimpanzee Sanctuary, and historic Bunce Island. Each destination provides unique experiences from pristine beaches to wildlife encounters.",
  },
  {
    question: "Is Sierra Leone safe for tourists?",
    answer:
      "Sierra Leone is generally safe for tourists. Follow standard safety precautions, stay in verified accommodations, use official tour guides, and keep emergency contacts readily available. The tourism hotline is available 24/7 for assistance.",
  },
  {
    question: "What languages are spoken?",
    answer:
      "English is the official language. Krio is widely spoken and understood across the country. Many locals also speak tribal languages like Mende, Temne, and Limba.",
  },
  {
    question: "What is the weather like?",
    answer:
      "Sierra Leone has a tropical climate with a rainy season (May-November) and dry season (December-April). The dry season is ideal for visiting beaches and outdoor activities. Temperatures range from 25-30°C year-round.",
  },
  {
    question: "Do I need a visa?",
    answer:
      "Most visitors require a visa to enter Sierra Leone. Check with your local Sierra Leone embassy or consulate for specific requirements based on your nationality. Many nationalities can obtain a visa on arrival.",
  },
  {
    question: "What currency is used?",
    answer:
      "The official currency is the Sierra Leonean Leone (SLL). US Dollars are widely accepted in tourist areas. ATMs are available in major cities, but it's advisable to carry cash when traveling to remote areas.",
  },
]

export default function HelpPage() {
  const whatsappNumber = "+232761234567" // Mock WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello! I need tourist assistance in Sierra Leone.")

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-secondary text-secondary-foreground px-4 py-6">
        <div className="max-w-lg mx-auto text-center">
          <MessageCircle className="h-12 w-12 mx-auto mb-3" />
          <h1 className="text-2xl font-bold">Tourist Assistant</h1>
          <p className="text-secondary-foreground/90 text-sm mt-1">Get instant help via WhatsApp or browse FAQs</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* WhatsApp Card */}
        <Card className="bg-secondary/5 border-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-secondary" />
              Chat with Tourist Assistant
            </CardTitle>
            <CardDescription>Get instant answers to your questions via WhatsApp</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our WhatsApp assistant is available 24/7 to help you with travel information, bookings, safety tips, and
              local recommendations.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                <MessageCircle className="h-5 w-5 mr-2" />
                Open WhatsApp Chat
              </Button>
            </a>
            <p className="text-xs text-center text-muted-foreground">
              WhatsApp number: <span className="font-medium">{whatsappNumber}</span>
            </p>
          </CardContent>
        </Card>

        {/* Quick Topics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Ask About</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Destinations</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Sun className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Weather</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Languages className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Languages</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Safety Tips</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>Quick answers to common tourist questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
