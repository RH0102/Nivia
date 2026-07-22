import Hero from "./components/Hero";
import About from "./components/About";
import Treatments from "./components/Treatments";
import CareSupport from "./components/CareSupport";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white font-body">
      <Hero />
      <About />
      <Treatments />
      <CareSupport />
      <Programs />
      <Testimonials />
      <FAQ />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
