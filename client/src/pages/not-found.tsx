import { Link } from "wouter";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/UIComponents";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* 404 Illustration */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              404
            </div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute -top-4 -right-4"
            >
              <Search size={48} className="text-blue-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
        >
          Oops! Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-600 mb-8 leading-relaxed"
        >
          The page you're looking for seems to have been powder coated out of existence.
          Let's get you back on track!
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Home className="mr-2" size={20} />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300">
              <ArrowLeft className="mr-2" size={20} />
              Contact Us
            </Button>
          </Link>
        </motion.div>

        {/* Popular Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 mb-4">Or explore these popular pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/quote", label: "Get Quote" },
              { href: "/faq", label: "FAQ" },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-blue-500 hover:text-blue-700 transition-all cursor-pointer"
                >
                  {link.label}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
