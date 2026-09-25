import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { contactInfo } from "@/data/company";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = contactInfo.whatsapp;
  const message = "Hi! I'm interested in powder coating services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-40"
      >
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all group"
          aria-label="Contact us on WhatsApp"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />

          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />

          {/* Tooltip */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-xl whitespace-nowrap"
            >
              Chat with us on WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-slate-900" />
            </motion.div>
          )}
        </motion.a>
      </motion.div>
    </>
  );
}
