import { Plus, ArrowUpRight } from "lucide-react";

const socialIcons = [
  <svg key="fb" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>,
  <svg
    key="ig"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>,
  <svg key="x" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.24 2H21l-6.55 7.49L22 22h-6.19l-4.84-6.34L5.4 22H2.62l7.02-8.02L2 2h6.34l4.37 5.79L18.24 2Zm-1.08 18.17h1.72L7.9 3.73H6.06l11.1 16.44Z" />
  </svg>,
];

const quickLinks = ["Home", "About Us", "Services", "Blog", "Contact"];
const services = [
  "Spinal Adjustment Therapy",
  "Posture & Alignment Care",
  "Manual Therapy Treatment",
  "Rehabilitation & Recovery",
  "All Services",
];
const support = ["Help", "Privacy Policy", "Terms & Conditions", "Support"];

export default function Footer() {
  return (
    <footer id="contact" className="px-4 sm:px-6 lg:px-10 pb-5">
      <div className=" mx-auto bg-[#2e8c7c] text-white rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 md:p-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 font-display italic text-xl"
            >
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <Plus size={14} strokeWidth={3} />
              </span>
              nivia
            </a>
            <p className="text-white/60 text-sm mt-4 max-w-xs leading-relaxed">
              We deliver professional physiotherapy treatments focused on
              recovery, movement improvement, and lasting mobility.
            </p>
            <div className="flex gap-3 mt-6">
              {socialIcons.map((icon, i) => (
                <span
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {services.map((l) => (
                <li key={l}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Stay Connected</h4>
            <p className="text-xs text-white/50 mb-3 leading-relaxed">
              Follow us for updates, recovery tips, and movement care insights.
            </p>
            <div className="flex items-center bg-white  rounded-full p-1 pl-4">
              <input
                type="email"
                placeholder="Enter your email"
                className=" text-sm text-black  outline-none flex-1 min-w-0"
              />
              <span className="w-8 h-8 rounded-full bg-[#2e8c7c] flex items-center justify-center shrink-0 cursor-pointer">
                <ArrowUpRight size={14} className="text-white" />
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <span>Copyright © 2026 Nivia.</span>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/60">
            {support.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
