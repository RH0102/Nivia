import { Image } from "lucide-react";
import type { ReactNode } from "react";

interface PhotoBlockProps {
  className?: string;
  label?: string;
  tone?: "teal" | "light" | "dark";
  children?: ReactNode;
}

const tones: Record<string, string> = {
  teal: "photo-block",
  light: "bg-gradient-to-br from-teal-500/20 via-cream to-teal-700/10",
  dark: "bg-gradient-to-br from-ink to-teal-900",
};

export default function PhotoBlock({
  className = "",
  label,
  tone = "teal",
  children,
}: PhotoBlockProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden flex items-end p-4 ${tones[tone]} ${className}`}
    >
      <div className="relative z-10 flex items-center gap-2 text-white/90">
        <Image size={16} strokeWidth={1.5} />
        {label && <span className="text-xs tracking-wide">{label}</span>}
      </div>
      {children}
    </div>
  );
}
