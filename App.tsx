import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Shipping from "./components/Shipping";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <WhyUs />
        <Shipping />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
