import {
  ArrowUpRight,
  Target,
  Eye,
  Users,
  ClipboardList,
  Activity,
  HeartPulse,
} from "lucide-react";
import img1 from "../assets/about1.png";
import img2 from "../assets/about2.png";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    desc: "Highly trained physiotherapists specializing in diverse treatments.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Plans",
    desc: "Treatment plans designed around your condition and goals.",
  },
  {
    icon: Activity,
    title: "Measurable Results",
    desc: "Focused care to significantly improve mobility and reduce pain.",
  },
  {
    icon: HeartPulse,
    title: "Holistic Care",
    desc: "Addressing posture, movement, and overall body function.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={img1}
              alt="About physiotherapy care"
              className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
            />
          </div>

          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 leading-tight">
              Advanced Care Solutions In{" "}
              <span className="serif-italic">Physiotherapy Care</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-700/10 flex items-center justify-center">
                  <Target
                    size={20}
                    className="text-teal-700"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-medium mt-3 mb-1">Mission</h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  To provide evidence-based physiotherapy care focused on
                  recovery, mobility, and lasting physical well-being for all
                  patients.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-700/10 flex items-center justify-center">
                  <Eye size={20} className="text-teal-700" strokeWidth={1.5} />
                </div>
                <h3 className="font-medium mt-3 mb-1">Vision</h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  To be a trusted provider of physiotherapy care that helps
                  individuals move better and live with confidence at every
                  stage of life.
                </p>
              </div>
            </div>

            <a
              href="#services"
              className="btn-pill bg-[#2e8c7c] text-white hover:bg-[#2e8c7c]/90  mt-8"
            >
              About More
              <span className="icon-circle bg-white/15">
                <ArrowUpRight size={16} className="text-white" />
              </span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 mt-16 sm:mt-20 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {features.map((f) => (
              <div key={f.title}>
                <div className="w-11 h-11 rounded-xl bg-teal-700/10 flex items-center justify-center">
                  <f.icon
                    size={22}
                    className="text-teal-700"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-medium mt-3 mb-1">{f.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={img2}
              alt="About our features"
              className="w-full h-64 sm:h-80 md:h-[360px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
