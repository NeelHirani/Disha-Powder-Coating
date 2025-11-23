import { Card } from "@/components/UIComponents";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
}

export default function IndustryCard({ icon: Icon, title }: IndustryCardProps) {
  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-semibold" data-testid={`industry-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
    </Card>
  );
}
