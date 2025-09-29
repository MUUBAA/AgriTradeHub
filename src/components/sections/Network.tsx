import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Network() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'network-map');

  return (
    <section id="network" className="bg-primary/5 py-20 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll>
            <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
              A Nationwide Network of Freshness
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Our robust network spans across India, with state-of-the-art distribution hubs and a strong presence in key agricultural regions. This allows us to maintain an efficient cold chain and ensure timely delivery of the freshest produce.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="font-headline text-4xl font-bold text-accent">15+</p>
                <p className="font-medium text-muted-foreground">States Covered</p>
              </div>
              <div className="space-y-1">
                <p className="font-headline text-4xl font-bold text-accent">500+</p>
                <p className="font-medium text-muted-foreground">Farmer Partners</p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-200" className="flex justify-center">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                data-ai-hint={mapImage.imageHint}
                width={500}
                height={500}
                className="rounded-lg object-contain"
              />
            )}
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
