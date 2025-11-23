import { useState } from "react";
import { Dialog, DialogContent } from "@/components/UIComponents";

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

export default function GalleryImage({ src, alt, category }: GalleryImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg hover-elevate active-elevate-2 cursor-pointer group"
        onClick={() => setOpen(true)}
        data-testid={`gallery-image-${category.toLowerCase()}`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-sm font-medium">{alt}</p>
          <p className="text-white/80 text-xs">{category}</p>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0">
          <img src={src} alt={alt} className="w-full h-auto" />
        </DialogContent>
      </Dialog>
    </>
  );
}
