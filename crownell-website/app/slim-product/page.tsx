"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function SlimProductPage() {
  // ✅ Update these image paths to match your files in /public/slim-product/
  const photos = useMemo(
    () => [
      "/slim-product/1.jpg",
      "/slim-product/2.jpg",
      "/slim-product/3.jpg",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C]">
      {/* Simple top bar */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="leading-tight">
              <div className="font-serif text-2xl tracking-wide">Crownell</div>
              <div className="text-[11px] tracking-[0.25em] text-gray-500 uppercase">
                Aesthetic & Wellness
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/#services"
              className="text-sm text-gray-600 hover:text-black transition"
            >
              ← Back to Services
            </Link>

            <a
              href="https://calendar.app.google/B3n3E5r8NkuJ8HLe9"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-[#2C2C2C] text-white px-5 py-2.5 text-sm hover:bg-[#BFA089] transition"
              rel="noreferrer"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-3">
              Slim Product
            </div>

            <h1 className="font-serif text-4xl md:text-5xl mb-4">
              Advanced Slimming & Metabolic Support Program
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              Crownell offers medically guided weight management options designed to support
              safe, gradual, and sustainable body transformation. Our program focuses on
              appetite control, metabolic support, and lifestyle guidance under professional supervision.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://calendar.app.google/B3n3E5r8NkuJ8HLe9"
                target="_blank"
                rel="noreferrer"
                className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full hover:bg-[#BFA089] transition"
              >
                Book / Inquire
              </a>

              <Link
                href="/#contact"
                className="border border-[#2C2C2C] px-6 py-3 rounded-full hover:bg-[#2C2C2C] hover:text-white transition"
              >
                Contact us →
              </Link>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              *Availability and details may vary. Please consult with the clinic
              for the best recommendation.
            </p>
          </div>

          {/* Right: Carousel */}
          <div className="bg-white rounded-2xl shadow-lg border border-black/5 p-4">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={photos[index]}
                alt={`Slim product photo ${index + 1}`}
                fill
                className="object-cover"
                priority
              />

              {/* Prev/Next buttons */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === index ? "bg-[#2C2C2C]" : "bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 flex items-center justify-between">
              <span>
                Photo {index + 1} of {photos.length}
              </span>
              <Link
                href="/#booking"
                className="text-[#2C2C2C] underline hover:text-[#BFA089] transition"
              >
                Book this →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}