import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/industries", label: "Industries" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md"
            >
              <span className="text-white font-bold text-xl">D</span>
            </motion.div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
              Disha Powder Coating
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div className="relative group">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`px-4 font-medium transition-all ${
                        isActive
                          ? "text-indigo-600"
                          : "text-gray-700 hover:text-indigo-600"
                      }`}
                      data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </Button>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <div className="absolute inset-0 -z-10 bg-indigo-50/50 rounded-md scale-0 group-hover:scale-100 transition-transform origin-center" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/quote">
              <Button
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                size="sm"
                data-testid="button-get-quote"
              >
                <Quote className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                data-testid="button-mobile-menu"
              >
                {open ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full bg-gradient-to-b from-white to-indigo-50/30">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">D</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">Disha</span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                  {navItems.map((item) => {
                    const isActive = location === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                      >
                        <div
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            isActive
                              ? "bg-indigo-100 text-indigo-700 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="flex-1">{item.label}</span>
                          {isActive && (
                            <motion.div
                              layoutId="mobile-active-dot"
                              className="w-1.5 h-1.5 bg-indigo-600 rounded-full"
                            />
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t bg-white">
                  <Link href="/quote" onClick={() => setOpen(false)}>
                    <Button
                      className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium"
                      size="lg"
                      data-testid="mobile-button-get-quote"
                    >
                      <Quote className="mr-2 h-5 w-5" />
                      Get Free Quote
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