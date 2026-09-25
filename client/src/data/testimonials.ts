export interface Testimonial {
  name: string;
  company: string;
  rating: number;
  text: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Manoj Bavaria",
    company: "Auto Parts Manufacturing",
    rating: 5,
    text: "Excellent service and quality. The powder coating on our automotive parts is flawless and durable. Disha Powder Coating has been our go-to partner for over 3 years.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    name: "Priya Sharma",
    company: "Modern Interiors",
    rating: 5,
    text: "We use Disha for all our furniture coating needs. Their attention to detail and color matching is impeccable. Highly recommended for commercial projects.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  },
  {
    name: "Amit Patel",
    company: "Industrial Solutions Ltd",
    rating: 5,
    text: "Professional team, quick turnaround, and competitive pricing. The protective coating on our machinery has significantly improved durability.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100"
  },
  {
    name: "Sneha Desai",
    company: "Architectural Designs",
    rating: 5,
    text: "Outstanding work on our architectural metalwork project. The finish is beautiful and has held up perfectly against weather conditions.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  },
  {
    name: "Vikram Singh",
    company: "Custom Fabricators",
    rating: 5,
    text: "We've worked with many coating companies, but Disha stands out for their quality and reliability. They handle both small and large projects with equal dedication.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
  },
  {
    name: "Meera Reddy",
    company: "Office Solutions Hub",
    rating: 5,
    text: "The powder coating on our office furniture line looks fantastic. Great customer service and they always deliver on time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  }
];

export const trustedCompanies = [
  "Auto Components Ltd.",
  "Modern Furniture Co.",
  "Industrial Solutions",
  "Architect & Builders",
  "Steel Fabricators Inc.",
  "Metro Infrastructure",
  "Premium Motors",
  "Design Furniture"
];
