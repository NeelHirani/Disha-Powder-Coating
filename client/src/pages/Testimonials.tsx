import { Card, CardContent } from "@/components/UIComponents";
import { SEO } from "@/components/SEO";
import { Star, Quote, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials, trustedCompanies as companies } from "@/data/testimonials";

export default function Testimonials() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "from-blue-500 to-blue-600" },
    { icon: Star, label: "Average Rating", value: "4.9/5", color: "from-yellow-500 to-yellow-600" },
    { icon: Award, label: "Client Satisfaction", value: "98%", color: "from-green-500 to-green-600" },
    { icon: TrendingUp, label: "Repeat Business", value: "95%", color: "from-blue-500 to-blue-700" }
  ];

  return (
    <div className="overflow-x-hidden">
      <SEO
        title="Client Testimonials - Reviews | Disha Powder Coating"
        description="Read what our satisfied clients say about our powder coating services. Over 500+ happy clients and 5000+ completed projects."
      />
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-700">
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
                        className="w-14 h-14 rounded-full border-3 border-blue-200 object-cover"
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


      {/* TRUSTED BRANDS SECTION */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Trusted By Industry Leaders</h2>
            <p className="text-xl text-slate-600">Partnering with leading companies across multiple sectors</p>
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
                <div className="bg-white border border-blue-200 rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-all duration-300 h-24">
                  <p className="text-slate-700 font-semibold text-center text-sm leading-relaxed">{company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
