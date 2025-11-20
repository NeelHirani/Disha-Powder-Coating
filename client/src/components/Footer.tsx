import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const quickLinks = [
    { href: "/services", label: "Services", icon: Sparkles },
    { href: "/gallery", label: "Gallery", icon: null },
    { href: "/industries", label: "Industries", icon: null },
    { href: "/quote", label: "Get Quote", icon: ArrowRight },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Brand Column - Span 4 on large */}
          <div className="lg:col-span-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-5 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                Disha Powder Coating
              </span>
            </motion.div>

            <p className="text-indigo-200 text-sm leading-relaxed mb-6 max-w-xs">
              Transforming metal with precision, durability, and vibrant finishes since 2010.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-white group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links - Span 3 */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
              <div className="w-1 h-6 bg-indigo-500 rounded-full" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, i) => {
                return (
                  <Link key={i} href={link.href}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="group flex items-center gap-3 text-indigo-200 hover:text-white transition-all"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="text-sm font-medium">{link.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Info - Span 3 */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
              <div className="w-1 h-6 bg-indigo-500 rounded-full" />
              Get in Touch
            </h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-indigo-300">Call Us</p>
                  <p className="font-medium" data-testid="footer-phone">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-indigo-300">Email</p>
                  <p className="font-medium break-all" data-testid="footer-email">info@dishapowdercoating.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-indigo-300">Visit Us</p>
                  <p className="font-medium text-sm" data-testid="footer-address">
                    Industrial Area, Phase 2<br />Mumbai, Maharashtra 400001
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Business Hours - Span 2 */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
              <div className="w-1 h-6 bg-indigo-500 rounded-full" />
              Business Hours
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-1 text-indigo-400" />
                <div className="text-sm text-indigo-200">
                  <p data-testid="footer-hours-weekday">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p data-testid="footer-hours-sunday">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10 text-sm text-indigo-300"
        >
          <p>© {currentYear} Disha Powder Coating. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}