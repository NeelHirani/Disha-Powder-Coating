'use client';
import { Button, Card, CardContent } from "@/components/UIComponents";
import { ArrowRight, Sparkles, HeartHandshake, Palette, Factory, Leaf, Clock, ChevronDown, Award, Users, Zap, Target, CheckCircle, TrendingUp } from "lucide-react";
import founderImage from "@assets/generated_images/Company_founder_portrait_75b4692c.png";
import heroWorkshopImage from "@assets/generated_images/Powder_coating_workshop_hero_d77b1d0b.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "wouter";

export default function AboutNew() {
  const ref = useRef(null);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* HERO – Split Screen with Floating Elements */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-white" />
        
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 text-orange-600 font-semibold uppercase tracking-wider">
              <Sparkles className="w-5 h-5" />
              <span>Since 2010 • Family-Owned</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none">
              We Make Metal<br />
              <span className="text-orange-600">Smile</span>.
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              Every wheel, railing, and machine part that leaves our shop isn’t just coated — 
              it’s given new life with color, strength, and a finish that turns heads.
            </p>

            <div className="flex flex-wrap gap-4">
            </div>
          </motion.div>

          {/* Right – Floating Cards + Founder */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-full min-h-[600px]"
          >
            {/* Floating Landscape Product Photo */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 z-20"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-2 border border-orange-100 h-full">
                <img src={heroWorkshopImage} alt="Powder coating workshop" className="w-full h-full rounded-3xl object-cover" />
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 4 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              className="absolute bottom-20 right-20 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
            >
              <Leaf className="w-12 h-12 text-green-600 mb-3" />
              <p className="text-2xl font-bold text-gray-800">100% Eco</p>
              <p className="text-gray-600">Zero harmful emissions</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION – Warm & Human */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mt-6 inline-block">
              <div className="relative flex items-center gap-8 max-w-4xl mx-auto py-4">
                {/* Vertical line + pin */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-white font-black text-2xl">2010</span>
                  </div>
                  <div className="w-1 h-32 bg-orange-300 mt-4" />
                </div>

                {/* Quote Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex-1 bg-white rounded-3xl p-10 shadow-xl border border-orange-100"
                >
                  <blockquote className="text-3xl md:text-4xl font-medium text-gray-800 leading-tight">
                    “I didn’t know powder coating.<br />
                    <span className="text-orange-600 font-bold">But I knew how to care.</span>”
                  </blockquote>
                  <p className="mt-8 text-right text-xl text-orange-700 font-bold">— Manoj Bavaria</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES – As Beautiful Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: HeartHandshake, title: "Family First", desc: "Every customer feels like home", color: "from-red-100 to-orange-100" },
              { icon: Palette, title: "Color is Emotion", desc: "We don’t just match colors — we match feelings", color: "from-amber-100 to-orange-100" },
              { icon: Factory, title: "Made to Last", desc: "15 years later, our first job still looks new", color: "from-orange-100 to-amber-100" },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group h-full"
              >
                <div className={`bg-gradient-to-br ${v.color} rounded-3xl p-12 text-center shadow-lg hover:shadow-2xl transition-all border border-orange-100 h-full flex flex-col justify-center`}>
                  <v.icon className="w-16 h-16 text-orange-600 mx-auto mb-6 group-hover:scale-110 transition" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{v.title}</h3>
                  <p className="text-lg text-gray-700">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS – Minimal Bar */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { icon: Clock, value: "3–7 Days", label: "Average Turnaround" },
            { icon: Leaf, value: "100% Green", label: "Eco Process" },
            { icon: Sparkles, value: "5000+", label: "Projects Done" },
            { icon: HeartHandshake, value: "15+ Years", label: "Same Owner" },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <f.icon className="w-12 h-12 mx-auto mb-3" />
              <p className="text-4xl font-black">{f.value}</p>
              <p className="text-orange-100">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILED JOURNEY TIMELINE */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">From humble beginnings to industry leaders</p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: "2010",
                title: "The Beginning",
                description: "Manoj Bavaria started with basic equipment in a 500 sq.ft garage. First customer? A neighbor's scooter that needed a fresh look.",
                highlight: "One man, One vision"
              },
              {
                year: "2014",
                title: "First Commercial Order",
                description: "Received our first bulk industrial order from a factory. Word-of-mouth marketing led to partnerships with local automotive suppliers.",
                highlight: "500+ projects milestone"
              },
              {
                year: "2017",
                title: "Modern Facility",
                description: "Invested in state-of-the-art equipment and eco-friendly processes. Moved to a 5000 sq.ft facility with multiple coating lines.",
                highlight: "5x capacity expansion"
              },
              {
                year: "2020",
                title: "ISO & Certifications",
                description: "Achieved ISO 9001:2015 certification. Implemented strict quality control and environmental compliance standards.",
                highlight: "Industry certified"
              },
              {
                year: "2023",
                title: "Expansion & Growth",
                description: "Now serving 500+ corporate clients across automotive, furniture, industrial, and architectural sectors.",
                highlight: "5000+ projects completed"
              },
              {
                year: "2025",
                title: "Industry Leaders",
                description: "Recognized as one of the most reliable and eco-friendly powder coating service providers in the region.",
                highlight: "Trusted by industry leaders"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex gap-8 items-start ${i % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${i % 2 === 0 ? "from-orange-50 to-amber-50" : "from-amber-50 to-orange-50"} rounded-2xl p-8 border border-orange-200`}>
                    <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">{item.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                    <div className="flex items-center gap-2 text-orange-600 font-semibold">
                      <CheckCircle size={18} />
                      {item.highlight}
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex w-16 justify-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & AWARDS SECTION */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Certifications & Awards</h2>
            <p className="text-xl text-gray-600">Quality and excellence are not promises — they're commitments</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "ISO 9001:2015", desc: "International quality management certification", color: "from-blue-50 to-blue-100" },
              { icon: Leaf, title: "Environmental Compliance", desc: "100% eco-friendly coating process", color: "from-green-50 to-green-100" },
              { icon: Zap, title: "Industry Excellence", desc: "Recognized by industry associations", color: "from-yellow-50 to-yellow-100" },
              { icon: CheckCircle, title: "Zero Defect Policy", desc: "Quality guaranteed on every order", color: "from-purple-50 to-purple-100" },
              { icon: TrendingUp, title: "15+ Years Track Record", desc: "Consistent performance since 2010", color: "from-pink-50 to-pink-100" },
              { icon: Users, title: "500+ Satisfied Clients", desc: "Trusted by leading corporations", color: "from-orange-50 to-orange-100" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={`bg-gradient-to-br ${cert.color} rounded-2xl p-8 text-center border border-gray-200 h-full hover:shadow-lg transition-all`}>
                  <cert.icon className="w-16 h-16 mx-auto mb-4 text-gray-800" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-700">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - DETAILED */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Why Choose Disha?</h2>
            <p className="text-xl text-gray-600">The difference is in every detail</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Unmatched Quality",
                points: [
                  "Multi-stage quality control process",
                  "ISO 9001:2015 certified",
                  "Zero defect guarantee",
                  "Advanced testing equipment"
                ]
              },
              {
                title: "Expert Team",
                points: [
                  "15+ years combined expertise",
                  "Certified technicians",
                  "Continuous training & development",
                  "Dedicated customer support"
                ]
              },
              {
                title: "Fast Turnaround",
                points: [
                  "3-7 days average delivery",
                  "Priority rush service available",
                  "Real-time project tracking",
                  "Flexible scheduling"
                ]
              },
              {
                title: "Eco-Friendly",
                points: [
                  "100% environmentally compliant",
                  "Zero harmful emissions",
                  "Sustainable materials",
                  "Green energy usage"
                ]
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 border-orange-100">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-orange-600 mb-6">{item.title}</h3>
                    <ul className="space-y-4">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT - ENHANCED */}
      <section className="py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left - Image */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl p-1 shadow-2xl">
                <img src={founderImage} alt="Manoj Bavaria" className="w-full rounded-3xl" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">Founder & CEO</div>
                <h2 className="text-5xl font-black text-gray-900 mb-2">Manoj Bavaria</h2>
                <p className="text-xl text-orange-600 font-semibold">The Visionary Behind Disha</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">The Journey</h3>
                  <p className="text-gray-700 leading-relaxed">
                    What started as a simple request from a neighbor to "make it look brand new" transformed into a passion for excellence. 
                    Manoj's commitment to quality and customer satisfaction has been the driving force behind Disha's growth.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">The Philosophy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    "Every product that leaves our facility is treated as if it's for my own home. Quality isn't negotiable, 
                    and customer satisfaction is everything."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <p className="text-3xl font-black text-orange-600">5000+</p>
                    <p className="text-gray-700 font-medium">Projects Delivered</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-3xl font-black text-blue-600">500+</p>
                    <p className="text-gray-700 font-medium">Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="h-4" />

              <Link to="/contact">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-6 rounded-lg w-full">
                  Schedule a Meeting with Manoj <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}