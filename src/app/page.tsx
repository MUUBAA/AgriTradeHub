import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Network } from "@/components/sections/Network";
import { Clients } from "@/components/sections/Clients";
import { Blogs } from "@/components/sections/Blogs";
import { QualityBanner } from "@/components/sections/QualityBanner";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Network", href: "#network" },
    { name: "Clients", href: "#clients" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header navItems={navItems} />
      <main className="flex-1">
        <Hero />
        <About />
        <Network />
        <Clients />
        <Blogs />
        <QualityBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
