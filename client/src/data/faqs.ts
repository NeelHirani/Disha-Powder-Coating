import { Zap, Shield, Clock, LucideIcon } from "lucide-react";

export interface FAQ {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  icon: LucideIcon;
  color: string;
  questions: FAQ[];
}

export const faqCategories: FAQCategory[] = [
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
    color: "from-blue-500 to-blue-700",
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

export const maintenanceTips = [
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
