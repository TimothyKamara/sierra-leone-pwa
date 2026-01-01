import { Suspense } from "react"
import ServicesContent from "./services-content"
import { BottomNav } from "@/components/bottom-nav"

export default function ServicesPage() {
  return (
    <>
      <Suspense fallback={null}>
        <ServicesContent />
      </Suspense>
      <BottomNav />
    </>
  )
}
