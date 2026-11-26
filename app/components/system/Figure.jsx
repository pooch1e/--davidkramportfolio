/**
 * Figure — a square-cornered image in a fixed aspect box, with an optional
 * mono caption and an optional scroll reveal. Captions are omitted rather
 * than guessed when venue or date are unknown.
 */
import Image from "next/image";
import { Reveal } from "./Reveal";
import { Label } from "./Label";

export function Figure({
  image,
  aspect = "aspect-[3/2]",
  position = "50% 30%",
  sizes = "100vw",
  caption,
  preload = false,
  reveal = true,
  className = "",
  style,
}) {
  const media = (
    <div className={`relative w-full bg-raised ${aspect}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );

  return (
    <figure className={`flex flex-col gap-2 ${className}`} style={style}>
      {reveal ? <Reveal>{media}</Reveal> : media}
      {caption && <Label as="figcaption">{caption}</Label>}
    </figure>
  );
}
