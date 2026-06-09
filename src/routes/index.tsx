import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsMarquee } from "@/components/site/StatsMarquee";
import { Transformations } from "@/components/site/Transformations";
import { Services } from "@/components/site/Services";
import { Method } from "@/components/site/Method";
import { AboutCoach } from "@/components/site/AboutCoach";
import { Testimonials } from "@/components/site/Testimonials";
import { Social } from "@/components/site/Social";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Personal Leonardo | Personal Trainer & Consultoria Online" },
      { name: "description", content: "Transforme seu corpo e sua mentalidade com o método Personal Leonardo. Treino personalizado, consultoria online e presencial para resultados reais." },
      { property: "og:title", content: "Personal Leonardo" },
      { property: "og:description", content: "Treine com quem entende. Evolua com resultado." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Personal Leonardo",
        description: "Personal trainer e consultoria online focada em resultados reais.",
        url: "/",
        sameAs: ["https://www.instagram.com/personalleonardo/"],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <StatsMarquee />
      <Transformations />
      <Services />
      <Method />
      <AboutCoach />
      <Testimonials />
      <Social />
      <CtaBanner />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
