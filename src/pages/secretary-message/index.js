import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
      { threshold: 0.15 },
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

const bearer = {
  pageTitle: "Secretary Message",
  bannerImage: "/secretary-message.png",
  personImage: "/office-bearer-4.jpg",
  name: "Barrister Qasim Nawaz \Abbasi",
  role: "SECRETARY FOR",
  tag: "Secretary Message",
  paragraphs: [
    "At a time when the supremacy of the Constitution, independence of the judiciary, and rule of law remain fundamental to the strength of our democracy, the Islamabad High Court Bar Association stands resolute in its commitment to safeguarding justice, constitutional values, and the dignity of the legal profession.",
    "As Secretary of the Islamabad High Court Bar Association, I firmly believe that the legal fraternity carries not only the responsibility of advocacy but also the duty to defend democratic institutions, protect fundamental rights, and ensure equal access to justice for every citizen.",
    "Our Association will continue to serve as a united and independent voice for lawyers, promote professional excellence, uphold the highest ethical standards, and work tirelessly for the welfare and empowerment of the Bar.",
    "We remain committed to fostering unity within the legal community and strengthening public confidence in the justice system through integrity, courage, and principled leadership.",
    "Together, we will continue to uphold the honour of the profession and contribute meaningfully toward a just, democratic, and progressive Pakistan.",
  ],
};

export default function SecretaryMessage() {
  return (
    <>
      <Head>
        <title>Islamabad High Court Bar Association: Secretary Message</title>
      </Head>
      {/* ── Hero Banner ── */}
      <section className="w-full">
        <div
          className="relative w-full overflow-hidden flex justify-center items-center"
          style={{ minWidth: "100%", minHeight: "450px", borderRadius: "20px" }}
        >
          <Image
            src={bearer.bannerImage}
            alt={bearer.pageTitle}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.4)" }}
          />
          <div className="relative z-10 text-white text-center px-6">
            <h1
              className="basker"
              style={{
                fontSize: "clamp(28px, 4vw, 64px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
              }}
            >
              {bearer.pageTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="w-full bg-white px-6 md:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
          {/* Person Image */}
          <FadeIn
            delay={0}
            className="relative w-full lg:flex-1 rounded-lg overflow-hidden"
          >
            <Image
              src={bearer.personImage}
              alt={bearer.name}
              width={604}
              height={654}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-4 right-4 text-right text-white uppercase"
              style={{
                fontFamily: "var(--font-baskervville)",
                fontSize: "clamp(12px, 1.5vw, 20px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
              }}
            >
              {bearer.role}
              <br />
              YEAR 2026
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={200} className="flex flex-col gap-4 w-full lg:flex-1">
            <p
              className="dmsans uppercase"
              style={{
                fontWeight: "700",
                fontSize: "clamp(12px, 1.2vw, 20px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
                color: "#595959",
              }}
            >
              {bearer.tag}
            </p>

            <h2
              className="basker"
              style={{
                fontSize: "clamp(28px, 4vw, 64px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
                color: "#1E1E1E",
              }}
            >
              {bearer.name}
            </h2>

            <p
              className="dmsans"
              style={{
                fontSize: "clamp(13px, 1.1vw, 20px)",
                lineHeight: "124%",
                letterSpacing: "-0.01em",
                color: "#1E1E1E",
                fontWeight: "600",
              }}
            >
              Dear fellow members of the Islamabad High Court Bar Association,
            </p>

            <div
              className="dmsans flex flex-col gap-3"
              style={{
                fontSize: "clamp(16px, 1.8vw, 24px)",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
                color: "#595959",
                textAlign: "justify",
              }}
            >
              {bearer.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
