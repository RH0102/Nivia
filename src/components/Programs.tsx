import { ArrowUpRight } from "lucide-react";
import img1 from "../assets/program1.png";
import img2 from "../assets/program2.png";
import img3 from "../assets/program4.png";

const programs = [
  { title: "Pain Relief & Recovery Program", img: img1 },
  { title: "Posture & Mobility Program", img: img2 },
  { title: "Recovery Program Memberships", img: img3 },
];

export default function Programs() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 sm:pt-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <span className="eyebrow inline-block">Our Programs</span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3">
          Personalized Treatment Programs{" "}
          <span className="serif-italic block sm:inline">
            Designed to Restore Balance
          </span>
        </h2>
        <p className="text-ink/60 max-w-xl mx-auto mt-4 text-sm sm:text-[15px]">
          Our programs are designed to address specific movement challenges
          through structured, goal-focused physiotherapy plans tailored to
          individual needs.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mt-12">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden h-72 sm:h-80 cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e8c7c]/90 via-[#2e8c7c]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white text-lg sm:text-xl">
                    {p.title}
                  </h3>
                  <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors duration-300">
                    <ArrowUpRight size={18} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
