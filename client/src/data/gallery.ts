import automotiveImage from "@assets/generated_images/Automotive_powder_coating_showcase_e1261c19.png";
import furnitureImage from "@assets/generated_images/Furniture_powder_coating_example_2d9a40fe.png";
import industrialImage from "@assets/generated_images/Industrial_machinery_coating_0f9db142.png";
import architecturalImage from "@assets/generated_images/Architectural_coating_applications_c88831ed.png";
import beforeAfterImage from "@assets/generated_images/Before_after_coating_comparison_9a2d0fe3.png";

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export const categories = ["All", "Automotive", "Industrial", "Furniture", "Architecture"];

export const galleryImages: GalleryImage[] = [
  {
    src: automotiveImage,
    alt: "Automotive parts with glossy black powder coating",
    category: "Automotive",
    title: "Automotive Parts Coating",
    description: "Professional automotive parts with flawless glossy finish"
  },
  {
    src: furnitureImage,
    alt: "Modern furniture with matte black powder coated frames",
    category: "Furniture",
    title: "Furniture Finishing",
    description: "Modern furniture with elegant matte coating"
  },
  {
    src: industrialImage,
    alt: "Industrial machinery components with metallic powder coating",
    category: "Industrial",
    title: "Industrial Equipment",
    description: "Heavy-duty industrial machinery coating"
  },
  {
    src: architecturalImage,
    alt: "Architectural metal railings with weather-resistant coating",
    category: "Architecture",
    title: "Architectural Railings",
    description: "Weather-resistant architectural metalwork"
  },
  {
    src: beforeAfterImage,
    alt: "Before and after transformation showing powder coating quality",
    category: "Automotive",
    title: "Transformation Showcase",
    description: "Complete transformation with premium coating"
  },
  {
    src: automotiveImage,
    alt: "Automotive rims with custom color powder coating",
    category: "Automotive",
    title: "Custom Rims",
    description: "Custom colored automotive rims"
  },
  {
    src: industrialImage,
    alt: "Heavy duty equipment parts with protective coating",
    category: "Industrial",
    title: "Heavy Duty Equipment",
    description: "Protective coating for harsh environments"
  },
  {
    src: furnitureImage,
    alt: "Office furniture with sleek powder coated finish",
    category: "Furniture",
    title: "Office Furniture",
    description: "Sleek finishes for corporate environments"
  },
];

export const categoryColors: Record<string, string> = {
  "Automotive": "from-blue-500 to-blue-600",
  "Industrial": "from-blue-500 to-blue-700",
  "Furniture": "from-green-500 to-green-600",
  "Architecture": "from-purple-500 to-purple-600"
};
