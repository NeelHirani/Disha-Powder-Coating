import { Link } from "wouter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/UIComponents";
import {
  Wrench, Palette, Sparkles, Shield, Car, Factory, Sofa, Building,
  ArrowRight, CheckCircle, Award, Users, Clock, Star
} from "lucide-react";
import beforeAfterImage from "@assets/generated_images/Before_after_coating_comparison_9a2d0fe3.png";

export default function Home() {
  const [bgImageIndex, setBgImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: Wrench, title: "Custom Powder Coating", description: "Premium finishes in 100+ colors for metal parts of any size." },
    { icon: Palette, title: "Precision Color Matching", description: "RAL, Pantone, or custom — we match your brand perfectly." },
    { icon: Sparkles, title: "Special Effect Finishes", description: "Metallic, matte, gloss, textured — stand out with style." },
    { icon: Shield, title: "Industrial-Grade Protection", description: "Corrosion & UV resistant coatings built to last." },
  ];

  const industries = [
    { icon: Car, title: "Automotive" },
    { icon: Factory, title: "Industrial" },
    { icon: Sofa, title: "Furniture" },
    { icon: Building, title: "Architecture" },
  ];

  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Star, label: "Projects Completed", value: "5000+" },
    { icon: Clock, label: "On-Time Delivery", value: "98%" }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Environmental Compliance",
    "15+ Years Industry Experience",
    "24/7 Customer Support"
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] sm:h-[90vh] md:h-screen overflow-hidden bg-black">
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === bgImageIndex ? 1 : 0 }}
              transition={{ duration: 1.4 }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt={`Powder coating showcase ${index + 1}`}
                className="w-full h-full object-cover object-center"
                style={{ filter: "brightness(0.7) contrast(1.15)" }}
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-left max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-4"
              >
                <span className="inline-block text-orange-500 text-sm md:text-base font-light tracking-[0.3em] uppercase">
                  Premium Powder Coating Since 1998
                </span>
                <div className="w-24 h-px bg-gradient-to-r from-orange-500 to-transparent mt-3"></div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
              >
                <span className="block">Built Tough.</span>
                <span className="inline-block text-orange-500">Finished Flawless.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-200 font-light mt-6 max-w-2xl"
              >
                Where every piece tells a story of <span className="text-orange-400 font-medium">craftsmanship</span> and <span className="text-orange-400 font-medium">unmatched quality</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-10"
              >
                <Link
                  to="/quote"
                  className="group relative inline-flex items-center px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl overflow-hidden border border-orange-400 hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Get Started →</span>
                  <div className="absolute inset-0 bg-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {backgroundImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setBgImageIndex(i)}
              className={`h-2 rounded-full transition-all ${i === bgImageIndex ? "w-10 bg-orange-500" : "w-2 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-white/10 rounded-full inline-flex mb-4 backdrop-blur">
                  <stat.icon size={36} className="text-white" />
                </div>
                <div className="text-4xl font-black text-white">{stat.value}</div>
                <div className="text-orange-100 text-sm font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Core Services</h2>
            <p className="text-xl text-gray-600 mt-4">Comprehensive powder coating solutions tailored to your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                  <s.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">See the Transformation</h2>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src={beforeAfterImage}
            alt="Before → After"
            className="rounded-2xl shadow-2xl mx-auto max-w-5xl"
          />
          <div className="mt-10">
            <Link to="/gallery" className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg">
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-8">We don’t just coat metal — we transform it into something extraordinary.</p>
            {certifications.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 mb-4">
                <CheckCircle className="text-green-600 flex-shrink-0" size={28} />
                <span className="text-gray-700 font-medium">{c}</span>
              </motion.div>
            ))}
            <Link to="/about" className="mt-8 inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg">
              Learn More About Us →
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
            <img src="https://images.unsplash.com/photo-1573506154555-62ee33ed5c61?w=800" alt="Workshop" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-orange-400 to-amber-500 rounded-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-10 hover:from-orange-100 hover:to-amber-100 transition-all"
              >
                <ind.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <p className="font-bold text-lg text-gray-800">{ind.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR – Lightweight Social Proof */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-orange-400 font-bold tracking-wider uppercase mb-6">Trusted by 500+ Businesses Nationwide</p>
          <div className="flex flex-wrap justify-center gap-10 text-gray-300">
            <div className="flex items-center gap-3"><Car size={24} className="text-orange-500" /> Automotive Leaders</div>
            <div className="flex items-center gap-3"><Factory size={24} className="text-orange-500" /> Industrial Giants</div>
            <div className="flex items-center gap-3"><Building size={24} className="text-orange-500" /> Top Architects</div>
            <div className="flex items-center gap-3"><Award size={24} className="text-orange-500" /> 15+ Years Excellence</div>
          </div>
          <Link to="/testimonials" className="mt-8 inline-block text-orange-400 hover:text-orange-300 underline underline-offset-4">
            See what our clients say →
          </Link>
        </div>
      </section>

      {/* FINAL CTA – High Conversion */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Ready to Experience Excellence?
          </motion.h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Partner with Disha and discover why we're the trusted choice for premium powder coating solutions
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/quote">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Get Free Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl md:hidden z-50">
        <Link to="/quote" className="block">
          <button className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold rounded-lg shadow-lg">
            Get Quote Now
          </button>
        </Link>
      </div>
    </div>
  );
}