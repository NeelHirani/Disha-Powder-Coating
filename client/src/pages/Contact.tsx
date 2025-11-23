import { useState } from "react";
import { Card, CardContent, Button, Input, Textarea, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/UIComponents";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Zap, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, serviceInterest: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", serviceInterest: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@dishapowdercoating.com",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Industrial Area, Phase 2, Mumbai, Maharashtra 400001",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Sat: 9:00 AM - 6:00 PM",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1733682370715-d67ef65b9076?w=1920" 
            alt="Contact Us"
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
            Let's Connect & 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Bring Your Vision to Life
            </span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Contact us today for a free quote and expert consultation on your powder coating needs.
          </p>
        </motion.div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="p-6 border-0 hover:shadow-2xl transition-all h-full bg-white">
                    <CardContent className="p-0 space-y-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{method.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{method.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-0 shadow-2xl bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                    <h2 className="text-3xl font-bold text-slate-900">Send Us a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-sm font-semibold text-gray-700 mb-2 block">Service Interest</Label>
                      <Select value={formData.serviceInterest} onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custom-coating">Custom Powder Coating</SelectItem>
                          <SelectItem value="color-matching">Color Matching</SelectItem>
                          <SelectItem value="special-finishes">Special Finishes</SelectItem>
                          <SelectItem value="protective-coating">Industrial Protection</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin inline-block">⌛</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Info Cards */}
              <Card className="p-8 border-0 shadow-lg bg-white">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">Available Mon-Sat, 9 AM - 6 PM</p>
                    </div>
                  </div>

                  <div className="border-t pt-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-909 mb-1">Email Us</h3>
                      <p className="text-gray-600">info@dishapowdercoating.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="border-t pt-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                      <p className="text-gray-600">Industrial Area, Phase 2<br />Mumbai, Maharashtra 400001</p>
                      <p className="text-sm text-gray-500">Please call ahead to schedule</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us Small */}
              <Card className="p-6 border-0 bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg text-white">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Fast Response</h4>
                      <p className="text-blue-100 text-sm">Get a response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Free Quote</h4>
                      <p className="text-blue-100 text-sm">No hidden charges, transparent pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Expert Consultation</h4>
                      <p className="text-blue-100 text-sm">15+ years of industry expertise</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP & VISIT SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Find Us Here</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our state-of-the-art facility to see our equipment and discuss your project in person
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <Card className="p-0 border-0 overflow-hidden shadow-2xl h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5829833347357!2d72.87854!3d19.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c2d1234567ab%3A0x123456789abcdef!2sIndustrial%20Area%2C%20Phase%202%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </Card>
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <Card className="p-8 border-0 shadow-2xl bg-gradient-to-br from-slate-900 to-blue-900 text-white flex-1">
                <CardContent className="p-0 space-y-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Visit Our Facility</h3>
                    <p className="text-blue-100 leading-relaxed mb-6">
                      Experience our state-of-the-art equipment and meet our team of experts to discuss your specific requirements.
                    </p>
                  </div>
                  <div className="space-y-4 pt-6 border-t border-white/20">
                    <div>
                      <p className="text-orange-400 font-semibold text-sm">ADDRESS</p>
                      <p className="text-blue-100">Industrial Area, Phase 2<br />Mumbai, Maharashtra 400001, India</p>
                    </div>
                    <div>
                      <p className="text-orange-400 font-semibold text-sm">HOURS</p>
                      <p className="text-blue-100">Mon-Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                    </div>
                    <p className="text-sm text-orange-300 italic pt-4">
                      ⓘ Please call ahead to schedule your visit
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            Ready to Start Your Project?
          </motion.h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Connect with our team today and get a free, no-obligation quote for your powder coating needs
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2">
              Get Free Quote
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
