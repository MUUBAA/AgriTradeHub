import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMap } from "@/components/GoogleMap";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'contact-background');

  return (
    <section id="contact" className="relative py-20 lg:py-32">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          data-ai-hint={bgImage.imageHint}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll>
            <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or a project in mind? We'd love to hear from you.
            </p>
            <div className="mt-8 space-y-6">
              <ContactInfoItem icon={Mail} text="contact@freshfruit.com" href="mailto:contact@freshfruit.com" />
              <ContactInfoItem icon={Phone} text="+91 11 4567 8901" href="tel:+911145678901" />
              <ContactInfoItem icon={MapPin} text="Connaught Place, New Delhi, India" />
            </div>
            <div className="mt-12 rounded-lg bg-card p-6 shadow-lg">
                <ContactForm />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay="delay-200" className="min-h-[400px] lg:min-h-full">
            <div className="h-full w-full overflow-hidden rounded-lg shadow-lg">
                <GoogleMap />
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}

function ContactInfoItem({ icon: Icon, text, href }: { icon: React.ElementType, text: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="font-medium text-foreground">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }
  return content;
}
