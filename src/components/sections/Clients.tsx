import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Clients() {
  const clientLogos = PlaceHolderImages.filter(p => p.id.startsWith('client-logo-'));

  return (
    <section id="clients" className="bg-primary/5 py-20 lg:py-24">
      <Container>
        <AnimateOnScroll className="text-center">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            Trusted by the Best
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to partner with leading brands across the globe.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay="delay-200" className="mt-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
            {clientLogos.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  data-ai-hint={logo.imageHint}
                  width={150}
                  height={60}
                  className="h-auto w-32 object-contain opacity-60 filter grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
