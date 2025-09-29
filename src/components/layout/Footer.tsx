import { Container } from "./Container";
import { Logo } from "@/components/Logo";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-background/80 py-12 backdrop-blur-sm">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              From our farms to your table, we guarantee freshness and quality in every bite.
            </p>
          </div>

          <div className="md:col-span-2 md:justify-self-end">
             <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
               <div>
                  <h3 className="font-headline text-sm font-semibold text-primary">Company</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li><a href="#about" className="text-muted-foreground hover:text-primary">About Us</a></li>
                    <li><a href="#blogs" className="text-muted-foreground hover:text-primary">Blog</a></li>
                    <li><a href="#contact" className="text-muted-foreground hover:text-primary">Careers</a></li>
                  </ul>
               </div>
               <div>
                  <h3 className="font-headline text-sm font-semibold text-primary">Support</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact Us</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary">FAQs</a></li>
                    <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                  </ul>
               </div>
                <div className="col-span-2 sm:col-span-1">
                  <h3 className="font-headline text-sm font-semibold text-primary">Follow Us</h3>
                  <div className="mt-4 flex space-x-4">
                    {socialLinks.map((social) => (
                      <a key={social.name} href={social.href} className="text-muted-foreground hover:text-primary">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    ))}
                  </div>
               </div>
             </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Green Gold Ventures. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
