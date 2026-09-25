import { Award, Users, Star, Clock, LucideIcon } from "lucide-react";

export interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Star, label: "Projects Completed", value: "5000+" },
  { icon: Clock, label: "On-Time Delivery", value: "98%" }
];

export const certifications = [
  "ISO 9001:2015 Certified",
  "Environmental Compliance",
  "15+ Years Industry Experience",
  "24/7 Customer Support"
];

export const contactInfo = {
  phone: "+91 63513 34789",
  email: "info@dishapowdercoating.com",
  address: {
    street: "Industrial Area, Phase 2",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400001",
    country: "India"
  },
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  whatsapp: "916351334789",
  establishedYear: 2010
};

export const socialLinks = [
  { href: "https://facebook.com", platform: "Facebook" },
  { href: "https://instagram.com", platform: "Instagram" },
  { href: "https://linkedin.com", platform: "LinkedIn" },
  { href: "https://twitter.com", platform: "Twitter" },
];
