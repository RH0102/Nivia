import Hero from "./components/Hero";
import About from "./components/About";
import Treatments from "./components/Treatments";
import CareSupport from "./components/CareSupport";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
    <div className="bg-white font-body">
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal delay={100}><Treatments /></Reveal>
      <Reveal delay={100}><CareSupport /></Reveal>
      <Reveal delay={100}><Programs /></Reveal>
      <Reveal delay={100}><Testimonials /></Reveal>
      <Reveal delay={100}><FAQ /></Reveal>
      <Reveal delay={100}><Booking /></Reveal>
      <Reveal><Footer /></Reveal>
    </div>
  );
}

export default App;
