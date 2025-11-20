import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Factory, Sofa, Building, Wrench, ArrowRight, CheckCircle, Zap } from "lucide-react";
import automotiveImage from "@assets/generated_images/Automotive_powder_coating_showcase_e1261c19.png";
import furnitureImage from "@assets/generated_images/Furniture_powder_coating_example_2d9a40fe.png";
import industrialImage from "@assets/generated_images/Industrial_machinery_coating_0f9db142.png";
import architecturalImage from "@assets/generated_images/Architectural_coating_applications_c88831ed.png";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Industries() {
  const industries = [
    {
      icon: Car,
      title: "Automotive",
      description: "High-performance powder coating for automotive parts, rims, chassis components, and custom vehicles. Our coatings provide excellent durability and aesthetic appeal.",
      image: automotiveImage,
      color: "from-blue-500 to-blue-600",
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
      color: "from-orange-500 to-orange-600",
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
      color: "from-green-500 to-green-600",
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
      color: "from-purple-500 to-purple-600",
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
      color: "from-red-500 to-red-600",
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

  const benefits = [
    {
      title: "Exceptional Durability",
      description: "Superior resistance to chipping, scratching, fading, and corrosion compared to liquid paints"
    },
    {
      title: "Environmental Friendly",
      description: "Zero VOC emissions, recyclable overspray, and compliance with environmental regulations"
    },
    {
      title: "Cost-Effective",
      description: "Long-lasting finish reduces maintenance costs and extends product lifespan"
    },
    {
      title: "Aesthetic Appeal",
      description: "Wide range of colors, textures, and finishes to meet your design requirements"
    },
    {
      title: "Uniform Coverage",
      description: "Consistent, even coating on complex shapes and hard-to-reach areas"
    },
    {
      title: "Fast Production",
      description: "Quick curing time enables faster turnaround and increased productivity"
    }
  ];

  const caseStudies = [
    {
      industry: "Automotive",
      project: "Custom Vehicle Restoration",
      result: "100+ parts coated with flawless finish",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400"
    },
    {
      industry: "Industrial",
      project: "Manufacturing Equipment",
      result: "Heavy-duty coating for harsh environments",
      image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=400"
    },
    {
      industry: "Architecture",
      project: "Commercial Building Facades",
      result: "Weather-resistant finish maintaining appearance",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=1920" 
            alt="Industries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-blue-900/70"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Industries We
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Serve
            </span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Delivering superior powder coating solutions across diverse sectors with expertise and reliability
          </p>
        </motion.div>
      </section>

      {/* INDUSTRIES SHOWCASE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              const isEven = i % 2 === 0;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center`}>
                          <Icon size={32} className="text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900">{industry.title}</h2>
                      </div>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {industry.description}
                      </p>

                      {/* Services */}
                      <div className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-lg">Key Applications:</h3>
                        <div className="space-y-2">
                          {industry.services.map((service, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Standards */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {industry.standards.map((standard, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 rounded-full text-sm font-medium border border-orange-200"
                          >
                            ✓ {standard}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className={`relative ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                    >
                      <div className="rounded-2xl shadow-2xl overflow-hidden">
                        <img 
                          src={industry.image} 
                          alt={industry.title}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-48 h-48 bg-gradient-to-br ${industry.color} rounded-2xl -z-10`}></div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY POWDER COATING */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Powder Coating?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Universal benefits across all industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-8 border-0 hover:shadow-2xl transition-all h-full bg-white">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from satisfied clients across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="overflow-hidden border-0 hover:shadow-2xl transition-all h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.project}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      {caseStudy.industry}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{caseStudy.project}</h3>
                    <p className="text-gray-600 leading-relaxed">{caseStudy.result}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Discuss Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Contact us today to learn how our powder coating solutions can benefit your industry
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/quote">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold">
                Request Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-6 text-lg rounded-lg transition-all duration-300 font-semibold">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
