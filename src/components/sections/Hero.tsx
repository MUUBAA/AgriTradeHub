import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimateOnScroll } from "../AnimateOnScroll";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <Container className="relative flex h-full items-end pb-20 text-white">
        <AnimateOnScroll className="max-w-3xl">
          <h1 className="font-headline text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            From Farm to Table, Freshness Guaranteed
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-200 md:text-xl">
            We connect dedicated farmers with global markets, ensuring the highest quality, sustainably grown fruits reach your business.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="#about">Discover Our Story</a>
            </Button>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
