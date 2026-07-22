import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I noticed real progress after just a few sessions. The care was professional, focused, and tailored to my condition. Highly recommend for anyone dealing with chronic pain.",
    name: "Natalie Cooper",
    role: "Creative Director",
    rating: 5,
  },
  {
    quote:
      "The team explained everything clearly and guided me through recovery step by step. I feel stronger, more stable, and confident again. Life-changing experience.",
    name: "Hannah Wilson",
    role: "Photographer",
    rating: 5,
  },
  {
    quote:
      "After consistent treatment, my pain reduced significantly and my movement improved. Daily activities feel easier and more comfortable now. Thank you so much!",
    name: "Michael Turner",
    role: "Software Engineer",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="eyebrow inline-block">Testimonials</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3">
            Stories That Reflect{" "}
            <span className="serif-italic">Real Recovery</span>
          </h2>
        </div>

        <div className="bg-[#2e8c7c] text-white rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Quote size={28} className="text-white/60" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-light">
                "{testimonials[active].quote}"
              </p>
              <div className="flex gap-1 mt-5">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-white text-white" />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-sm font-semibold tracking-wide">
                  {testimonials[active].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold">{testimonials[active].name}</p>
                  <p className="text-sm text-white/60">
                    {testimonials[active].role}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  className={`text-left rounded-2xl px-6 py-5 mb-3 transition-all duration-300 ${
                    active === i
                      ? "bg-white/10"
                      : "bg-transparent hover:bg-white/5"
                  }`}
                >
                  <p className="text-sm sm:text-[15px] leading-relaxed text-white/80">
                    "{t.quote.slice(0, 80)}..."
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-xs font-medium">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-white/50">{t.role}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-white" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
