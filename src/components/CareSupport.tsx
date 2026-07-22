import {
  ShieldCheck,
  CalendarCheck,
  Sparkles,
  ClipboardList,
} from "lucide-react";
import img1 from "../assets/care1.png";
import img2 from "../assets/care2.png";

const benefits = [
  {
    icon: ClipboardList,
    title: "Personalized Care Plans",
    desc: "Treatment plans built around your condition, goals, and recovery needs.",
  },
  {
    icon: Sparkles,
    title: "Treatment Options",
    desc: "From hands-on therapy to guided rehabilitation, all in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Methods",
    desc: "Clinically proven techniques focused on pain relief and mobility improvement.",
  },
];

const highlights = [
  { icon: Sparkles, title: "Whole-Body Treatment Focus" },
  { icon: ShieldCheck, title: "Clean & Safe Environment" },
  { icon: CalendarCheck, title: "Easy Appointments" },
];

export default function CareSupport() {
  return (
    <section className="px-4 sm:px-6 lg:px-10  sm:py-10">
      <div className="max-w-7xl lg:py-16 mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="eyebrow inline-block">How We Care</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 leading-tight">
              Care That Supports
              <br />
              <span className="serif-italic">Movement &amp; Recovery</span>
            </h2>
            <p className="text-ink/60 text-sm sm:text-[15px] mt-4 max-w-md leading-relaxed">
              Our approach focuses on reducing pain, restoring function, and
              helping you move with confidence in everyday life.
            </p>
            <div className="mt-8 sm:mt-10">
              <img
                src={img2}
                alt="Physiotherapy care session"
                className="w-full h-72 sm:h-80 lg:h-[450px] object-cover rounded-2xl"
              />
            </div>
          </div>

          <div>
            <img
              src={img1}
              alt="Guided rehabilitation therapy"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-2xl"
            />
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#2e8c7c]/10 flex items-center justify-center">
                  <ClipboardList
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#2e8c7c]"
                  />
                </div>
                <h3 className="font-semibold text-lg mt-4">
                  Restorative Therapies
                </h3>
                <p className="text-ink/60 text-sm mt-2 leading-relaxed">
                  Techniques focused on reducing pain, improving mobility, and
                  supporting physical recovery.
                </p>
              </div>
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#2e8c7c]/10 flex items-center justify-center">
                  <Sparkles
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#2e8c7c]"
                  />
                </div>
                <h3 className="font-semibold text-lg mt-4">
                  Comfort-Focused Care
                </h3>
                <p className="text-ink/60 text-sm mt-2 leading-relaxed">
                  Every session is guided by professional assessment, hands-on
                  treatment, and patient comfort.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#e1f8f2] rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 lg:p-14 mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <span className="eyebrow inline-block">Our Benefits</span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 leading-tight text-ink">
              Care Benefits{" "}
              <span className="serif-italic">Designed for You</span>
            </h3>
            <p className="text-ink/60 text-sm sm:text-[15px] mt-4 max-w-2xl mx-auto leading-relaxed">
              Every part of our care is designed to support recovery, improve
              movement, and maintain long-term physical health with confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2e8c7c]/10 flex items-center justify-center">
                  <b.icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#2e8c7c]"
                  />
                </div>
                <h4 className="font-semibold text-lg mt-5">{b.title}</h4>
                <p className="text-ink/60 text-sm mt-2 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#2e8c7c]/15">
            {highlights.map((h) => (
              <div key={h.title} className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#2e8c7c]/10 flex items-center justify-center mx-auto">
                  <h.icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#2e8c7c]"
                  />
                </div>
                <p className="text-xs sm:text-sm text-ink/60 mt-3 leading-snug">
                  {h.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
