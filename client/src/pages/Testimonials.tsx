import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Auto Parts Manufacturing",
      rating: 5,
      text: "Excellent service and quality. The powder coating on our automotive parts is flawless and durable. Disha Powder Coating has been our go-to partner for over 3 years.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
      name: "Priya Sharma",
      company: "Modern Interiors",
      rating: 5,
      text: "We use Disha for all our furniture coating needs. Their attention to detail and color matching is impeccable. Highly recommended for commercial projects.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    {
      name: "Amit Patel",
      company: "Industrial Solutions Ltd",
      rating: 5,
      text: "Professional team, quick turnaround, and competitive pricing. The protective coating on our machinery has significantly improved durability.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100"
    },
    {
      name: "Sneha Desai",
      company: "Architectural Designs",
      rating: 5,
      text: "Outstanding work on our architectural metalwork project. The finish is beautiful and has held up perfectly against weather conditions.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    },
    {
      name: "Vikram Singh",
      company: "Custom Fabricators",
      rating: 5,
      text: "We've worked with many coating companies, but Disha stands out for their quality and reliability. They handle both small and large projects with equal dedication.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
    },
    {
      name: "Meera Reddy",
      company: "Office Solutions Hub",
      rating: 5,
      text: "The powder coating on our office furniture line looks fantastic. Great customer service and they always deliver on time.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "from-blue-500 to-blue-600" },
    { icon: Star, label: "Average Rating", value: "4.9/5", color: "from-yellow-500 to-yellow-600" },
    { icon: Award, label: "Client Satisfaction", value: "98%", color: "from-green-500 to-green-600" },
    { icon: TrendingUp, label: "Repeat Business", value: "95%", color: "from-orange-500 to-orange-600" }
  ];

  const companies = [
    "Auto Components Ltd.",
    "Modern Furniture Co.",
    "Industrial Solutions",
    "Architect & Builders",
    "Steel Fabricators Inc.",
    "Metro Infrastructure",
    "Premium Motors",
    "Design Furniture"
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=1920" 
            alt="Testimonials"
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
            Client
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Testimonials
            </span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about our premium powder coating services
          </p>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center border-0 hover:shadow-lg transition-all h-full bg-gradient-to-br from-gray-50 to-white">
                    <CardContent className="p-0 space-y-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real testimonials from satisfied clients across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-8 border-0 hover:shadow-2xl transition-all h-full bg-white relative overflow-hidden">
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-5">
                    <Quote size={80} className="text-blue-600" />
                  </div>

                  <CardContent className="p-0 space-y-6 relative z-10">
                    {/* Rating */}
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed italic text-lg">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full border-3 border-orange-200 object-cover"
                      />
                      <div>
                        <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Hear directly from our clients in their own words</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-lg aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="text-center space-y-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg"
                  >
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-orange-600 border-b-8 border-b-transparent ml-1"></div>
                  </motion.div>
                  <p className="text-white font-semibold">Video Testimonial</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted By Industry Leaders</h2>
            <p className="text-xl text-blue-100">Partnering with leading companies across multiple sectors</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10 h-24">
                  <p className="text-white font-semibold text-center text-sm leading-relaxed">{company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-orange-50">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  {/* Quote */}
                  <div className="md:w-1/2 space-y-6">
                    <Quote size={48} className="text-orange-500" />
                    <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 leading-tight">
                      "Disha Powder Coating transformed our production quality. Not only are the coatings durable, but their customer service is exceptional."
                    </blockquote>
                    <div className="space-y-2 pt-6">
                      <p className="font-bold text-lg text-slate-900">Rajesh Kumar</p>
                      <p className="text-gray-600">Founder, Auto Parts Manufacturing</p>
                      <div className="flex space-x-1 pt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="md:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                      alt="Rajesh Kumar"
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
            Join Our Satisfied Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Experience the quality and service that has earned us hundreds of 5-star reviews and long-term partnerships
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
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-6 text-lg rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
