import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
