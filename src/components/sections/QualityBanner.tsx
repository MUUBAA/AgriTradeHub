import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function QualityBanner() {
  const certLogos = PlaceHolderImages.filter(p => p.id.startsWith('quality-cert-'));

  return (
    <section id="quality" className="bg-accent py-12">
      <Container>
        <AnimateOnScroll className="grid grid-cols-1 gap-8 text-center text-accent-foreground md:grid-cols-5 md:items-center">
          <h3 className="font-headline text-xl font-semibold md:col-span-2 md:text-left">
            Committed to Quality & Food Safety
          </h3>
          <div className="col-span-1 flex flex-wrap items-center justify-center gap-8 md:col-span-3 md:justify-end">
            {certLogos.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  data-ai-hint={logo.imageHint}
                  width={120}
                  height={80}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
