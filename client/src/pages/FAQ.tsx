import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      category: "Services",
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

  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our powder coating services
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold mb-4" data-testid={`faq-category-${i}`}>
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, j) => (
                  <AccordionItem key={j} value={`item-${i}-${j}`}>
                    <AccordionTrigger data-testid={`faq-question-${i}-${j}`}>
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent data-testid={`faq-answer-${i}-${j}`}>
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
