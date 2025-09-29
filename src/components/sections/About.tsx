import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');
  const features = [
    "Sustainably Sourced Produce",
    "Global Quality Standards",
    "Reliable Cold-Chain Logistics",
    "Direct Farmer Partnerships",
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll className="relative h-80 w-full lg:h-auto">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="rounded-lg object-cover shadow-lg"
              />
            )}
          </AnimateOnScroll>
          
          <AnimateOnScroll delay="delay-200">
            <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
              Connecting Quality Farms to Global Tables
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At Fresh Fruit Alliances, we are passionate about bridging the gap between dedicated farmers and the global market. Our mission is to deliver unparalleled freshness and quality, ensuring that every piece of fruit tells a story of care, commitment, and sustainability.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  <span className="font-medium text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
