import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, Eye, Shield, Sparkles, Clock, Users, Award, 
  Factory, ChevronRight, Quote, ArrowRight, CheckCircle 
} from "lucide-react";
import founderImage from "@assets/generated_images/Company_founder_portrait_75b4692c.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const values = [
    { icon: Target, title: "Precision", color: "from-blue-500 to-blue-600" },
    { icon: Shield, title: "Durability", color: "from-emerald-500 to-emerald-600" },
    { icon: Sparkles, title: "Innovation", color: "from-purple-500 to-purple-600" },
    { icon: Users, title: "Trust", color: "from-amber-500 to-amber-600" },
  ];

  const timeline = [
    { year: "2010", title: "The Beginning", desc: "Started in a 500 sq ft workshop with 3 team members." },
    { year: "2015", title: "Growth Phase", desc: "Expanded to 10,000 sq ft with automated lines." },
    { year: "2018", title: "ISO Certified", desc: "Achieved ISO 9001:2015 for quality excellence." },
    { year: "2022", title: "Eco Initiative", desc: "Launched 100% eco-friendly coating process." },
    { year: "2025", title: "Today", desc: "5000+ projects, serving 50+ industries." },
  ];

  return (
    <div ref={scrollRef} className="bg-gradient-to-b from-gray-50 to-white">
      {/* PARALLAX HERO */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30" />
        </motion.div>

        <motion.div 
          style={{ y: y2 }}
          className="relative z-10 flex items-center justify-center h-full px-6"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Crafted with <span className="text-indigo-600">Care</span>.<br />
                Built to <span className="text-indigo-600">Last</span>.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                Since 2010, Disha Powder Coating has been the trusted name in premium metal finishing — 
                blending tradition, technology, and sustainability.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Explore Our Story <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100">
                <img
                  src={founderImage}
                  alt="Rajesh Mehta - Founder"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-gray-900">Rajesh Mehta</p>
                  <p className="text-sm text-indigo-600">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* OUR VALUES - 3D CUBE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The foundation of everything we do</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="p-8 text-center h-full bg-white border-2 border-transparent hover:border-indigo-200 transition-all">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.color} p-3 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE - CLEAN VERTICAL */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From vision to industry leadership</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-indigo-200 h-full" />
            
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-600">
                    <p className="text-2xl font-bold text-indigo-600">{item.year}</p>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  </Card>
                </div>
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="p-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-0 shadow-xl">
            <Quote className="w-12 h-12 text-indigo-400 mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium italic text-gray-800 leading-relaxed">
              "We started with a simple belief: every metal part deserves a perfect finish. 
              15 years later, that belief drives us to innovate, improve, and inspire."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-xl font-bold text-indigo-600">R</span>
              </div>
              <div>
                <p className="font-bold text-lg">Rajesh Mehta</p>
                <p className="text-sm text-indigo-600">Founder & CEO</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted Excellence</h2>
            <p className="text-xl text-gray-600">Recognized for quality and reliability</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "ISO 9001:2015" },
              { icon: Shield, label: "15+ Years" },
              { icon: Factory, label: "5000+ Projects" },
              { icon: Sparkles, label: "Eco-Certified" },
            ].map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-10 h-10 text-indigo-600" />
                  </div>
                  <p className="font-semibold text-gray-800">{badge.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Partners Choose Us</h2>
            <p className="text-xl text-gray-600">Proven reasons to trust Disha</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Unmatched Quality", desc: "Multi-layer inspection at every stage", icon: CheckCircle },
              { title: "Fast & Reliable", desc: "98% on-time delivery rate", icon: Clock },
              { title: "Sustainable Future", desc: "Zero-waste, eco-friendly process", icon: Sparkles },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="p-8 h-full text-center hover:shadow-xl transition-shadow">
                    <Icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}