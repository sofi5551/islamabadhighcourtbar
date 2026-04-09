import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

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

function SlideUp({ children, delay = 0, className = "" }) {
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
    <div ref={ref} className={`slide-from-bottom ${className}`}>
      {children}
    </div>
  );
}

function SpinIn({ children, delay = 0, className = "" }) {
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
    <div ref={ref} className={`spin-slide-in ${className}`}>
      {children}
    </div>
  );
}

const FULL_WORD = "Association";
const bearers = [
  {
    name: "MR. SYED WAJID ALI SHAH",
    designation: "Gillani Advocate",
    post: "Vice President",
    image: "/office-bearer-1.png",
    slug: "Syed-Wajid-Ali-Shah",
  },
  {
    name: "MR. IFTIKHAR AHMAD Bajwa",
    designation: "Advocate",
    post: "Vice President",
    image: "/office-bearer-2.png",
    slug: "Iftikhar-Ahmad",
  },
  {
    name: "MR. IMRAN ISHFAQ",
    designation: "Advocate",
    post: "Joint Secretary",
    image: "/office-bearer-3.png",
    slug: "Imran-Ishfaq",
  },
  {
    name: "MR. MANZOOR AHMED JAJJA",
    designation: "Advocate",
    post: "Additional Secretary",
    image: "/office-bearer-4.png",
    slug: "Manzoor-Ahmed",
  },
  {
    name: "MS. BUSHRA TARIQ RAJA",
    designation: "Advocate",
    post: "Additional Secretary",
    image: "/office-bearer-5.png",
    slug: "Bushra-Tariq-Raja",
  },
  {
    name: "MR. FAZAL MAULA",
    designation: "Advocate",
    post: "Additional Secretary",
    image: "/office-bearer-6.png",
    slug: "Fazal-Maula",
  },
  {
    name: "MR. WAJAHAT GHAURI",
    designation: "Advocate",
    post: "Library Secretary",
    image: "/office-bearer-7.png",
    slug: "Wajahat-Ghauri",
  },
  {
    name: "MR. SAIF UR REHMAN SHAH",
    designation: "Auditor",
    post: "Bukhari Advocate",
    image: "/office-bearer-8.png",
    slug: "Saif-Ur-Rehman-Shah",
  },
];

const GAP = 16;

function getVisibleCount() {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
}
const allItems = [
  { num: "01", label: "LHCBAR\nMEMBERSHIP &\nCARD FORMS" },
  { num: "02", label: "LHCBAR\nMEMBERSHIP &\nCARD FORMS" },
  { num: "03", label: "CERTIFICATE\nFOR\nPASSPORT USE" },
  { num: "04", label: "CERTIFICATE\nFOR DRIVING\nLICENSE" },
  { num: "05", label: "CERTIFICATE FOR\nNADRA USE" },
  { num: "06", label: "OPENING OF\nPERSONAL\nACCOUNT" },
  { num: "07", label: "JUDICIAL\nFORM" },
  { num: "08", label: "RULES &\nORDERS" },
];

const lastRow = [
  { num: "09", label: "LHCBAR RULES" },
  { num: "10", label: "FIR COPY" },
];

