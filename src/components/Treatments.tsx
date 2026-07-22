import { ArrowUpRight } from "lucide-react";
import img1 from "../assets/treat1.png";
import img2 from "../assets/treat2.png";
import img3 from "../assets/treat3.png";
import img4 from "../assets/treat4.png";
import img5 from "../assets/treat5.png";
import img6 from "../assets/treat6.png";

const treatments = [
  {
    title: "Manual Therapy Treatment",
    desc: "Hands-on techniques to restore movement and reduce pain effectively.",
    img: img1,
    tag: "01",
  },
  {
    title: "Spinal Adjustment Therapy",
    desc: "Precise spinal corrections to improve alignment and function.",
    img: img2,
    tag: "02",
  },
  {
    title: "Sports Injury Recovery",
    desc: "Specialized rehabilitation to get athletes back in peak condition.",
    img: img3,
    tag: "03",
  },
  {
    title: "Posture & Alignment Care",
    desc: "Corrective strategies to fix posture and relieve strain.",
    img: img4,
    tag: "04",
  },
  {
    title: "Rehabilitation & Recovery",
    desc: "Guided recovery programs for post-surgery and injury healing.",
    img: img5,
    tag: "05",
  },
  {
    title: "Chronic Pain Management",
    desc: "Long-term solutions to manage and reduce persistent pain.",
    img: img6,
    tag: "06",
  },
];

export default function Treatments() {
  return (
    <section
      id="services"
      className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 bg-[#e1f8f2]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <span className="eyebrow inline-block">Featured Services</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3">
          Therapeutic Treatments{" "}
          <span className="serif-italic">We Provide</span>
        </h2>
        <p className="text-ink/60 max-w-xl mx-auto mt-4 text-sm sm:text-[15px]">
          Step into focused care with treatments designed to reduce pain,
          improve mobility, and support recovery.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 text-left">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  className="w-full h-52 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 bg-[#2e8c7c] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {t.tag}
                </span>
                <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-[#2e8c7c]" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-ink text-lg">{t.title}</h3>
                <p className="text-sm text-ink/50 mt-2 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
