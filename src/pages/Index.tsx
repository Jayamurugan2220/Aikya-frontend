import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aikya Builds Future | AI Venture Studio India - Building India's Future</title>
        <meta
          name="description"
          content="Aikya Builds Future is India's leading AI venture studio. 100+ projects delivered, turning bold ideas into scalable tech ventures. Partner with us to build the future."
        />
        <meta name="keywords" content="AI venture studio India, Aikya Builds Future, tech venture building, Indian startup studio, AI innovation India" />
        <link rel="canonical" href="https://aikyabuildsfuture.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aikya Builds Future",
            description: "India's premier AI-powered venture studio",
            url: "https://aikyabuildsfuture.com",
            foundingDate: "2006",
            address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
