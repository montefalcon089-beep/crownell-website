"use client";

import { useEffect } from "react";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const services = [
  {
    title: "Glutathione IV Drip",
    desc: "Premium gluta drip options for a brighter, healthier glow—administered with care in a safe and relaxing setting.",
    image:
      "https://i.pinimg.com/1200x/45/a1/b0/45a1b0bef8932fd77bdb88f90e4b4e5d.jpg",
  },
  {
    title: "Nail Care Services",
    desc: "Gel polish manicure and pedicure with a clean, polished finish—perfect for everyday elegance.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Facial Treatments",
    desc: "Gentle, skin-loving facial care customized to your needs—designed to refresh and restore your glow.",
    image:
      "https://i.pinimg.com/736x/d0/c0/69/d0c0693262fe3341077ee015e0a24e10.jpg",
  },
];

const fullServiceList = [
  "Premium Gluta Drip Services",
  "Whitening Drip",
  "Vitamin C Drip",
  "Collagen Drip",
  "L-Carnitine Drip",
  "Laser Hair Removal (Diode Laser)",
  "Laser Whitening",
  "Facial Treatments",
  "Face & Body Slimming",
  "Eyebrow Tattoo / Microblading",
  "Lips Tattoo",
  "Lashes",
  "Nails (Gel Polish Manicure/Pedicure)",
  "Salon Spa",
  "Haircut Services",
];

