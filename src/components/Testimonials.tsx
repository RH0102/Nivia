import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

const reviews = [
  {
    quote:
      "I noticed real progress after just a few sessions. The care was professional, focused, and tailored to my condition. Highly recommend for anyone dealing with chronic pain.",
    name: "Natalie Cooper",
    role: "Creative Director",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    quote:
      "The team explained everything clearly and guided me through recovery step by step. I feel stronger, more stable, and confident again. Life-changing experience.",
    name: "Hannah Wilson",
    role: "Photographer",
    rating: 5,
    date: "1 month ago",
  },
  {
    quote:
      "After consistent treatment, my pain reduced significantly and my movement improved. Daily activities feel easier and more comfortable now.",
    name: "Michael Turner",
    role: "Software Engineer",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    quote:
      "Great experience from start to finish. The staff is friendly, the facility is clean, and the treatment plans are well structured. I felt cared for throughout.",
    name: "Sarah Adams",
    role: "Marketing Manager",
    rating: 5,
    date: "1 week ago",
  },
  {
    quote:
      "My back pain was affecting my daily life for years. After just two months of therapy here, I can finally move without discomfort. Truly grateful!",
    name: "David Chen",
    role: "Accountant",
    rating: 5,
    date: "2 months ago",
  },
  {
    quote:
      "Professional, caring, and effective. The therapists really know what they're doing. I've recommended them to all my friends and family.",
    name: "Emma Rodriguez",
    role: "Teacher",
    rating: 4,
    date: "1 month ago",
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getMaxPage = () => {
    if (typeof window === "undefined") return 0;
    if (window.innerWidth >= 1024) return Math.ceil(reviews.length / 3) - 1;
    if (window.innerWidth >= 640) return Math.ceil(reviews.length / 2) - 1;
    return reviews.length - 1;
  };

  const maxPage = getMaxPage();

  const scrollToPage = (p: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[0] as HTMLElement;
    if (!card) return;

    const style = window.getComputedStyle(container);
    const gap = parseInt(style.gap) || 24;

    let cardsPerView = 1;
    if (window.innerWidth >= 1024) cardsPerView = 3;
    else if (window.innerWidth >= 640) cardsPerView = 2;

    const cardWidth = card.offsetWidth + gap;
    container.scrollTo({
      left: p * cardWidth * cardsPerView,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const newPage = page <= 0 ? maxPage : page - 1;
    setPage(newPage);
    scrollToPage(newPage);
  };

  const handleNext = () => {
    const newPage = page >= maxPage ? 0 : page + 1;
    setPage(newPage);
    scrollToPage(newPage);
  };

  const totalReviews = 487;
  const avgRating = 4.9;

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="eyebrow inline-block">Testimonials</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3">
            Stories That Reflect{" "}
            <span className="serif-italic">Real Recovery</span>
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto mt-4 text-sm sm:text-[15px]">
            See what our patients have to say about their recovery journey
            with us.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg text-ink">
                  {avgRating}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(avgRating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-ink/50">
                Based on {totalReviews} Google reviews
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink/5 transition-colors"
            >
              <ChevronLeft size={18} className="text-ink" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink/5 transition-colors"
            >
              <ChevronRight size={18} className="text-ink" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-hidden scroll-smooth"
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="min-w-full sm:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-16px)] bg-white border border-ink/5 rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:border-ink/10 transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < r.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }
                  />
                ))}
              </div>

              <div className="flex-1">
                <Quote
                  size={20}
                  className="text-ink/10 mb-2"
                />
                <p className="text-sm sm:text-[15px] text-ink/80 leading-relaxed">
                  {r.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-ink/5">
                <div className="w-10 h-10 rounded-full bg-[#2e8c7c]/10 flex items-center justify-center text-xs font-semibold text-[#2e8c7c]">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-ink">{r.name}</p>
                  <p className="text-xs text-ink/40">{r.role}</p>
                </div>
                <span className="text-xs text-ink/30">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPage(i);
                scrollToPage(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                page === i ? "w-8 bg-[#2e8c7c]" : "w-1.5 bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
