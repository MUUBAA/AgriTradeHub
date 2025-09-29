"use client";

import { useState, useEffect } from "react";
import { Container } from "./Container";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

type NavItem = {
  name: string;
  href: string;
};

type HeaderProps = {
  navItems: NavItem[];
};

export function Header({ navItems }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = navItems.map((item) => item.href.substring(1));
  const activeSection = useScrollSpy(sectionIds, { offset: -150 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ inSheet = false }) => (
    <nav
      className={cn(
        "flex items-center gap-1",
        inSheet ? "flex-col items-start gap-4" : "hidden lg:flex"
      )}
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeSection === item.href.substring(1)
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-primary",
            inSheet && "text-lg"
          )}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b bg-background/80 backdrop-blur-md" : ""
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" aria-label="Back to home">
          <Logo />
        </a>
        <NavLinks />
        <div className="flex items-center gap-2">
          <Button asChild className="hidden lg:flex">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background sm:max-w-xs">
              <div className="flex h-full flex-col p-4">
                <div className="mb-8 flex items-center justify-between">
                   <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                     <Logo />
                   </a>
                   <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <NavLinks inSheet />
                  <Button asChild>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
