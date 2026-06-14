import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const teamBearers = [
  {
    name: "SABIR AHMAD",
    designation: "Advocate",
    post: "Vice President",
    image: "/Current Cabinet/cabinet-vice-president.jpeg",
    slug: "Sabir-Ahmad",
  },
  {
    name: "USMAN NASIR",
    designation: "Advocate",
    post: "Joint Secretary",
    image: "/Current Cabinet/cabinet-joint-secretary.jpeg",
    slug: "Usman-Nasir",
  },
  {
    name: "FARZANA FAISAL",
    designation: "Advocate",
    post: "Additional Secretary",
    image: "/Current Cabinet/cabinet-additional-secretary.jpeg",
    slug: "Farzana-Faisal",
  },
  {
    name: "SYEDA RIDA E BATOOL",
    designation: "Advocate",
    post: "Finance Secretary",
    image: "/Current Cabinet/cabinet-finance-secretary.jpeg",
    slug: "Syeda-Rida-e-Batool",
  },
  {
    name: "SHOEBA AKHTAR",
    designation: "Advocate",
    post: "Library Secretary",
    image: "/Current Cabinet/cabinet-library-secretary.jpeg",
    slug: "Shoeba-Akhtar",
  },
  {
    name: "Farooq Iqbal Khan",
    designation: "Advocate",
    post: "Auditor",
    image: "/Current Cabinet/farooq-iqbal.jpg",
    slug: "Farooq-Iqbal-Khan",
  },
];

const TEAM_GAP = 16;

function getTeamVisibleCount() {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
}

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

