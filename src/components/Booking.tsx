import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@nivia.care",
    href: "mailto:hello@nivia.care",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Wellness Street, Health City, HC 45678",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 8:00 AM – 7:00 PM",
    href: "#",
  },
];

const services = [
  "Manual Therapy Treatment",
  "Spinal Adjustment Therapy",
  "Sports Injury Recovery",
  "Posture & Alignment Care",
  "Rehabilitation & Recovery",
  "Chronic Pain Management",
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 bg-[#e1f8f2]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="eyebrow inline-block">Get In Touch</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3">
            Book Your{" "}
            <span className="serif-italic">Appointment</span>
          </h2>
          <p className="text-ink/60 max-w-xl mx-auto mt-4 text-sm sm:text-[15px]">
            Schedule a consultation with our expert physiotherapists and take the
            first step toward better movement and recovery.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 shadow-sm">
            <h3 className="font-display text-xl sm:text-2xl mb-6">
              Schedule a <span className="serif-italic">Consultation</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-ink/60 mb-1.5 flex items-center gap-2">
                    <User size={14} /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#e1f8f2]/60 border border-ink/5 text-sm text-ink placeholder:text-ink/30 outline-none focus:border-[#2e8c7c] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-ink/60 mb-1.5 flex items-center gap-2">
                    <Mail size={14} /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#e1f8f2]/60 border border-ink/5 text-sm text-ink placeholder:text-ink/30 outline-none focus:border-[#2e8c7c] transition-colors"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-ink/60 mb-1.5 flex items-center gap-2">
                    <Phone size={14} /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#e1f8f2]/60 border border-ink/5 text-sm text-ink placeholder:text-ink/30 outline-none focus:border-[#2e8c7c] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm text-ink/60 mb-1.5 flex items-center gap-2">
                    <Calendar size={14} /> Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#e1f8f2]/60 border border-ink/5 text-sm text-ink outline-none focus:border-[#2e8c7c] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-ink/60 mb-1.5 block">
                  Select Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#e1f8f2]/60 border border-ink/5 text-sm text-ink outline-none focus:border-[#2e8c7c] transition-colors appearance-none"
                >
                  <option value="">Choose a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-ink/60 mb-1.5 flex items-center gap-2">
                  <MessageSquare size={14} /> Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your condition or any questions..."
                  className="w-full px-4 py-3 rounded-xl bg-[#e1f8f2]/60 border border-ink/5 text-sm text-ink placeholder:text-ink/30 outline-none focus:border-[#2e8c7c] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-pill bg-[#2e8c7c] text-white hover:bg-[#267a6b] w-full sm:w-auto justify-center"
              >
                Book Appointment
                <span className="icon-circle bg-white/15">
                  <ArrowUpRight size={16} className="text-white" />
                </span>
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-5">
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <span className="w-11 h-11 rounded-xl bg-[#2e8c7c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2e8c7c]/20 transition-colors">
                  <c.icon size={20} className="text-[#2e8c7c]" />
                </span>
                <div>
                  <p className="text-sm text-ink/50">{c.label}</p>
                  <p className="font-medium text-ink mt-0.5">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="bg-[#2e8c7c] rounded-2xl p-6 sm:p-8 text-white mt-auto">
              <h4 className="font-display text-xl sm:text-2xl">
                Need Immediate <span className="serif-italic">Help?</span>
              </h4>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                Call us directly and our team will assist you with urgent
                appointments and emergency consultations.
              </p>
              <a
                href="tel:+15551234567"
                className="btn-pill bg-white text-[#2e8c7c] hover:bg-cream mt-5 inline-flex"
              >
                Call Now
                <span className="icon-circle bg-[#2e8c7c]">
                  <ArrowUpRight size={16} className="text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
