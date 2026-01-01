export interface Destination {
  id: string
  name: string
  region: string
  category: "Beach" | "Island" | "Mountain" | "Cultural"
  description: string
  imageQuery: string
  image: string
  rating: number
  nearbyServices: {
    hotels: number
    guides: number
    restaurants: number
  }
}

export interface TourismService {
  id: string
  name: string
  type: "Hotel" | "Guide" | "Transport"
  verified: boolean
  priceRange: "$" | "$$" | "$$$"
  location: string
  rating: number
  description: string
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "River Number Two Beach",
    region: "Western Area",
    category: "Beach",
    description: "Pristine golden sand beach with crystal clear waters, perfect for swimming and relaxation.",
    imageQuery: "pristine tropical beach in Sierra Leone with golden sand, turquoise water, and palm trees",
    image: "/destinations/river-number-two.jpg",
    rating: 4.8,
    nearbyServices: { hotels: 5, guides: 8, restaurants: 12 },
  },
  {
    id: "2",
    name: "Banana Islands",
    region: "Western Area",
    category: "Island",
    description: "Historic islands with colonial ruins, beautiful beaches, and rich marine life.",
    imageQuery: "tropical island paradise with fishing boats, historic colonial buildings, and azure waters",
    image: "/destinations/banana-islands.jpg",
    rating: 4.6,
    nearbyServices: { hotels: 3, guides: 5, restaurants: 4 },
  },
  {
    id: "3",
    name: "Tacugama Chimpanzee Sanctuary",
    region: "Western Area",
    category: "Mountain",
    description: "Rainforest sanctuary protecting rescued chimpanzees with guided nature trails.",
    imageQuery: "lush rainforest canopy in West Africa with mist and dense green vegetation",
    image: "/destinations/tacugama-sanctuary.jpg",
    rating: 4.9,
    nearbyServices: { hotels: 2, guides: 10, restaurants: 3 },
  },
  {
    id: "4",
    name: "Bunce Island",
    region: "Northern Province",
    category: "Cultural",
    description: "Historic slave trading fort with significant cultural and historical importance.",
    imageQuery: "historic colonial fort ruins on a river island in Sierra Leone at sunset",
    image: "/destinations/bunce-island.jpg",
    rating: 4.7,
    nearbyServices: { hotels: 1, guides: 6, restaurants: 2 },
  },
  {
    id: "5",
    name: "Tiwai Island Wildlife Sanctuary",
    region: "Southern Province",
    category: "Island",
    description: "Biodiversity hotspot with rare primates, birds, and pristine rainforest.",
    imageQuery: "tropical river island surrounded by dense rainforest and wildlife in West Africa",
    image: "/destinations/tiwai-island.jpg",
    rating: 4.5,
    nearbyServices: { hotels: 2, guides: 7, restaurants: 1 },
  },
  {
    id: "6",
    name: "Outamba-Kilimi National Park",
    region: "Northern Province",
    category: "Mountain",
    description: "National park with elephants, hippos, and diverse wildlife in savanna landscape.",
    imageQuery: "African savanna landscape with acacia trees and dramatic sky in Sierra Leone",
    image: "/destinations/outamba-kilimi.jpg",
    rating: 4.4,
    nearbyServices: { hotels: 1, guides: 4, restaurants: 1 },
  },
]

export const tourismServices: TourismService[] = [
  {
    id: "1",
    name: "Radisson Blu Mammy Yoko Hotel",
    type: "Hotel",
    verified: true,
    priceRange: "$$$",
    location: "Freetown",
    rating: 4.5,
    description: "Luxury beachfront hotel with modern amenities and ocean views.",
  },
  {
    id: "2",
    name: "Abdul's Beach Tours",
    type: "Guide",
    verified: true,
    priceRange: "$$",
    location: "Western Area",
    rating: 4.8,
    description: "Experienced local guide specializing in coastal destinations.",
  },
  {
    id: "3",
    name: "Sierra Express Transport",
    type: "Transport",
    verified: true,
    priceRange: "$$",
    location: "Nationwide",
    rating: 4.3,
    description: "Reliable transport service with comfortable vehicles and professional drivers.",
  },
  {
    id: "4",
    name: "Bintumani Hotel",
    type: "Hotel",
    verified: true,
    priceRange: "$$",
    location: "Freetown",
    rating: 4.2,
    description: "Mid-range hotel in the heart of Freetown with excellent service.",
  },
  {
    id: "5",
    name: "Mountain Trails SL",
    type: "Guide",
    verified: true,
    priceRange: "$",
    location: "Northern Province",
    rating: 4.7,
    description: "Eco-tourism guides for hiking and wildlife experiences.",
  },
]

export const emergencyContacts = [
  { name: "Police Emergency", number: "019", description: "For immediate police assistance" },
  { name: "Ambulance", number: "999", description: "Medical emergencies" },
  { name: "Fire Service", number: "019", description: "Fire and rescue services" },
  { name: "Tourism Hotline", number: "+232 76 123 456", description: "24/7 tourist assistance" },
  { name: "Connaught Hospital", number: "+232 22 222 285", description: "Main hospital in Freetown" },
]
