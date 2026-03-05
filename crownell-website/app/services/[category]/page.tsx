// app/services/[category]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceCategories } from "../servicesData";
import Reveal from "@/app/components/Reveal";

// This helps Next pre-build known categories (optional but recommended)
export function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

// If you only want the slugs you defined above (no random URLs)
export const dynamicParams = false;

type Props = {
  // IMPORTANT: your Next runtime says params is a Promise
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;

  const category = serviceCategories.find((c) => c.slug === slug);
  if (!category) return notFound();

  return (
    <Reveal>
      <main style={{ padding: "40px 20px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal reveal-left" data-reveal style={{ marginBottom: 16 }}>
          <Link href="/#services" style={{ color: "#2C2C2C", textDecoration: "underline" }}>
            ← Back to Services
          </Link>
        </div>

        <h1 className="reveal reveal-left" data-reveal style={{ fontSize: 36, marginBottom: 10 }}>
          {category.title}
        </h1>

        <p className="reveal reveal-right" data-reveal style={{ marginBottom: 30, color: "#666" }}>
          {category.subtitle}
        </p>

        {category.heroImage ? (
          <div
            className="reveal reveal-right"
            data-reveal
            style={{ marginBottom: 28, borderRadius: 18, overflow: "hidden" }}
          >
            <Image
              src={category.heroImage}
              alt={`${category.title} banner`}
              width={1200}
              height={420}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              priority
            />
          </div>
        ) : null}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {category.items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className={index % 2 === 0 ? "reveal reveal-left" : "reveal reveal-right"}
              data-reveal
              style={{
                border: "1px solid #eee",
                borderRadius: 16,
                overflow: "hidden",
                background: "white",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 180, background: "#f6f6f6" }}>
                <Image
                  src={item.image}
                  alt={item.name}
                   fill
                 style={{ objectFit: "contain", padding: 12 }}
                />
              </div>

              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{item.name}</div>

                {item.description ? (
                  <div style={{ color: "#666", marginBottom: 10 }}>{item.description}</div>
                ) : null}

                {item.tags?.length ? (
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 12,
                          padding: "6px 10px",
                          borderRadius: 999,
                          background: "#F5F5F5",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <Link
                  href="/#booking"
                  style={{
                    display: "inline-flex",
                    gap: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#2C2C2C",
                    textDecoration: "underline",
                  }}
                >
                  Book this service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Reveal>
  );
}