import { Link } from "wouter";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Wrench, Palette, Sparkles, Shield, Car, Factory, Sofa, Building, ArrowRight, Quote } from "lucide-react";
import beforeAfterImage from "@assets/generated_images/Before_after_coating_comparison_9a2d0fe3.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
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
    { value: 15, label: "Years of Excellence" },
    { value: 5000, label: "Projects Delivered" },
    { value: 500, label: "Satisfied Clients" },
    { value: 50, label: "Industries Served" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, i) => {
      let current = 0;
      const increment = stat.value / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[i] = Math.floor(current);
          return newCounters;
        });
      }, interval);
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION - Fullscreen with Gradient Overlay */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-grid-white/5 bg-grid" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium <span className="text-indigo-400">Powder Coating</span> Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Transform metal into masterpieces with durable, vibrant, and eco-friendly coatings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Quote className="mr-2 h-5 w-5" /> Get Free Quote
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 shadow-2xl border border-white/20">
              <img
                src={beforeAfterImage}
                alt="Before & After Powder Coating"
                className="rounded-lg shadow-xl w-full h-auto max-w-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - Interactive Cards */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom colors to industrial protection — we do it all with precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full border border-gray-100">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                    <service.icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="ghost" className="group">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER SLIDER */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            See the Transformation
          </motion.h2>
          <p className="text-xl text-muted-foreground mb-12">
            Real results. Real durability. Real difference.
          </p>

          <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={beforeAfterImage}
              alt="Before and After"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <p className="text-white text-lg font-medium">
                Before → After: Full restoration with high-gloss powder coat
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/gallery">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Power</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leaders across sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 flex flex-col items-center justify-center h-32 hover:from-indigo-100 hover:to-indigo-200 transition-all">
                  <industry.icon className="w-10 h-10 text-indigo-600 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-lg">{industry.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Elevate Your Products?
          </motion.h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join 500+ businesses that trust Disha for flawless finishes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 text-white">
                Get Your Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg md:hidden z-50">
        <Link href="/quote" className="block">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-lg" size="lg">
            Get Quote Now
          </Button>
        </Link>
      </div>
    </div>
  );
}