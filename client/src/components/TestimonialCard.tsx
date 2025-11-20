import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  company: string;
  rating: number;
  text: string;
  avatar?: string;
}

export default function TestimonialCard({ name, company, rating, text, avatar }: TestimonialCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className="p-6">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "fill-primary text-primary" : "text-muted"}
            data-testid={`star-${i + 1}`}
          />
        ))}
      </div>
      <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="testimonial-text">
        "{text}"
      </p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatar} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold" data-testid="testimonial-name">{name}</p>
          <p className="text-sm text-muted-foreground" data-testid="testimonial-company">{company}</p>
        </div>
      </div>
    </Card>
  );
}
