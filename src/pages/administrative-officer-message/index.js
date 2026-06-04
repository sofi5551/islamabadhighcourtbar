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
  pageTitle: "Administrative Officer Message",
  bannerImage: "/president-message.png",
  personImage: "/admin-officer.jpg",
  name: "Syed Abdullah Nawaz Gillani",
  role: "ADMIN OFFICER",
  tag: "Service with dedication",
  paragraphs: [
    "Syed Abdullah Nawaz Gillani serves as Admin Officer at the Islamabad High Court Bar Association (IHCBA), bringing to the role a rare combination of financial expertise, cross-sector experience, and a genuine commitment to serving the legal community of Pakistan.",
    "A graduate in Finance, Abdullah built his professional foundation across some of the most demanding environments in the public and private sectors. His career spans the structured world of banking, the technical precision of private tax consulting, and specialist contract work with the Islamabad Bar Council each chapter adding depth to his administrative capability and sharpening his understanding of institutional operations at the highest level.",
    "Known among peers and colleagues for his brilliant, analytical mind and sharp attention to detail, Abdullah approaches every responsibility with clarity, confidence, and a proactive spirit. He combines strong technical knowledge with exceptional interpersonal skills, allowing him to manage complex administrative workflows efficiently while maintaining meaningful relationships with members, stakeholders, and the wider legal community.",
    "At IHCBA, Abdullah serves as a trusted cornerstone of the institution's daily operations. He oversees administrative processes, supports member welfare, ensures operational excellence, and works diligently to uphold the values of professionalism and integrity that define the Association. His multifaceted background equips him to handle the unique demands of a premier legal institution with both competence and care.",
    "Driven by a sincere desire to serve, Abdullah remains committed to delivering the highest standard of administrative support not as a formality, but as a reflection of his deep respect for the legal profession and the people who dedicate their lives to it.",
    "It is both an honour and a privilege to serve the Islamabad High Court Bar Association — an institution that stands at the heart of Pakistan's legal landscape. I firmly believe that administration is not merely a support function; it is the backbone upon which great institutions are built and sustained.",
    "My commitment to every member of this Association, and to every colleague I have the honour of working alongside, is straightforward: to bring professionalism, transparency, and genuine dedication to each task whether large or small. The legal community deserves nothing less than the very best, and I am motivated every single day to deliver exactly that.",
    "Drawing on my background in finance, banking, taxation, and bar council affairs, I strive to bring creative thinking, clear judgment, and a proactive approach to the challenges we face together. The welfare of our members and the continued growth and prestige of the IHCBA remain my foremost priority.",
    "I look forward to serving you with the excellence, integrity, and commitment this institution truly deserves.",
  ],
};

export default function AdministrativeOfficerMessage() {
  return (
    <>
      <Head>
        <title>
          Islamabad High Court Bar Association: Administrative Officer Message
        </title>
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
                fontSize: "clamp(10px, 1.2vw, 12px)",
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
