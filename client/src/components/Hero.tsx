import { Button } from "@/components/UIComponents";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Powder_coating_workshop_hero_d77b1d0b.png";

export default function Hero() {
  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
          Professional Powder Coating Excellence
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your metal surfaces with durable, high-quality finishes. Serving automotive, industrial, and architectural sectors.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/quote">
            <Button size="lg" className="text-lg px-8 py-6 min-h-12" data-testid="button-hero-quote">
              Request a Quote
            </Button>
          </Link>
          <Link href="/gallery">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 min-h-12 backdrop-blur-sm bg-white/10 text-white border-white/30 hover:bg-white/20"
              data-testid="button-hero-gallery"
            >
              View Our Work
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-white/80 text-sm">
          <p data-testid="text-hero-trust">Serving 500+ Businesses Since 2010</p>
        </div>
      </div>
    </div>
  );
}
