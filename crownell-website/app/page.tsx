"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const services = [
  {
    slug: "iv-drip",
    title: "IV Drip / Glow Treatments",
    desc: "Signature glow and wellness drips for brighter, healthier-looking skin.",
    image:
      "https://i.pinimg.com/1200x/45/a1/b0/45a1b0bef8932fd77bdb88f90e4b4e5d.jpg",
  },
  {
    slug: "whitening",
    title: "Whitening Treatments",
    desc: "Targeted whitening services including underarm care and skin reset options.",
    image:
      "https://i.pinimg.com/1200x/c4/be/8f/c4be8f58ef7464d8fa089d34a3309a2a.jpg",
  },
  {
    slug: "facial",
    title: "Facial Treatments",
    desc: "Facial care and advanced resurfacing options designed to refresh and restore your glow",
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
];

export default function Home() {
  
  // ✅ Scroll reveal (left/right movement)
  const slimPhotos = [
  
  "/slim/mounjaro-1.png",
  "/slim/mounjaro-2.png",
  "/slim/mounjaro-3.png",
  "/slim/mounjaro-4.png"
];

  const [slimIndex, setSlimIndex] = useState(0);

  const slimPrev = () =>
    setSlimIndex((i) => (i - 1 + slimPhotos.length) % slimPhotos.length);

  const slimNext = () =>
    setSlimIndex((i) => (i + 1) % slimPhotos.length);
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
    <main className="min-h-screen bg-[#f3efe7] text-[#2C2C2C]">
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
            <a className="hover:text-black text-gray-600 transition" href="#slim-product">
              Slim-Product
             </a> 
          </nav>

          {/* CTA */}
          <a
            href="https://calendar.app.google/B3n3E5r8NkuJ8HLe9"
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
              src="https://img.sanishtech.com/u/12c4880c24471d87ec66b6eda6820cfa.png"
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
            {/* SLIMMING PRODUCT (Placed under About Us) */}
      <section id="slim-product" className="px-6 md:px-10 py-20 bg-[#FDFBF7]">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div className="reveal reveal-left" data-reveal>
            <div className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-3">
              Slim Product
            </div>

            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Advanced Slimming & Metabolic Support Program
            </h2>

            <p className="text-gray-600 text-lg mb-5">
              Crownell offers medically guided weight management options designed to support
              safe, gradual, and sustainable body transformation. Our program focuses on
              appetite control, metabolic support, and lifestyle guidance under professional supervision.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://calendar.app.google/B3n3E5r8NkuJ8HLe9"
                target="_blank"
                rel="noreferrer"
                className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full hover:bg-[#BFA089] transition"
              >
                Book / Inquire
              </a>

              <a
                href="#contact"
                className="border border-[#2C2C2C] px-6 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white transition"
              >
                Contact us →
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              *Availability and recommendations depend on assessment/consultation.
            </p>
          </div>

          {/* Right: Carousel */}
          <div className="bg-white rounded-2xl shadow-lg border border-black/5 p-4 reveal reveal-right" data-reveal>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={slimPhotos[slimIndex]}
                alt={`Slim product photo ${slimIndex + 1}`}
                fill
                className="object-cover"
                priority
              />

              {/* Prev */}
              <button
                type="button"
                onClick={slimPrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow"
              >
                ‹
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={slimNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {slimPhotos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSlimIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === slimIndex ? "bg-[#2C2C2C]" : "bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 flex items-center justify-between">
              <span>
                Photo {slimIndex + 1} of {slimPhotos.length}
              </span>
              <a href="#booking" className="underline hover:text-[#BFA089] transition">
                Book this →
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section id="services" className="px-6 md:px-10 py-20 bg-[#F8E1E7]">
        <div className="mx-auto max-w-6xl reveal reveal-left" data-reveal>
          <div className="text-center mb-12">
            <div className="uppercase tracking-[0.25em] text-xs text-gray-600 mb-3">
              List of Services
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
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#2C22C2] hover:text-[#BFA089] transition"
                  >
                     View services <span aria-hidden>→</span>
                  </Link>
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
                {}
                <a
                  href="https://calendar.app.google/B3n3E5r8NkuJ8HLe9"
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
                Facial Treatments, Face & Body Slimming, Laser Whitening, & more.
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
                  <span className="font-medium">Address:</span> Mangga 1 Matatalaib Tarlac City, across Our Lady of Ransom School
                </p>
                <p>
                  <span className="font-medium">Phone:</span> 0932 941 7929
                </p>
                <p>
                  <span className="font-medium">Email:</span> crownelleaesthetic@gmail.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="reveal reveal-right" data-reveal>
              <div className="font-serif text-xl mb-3">Operating Hours</div>
              <div className="text-gray-400 space-y-1">
                <p>Tuesday – Sunday: 9:00 AM – 6:00 PM</p>
                <p>Monday: Closed</p>
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