export default function AdministrativeOfficerMessage() {
  const [teamItems, setTeamItems] = useState([...teamBearers]);
  const [teamNoTransition, setTeamNoTransition] = useState(false);
  const [teamStartIndex, setTeamStartIndex] = useState(0);
  const [teamVisibleCount, setTeamVisibleCount] = useState(4);
  const [teamCardWidth, setTeamCardWidth] = useState(0);
  const teamTrackRef = useRef(null);

  useEffect(() => {
    function update() {
      const count = getTeamVisibleCount();
      setTeamVisibleCount(count);
      if (teamTrackRef.current) {
        const containerWidth = teamTrackRef.current.offsetWidth;
        const width =
          (containerWidth - TEAM_GAP * (count - 1)) / (count + 0.1);
        setTeamCardWidth(width);
      }
      setTeamStartIndex((prev) =>
        Math.min(prev, Math.max(0, teamBearers.length - count)),
      );
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleTeamNext = useCallback(() => {
    if (teamStartIndex + teamVisibleCount < teamItems.length) {
      setTeamStartIndex((i) => i + 1);
    } else {
      setTeamNoTransition(true);
      setTeamItems((prev) => [...prev.slice(1), prev[0]]);
      setTeamStartIndex(0);
      setTimeout(() => {
        setTeamNoTransition(false);
        setTeamStartIndex(1);
      }, 50);
    }
  }, [teamStartIndex, teamVisibleCount, teamItems.length]);

  useEffect(() => {
    const timer = setInterval(handleTeamNext, 3000);
    return () => clearInterval(timer);
  }, [handleTeamNext]);

  const teamTranslateX = teamStartIndex * (teamCardWidth + TEAM_GAP);

  return (
    <>
      <Head>
        <title>Islamabad High Court Bar Association: About US</title>
      </Head>
      {/* ── Hero Banner ── */}
      <section className="w-full">
        <div
          className="relative w-full overflow-hidden flex justify-center items-center"
          style={{ minWidth: "100%", minHeight: "450px", borderRadius: "20px" }}
        >
          <Image
            src="/about-us.png"
            alt="islamabad high cour bar association"
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
              About US
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full bg-white px-6 md:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
          {/* Person Image */}
          <FadeIn
            delay={0}
            className="relative w-full lg:flex-1 rounded-lg overflow-hidden"
          >
            <Image
              src="/about-us-2.png"
              alt="islamabad high cour bar association"
              width={589}
              height={654}
              className="w-full h-full object-cover"
            />
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
              Excellence is not an exception
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
              Upholding Justice, Strengthening the Legal Profession
            </h2>

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
              <p>
                The Islamabad High Court Bar Association (IHCBA) is the
                representative body of advocates practicing before the Islamabad
                High Court. Established to promote the rule of law, judicial
                independence, and professional excellence, the Association
                serves as a unified voice for the legal community while
                safeguarding the dignity and integrity of the legal profession.
              </p>
              <p>
                With a strong commitment to constitutional values and access to
                justice, IHCBA works to support its members through professional
                development, legal advocacy, and welfare initiatives. The
                Association actively engages in legal education, policy
                discussions, and reforms that contribute to the advancement of
                Pakistan’s judicial system and democratic institutions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission / Vision / Commitment ── */}
      <section className="w-full px-6 md:px-16 py-8 md:py-12">
        <div
          className="flex flex-col gap-4 p-4 md:p-6"
          style={{ background: "#EEEEEE", borderRadius: "20px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Our Mission */}
            <FadeIn
              delay={0}
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-3"
            >
              <Image
                src="/eye-icon.png"
                alt="Our Mission"
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 className="dmsans40-semibold text-[#1E1E1E]">Our Mission</h3>
              <p
                className="dmsans20-medium text-[#595959]"
                style={{ textAlign: "justify" }}
              >
                To uphold the rule of law, protect the independence of the
                judiciary, promote professional excellence among legal
                practitioners, and ensure equal access to justice for all
                citizens.
              </p>
            </FadeIn>

            {/* Our Vision */}
            <FadeIn
              delay={150}
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-3"
            >
              <Image
                src="/vision-icon.png"
                alt="Our Vision"
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 className="dmsans40-semibold text-[#1E1E1E]">Our Vision</h3>
              <p
                className="dmsans20-medium text-[#595959]"
                style={{ textAlign: "justify" }}
              >
                To be a leading legal institution that strengthens democratic
                values, advances legal education, and fosters a fair,
                transparent, and effective justice system for future
                generations.
              </p>
            </FadeIn>
          </div>

          {/* Our Commitment */}
          <FadeIn
            delay={300}
            className="bg-white rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10"
          >
            <div className="flex flex-col gap-3 w-full lg:flex-1">
              <h3 className="dmsans40-semibold text-[#1E1E1E]">
                Our Commitment
              </h3>
              <p
                className="dmsans20-medium text-[#595959]"
                style={{ textAlign: "justify" }}
              >
                At IHCBA, we believe that a strong legal profession is essential
                to a strong democracy. Through integrity, collaboration, and
                principled leadership, we remain dedicated to serving our
                members, strengthening public trust in the justice system, and
                contributing to a just and progressive Pakistan.
              </p>
            </div>
            <div
              className="relative w-full lg:flex-1 rounded-xl overflow-hidden"
              style={{ minHeight: "280px" }}
            >
              <Image
                src="/commitment-image.png"
                alt="Our Commitment"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Meet Our Team ── */}
      <section className="w-full bg-white px-6 md:px-16 py-8 md:py-12">
        <FadeIn delay={0}>
          <div className="text-center mb-10 md:mb-14">
            <h2
              className="basker"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "96%",
                letterSpacing: "-0.04em",
                color: "#000000",
              }}
            >
              Meet Our Team
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div
            className="overflow-hidden py-4 -my-4 px-4 -mx-4"
            ref={teamTrackRef}
          >
            <div
              className="flex"
              style={{
                gap: `${TEAM_GAP}px`,
                transform: `translateX(-${teamTranslateX}px)`,
                transition: teamNoTransition
                  ? "none"
                  : "transform 500ms ease-in-out",
              }}
            >
              {teamItems.map((bearer) => (
                <div
                  key={bearer.slug}
                  className="relative flex-shrink-0 overflow-hidden transition-transform duration-300 hover:scale-105"
                  style={{
                    width:
                      teamCardWidth > 0
                        ? `${teamCardWidth}px`
                        : `calc((100% - ${TEAM_GAP * (teamVisibleCount - 1)}px) / ${teamVisibleCount})`,
                    borderRadius: "12px",
                  }}
                >
                  <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src={bearer.image}
                      alt={bearer.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                      }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
                      <div className="flex flex-col gap-1">
                        <p
                          className="basker text-white whitespace-pre-line"
                          style={{
                            fontSize: "clamp(13px, 1.3vw, 20px)",
                            lineHeight: "95%",
                            letterSpacing: "-0.04em",
                          }}
                        >
                          {bearer.name}
                        </p>
                        <p
                          className="dmsans text-white"
                          style={{
                            fontSize: "clamp(11px, 1.1vw, 18px)",
                            lineHeight: "120%",
                            letterSpacing: "-0.03em",
                            opacity: 0.85,
                          }}
                        >
                          {bearer.designation}
                        </p>
                        <p
                          className="dmsans text-white"
                          style={{
                            fontSize: "clamp(11px, 1.1vw, 18px)",
                            lineHeight: "120%",
                            letterSpacing: "-0.03em",
                            opacity: 0.85,
                          }}
                        >
                          {bearer.post}
                        </p>
                      </div>
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: "#1E6228",
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src="/tilted-white-arrow.png"
                          alt="Arrow"
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
