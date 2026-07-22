import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What can I expect on my first visit?",
    a: "You'll begin with a brief assessment to understand your condition, followed by an initial treatment plan discussion.",
  },
  {
    q: "Do I need to book in advance?",
    a: "Yes, we recommend booking ahead to secure a time that works best for your schedule and therapist availability.",
  },
  {
    q: "Is physiotherapy suitable for all ages?",
    a: "Absolutely — our treatment plans are tailored individually, making them suitable for patients of every age group.",
  },
  {
    q: "What should I wear during the session?",
    a: "Comfortable, loose-fitting clothing that allows easy movement is best for your treatment session.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 sm:pb-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">
        <div className=" lg:top-24">
          <span className="eyebrow inline-block">FAQ</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 leading-tight">
            Frequently Asked <span className="serif-italic">Questions</span>
          </h2>
          <p className="text-ink/60 text-sm sm:text-[15px] mt-4 max-w-md leading-relaxed">
            Find quick answers to common questions about appointments,
            treatments, and what to expect during your care and recovery
            process.
          </p>
        </div>

        <div className="flex w-full flex-col">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q} className="rounded-2xl bg-[#e1f8f2] px-6 mb-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-ink">{f.q}</span>
                  <span className="flex items-center justify-center bg-white/80 rounded-full border border-ink/10 shrink-0 w-8 h-8">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="text-sm text-ink/60 leading-relaxed pb-5 pr-10">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
