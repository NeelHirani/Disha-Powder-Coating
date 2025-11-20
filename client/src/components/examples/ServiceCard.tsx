import ServiceCard from '../ServiceCard'
import { Wrench } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <ServiceCard
      icon={Wrench}
      title="Custom Powder Coating"
      description="High-quality powder coating in a wide range of colors and finishes for all your metal finishing needs."
    />
  )
}
