import GalleryImage from '../GalleryImage'
import sampleImage from '@assets/generated_images/Automotive_powder_coating_showcase_e1261c19.png'

export default function GalleryImageExample() {
  return (
    <GalleryImage
      src={sampleImage}
      alt="Automotive parts with glossy black powder coating"
      category="Automotive"
    />
  )
}
