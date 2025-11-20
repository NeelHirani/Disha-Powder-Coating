import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2" data-testid={`service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed" data-testid={`service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>
    </Card>
  );
}
