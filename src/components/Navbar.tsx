import { useState } from "react";
import { Plus, Menu, X, ArrowUpRight } from "lucide-react";

const links = ["Home", "About", "Services", "Pages", "Blog", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto px-6 lg:px-10 pt-6">
        <div className="flex items-center justify-between bg-white/95 backdrop-blur rounded-full pl-6 pr-2 py-1 shadow-sm">
          <a
            href="#home"
            className="flex items-center gap-2 font-display italic text-xl text-ink"
          >
            <span className="w-7 h-7 rounded-full bg-teal-700 flex items-center justify-center">
              <Plus size={14} className="text-white" strokeWidth={3} />
            </span>
            nivia
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-md text-ink/80">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="hover:text-teal-700 transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex py-2.5 px-4 gap-3 rounded-full  items-center bg-teal-600 text-white hover:bg-teal-800"
          >
            Book Appointment
            <span className="icon-circle rounded-full p-2 items-center flex justify-center bg-white ">
              <ArrowUpRight size={16} className="text-[#2e8c7c]" />
            </span>
          </a>

          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-4 text-ink/80">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
