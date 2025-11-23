import { useState } from "react";
import { Card, CardContent, Button, Badge, Dialog, DialogContent } from "@/components/UIComponents";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import automotiveImage from "@assets/generated_images/Automotive_powder_coating_showcase_e1261c19.png";
import furnitureImage from "@assets/generated_images/Furniture_powder_coating_example_2d9a40fe.png";
import industrialImage from "@assets/generated_images/Industrial_machinery_coating_0f9db142.png";
import architecturalImage from "@assets/generated_images/Architectural_coating_applications_c88831ed.png";
import beforeAfterImage from "@assets/generated_images/Before_after_coating_comparison_9a2d0fe3.png";

interface GalleryImageType {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(null);

  const categories = ["All", "Automotive", "Industrial", "Furniture", "Architecture"];

  const images = [
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

  const filteredImages = activeCategory === "All"
    ? images
    : images.filter(img => img.category === activeCategory);

  const categoryColors: Record<string, string> = {
    "Automotive": "from-blue-500 to-blue-600",
    "Industrial": "from-orange-500 to-orange-600",
    "Furniture": "from-green-500 to-green-600",
    "Architecture": "from-purple-500 to-purple-600"
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=1920" 
            alt="Gallery"
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
            Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of powder coating projects across various industries
          </p>
        </motion.div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-8 bg-white border-b sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card 
                  className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all border-0 h-full"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden aspect-square bg-gray-200">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                        >
                          <ZoomIn className="w-6 h-6 text-blue-600" />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-bold text-lg">{image.title}</h3>
                        <Badge className="mt-2 bg-gradient-to-r from-orange-500 to-orange-600 border-0">
                          {image.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-600 text-lg font-medium">No items found in this category</p>
              <p className="text-gray-500 mt-2">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* BEFORE & AFTER SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Before & After</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the dramatic transformation our powder coating delivers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredImages.slice(0, 4).map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-green-900/40"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-red-500 hover:bg-red-600 border-0 font-semibold">Before</Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-green-500 hover:bg-green-600 border-0 font-semibold">After</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="font-bold text-slate-900 text-lg">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {image.category}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Gallery Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Featured projects showcasing our expertise and quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                count: filteredImages.length,
                label: "Projects Displayed",
                color: "from-blue-500 to-blue-600"
              },
              {
                count: categories.length - 1,
                label: "Industry Categories",
                color: "from-orange-500 to-orange-600"
              },
              {
                count: "100%",
                label: "Quality Assured",
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8 border-0 text-center hover:shadow-lg transition-all bg-white">
                  <CardContent className="p-0 space-y-3">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto`}>
                      <span className="text-white text-2xl font-bold">{item.count}</span>
                    </div>
                    <p className="text-gray-600 font-medium">{item.label}</p>
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
            Ready to See Your Project Transform?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Get in touch with us today and let's discuss how we can enhance your metal products with our premium powder coating services
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

      {/* IMAGE MODAL */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 border-0">
            <div className="relative">
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <X size={24} className="text-gray-700" />
              </motion.button>
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <Badge className={`bg-gradient-to-r ${categoryColors[selectedImage.category] || 'from-blue-500 to-blue-600'} border-0`}>
                  {selectedImage.category}
                </Badge>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
