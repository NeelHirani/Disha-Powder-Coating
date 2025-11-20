import { Card } from "@/components/ui/card";
import { Car, Factory, Sofa, Building, Wrench } from "lucide-react";
import automotiveImage from "@assets/generated_images/Automotive_powder_coating_showcase_e1261c19.png";
import furnitureImage from "@assets/generated_images/Furniture_powder_coating_example_2d9a40fe.png";
import industrialImage from "@assets/generated_images/Industrial_machinery_coating_0f9db142.png";
import architecturalImage from "@assets/generated_images/Architectural_coating_applications_c88831ed.png";

export default function Industries() {
  const industries = [
    {
      icon: Car,
      title: "Automotive",
      description: "High-performance powder coating for automotive parts, rims, chassis components, and custom vehicles. Our coatings provide excellent durability and aesthetic appeal.",
      image: automotiveImage,
      services: [
        "Automotive parts and components",
        "Custom wheels and rims",
        "Chassis and frames",
        "Motorcycle parts",
        "Restoration projects"
      ],
      standards: ["Automotive grade durability", "UV resistant", "Chip resistant"]
    },
    {
      icon: Factory,
      title: "Industrial Machinery",
      description: "Robust protective coatings for industrial equipment that withstand harsh environments, chemicals, and extreme temperatures.",
      image: industrialImage,
      services: [
        "Heavy machinery components",
        "Manufacturing equipment",
        "Agricultural machinery",
        "Material handling equipment",
        "Safety barriers and guards"
      ],
      standards: ["Chemical resistant", "High temperature tolerance", "Corrosion protection"]
    },
    {
      icon: Sofa,
      title: "Furniture",
      description: "Attractive and durable finishes for metal furniture, combining aesthetics with long-lasting protection.",
      image: furnitureImage,
      services: [
        "Office furniture",
        "Outdoor furniture",
        "Commercial seating",
        "Display fixtures",
        "Custom furniture pieces"
      ],
      standards: ["Scratch resistant", "Easy to clean", "Wide color options"]
    },
    {
      icon: Building,
      title: "Architecture & Construction",
      description: "Weather-resistant coatings for architectural metalwork, ensuring beauty and protection for years to come.",
      image: architecturalImage,
      services: [
        "Railings and handrails",
        "Window and door frames",
        "Facade elements",
        "Gates and fencing",
        "Structural components"
      ],
      standards: ["Weather resistant", "UV stable", "Long-lasting finish"]
    },
    {
      icon: Wrench,
      title: "Custom Fabrication",
      description: "Specialized coating solutions for custom metal fabrication projects across various applications.",
      image: industrialImage,
      services: [
        "Art installations",
        "Signage",
        "Custom metalwork",
        "Decorative elements",
        "Specialty projects"
      ],
      standards: ["Tailored solutions", "Creative finishes", "Quality assured"]
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Providing specialized powder coating solutions across multiple sectors
          </p>
        </div>

        <div className="space-y-16">
          {industries.map((industry, i) => (
            <Card key={i} className="overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`order-2 ${i % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover min-h-[300px]"
                    data-testid={`industry-image-${i}`}
                  />
                </div>
                <div className={`p-8 order-1 ${i % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4" data-testid={`industry-title-${i}`}>
                    {industry.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Our Services:</h3>
                    <ul className="space-y-2">
                      {industry.services.map((service, j) => (
                        <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span data-testid={`industry-service-${i}-${j}`}>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Standards:</h3>
                    <div className="flex flex-wrap gap-2">
                      {industry.standards.map((standard, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                          data-testid={`industry-standard-${i}-${j}`}
                        >
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
