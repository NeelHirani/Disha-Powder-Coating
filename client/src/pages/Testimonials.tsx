import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Auto Parts Manufacturing",
      rating: 5,
      text: "Excellent service and quality. The powder coating on our automotive parts is flawless and durable. Disha Powder Coating has been our go-to partner for over 3 years."
    },
    {
      name: "Priya Sharma",
      company: "Modern Interiors",
      rating: 5,
      text: "We use Disha for all our furniture coating needs. Their attention to detail and color matching is impeccable. Highly recommended for commercial projects."
    },
    {
      name: "Amit Patel",
      company: "Industrial Solutions Ltd",
      rating: 5,
      text: "Professional team, quick turnaround, and competitive pricing. The protective coating on our machinery has significantly improved durability."
    },
    {
      name: "Sneha Desai",
      company: "Architectural Designs",
      rating: 5,
      text: "Outstanding work on our architectural metalwork project. The finish is beautiful and has held up perfectly against weather conditions."
    },
    {
      name: "Vikram Singh",
      company: "Custom Fabricators",
      rating: 5,
      text: "We've worked with many coating companies, but Disha stands out for their quality and reliability. They handle both small and large projects with equal dedication."
    },
    {
      name: "Meera Reddy",
      company: "Office Solutions Hub",
      rating: 5,
      text: "The powder coating on our office furniture line looks fantastic. Great customer service and they always deliver on time."
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-muted-foreground text-lg">
            Hear what our satisfied clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
