import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "Services",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      questions: [
        {
          q: "What is powder coating?",
          a: "Powder coating is a dry finishing process that uses finely ground particles of pigment and resin, which are electrostatically charged and sprayed onto a surface. The coated item is then heated in a curing oven where the powder melts and forms a durable, uniform coating."
        },
        {
          q: "What materials can be powder coated?",
          a: "We can powder coat various metals including steel, aluminum, stainless steel, and galvanized metal. The material must be able to withstand the curing temperature of approximately 180-200°C."
        },
        {
          q: "What colors and finishes are available?",
          a: "We offer a wide range of colors including RAL, Pantone, and custom colors. Finishes include gloss, matte, satin, metallic, textured, and specialty effects."
        }
      ]
    },
    {
      category: "Pricing",
      icon: Shield,
      color: "from-orange-500 to-orange-600",
      questions: [
        {
          q: "How much does powder coating cost?",
          a: "Pricing depends on factors like project size, complexity, color requirements, and quantity. Contact us for a detailed quote based on your specific needs."
        },
        {
          q: "Do you offer discounts for bulk orders?",
          a: "Yes, we provide competitive pricing for large volume orders. Please request a quote for your specific requirements."
        }
      ]
    },
    {
      category: "Timeline",
      icon: Clock,
      color: "from-green-500 to-green-600",
      questions: [
        {
          q: "What is the typical turnaround time?",
          a: "Standard turnaround time is 5-7 business days. We also offer expedited services for urgent projects, which can be completed in 1-3 days depending on the scope."
        },
        {
          q: "Can you handle rush orders?",
          a: "Yes, we can accommodate rush orders. Additional charges may apply for expedited processing. Contact us to discuss your timeline requirements."
        }
      ]
    },
    {
      category: "Maintenance",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
      questions: [
        {
          q: "How do I maintain powder coated surfaces?",
          a: "Regular cleaning with mild soap and water is sufficient. Avoid abrasive cleaners and tools. For outdoor applications, periodic washing helps maintain appearance."
        },
        {
          q: "How long does powder coating last?",
          a: "With proper care, powder coating can last 15-20 years or more. The lifespan depends on environmental conditions and maintenance."
        },
        {
          q: "Is powder coating environmentally friendly?",
          a: "Yes, powder coating is more environmentally friendly than traditional liquid paint as it contains no solvents and produces minimal waste. Overspray can be collected and reused."
        }
      ]
    }
  ];

  const maintenanceTips = [
    {
      title: "Regular Cleaning",
      tip: "Clean with mild soap and water regularly. Use a soft cloth or sponge to avoid scratching the surface."
    },
    {
      title: "Avoid Harsh Chemicals",
      tip: "Stay away from abrasive cleaners, solvents, or harsh chemicals that can damage the coating."
    },
    {
      title: "Inspect Regularly",
      tip: "Check for any chips or damage periodically. Address issues early to prevent further deterioration."
    },
    {
      title: "Protect from Impact",
      tip: "While powder coating is durable, protect surfaces from heavy impacts or sharp objects when possible."
    },
    {
      title: "Outdoor Care",
      tip: "For outdoor applications, rinse off salt, dirt, and pollutants regularly to maintain appearance."
    },
    {
      title: "Touch-Up When Needed",
      tip: "Small chips can be touched up. Contact us for professional repair services for larger damages."
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=1920" 
            alt="FAQ"
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <HelpCircle size={40} className="text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about our powder coating services and products
          </p>
        </motion.div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-12">
              {filteredFaqs.map((category, i) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">{category.category}</h2>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-400 to-transparent ml-4"></div>
                    </div>

                    {/* Questions */}
                    <Accordion type="single" collapsible className="space-y-3">
                      {category.questions.map((faq, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 }}
                        >
                          <AccordionItem value={`item-${i}-${j}`} className="bg-white rounded-lg border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 transition-colors duration-200 [&[data-state=open]>svg]:rotate-180">
                              <span className="text-lg font-semibold text-slate-900 text-left">{faq.q}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 text-gray-600 leading-relaxed bg-gray-50 border-t border-gray-100">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        </motion.div>
                      ))}
                    </Accordion>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-600 text-xl font-medium">No FAQs found matching your search</p>
              <p className="text-gray-500 mt-2">Try different keywords or browse all categories</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* MAINTENANCE & CARE TIPS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Maintenance & Care Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keep your powder coated surfaces looking great for years to come
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-6 border-0 hover:shadow-2xl transition-all h-full bg-white">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.tip}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
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
            Still Have Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Our expert team is ready to help. Contact us for personalized assistance with your powder coating project.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/quote">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-6 text-lg rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                Get Free Quote
                <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "100+", label: "FAQs Answered" },
              { number: "24hrs", label: "Response Time" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</p>
                <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
