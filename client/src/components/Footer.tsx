import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, ArrowRight, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home", icon: null },
    { href: "/services", label: "Services", icon: null },
    { href: "/gallery", label: "Gallery", icon: null },
    { href: "/industries", label: "Industries", icon: null },
    { href: "/about", label: "About Us", icon: null },
    { href: "/testimonials", label: "Testimonials", icon: null },
  ];

  const services = [
    "Metal Powder Coating",
    "Automotive Coating",
    "Industrial Machinery",
    "Furniture Finishing",
    "Custom Fabrication",
    "Architectural Metal"
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook", color: "hover:bg-blue-600" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-700" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter", color: "hover:bg-blue-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12"
        >

          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-3 group w-fit cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group-hover:from-orange-600 group-hover:to-orange-800">
                  <span className="text-white font-bold text-3xl">D</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Disha
                  </span>
                  <span className="text-xs font-semibold text-gray-300">Powder Coating</span>
                </div>
              </motion.div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Excellence in metal finishing with over 15 years of industry expertise. Transforming metal surfaces with precision, durability, and vibrant finishes.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-11 h-11 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
              <h3 className="font-bold text-lg text-white">Quick Links</h3>
            </div>
            <div className="space-y-3">
              {quickLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  <motion.div
                    whileHover={{ x: 8, color: "#fb923c" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors cursor-pointer group"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
              <h3 className="font-bold text-lg text-white">Services</h3>
            </div>
            <div className="space-y-2">
              {services.slice(0, 5).map((service, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm text-gray-300 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  • {service}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
              <h3 className="font-bold text-lg text-white">Get in Touch</h3>
            </div>
            <div className="space-y-4">
              {/* Phone */}
              <motion.a
                href="tel:+919876543210"
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-500/40 group-hover:to-orange-600/40 transition-all">
                  <Phone size={18} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call Us</p>
                  <p className="font-medium text-white hover:text-orange-400 transition-colors text-sm">+91 98765 43210</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:info@dishapowdercoating.com"
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/40 group-hover:to-blue-600/40 transition-all">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="font-medium text-white hover:text-blue-400 transition-colors text-sm break-all">info@dishapowdercoating.com</p>
                </div>
              </motion.a>

              {/* Address */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-purple-500/40 group-hover:to-purple-600/40 transition-all">
                  <MapPin size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Visit Us</p>
                  <p className="font-medium text-white text-sm leading-relaxed">
                    Industrial Area, Phase 2<br />Mumbai, Maharashtra 400001
                  </p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-green-500/40 group-hover:to-green-600/40 transition-all">
                  <Clock size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Business Hours</p>
                  <p className="font-medium text-white text-sm" data-testid="footer-hours">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 p-8 bg-gradient-to-r from-orange-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all"
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Project?</h3>
            <p className="text-gray-300 text-sm">Get a free quote and experience premium powder coating services</p>
          </div>
          <div className="flex items-center justify-start md:justify-end">
            <Link href="/quote">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Request Quote Now
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-400"
        >
          <p data-testid="footer-copyright">© {currentYear} Disha Powder Coating. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}