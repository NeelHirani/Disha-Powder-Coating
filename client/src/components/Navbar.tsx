import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Quote, ArrowRight, Sparkles } from "lucide-react";
import { Button, Sheet, SheetContent, SheetTrigger } from "@/components/UIComponents";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/industries", label: "Industries" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/30 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <img
                src="/DPC 1.png"
                alt="Disha Powder Coating Logo"
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = location === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={item.href}>
                    <div className="relative group">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`px-5 py-2 font-medium transition-all text-sm ${
                          isActive
                            ? "text-blue-600"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                        data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.label}
                      </Button>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-indicator"
                          className="absolute bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-50/0 to-blue-50/50 rounded-lg scale-0 group-hover:scale-100 transition-transform origin-center duration-300" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/quote">
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                size="sm"
                data-testid="button-get-quote"
              >
                <Quote className="mr-2 h-4 w-4" />
                Get Quote
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
                data-testid="button-mobile-menu"
              >
                {open ? (
                  <X size={24} className="text-blue-600" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </motion.button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80 p-0 border-0">
              <div className="flex flex-col h-full bg-gradient-to-b from-white via-white to-blue-50/30">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/30 bg-gradient-to-r from-white to-blue-50/50">
                  <div className="flex items-center gap-3">
                    <img
                      src="/DPC 1.png"
                      alt="Disha Powder Coating Logo"
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <X size={20} className="text-gray-700" />
                  </motion.button>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                  {navItems.map((item, index) => {
                    const isActive = location === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                        >
                          <div
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                              isActive
                                ? "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 font-semibold shadow-sm"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                            data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="mobile-active-dot"
                                className="w-2 h-2 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"
                              />
                            )}
                            <span className="flex-1">{item.label}</span>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                              />
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-gray-200/30 bg-gradient-to-r from-blue-50 to-white">
                  <Link href="/quote" onClick={() => setOpen(false)}>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                      size="lg"
                      data-testid="mobile-button-get-quote"
                    >
                      <Quote className="mr-2 h-5 w-5" />
                      Get Free Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}