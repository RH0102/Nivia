import { ArrowUpRight, ShieldCheck, Award } from "lucide-react";
import heroBG from "../assets/heroBg.png";
import Navbar from "./Navbar";

const stats = [
  { value: "10+", label: "Years of Clinical Experience" },
  { value: "3K+", label: "Patients Treated Successfully" },
  { value: "25+", label: "Specialized Therapy Programs" },
  { value: "96%", label: "Patient Satisfaction Rate" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-5 pb-6 px-4 sm:px-6 lg:px-6">
      <div className="relative bg-neutral-800 px-5 sm:px-6 rounded-[20px] sm:rounded-[28px] overflow-hidden">
        <img
          src={heroBG}
          height={1100}
          width={1600}
          alt="hero-section-bg"
          className="h-full w-full absolute inset-0 opacity-95 object-cover"
        />
        <div className="absolute  inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <Navbar />

        <div className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden min-h-[420px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[750px] flex items-center">
          <div className="relative z-10 pt-28 pb-16 sm:py-20 px-5 sm:px-8 text-white reveal">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Relieve Pain, Restore
              <br className="hidden sm:block" /> Mobility &amp; Strength
              <br />
              <span className="serif-italic">Body Balance</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-white/80 max-w-sm sm:max-w-md text-sm sm:text-[15px] leading-relaxed">
              Targeted care focused on relieving pain, improving movement, and
              restoring everyday comfort through guided, personalized hands-on
              treatment.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="btn-pill bg-white text-ink hover:bg-cream"
              >
                Book Appointment
                <span className="icon-circle bg-[#2e8c7c]">
                  <ArrowUpRight size={16} className="text-white" />
                </span>
              </a>
              <a
                href="#services"
                className="btn-pill border border-white/50 text-white hover:bg-white/10"
              >
                Our Services
                <span className="icon-circle bg-white/15">
                  <ArrowUpRight size={16} className="text-white" />
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex absolute bottom-10 right-8 z-10 gap-3">
            <div className="bg-white/10 backdrop-blur gap-2 flex items-center rounded-full px-4 py-2 text-white/90 text-sm">
              <ShieldCheck size={20} className="shrink-0" />
              <p>Personalized Physiotherapy Treatments</p>
            </div>
            <div className="bg-white/10 backdrop-blur gap-2 flex items-center rounded-full px-4 py-2 text-white/90 text-sm">
              <Award size={20} className="shrink-0" />
              <p>Trusted &amp; Trained Therapy Experts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-20 mt-10 sm:mt-12 px-2">
        {stats.map((s) => (
          <div key={s.label} className="text-center flex  gap-3 lg:text-left">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink">
              {s.value}
            </p>
            <p className="text-xs sm:text-sm text-ink/60 mt-1 max-w-[120px] mx-auto lg:mx-0">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