function Card({ num, label, smLast, lgLast, hasBottom }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 py-10 px-4 relative cursor-pointer transition-all duration-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#f0f5f2" : "transparent",
        borderRadius: "8px",
      }}
    >
      {/* Right border — hidden on sm last-in-row AND lg last-in-row */}
      {/* We draw it as an absolute element so we can toggle per breakpoint */}
      {!lgLast && (
        <span
          className={`absolute right-0 top-0 bottom-0 ${smLast ? "hidden lg:block" : "block"}`}
          style={{
            width: "1px",
            backgroundColor: "#CCCCCC",
            backgroundImage:
              "repeating-linear-gradient(to bottom, #CCCCCC 0px, #CCCCCC 6px, transparent 6px, transparent 12px)",
          }}
        />
      )}
      {/* Bottom border */}
      {hasBottom && (
        <span
          className="absolute left-0 right-0 bottom-0"
          style={{
            height: "1px",
            backgroundImage:
              "repeating-linear-gradient(to right, #CCCCCC 0px, #CCCCCC 6px, transparent 6px, transparent 12px)",
          }}
        />
      )}

      <div
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "#143D2B" }}
      >
        <Image
          src={`/${num}.png`}
          alt={num}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>
      <p
        className="basker text-center whitespace-pre-line"
        style={{
          fontSize: "clamp(13px, 1.5vw, 26px)",
          lineHeight: "95%",
          letterSpacing: "-0.04em",
          color: "#000000",
          WebkitTextStroke: hovered ? "0.4px #000000" : "0px",
        }}
      >
        {label}
      </p>
    </div>
  );
}
const videos = [
  { id: 1, title: "Video Title 1", image: "/home6.png" },
  { id: 2, title: "Video Title 2", image: "/home7.png" },
  { id: 3, title: "Video Title 3", image: "/home8.png" },
  { id: 4, title: "Video Title 4", image: "/home9.png" },
];
const articles = [
  {
    id: 1,
    image: "/home10.png",
    title: "MAJOR AMENDMENTS",
    date: "23 April, 2025",
  },
  {
    id: 2,
    image: "/home11.png",
    title: "MAJOR AMENDMENTS",
    date: "23 April, 2025",
  },
  {
    id: 3,
    image: "/home12.png",
    title: "MAJOR AMENDMENTS",
    date: "23 April, 2025",
  },
];
export default function Home() {
  const [typed, setTyped] = useState("");

  // Typewriter effect for "Association"
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(FULL_WORD.slice(0, i));
      if (i === FULL_WORD.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  const facilities = [
    { label: "LIBRARY", icon: "/librabry-logo.png" },
    { label: "ONLINE LAW\nLIBRARY", icon: "/law-lib-logo.png" },
    { label: "CAFETERIA", icon: "/cafeteria-logo.png" },
    { label: "SPORTS", icon: "/sports-logo.png" },
    { label: "TRANSPORTATION", icon: "/transportation-logo.png" },
    { label: "DIAGNOSTIC\nCENTRE", icon: "/diagnostic-center-logo.png" },
    { label: "DENTAL\nCLINIC", icon: "/dental-clinic-logo.png" },
    {
      label: "HOMEOPATHIC\nCLINIC",
      icon: null, // rendered separately with two overlapping icons
    },
    { label: "FREE LEGAL AID\nFOR PUBLIC", icon: "/legal-aid-logo.png" },
    { label: "PASSPORT\nOFFICE", icon: "/passport-logo.png" },
    { label: "NADRA\nOFFICE", icon: "/nadra-logo.png" },
    { label: "POLICE\nMARKAZ", icon: "/police-logo.png" },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    function update() {
      const count = getVisibleCount();
      setVisibleCount(count);
      if (trackRef.current) {
        const containerWidth = trackRef.current.offsetWidth;
        const width = (containerWidth - GAP * (count - 1)) / (count + 0.1);
        setCardWidth(width);
      }
      setStartIndex((prev) =>
        Math.min(prev, Math.max(0, bearers.length - count)),
      );
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < bearers.length;

  const handlePrev = () => {
    if (canPrev) setStartIndex((i) => i - 1);
  };
  const handleNext = () => {
    if (canNext) setStartIndex((i) => i + 1);
  };

  const translateX = startIndex * (cardWidth + GAP);

  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const activeVideo = videos[activeIndex];

  // Thumbnails: all except active, in order
  const thumbnails = videos.filter((_, i) => i !== activeIndex);

  const handleThumbnailClick = (clickedVideo) => {
    const clickedIndex = videos.findIndex((v) => v.id === clickedVideo.id);
    setActiveIndex(clickedIndex);
    setPlaying(false);
  };
  return (
    <>
      <section className="w-full">
        {/* Background image container with border radius */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            minWidth: "100%",
            maxHeight: "590px",
            borderRadius: "20px",
          }}
        >
          {/* Background Image */}
          <Image
            src="/home1.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Dark green overlay for readability */}

          {/* ── CONTENT ── */}
          <div className="relative z-10 flex flex-col justify-between h-full max-h-[590px] px-10 md:px-16 py-12 md:py-16">
            {/* Top: Protecting Your Rights */}
            <div className="mt-20">
              {/* Green line above */}
              <div
                className="mb-2"
                style={{
                  width: "154px",
                  height: "1px",
                  backgroundColor: "#1E6228",
                }}
              />
              <p
                className="dmsans text-white uppercase tracking-widest"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "-0.0em",
                  fontSize: "12px",
                  lineHeight: "140%",
                }}
              >
                Protecting Your Rights
              </p>
              {/* Green line below */}
              <div
                className="mt-2"
                style={{
                  width: "154px",
                  height: "1px",
                  backgroundColor: "#1E6228",
                }}
              />
            </div>

            {/* Middle: Main Heading + Subtitle */}
            <div className="flex flex-col gap-6 mt-6">
              {/* Heading */}
              <h1
                className="basker text-white"
                style={{
                  fontSize: "clamp(20px, 8vw, 80px)",
                  lineHeight: "95%",
                  maxWidth: "800px",
                }}
              >
                Islamabad High
                <br />
                Court Bar
                <br />
                {/* "Association" with green highlight box around typed portion */}
                <span className="relative inline-block mt-3">
                  <span
                    className="relative z-10"
                    style={{
                      backgroundColor: "#1E6228",
                      padding: "0 8px",
                      display: "inline",
                    }}
                  >
                    {typed}
                  </span>
                  {/* blinking cursor */}
                  <span
                    className="inline-block w-[3px] ml-0.5 align-middle animate-pulse"
                    style={{
                      backgroundColor: "white",
                      height: "1.3em",
                      verticalAlign: "middle",
                      marginTop: "-20px",
                    }}
                  />
                </span>
              </h1>

              {/* Subtitle */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Paragraph */}
                <p
                  className="dmsans text-white max-w-md"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "14px",
                  }}
                >
                  Switch from aws to dayhoff&apos;s secure life sciences cloud—
                  <br />
                  in just minutes
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap  self-end gap-3 mt-2 md:mt-0">
                  <button
                    className="dmsans px-5 py-3 rounded-full border border-white text-white cursor-pointer transition-all duration-200 hover:bg-white hover:text-green-900 hover:border-green-900 hover:scale-105 group"
                    style={{
                      fontSize: "14px",
                      backdropFilter: "blur(6px)",
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <Link
                      href="/search-lawyers"
                      className="flex items-center gap-2"
                    >
                      <Image
                        src="/lawyer-logo.png"
                        alt="Lawyer"
                        width={20}
                        height={20}
                        className="object-contain transition-all duration-200 group-hover:[filter:invert(21%)_sepia(57%)_saturate(628%)_hue-rotate(103deg)_brightness(92%)_contrast(103%)]"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                      <span>Lawyer Search</span>
                    </Link>
                  </button>

                  <button
                    className="dmsans flex items-center gap-2 px-5 py-3 rounded-full border border-white text-white cursor-pointer transition-all duration-200 hover:bg-white hover:text-green-900 hover:border-green-900 hover:scale-105 group"
                    style={{
                      fontSize: "14px",
                      backdropFilter: "blur(6px)",
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <Image
                      src="/case-logo.png"
                      alt="Case"
                      width={20}
                      height={20}
                      className="object-contain transition-all duration-200 group-hover:[filter:invert(21%)_sepia(57%)_saturate(628%)_hue-rotate(103deg)_brightness(92%)_contrast(103%)]"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    Case Management
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom: Scroll Below */}
            <div className="flex items-center gap-3 self-end mt-8 md:mt-5">
              <Image
                src="/mouse-logo.png"
                alt="Scroll"
                width={16}
                height={16}
                className="object-contain"
              />
              <span
                className="dmsans text-white"
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Scroll Below To Discover
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white px-6 md:px-16 py-16 md:py-24 flex flex-col gap-20">
        {/* ── PRESIDENT ROW ── */}
        <FadeIn delay={0}>
          <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative w-full lg:flex-1 rounded-lg overflow-hidden">
              <Image
                src="/home2.png"
                alt="President"
                width={604}
                height={654}
                className="w-full h-full object-cover"
              />
              {/* President label — bottom right */}
              <div
                className="absolute bottom-4 right-4 text-right text-white"
                style={{
                  fontFamily: "var(--font-baskervville)",
                  fontSize: "clamp(12px, 1.5vw, 20px)",
                  lineHeight: "95%",
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                }}
              >
                PRESIDENT FOR
                <br />
                YEAR 2025
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 w-full lg:flex-1">
              <p
                className="dmsans"
                style={{
                  fontWeight: "700",
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  lineHeight: "95%",
                  letterSpacing: "-0.04em",
                  color: "#595959",
                  textTransform: "uppercase",
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
                Mr. Syed Wajid Ali Shah
                <br />
                GIllani Advocate
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
                  fontSize: "clamp(13px, 1.8vw, 24px)",
                  lineHeight: "124%",
                  letterSpacing: "-0.04em",
                  color: "#595959",
                }}
              >
                <p>
                  I, Syed Wajid Ali Shah Gillani, Advocate Supreme Court, am
                  deeply honored to accept the responsibility of serving as your
                  President. I am grateful for your trust and remain committed
                  to upholding the values and principles of our association.
                </p>
                <p>
                  In these challenging times, it is our collective duty to
                  protect the rule of law and ensure justice remains accessible
                  to all. I look forward to working closely with you, listening
                  to your ideas and concerns, and shaping initiatives that
                  reflect the aspirations of our members.
                </p>
                <p>
                  Together, we can strengthen our association and contribute
                  positively to the legal community and society.
                </p>
                <p>Sincerely,</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── SECRETARY ROW ── */}
        <FadeIn delay={200}>
          <div className="flex flex-col lg:flex-row-reverse items-stretch gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative w-full lg:flex-1 rounded-lg overflow-hidden">
              <Image
                src="/home3.png"
                alt="Secretary"
                width={604}
                height={654}
                className="w-full h-full object-cover"
              />
              {/* Secretary label — bottom left */}
              <div
                className="absolute bottom-4 left-4 text-left text-white"
                style={{
                  fontFamily: "var(--font-baskervville)",
                  fontSize: "clamp(12px, 1.5vw, 20px)",
                  lineHeight: "95%",
                  letterSpacing: "-0.04em",
                  textTransform: "uppercase",
                }}
              >
                SECRETARY FOR
                <br />
                YEAR 2025
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 w-full lg:flex-1">
              <p
                className="dmsans"
                style={{
                  fontWeight: "700",
                  fontSize: "clamp(12px, 1.2vw, 20px)",
                  lineHeight: "95%",
                  letterSpacing: "-0.04em",
                  color: "#595959",
                  textTransform: "uppercase",
                }}
              >
                Secretary Message
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
                Mr. Manzoor Ahmed
                <br />
                Jajja Advocate
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
                  fontSize: "clamp(13px, 1.8vw, 24px)",
                  lineHeight: "124%",
                  letterSpacing: "-0.04em",
                  color: "#595959",
                }}
              >
                <p>
                  It is with great pleasure and a deep sense of gratitude that
                  I, Manzoor Ahmed Jajja, Advocate High Court, accept the honor
                  of serving as your President. I am humbled by the trust you
                  have placed in me, and I pledge to work tirelessly to uphold
                  the values and principles that our association stands for.
                </p>
                <p>
                  As we embark on this new journey together, I am keenly aware
                  of the challenges that lie ahead. We live in a time of great
                  uncertainty and upheaval, where the rule of law and the
                  independence of the judiciary are under constant threat. It is
                  up to us, as lawyers and legal professionals, to safeguard
                  these fundamental principles and to ensure that justice is
                  accessible to all.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
      <section
        className="w-full rounded-3xl overflow-hidden relative"
        style={{ backgroundColor: "#143D2B", minHeight: "400px" }}
      >
        {/* Content + Image side by side */}
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left: Text Content */}
          <FadeIn
            delay={0}
            className="flex flex-col justify-center gap-6 px-8 md:px-14 py-14 lg:py-16 w-full lg:w-1/2"
          >
            <h2
              className="basker text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
              }}
            >
              About The Bar
            </h2>

            <p
              className="dmsans text-white"
              style={{
                fontSize: "clamp(13px, 1.2vw, 20px)",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
                opacity: 0.85,
              }}
            >
              The Islamabad High Court Bar Association (IHCBA) is a professional
              body representing lawyers practicing before the Islamabad High
              Court. Established to promote the rule of law and strengthen the
              legal profession, the association serves as a collective voice for
              advocates while safeguarding the independence and integrity of the
              judiciary.
            </p>

            <p
              className="dmsans text-white"
              style={{
                fontSize: "clamp(13px, 1.2vw, 20px)",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
                opacity: 0.85,
              }}
            >
              With a growing community of legal professionals, IHCBA plays an
              active role in promoting legal education, protecting professional
              standards, and supporting initiatives that enhance access to
              justice. Through collaboration, advocacy, and engagement with the
              broader legal community, the association continues to contribute
              to the development of Pakistan&apos;s judicial system and the
              protection of fundamental rights.
            </p>
          </FadeIn>

          {/* Right: Image */}
          <FadeIn
            delay={200}
            className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-0"
          >
            <Image
              src="/home4.png"
              alt="About The Bar"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </section>
      <section className="w-full bg-white flex flex-col">
        {/* ── TOP BLOCK: Heading + two paras + background image ── */}
        <div className="relative w-full" style={{ minHeight: "600px" }}>
          {/* Background image */}
          <SlideUp delay={0} className="absolute inset-0">
            <Image
              src="/home5.png"
              alt="Court Building"
              fill
              className="object-contain object-bottom md:mt-40 mt-20"
              style={{ mixBlendMode: "multiply" }}
              sizes="100vw"
              priority
            />
          </SlideUp>

          {/* Content on top of image */}
          <div className="relative z-10 flex flex-col px-6 md:px-14 pt-14 md:pt-20 pb-10">
            {/* Centered heading */}
            <FadeIn delay={100} className="text-center mb-10 md:mb-16">
              <h2
                className="basker"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  lineHeight: "95%",
                  letterSpacing: "-0.04em",
                  color: "#1E1E1E",
                }}
              >
                Our Role &amp;
                <br />
                Responsibilities
              </h2>
            </FadeIn>

            {/* Two paragraphs — left and right */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:mt-20 mt-5">
              {/* Left paragraph */}
              <FadeIn delay={250} className="w-full lg:w-[28%]">
                <p
                  className="dmsans"
                  style={{
                    fontSize: "clamp(13px, 1.1vw, 20px)",
                    lineHeight: "124%",
                    letterSpacing: "-0.04em",
                    color: "#595959",
                  }}
                >
                  The Islamabad High Court Bar Association plays a vital role in
                  representing and supporting advocates practicing before the
                  Islamabad High Court. The association works to protect the
                  professional interests of its members while promoting ethical
                  legal practice and maintaining the dignity of the legal
                  profession.
                </p>
              </FadeIn>

              {/* Spacer — center gap where image shows through */}
              <div className="hidden lg:block lg:w-[36%]" />

              {/* Right paragraph */}
              <FadeIn delay={400} className="w-full lg:w-[30%] lg:mt-20">
                <p
                  className="dmsans"
                  style={{
                    fontSize: "clamp(13px, 1.1vw, 20px)",
                    lineHeight: "124%",
                    letterSpacing: "-0.04em",
                    color: "#595959",
                  }}
                >
                  With a growing community of legal professionals, IHCBA plays
                  an active role in promoting legal education, protecting
                  professional standards, and supporting initiatives that
                  enhance access to justice. Through collaboration, advocacy,
                  and engagement with the broader legal community, the
                  association continues to contribute to the development of
                  Pakistan&apos;s judicial system and the protection of
                  fundamental rights.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Our Mission ── */}
        <FadeIn
          delay={0}
          className="flex flex-col sm:flex-row items-start gap-6 sm:gap-50 px-6 md:px-14 pt-4 pb-10 md:pb-14 md:mt-70 mt-30"
        >
          <h2
            className="basker flex-shrink-0"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: "95%",
              letterSpacing: "-0.04em",
              color: "#1E1E1E",
            }}
          >
            Our
            <br />
            Mission
          </h2>
          <p
            className="dmsans"
            style={{
              fontSize: "clamp(18px, 2.2vw, 32px)",
              lineHeight: "124%",
              letterSpacing: "-0.04em",
              color: "#595959",
              maxWidth: "900px",
              paddingTop: "8px",
            }}
          >
            Our mission is to uphold the rule of law, protect the independence
            of the judiciary, and support the professional growth of lawyers
            practicing before the Islamabad High Court.
          </p>
        </FadeIn>

        {/* ── DIVIDER ── */}
        <div className="px-6 md:px-14 pb-10 md:pb-16">
          <div style={{ height: "2px", backgroundColor: "#1E1E1E" }} />
        </div>
      </section>
      <section
        className="w-full"
        style={{ backgroundColor: "#EEEEEE", borderRadius: "20px" }}
      >
        <div className="px-6 md:px-12 py-10 md:py-14">
          {/* ── Header Row ── */}
          <FadeIn
            delay={0}
            className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-12 mb-10 md:mb-14 w-full"
          >
            {/* Our Facilities */}
            <h2
              className="basker flex-shrink-0"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
                color: "#000000",
              }}
            >
              Our
              <br />
              Facilities
            </h2>

            {/* Description */}
            <p
              className="dmsans sm:max-w-[50%]"
              style={{
                fontSize: "clamp(16px, 2vw, 32px)",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
                color: "#000000",
              }}
            >
              Our mission is to uphold the rule of law, protect the independence
              of the judiciary, and support the professional growth of lawyers
              practicing before the Islamabad High Court.
            </p>
          </FadeIn>

          {/* ── Grid of Facilities ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:px-30">
            {facilities.map((facility, index) => (
              <FadeIn key={index} delay={index * 80}>
                <div
                  className="bg-white flex flex-col items-center justify-center gap-3 py-8 px-4 transition-all duration-300 hover:scale-105"
                  style={{ borderRadius: "11px" }}
                >
                  {/* Icon */}
                  <div className="relative flex items-center justify-center w-10 h-10">
                    {facility.icon ? (
                      <Image
                        src={facility.icon}
                        alt={facility.label}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      /* Homeopathic Clinic — house + plus overlapping */
                      <div className="relative w-10 h-10">
                        <Image
                          src="/homeopathic-clinic-house-logo.png"
                          alt="Homeopathic Clinic House"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <Image
                          src="/homeopathic-clinic-plus-logo.png"
                          alt="Homeopathic Clinic Plus"
                          width={18}
                          height={18}
                          className="object-contain absolute"
                          style={{ bottom: "7px", right: "11px" }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <p
                    className="basker text-center whitespace-pre-line"
                    style={{
                      fontSize: "clamp(13px, 1.2vw, 26px)",
                      lineHeight: "95%",
                      letterSpacing: "-0.04em",
                      color: "#000000",
                    }}
                  >
                    {facility.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section
        className="w-full overflow-hidden mt-5"
        style={{ backgroundColor: "#143D2B", borderRadius: "20px" }}
      >
        <div className="px-6 md:px-12 py-10 md:py-14">
          {/* ── Header ── */}
          <FadeIn
            delay={0}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <p
                  className="dmsans text-white uppercase"
                  style={{
                    fontSize: "clamp(11px, 1vw, 16px)",
                    lineHeight: "140%",
                    letterSpacing: "0.08em",
                    borderTop: "1px solid #1E6228",
                    borderBottom: "1px solid #1E6228",
                    padding: "4px 0",
                  }}
                >
                  Excellence Is Not An Exception
                </p>
              </div>

              <h2
                className="basker text-white"
                style={{
                  fontSize: "clamp(28px, 4.5vw, 64px)",
                  lineHeight: "95%",
                  letterSpacing: "-0.04em",
                }}
              >
                We Are Specialists In The Legal
                <br />
                Office Bearers
              </h2>
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3 self-start sm:self-center mt-2 sm:mt-0 flex-shrink-0">
              <button
                onClick={handlePrev}
                disabled={!canPrev}
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: canPrev ? "white" : "transparent",
                  opacity: canPrev ? 1 : 0.4,
                  cursor: canPrev ? "pointer" : "default",
                }}
                aria-label="Previous"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={canPrev ? "#143D2B" : "white"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={!canNext}
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: canNext ? "white" : "transparent",
                  opacity: canNext ? 1 : 0.4,
                  cursor: canNext ? "pointer" : "default",
                }}
                aria-label="Next"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={canNext ? "#143D2B" : "white"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </FadeIn>

          {/* ── Carousel ── */}
          <FadeIn delay={200}>
            <div
              className="overflow-hidden py-4 -my-4 px-4 -mx-4"
              ref={trackRef}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  gap: `${GAP}px`,
                  transform: `translateX(-${translateX}px)`,
                }}
              >
                {bearers.map((bearer, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 overflow-hidden transition-transform duration-300 hover:scale-105"
                    style={{
                      width:
                        cardWidth > 0
                          ? `${cardWidth}px`
                          : `calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})`,
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      className="relative w-full"
                      style={{ aspectRatio: "3/4" }}
                    >
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
                        {/* <Link href={`/current-cabinet/${bearer.slug}`}> */}
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
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="w-full bg-white px-6 md:px-14 py-14 md:py-20">
        {/* ── Heading ── */}
        <FadeIn delay={0}>
          <div className="text-center mb-10 md:mb-14">
            <h2
              className="basker"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
                color: "#000000",
              }}
            >
              Download
            </h2>
          </div>
        </FadeIn>

        {/* ── Items grid: 2 cols on sm, 4 cols on lg ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 relative lg:px-20 px-10">
          {allItems.map((item, i) => {
            const posInSmRow = i % 2; // 0 or 1 in 2-col layout
            const posInLgRow = i % 4; // 0–3 in 4-col layout
            const smLast = posInSmRow === 1;
            const lgLast = posInLgRow === 3;
            const hasBottom = i < allItems.length - 4; // rows 1 only (not row 2 of 4-col)
            // In 2-col mode row boundary is every 2, so bottom for first 6 of 8
            // We'll handle per-breakpoint with two spans inside Card

            return (
              <FadeIn key={item.num} delay={i * 60} className="h-full">
                <div
                  className="flex flex-col items-center justify-center gap-4 py-10 px-4 relative cursor-pointer hover:font-bold h-full"
                  style={{ minHeight: "180px" }}
                >
                  {/* Right border: show always except smLast (hidden on sm) and lgLast (hidden on lg) */}
                  {!lgLast && (
                    <span
                      className={`absolute right-0 top-0 bottom-0 w-px ${smLast ? "hidden lg:block" : "block"}`}
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(to bottom, #CCCCCC 0, #CCCCCC 6px, transparent 6px, transparent 12px)",
                      }}
                    />
                  )}

                  {/* Bottom border on lg: rows 1 and 2 (not row 3) → i < 4 */}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-px ${i < 4 ? "block" : "hidden lg:block"}`}
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to right, #CCCCCC 0, #CCCCCC 6px, transparent 6px, transparent 12px)",
                    }}
                  />
                  {/* Bottom border on sm: every row except last two (i < 6) */}
                  {i >= 4 && i < 6 && (
                    <span
                      className="absolute left-0 right-0 bottom-0 h-px lg:hidden"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(to right, #CCCCCC 0, #CCCCCC 6px, transparent 6px, transparent 12px)",
                      }}
                    />
                  )}

                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#143D2B" }}
                  >
                    <Image
                      src={`/${item.num}.png`}
                      alt={item.num}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <p
                    className="basker text-center whitespace-pre-line"
                    style={{
                      fontSize: "clamp(13px, 1.5vw, 26px)",
                      lineHeight: "95%",
                      letterSpacing: "-0.04em",
                      color: "#000000",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* ── Last row: 09 and 10 centered ── */}
        {/* On lg: centered in middle 2 of 4 cols */}
        {/* On sm: 2-col full width, no right border on 2nd */}
        <FadeIn delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:px-20 px-10">
            {/* lg spacer left */}
            <div className="hidden lg:block" />

            {lastRow.map((item, i) => (
              <div
                key={item.num}
                className="flex flex-col items-center justify-center gap-4 py-10 px-4 relative cursor-pointer hover:font-bold"
                style={{ minHeight: "180px" }}
              >
                <span
                  className="absolute left-0 right-0 top-0 h-px"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to right, #CCCCCC 0, #CCCCCC 6px, transparent 6px, transparent 12px)",
                  }}
                />
                {/* Right border: only between 09 and 10 */}
                {i === 0 && (
                  <span
                    className="absolute right-0 top-0 bottom-0 w-px"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, #CCCCCC 0, #CCCCCC 6px, transparent 6px, transparent 12px)",
                    }}
                  />
                )}

                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#143D2B" }}
                >
                  <Image
                    src={`/${item.num}.png`}
                    alt={item.num}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <p
                  className="basker text-center whitespace-pre-line"
                  style={{
                    fontSize: "clamp(13px, 1.5vw, 26px)",
                    lineHeight: "95%",
                    letterSpacing: "-0.04em",
                    color: "#000000",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}

            {/* lg spacer right */}
            <div className="hidden lg:block" />
          </div>
        </FadeIn>
      </section>
      <section className="w-full">
        <div
          className="relative w-full overflow-hidden"
          style={{ borderRadius: "20px", minHeight: "400px" }}
        >
          {/* ── Background Image ── */}
          <Image
            src={activeVideo.image}
            alt={activeVideo.title}
            fill
            className="object-cover object-center transition-all duration-500"
            sizes="100vw"
            priority
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.25) 100%)",
            }}
          />

          {/* ── Content ── */}
          <div className="relative z-10 flex flex-col justify-between h-full min-h-[400px] md:min-h-[520px] p-6 md:p-8">
            {/* Top: Latest Videos label */}
            <FadeIn delay={0}>
              <p
                className="dmsans text-white"
                style={{
                  fontSize: "clamp(16px, 2vw, 32px)",
                  lineHeight: "124%",
                  letterSpacing: "-0.04em",
                }}
              >
                Latest Videos
              </p>
            </FadeIn>

            {/* Center: Play/Pause button */}
            <div className="flex items-center justify-center flex-1 py-8">
              <button
                onClick={() => setPlaying((p) => !p)}
                className="transition-transform duration-200 hover:scale-110 active:scale-95"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  /* Pause button */
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#D9D9D9", cursor: "pointer" }}
                  >
                    <div className="flex gap-1.5">
                      <div
                        className="w-2 h-7 md:h-8 rounded-sm"
                        style={{ backgroundColor: "#333" }}
                      />
                      <div
                        className="w-2 h-7 md:h-8 rounded-sm"
                        style={{ backgroundColor: "#333" }}
                      />
                    </div>
                  </div>
                ) : (
                  /* Play button image */
                  <Image
                    src="/play-button.png"
                    alt="Play"
                    width={72}
                    height={72}
                    className="object-contain md:w-20 md:h-20 cursor-pointer"
                  />
                )}
              </button>
            </div>

            {/* Bottom: Title + Thumbnails */}
            <FadeIn delay={200}>
              <div className="flex items-end justify-between gap-4">
                {/* Video title */}
                <h2
                  className="basker text-white"
                  style={{
                    fontSize: "clamp(28px, 5vw, 64px)",
                    lineHeight: "95%",
                    letterSpacing: "-0.04em",
                    maxWidth: "60%",
                  }}
                >
                  {activeVideo.title}
                </h2>

                {/* Thumbnails */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {thumbnails.map((video) => (
                    <button
                      key={video.id}
                      onClick={() => handleThumbnailClick(video)}
                      className="relative overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                      style={{
                        width: "clamp(56px, 6vw, 88px)",
                        height: "clamp(40px, 4.5vw, 64px)",
                        borderRadius: "6px",
                        border: "2px solid rgba(255,255,255,0.4)",
                      }}
                      aria-label={video.title}
                    >
                      <Image
                        src={video.image}
                        alt={video.title}
                        fill
                        className="object-cover"
                        sizes="88px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="w-full bg-white px-6 md:px-14 py-14 md:py-20">
        {/* ── Heading ── */}
        <FadeIn delay={0}>
          <div className="text-center mb-10 md:mb-14">
            <h2
              className="basker"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
                color: "#1E1E1E",
              }}
            >
              News &amp; Updates
            </h2>
          </div>
        </FadeIn>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <FadeIn key={article.id} delay={i * 100}>
              <div
                className="flex flex-col cursor-pointer group p-5"
                style={{
                  border: "1px solid #D9D9D9",
                  borderRadius: "0",
                  boxShadow: "none",
                }}
              >
                {/* Image */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2 px-4 pt-4 pb-4">
                  <h3
                    className="basker"
                    style={{
                      fontSize: "clamp(16px, 1.8vw, 24px)",
                      lineHeight: "95%",
                      letterSpacing: "-0.04em",
                      color: "#1E1E1E",
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Date + Arrow */}
                  <div className="flex items-center justify-between mt-1">
                    <p
                      className="dmsans"
                      style={{
                        fontSize: "clamp(12px, 1.1vw, 16px)",
                        lineHeight: "124%",
                        letterSpacing: "-0.04em",
                        color: "#1E1E1E",
                      }}
                    >
                      {article.date}
                    </p>
                    <Image
                      src="/black-right-arrow.png"
                      alt="Read more"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── View More Button ── */}
        <FadeIn delay={300}>
          <div className="flex justify-center mt-10 md:mt-14">
            <Link
              href="/news-updates"
              className="dmsans px-8 py-3 border border-black transition-colors text-black duration-200 hover:bg-[#143D2B] hover:text-white"
              style={{
                fontSize: "clamp(14px, 1.3vw, 20px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
                borderRadius: "125px",
              }}
            >
              View more
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
