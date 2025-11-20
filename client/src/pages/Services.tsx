import { Card } from "@/components/ui/card";
import { Wrench, Palette, Sparkles, Shield, Zap, Package } from "lucide-react";
import colorSamplesImage from "@assets/generated_images/Powder_coating_color_samples_05f3c29b.png";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Custom Powder Coating",
      description: "Professional powder coating services tailored to your specific requirements with a variety of colors and finishes.",
      materials: ["Steel", "Aluminum", "Stainless Steel", "Galvanized Metal"],
      finishes: ["Gloss", "Matte", "Satin", "Textured"]
    },
    {
      icon: Palette,
      title: "Color Matching",
      description: "Precision color matching to meet your exact specifications using advanced color analysis technology.",
      materials: ["RAL Colors", "Pantone Colors", "Custom Colors", "Metallic Shades"],
      finishes: ["Standard", "Metallic", "Pearl", "Chrome Effect"]
    },
    {
      icon: Sparkles,
      title: "Special Finishes",
      description: "Unique and premium finishes including metallic, textured, and specialty effects for distinctive appearances.",
      materials: ["All Metal Types"],
      finishes: ["Hammertone", "Wrinkle", "Candy", "Chameleon"]
    },
    {
      icon: Shield,
      title: "Protective Coating",
      description: "High-performance protective coatings designed to resist corrosion, chemicals, and extreme conditions.",
      materials: ["Industrial Equipment", "Outdoor Fixtures", "Marine Applications"],
      finishes: ["Heavy Duty", "Weather Resistant", "Chemical Resistant"]
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick processing times without compromising quality, ideal for urgent projects and tight deadlines.",
      materials: ["All Project Sizes"],
      finishes: ["Same Day Options Available"]
    },
    {
      icon: Package,
      title: "Large Volume Coating",
      description: "Efficient handling of bulk orders and large-scale projects with consistent quality across all pieces.",
      materials: ["Batch Processing", "Production Runs"],
      finishes: ["Consistent Quality Guaranteed"]
    }
  ];

  const technology = [
    {
      title: "Advanced Spray Booths",
      description: "State-of-the-art spray booths with precise temperature and humidity control"
    },
    {
      title: "Curing Ovens",
      description: "Industrial-grade curing ovens ensuring perfect finish and durability"
    },
    {
      title: "Pre-treatment Systems",
      description: "Multi-stage cleaning and preparation for optimal coating adhesion"
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive powder coating solutions for all your metal finishing needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, i) => (
            <Card key={i} className="p-8 hover-elevate transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3" data-testid={`service-title-${i}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-2">Materials:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.materials.map((material, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 bg-secondary rounded-full"
                        data-testid={`material-${i}-${j}`}
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2">Finishes:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.finishes.map((finish, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 bg-accent rounded-full"
                        data-testid={`finish-${i}-${j}`}
                      >
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Color Options</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={colorSamplesImage}
                  alt="Powder coating color samples"
                  className="w-full rounded-lg"
                  data-testid="image-color-samples"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Endless Possibilities</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Choose from thousands of colors across various finishes. We can match any RAL, Pantone, or custom color to meet your exact specifications.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Complete RAL color range</li>
                  <li>• Custom color matching</li>
                  <li>• Metallic and special effect finishes</li>
                  <li>• Textured and smooth options</li>
                  <li>• Gloss levels from matte to high gloss</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Technology</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {technology.map((tech, i) => (
              <Card key={i} className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3" data-testid={`tech-title-${i}`}>
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tech.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
