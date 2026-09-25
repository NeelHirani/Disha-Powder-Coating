import { Car, Factory, Sofa, Building, LucideIcon } from "lucide-react";

export interface Industry {
  icon: LucideIcon;
  title: string;
}

export const industries: Industry[] = [
  { icon: Car, title: "Automotive" },
  { icon: Factory, title: "Industrial" },
  { icon: Sofa, title: "Furniture" },
  { icon: Building, title: "Architecture" },
];
