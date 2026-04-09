import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
}

const councils = [
  {
    label: "KP Bar Council",
    image: "/kp-bar-council-logo.png",
    href: "https://www.kpbarcouncil.com/site/index",
  },
  {
    label: "Pakistan Bar Council",
    image: "/pakistan-bar-council-logo.png",
    href: "https://pakistanbarcouncil.org/",
  },
  {
    label: "Punjab Bar Council",
    image: "/punjab-bar-council-logo.png",
    href: "https://pbbarcouncil.com/",
  },
  {
    label: "Sindh Bar Council",
    image: "/sindh-bar-council-logo.png",
    href: "https://sindhbarcouncil.org/",
  },
  {
    label: "Balochistan Bar Council",
    image: "/balochistan-bar-council-logo.png",
    href: "https://bbcq.org.pk/",
  },
];
export default function Bearer() {
  return (
    <>
      <section className="w-full">
        {/* Background image container with border radius */}
        <div
          className="relative w-full overflow-hidden flex justify-center items-center "
          style={{
            minWidth: "100%",
            minHeight: "450px",
            borderRadius: "20px",
          }}
        >
          {/* Background Image */}
          <Image
            src="/important-links.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="relative z-10 flex flex-col items-center text-white text-center">
            <h1
              className="basker"
              style={{
                fontSize: "clamp(28px, 4vw, 64px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
              }}
            >
              Important Links
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full bg-white px-6 md:px-14 py-14 md:py-20">
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {councils.map((council, i) => (
            <FadeIn key={i} delay={i * 100}>
            <Link
              href={council.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-4 cursor-pointer hover:scale-105 transition-transform duration-200"
                style={{
                  backgroundColor: "#EEEEEE",
                  borderRadius: "20px",
                  width: "260px",
                }}
              >
                {/* White image box */}
                <div
                  className="flex items-center justify-center w-full"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    aspectRatio: "1/1",
                    padding: "16px",
                  }}
                >
                  <Image
                    src={council.image}
                    alt={council.label}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Label */}
                <p
                  className="dmsans text-center"
                  style={{
                    fontSize: "clamp(13px, 1.4vw, 22px)",
                    lineHeight: "95%",
                    letterSpacing: "-0.04em",
                    color: "#1E1E1E",
                  }}
                >
                  {council.label}
                </p>
              </div>
            </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
