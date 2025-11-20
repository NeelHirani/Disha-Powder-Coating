import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, Eye, Shield, Sparkles, Clock, Users, Award, 
  Factory, ChevronRight, Quote, ArrowRight, CheckCircle, Zap, Leaf
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
    { icon: Target, title: "Precision", description: "Expert attention to detail in every coating", color: "from-blue-500 to-blue-600" },
    { icon: Shield, title: "Durability", description: "Long-lasting protection and quality finish", color: "from-emerald-500 to-emerald-600" },
    { icon: Sparkles, title: "Innovation", description: "Cutting-edge coating technology", color: "from-purple-500 to-purple-600" },
    { icon: Users, title: "Trust", description: "Reliable partnership with every client", color: "from-amber-500 to-amber-600" },
  ];

  const timeline = [
    { year: "2010", title: "The Beginning", desc: "Started in a 500 sq ft workshop with 3 team members." },
    { year: "2015", title: "Growth Phase", desc: "Expanded to 10,000 sq ft with automated lines." },
    { year: "2018", title: "ISO Certified", desc: "Achieved ISO 9001:2015 for quality excellence." },
    { year: "2022", title: "Eco Initiative", desc: "Launched 100% eco-friendly coating process." },
    { year: "2025", title: "Today", desc: "5000+ projects, serving 50+ industries." },
  ];

  const whyChooseUs = [
    { title: "Advanced Technology", description: "State-of-the-art equipment and automated processes", icon: Zap },
    { title: "Experienced Team", description: "Skilled professionals with 15+ years expertise", icon: Users },
    { title: "Quality Assurance", description: "Rigorous testing at every production stage", icon: CheckCircle },
    { title: "Eco-Friendly", description: "100% sustainable and environmentally responsible", icon: Leaf },
    { title: "Fast Turnaround", description: "98% on-time delivery rate guaranteed", icon: Clock },
    { title: "Competitive Pricing", description: "Best value without compromising quality", icon: Award },
  ];

  return (
    <div ref={scrollRef} className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=1920" 
            alt="Disha Powder Coating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-blue-900/70"></div>
        </div>

        {/* Animated background elements */}
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-20" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: y2 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Crafted with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Care</span>.<br />
              Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Last</span>.
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
              Since 2010, Disha Powder Coating has been the trusted name in premium metal finishing — 
              blending tradition, technology, and sustainability.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 pt-4"
            >
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Our Story <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <img
                src={founderImage}
                alt="Rajesh Mehta - Founder"
                className="w-full rounded-xl shadow-xl"
              />
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-white">Rajesh Mehta</p>
                <p className="text-sm text-orange-400 font-medium">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=800" 
                alt="Our Facility"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl -z-10"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2010, Disha Powder Coating began with a vision to provide superior metal finishing solutions to industries across India. What started as a small operation has grown into one of the most trusted names in powder coating services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the past 15+ years, we have invested in state-of-the-art technology, expanded our capabilities, and built a team of skilled professionals dedicated to delivering excellence in every project.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve a diverse range of industries including automotive, industrial machinery, furniture, and architectural sectors, consistently exceeding client expectations with our quality workmanship and professional service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-2xl transition-shadow duration-300 border-0 bg-white h-full">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Target size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To deliver superior powder coating solutions that enhance the durability, aesthetics, and performance of metal products while maintaining environmental responsibility and exceeding customer expectations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 hover:shadow-2xl transition-shadow duration-300 border-0 bg-white h-full">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                    <Eye size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To be recognized as India's leading powder coating service provider, known for innovation, quality, and customer satisfaction, while continuously investing in technology and people development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The foundation of everything we do</p>
          </motion.div>

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
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="p-6 h-full bg-white border-0 hover:shadow-2xl transition-all group-hover:-translate-y-2">
                    <CardContent className="p-0 space-y-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl p-3 shadow-lg group-hover:shadow-xl transition-shadow flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">From vision to industry leadership</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-orange-400 h-full" />
            
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-500 h-full">
                    <CardContent className="p-0">
                      <p className="text-3xl font-bold text-orange-600">{item.year}</p>
                      <h3 className="text-lg font-semibold text-slate-900 mt-2">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:flex justify-center w-2/12">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full border-4 border-white shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-0 shadow-2xl text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
              
              <CardContent className="p-0 relative z-10">
                <Quote className="w-12 h-12 text-orange-400 mb-6" />
                <blockquote className="text-2xl md:text-3xl font-medium italic text-white leading-relaxed mb-8">
                  "We started with a simple belief: every metal part deserves a perfect finish. 15 years later, that belief drives us to innovate, improve, and inspire."
                </blockquote>
                <div className="flex items-center gap-4 pt-8 border-t border-white/20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">RM</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Rajesh Mehta</p>
                    <p className="text-sm text-orange-400">Founder & CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Disha Powder Coating?</h2>
            <p className="text-xl text-gray-600">What sets us apart from the competition</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="p-8 bg-white hover:shadow-2xl transition-all h-full border-0">
                    <CardContent className="p-0 space-y-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted Excellence</h2>
            <p className="text-xl text-blue-100">Recognized for quality and reliability</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "ISO 9001:2015", value: "Certified" },
              { icon: Shield, label: "15+ Years", value: "Experience" },
              { icon: Factory, label: "5000+", value: "Projects" },
              { icon: Sparkles, label: "100%", value: "Eco-Certified" },
            ].map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-white"
                >
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                    <Icon className="w-10 h-10 text-orange-400" />
                  </div>
                  <p className="font-semibold text-lg">{badge.label}</p>
                  <p className="text-sm text-blue-100">{badge.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-white">
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
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}