import { useState } from "react";
import GalleryImage from "@/components/GalleryImage";
import { Button } from "@/components/ui/button";
import automotiveImage from "@assets/generated_images/Automotive_powder_coating_showcase_e1261c19.png";
import furnitureImage from "@assets/generated_images/Furniture_powder_coating_example_2d9a40fe.png";
import industrialImage from "@assets/generated_images/Industrial_machinery_coating_0f9db142.png";
import architecturalImage from "@assets/generated_images/Architectural_coating_applications_c88831ed.png";
import beforeAfterImage from "@assets/generated_images/Before_after_coating_comparison_9a2d0fe3.png";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Automotive", "Industrial", "Furniture", "Architecture"];

  const images = [
    { src: automotiveImage, alt: "Automotive parts with glossy black powder coating", category: "Automotive" },
    { src: furnitureImage, alt: "Modern furniture with matte black powder coated frames", category: "Furniture" },
    { src: industrialImage, alt: "Industrial machinery components with metallic powder coating", category: "Industrial" },
    { src: architecturalImage, alt: "Architectural metal railings with weather-resistant coating", category: "Architecture" },
    { src: beforeAfterImage, alt: "Before and after transformation showing powder coating quality", category: "Automotive" },
    { src: automotiveImage, alt: "Automotive rims with custom color powder coating", category: "Automotive" },
    { src: industrialImage, alt: "Heavy duty equipment parts with protective coating", category: "Industrial" },
    { src: furnitureImage, alt: "Office furniture with sleek powder coated finish", category: "Furniture" },
  ];

  const filteredImages = activeCategory === "All"
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of completed projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, i) => (
            <GalleryImage key={i} {...image} />
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No images in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