export default function Home() {
  // ✅ Scroll reveal (left/right movement)
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) el.classList.add("reveal-show");
          else el.classList.remove("reveal-show"); // animate again when scrolling back
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            {/* If you have a logo file, place it in /public/logo.png and uncomment */}
            {/* <img src="/logo.png" alt="Crownell" className="h-10 w-10" /> */}
            <div className="leading-tight">
              <div className="font-serif text-2xl tracking-wide">Crownell</div>
              <div className="text-[11px] tracking-[0.25em] text-gray-500 uppercase">
                Aesthetic & Wellness
              </div>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.18em] uppercase">
            <a className="hover:text-black text-gray-600 transition" href="#home">
              Home
            </a>
            <a className="hover:text-black text-gray-600 transition" href="#about">
              About
            </a>
            <a className="hover:text-black text-gray-600 transition" href="#services">
              Services
            </a>
            <a className="hover:text-black text-gray-600 transition" href="#contact">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <a
            href="https://calendar.app.google/t49qqkD8sNtap53V6"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-[#2C2C2C] text-white px-5 py-2.5 text-sm hover:bg-[#BFA089] transition"
          >
            Book Appointment
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="px-6 md:px-10 py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal reveal-left" data-reveal>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
              Glow With Confidence at Crownell Aesthetic & Wellness Services
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Premium aesthetic treatments, skin care, laser services, and wellness solutions
              designed to enhance your natural beauty safely and professionally.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#booking"
                className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full hover:bg-[#BFA089] transition"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="border border-[#2C2C2C] px-6 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white transition"
              >
                View Services →
              </a>
            </div>

            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl reveal reveal-right" data-reveal>
            <img
              src="https://i.pinimg.com/1200x/2d/6e/2f/2d6e2f87f26256e2486561a8c5ea87bb.jpg"
              alt="Model"
              width={700}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white px-6 md:px-10 py-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl reveal reveal-left" data-reveal>
            <img
              src="https://scontent.fmnl31-1.fna.fbcdn.net/v/t39.30808-6/568541539_24950093911284868_6617725037957052788_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGf0Ihv6sSM4FiyBuTd4eebsM7mg0dFlmywzuaDR0WWbMP4s_L6oNXpezRYT8Xxt0S68w_PdgIOGWPhsiLJ3y1s&_nc_ohc=kTHcSmBowNYQ7kNvwFT-p4y&_nc_oc=AdkMbKsVIhiocWTLbeZ7nqrCoyIjVTcMU0sV9g8ZcB8AzbJQI3tV_l_J859Hcn_0Yr2rj7dpL0_wSfL-3IVaShKv&_nc_zt=23&_nc_ht=scontent.fmnl31-1.fna&_nc_gid=bDHeIQLvpm-V6R8tTfd6Mw&oh=00_AfsEfetsT4Lkcoo2Jf5OLy6MLfi3Uxho08vcRmiD-nTmmg&oe=69A5E70D"
              alt="About Crownell"
              className="h-[320px] md:h-[420px] w-full object-cover"
            />
          </div>

          <div className="reveal reveal-right" data-reveal>
            <div className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-3">
              About us
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Your Trusted Aesthetic & Wellness Partner
            </h2>
            <p className="text-gray-600 text-lg mb-5">
              Founded in <strong>November 2025</strong> by{" "}
              <strong>Genevieve Dayan Cruda Manlutac</strong>, Crownell is committed to delivering
              high-quality aesthetic and wellness treatments using modern techniques and trusted
              products.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Our goal is to provide a premium clinic experience—safe procedures, personalized care,
              and a comfortable environment for every client.
            </p>

            <a
              href="#services"
              className="border border-[#2C2C2C] px-6 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white transition inline-flex"
            >
              View Services →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-10 py-20 bg-[#F8E1E7]">
        <div className="mx-auto max-w-6xl reveal reveal-left" data-reveal>
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.25em] text-xs text-gray-600 mb-3">
              Our Popular Services
            </div>
            <h3 className="font-serif text-4xl md:text-5xl">Our Popular Services</h3>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-black/5 hover:-translate-y-2 hover:shadow-xl transition"
              >
                <img src={s.image} alt={s.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h4 className="font-serif text-2xl mb-2">{s.title}</h4>
                  <p className="text-gray-600 mb-5">{s.desc}</p>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#2C2C2C] hover:text-[#BFA089] transition"
                  >
                    Book now <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Full service list */}
          <div className="mt-14 bg-white rounded-2xl shadow-md border border-black/5 p-8 reveal reveal-right" data-reveal>
            <h4 className="font-serif text-2xl mb-4">Complete Service Menu</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              {fullServiceList.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#BFA089]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6">
              *Prices and packages may vary. Final recommendations depend on assessment/consultation.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING / NEWSLETTER */}
      <section id="booking" className="px-6 md:px-10 py-20">
        <div className="mx-auto max-w-6xl">
          <div
            className="rounded-3xl bg-gradient-to-br from-[#F5E6D3] to-[#E8DCC5] border border-black/5 shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center reveal reveal-right"
            data-reveal
          >
            <div className="reveal reveal-left" data-reveal>
              <h3 className="font-serif text-4xl md:text-5xl mb-4">
                Start Your Beauty Transformation Today
              </h3>
              <p className="text-gray-700 text-lg mb-8">
                Book your appointment now and experience premium aesthetic and wellness care at
                Crownell.
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Replace # with your booking link or Messenger link later */}
                <a
                  href="#contact"
                  className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full hover:bg-[#BFA089] transition"
                >
                  Book Appointment
                </a>
                <a
                  href="#services"
                  className="border border-[#2C2C2C] px-6 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white transition"
                >
                  View Services →
                </a>
              </div>
            </div>

            <div className="bg-white/70 rounded-2xl p-6 md:p-8 border border-black/5 reveal reveal-right" data-reveal>
              <div className="font-serif text-2xl mb-2">Sign up for news and discounts</div>
              <p className="text-gray-600 mb-5">
                Get updates on clinic announcements, tips, and exclusive promos.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! You’re subscribed.");
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-full px-5 py-3 border border-black/10 bg-white outline-none focus:ring-2 focus:ring-[#BFA089]"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#2C2C2C] text-white px-6 py-3 hover:bg-[#BFA089] transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 reveal reveal-left" data-reveal>
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2 reveal reveal-left" data-reveal>
              <div className="font-serif text-3xl">Crownell</div>
              <div className="text-sm tracking-[0.25em] uppercase text-gray-500 mt-1">
                Aesthetic and Wellness Services
              </div>

              <p className="text-gray-300 mt-5 max-w-md">
                Premium Gluta Drip Services, Eyebrow Tattoo, Lashes, Nails, Laser Hair Removal,
                Facial Treatments, Face & Body Slimming, Laser Whitening, Salon Spa, Haircut Services & more.
              </p>

              <div className="mt-6 flex gap-4">
                {/* Replace links later */}
                <a
                  className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-[#BFA089] transition"
                  href="https://www.facebook.com/profile.php?id=61584585953308"
                >
                  Facebook
                </a>
                <a
                  className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-[#BFA089] transition"
                  href="#"
                >
                  Instagram
                </a>
                <a
                  className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-[#BFA089] transition"
                  href="#"
                >
                  TikTok
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="reveal reveal-right" data-reveal>
              <div className="font-serif text-xl mb-3">Contact</div>
              <div className="text-gray-400 space-y-2">
                <p>
                  <span className="font-medium">Address:</span> House no., Barangay, City
                </p>
                <p>
                  <span className="font-medium">Phone:</span> 0932 941 7929
                </p>
                <p>
                  <span className="font-medium">Email:</span> crownell@email.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="reveal reveal-right" data-reveal>
              <div className="font-serif text-xl mb-3">Operating Hours</div>
              <div className="text-gray-400 space-y-1">
                <p>Monday – Friday: 10:00 AM – 7:00 PM</p>
                <p>Saturday: 10:00 AM – 4:00 PM</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-black/10 text-sm text-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 reveal reveal-left" data-reveal>
            <p>
              © {new Date().getFullYear()} Crownell Aesthetic and Wellness Services. All rights reserved.
            </p>
            <p className="text-gray-600">Luxury • Care • Transformation</p>
          </div>
        </div>
      </footer>
    </main>
  );
}