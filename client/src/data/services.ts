import { Wrench, Palette, Sparkles, Shield, Zap, Package, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DetailedService extends Service {
  materials: string[];
  finishes: string[];
  color: string;
}

// Home page services (brief)
export const homeServices: Service[] = [
  { icon: Wrench, title: "Custom Powder Coating", description: "Premium finishes in 100+ colors for metal parts of any size." },
  { icon: Palette, title: "Precision Color Matching", description: "RAL, Pantone, or custom — we match your brand perfectly." },
  { icon: Sparkles, title: "Special Effect Finishes", description: "Metallic, matte, gloss, textured — stand out with style." },
  { icon: Shield, title: "Industrial-Grade Protection", description: "Corrosion & UV resistant coatings built to last." },
];

// Services page (detailed)
export const detailedServices: DetailedService[] = [
  {
    icon: Wrench,
    title: "Custom Powder Coating",
    description: "Professional powder coating services tailored to your specific requirements with a variety of colors and finishes.",
    materials: ["Steel", "Aluminum", "Stainless Steel", "Galvanized Metal"],
    finishes: ["Gloss", "Matte", "Satin"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Palette,
    title: "Color Matching",
    description: "Precision color matching to meet your exact specifications using advanced color analysis technology.",
    materials: ["RAL Colors", "Pantone Colors", "Custom Colors", "Metallic Shades"],
    finishes: ["Standard", "Metallic", "Pearl"],
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: Sparkles,
    title: "Special Finishes",
    description: "Unique and premium finishes including metallic, textured, and specialty effects for distinctive appearances.",
    materials: ["All Metal Types"],
    finishes: ["Hammertone", "Wrinkle", "Candy", "Chameleon"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Protective Coating",
    description: "High-performance protective coatings designed to resist corrosion, chemicals, and extreme conditions.",
    materials: ["Industrial Equipment", "Outdoor Fixtures", "Marine Applications"],
    finishes: ["Heavy Duty", "Weather Resistant", "Chemical Resistant"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick processing times without compromising quality, ideal for urgent projects and tight deadlines.",
    materials: ["All Project Sizes"],
    finishes: ["Same Day Options Available"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Package,
    title: "Large Volume Coating",
    description: "Efficient handling of bulk orders and large-scale projects with consistent quality across all pieces.",
    materials: ["Batch Processing", "Production Runs"],
    finishes: ["Consistent Quality Guaranteed"],
    color: "from-indigo-500 to-indigo-600"
  }
];

export const technology = [
  {
    title: "Advanced Spray Booths",
    description: "State-of-the-art spray booths with precise temperature and humidity control for uniform coating"
  },
  {
    title: "Curing Ovens",
    description: "Industrial-grade curing ovens ensuring perfect finish and maximum durability"
  },
  {
    title: "Pre-treatment Systems",
    description: "Multi-stage cleaning and preparation for optimal coating adhesion and finish quality"
  },
  {
    title: "Powder Recovery",
    description: "Eco-friendly powder recovery systems minimizing waste and environmental impact"
  },
  {
    title: "Quality Testing",
    description: "Advanced testing equipment including thickness gauges and adhesion testing"
  },
  {
    title: "Color Matching Lab",
    description: "Precision color analysis and matching technology for exact specifications"
  }
];

export const colorOptions = [
  "Complete RAL color range (2000+ colors)",
  "Custom color matching to samples or photos",
  "Metallic and special effect finishes",
  "Textured, wrinkle, and hammertone options",
  "Gloss levels from matte to high gloss",
  "Multi-layer and gradient effects"
];

export const processSteps = [
  { step: "1", title: "Surface Preparation", desc: "Thorough cleaning and degreasing" },
  { step: "2", title: "Pre-treatment", desc: "Chemical preparation for adhesion" },
  { step: "3", title: "Application", desc: "Precise powder coating application" },
  { step: "4", title: "Curing", desc: "Heat treatment for durability" },
  { step: "5", title: "Inspection", desc: "Quality assurance testing" }
];
