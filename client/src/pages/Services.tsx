import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, Button, Badge } from "@/components/UIComponents";
import { Wrench, Palette, Sparkles, Shield, Zap, Package, ArrowRight, CheckCircle } from "lucide-react";
import colorSamplesImage from "@assets/generated_images/Powder_coating_color_samples_05f3c29b.png";

export default function Services() {
  const services = [
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
      color: "from-orange-500 to-orange-600"
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

  const technology = [
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

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=1920" 
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-blue-900/70"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Comprehensive powder coating solutions tailored to your specific requirements
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium powder coating services for every industry and application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                data-testid={`service-title-${i}`}
              >
                <Card className="group overflow-hidden border-0 h-full shadow-lg hover:shadow-2xl transition-all bg-white">
                  <div className={`h-20 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 mb-2">Materials:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.materials.map((material, j) => (
                            <Badge 
                              key={j} 
                              className={`bg-gradient-to-r ${service.color} border-0 text-white text-xs`}
                              data-testid={`material-${i}-${j}`}
                            >
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 mb-2">Finishes:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.finishes.map((finish, j) => (
                            <Badge 
                              key={j} 
                              className="bg-gray-100 text-gray-700 border-0 text-xs"
                              data-testid={`finish-${i}-${j}`}
                            >
                              {finish}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COLOR OPTIONS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Endless Color Possibilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from thousands of colors and finishes to match your exact vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-0 border-0 shadow-2xl overflow-hidden">
                <img
                  src={colorSamplesImage}
                  alt="Powder coating color samples"
                  className="w-full h-full object-cover"
                  data-testid="image-color-samples"
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Unlimited Options</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Choose from thousands of colors across various finishes. We can match any RAL, Pantone, or custom color to meet your exact specifications.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Complete RAL color range (2000+ colors)",
                  "Custom color matching to samples or photos",
                  "Metallic and special effect finishes",
                  "Textured, wrinkle, and hammertone options",
                  "Gloss levels from matte to high gloss",
                  "Multi-layer and gradient effects"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Advanced Technology & Equipment</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              State-of-the-art facilities ensuring premium quality results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technology.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                data-testid={`tech-title-${i}`}
              >
                <Card className="p-8 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all text-white h-full group">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sparkles size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{tech.title}</h3>
                    <p className="text-blue-100 leading-relaxed text-sm">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven methodology for exceptional coating results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Surface Preparation", desc: "Thorough cleaning and degreasing" },
              { step: "2", title: "Pre-treatment", desc: "Chemical preparation for adhesion" },
              { step: "3", title: "Application", desc: "Precise powder coating application" },
              { step: "4", title: "Curing", desc: "Heat treatment for durability" },
              { step: "5", title: "Inspection", desc: "Quality assurance testing" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <Card className="p-6 text-center border-0 bg-white hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Card>
                {idx < 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-12 -right-2 w-4 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
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
            Ready to Transform Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Get in touch with us today and discover how our premium powder coating services can enhance your metal products
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
                Get Free Quote
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
