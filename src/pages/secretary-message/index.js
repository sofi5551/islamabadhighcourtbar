import Image from "next/image";

const bearer = {
  pageTitle: "Secretary Message",
  bannerImage: "/secretary-message.png",
  personImage: "/home3.png",
  name: "Mr. Manzoor Ahmed\nJajja Advocate",
  role: "SECRETARY FOR",
  tag: "Secretary Message",
  paragraphs: [
    "It is with great pleasure and a deep sense of gratitude that I, Manzoor Ahmed Jajja, Advocate High Court, accept the honor of serving as your President. I am humbled by the trust you have placed in me, and I pledge to work tirelessly to uphold the values and principles that our association stands for.",
    "As we embark on this new journey together, I am keenly aware of the challenges that lie ahead. We live in a time of great uncertainty and upheaval, where the rule of law and the independence of the judiciary are under constant threat. It is up to us, as lawyers and legal professionals, to safeguard these fundamental principles and to ensure that justice is accessible to all.",
    "In the coming days and months, I will work closely with all of you to chart a course for our association that reflects the needs and aspirations of our members. I will listen to your concerns and ideas, and I will do my best to incorporate them into our plans and initiatives.",
    "I believe that our association has the potential to be a powerful force for positive change, not just within the legal community, but in society as a whole. Together, we can make a real difference in the lives of our fellow citizens, by standing up for justice, fairness, and the rule of law.",
    "Once again, thank you for entrusting me with this responsibility. I look forward to working with each and every one of you to build a brighter future for our association and our country. For Lawyers, Bar Association is like a mother and plays a parental role. Every year, Bar Association give mandate to our colleagues to serve it with their best efforts.",
    "Sincerely,",
  ],
};

export default function SecretaryMessage() {
  return (
    <>
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
          <div className="relative w-full lg:flex-1 rounded-lg overflow-hidden">
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
              YEAR 2025
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4 w-full lg:flex-1">
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
                letterSpacing: "-0.04em",
                color: "#1E1E1E",
                fontWeight: "600",
              }}
            >
              Dear fellow members of the Islamabad High Court Bar Association,
            </p>

            <div
              className="dmsans flex flex-col gap-3"
              style={{
                fontSize: "clamp(13px, 1.1vw, 20px)",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
                color: "#595959",
              }}
            >
              {bearer.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
