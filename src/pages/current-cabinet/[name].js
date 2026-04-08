import Image from "next/image";

export default function OfficeBearerPage({ bearer }) {
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
          {/* Dark overlay */}
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

// ── Static data for each bearer ──
const bearerData = {
  "Syed-Wajid-Ali-Shah": {
    pageTitle: "President Message",
    bannerImage: "/president-message.png",
    personImage: "/home2.png",
    name: "Mr. Syed Wajid Ali Shah\nGIllani Advocate",
    role: "PRESIDENT FOR",
    tag: "Excellence is not an exception",
    paragraphs: [
      "I, Syed Wajid Ali Shah Gillani, Advocate Supreme Court, am deeply honored to accept the responsibility of serving as your President. I am grateful for your trust and remain committed to upholding the values and principles of our association.",
      "In these challenging times, it is our collective duty to protect the rule of law and ensure justice remains accessible to all. I look forward to working closely with you, listening to your ideas and concerns, and shaping initiatives that reflect the aspirations of our members.",
      "Together, we can strengthen our association and contribute positively to the legal community and society.",
      "Sincerely,",
    ],
  },
  "Manzoor-Ahmed": {
    pageTitle: "Secretary Message",
    bannerImage: "/secretary-message.png",
    personImage: "/home3.png",
    name: "Mr. Manzoor Ahmed\nJajja Advocate",
    role: "SECRETARY FOR",
    tag: "Secretary Message",
    paragraphs: [
      "It is with great pleasure and a deep sense of gratitude that I, Manzoor Ahmed Jajja, Advocate High Court, accept the honor of serving as your President. I am humbled by the trust you have placed in me, and I pledge to work tirelessly to uphold the values and principles that our association stands for.",
      "As we embark on this new journey together, I am keenly aware of the challenges that lie ahead. We live in a time of great uncertainty and upheaval, where the rule of law and the independence of the judiciary are under constant threat. It is up to us, as lawyers and legal professionals, to safeguard these fundamental principles and to ensure that justice is accessible to all.",
      "In the coming days and months, I will work closely with all of you to chart a course for our association that reflects the needs and aspirations of our members. I will listen to your concerns and ideas, and I will do my best to incorporate them into our plans and initiatives.",
      "I believe that our association has the potential to be a powerful force for positive change, not just within the legal community, but in society as a whole. Together, we can make a real difference in the lives of our fellow citizens, by standing up for justice, fairness, and the rule of law.",
      "Once again, thank you for entrusting me with this responsibility. I look forward to working with each and every one of you to build a brighter future for our association and our country. For Lawyers, Bar Association is like a mother and plays a parental role. Every year, Bar Association give mandate to our colleagues to serve it with their best efforts.",
      "Sincerely,",
    ],
  },
  "Iftikhar-Ahmad": {
    pageTitle: "President Message",
    bannerImage: "/president-message.png",
    personImage: "/office-bearer-2.png",
    name: "MR. IFTIKHAR AHMAD Bajwa\n Advocate",
    role: "PRESIDENT FOR",
    tag: "Excellence is not an exception",
    paragraphs: [
      "I, Iftikhar Ahmed, Advocate Supreme Court, am deeply honored to accept the responsibility of serving as your President. I am grateful for your trust and remain committed to upholding the values and principles of our association.",
      "In these challenging times, it is our collective duty to protect the rule of law and ensure justice remains accessible to all. I look forward to working closely with you, listening to your ideas and concerns, and shaping initiatives that reflect the aspirations of our members.",
      "Together, we can strengthen our association and contribute positively to the legal community and society.",
      "Sincerely,",
    ],
  },
  "Imran-Ishfaq": {
    pageTitle: "Joint Secretary Message",
    bannerImage: "/president-message.png",
    personImage: "/office-bearer-3.png",
    name: "Mr. Imran Ishfaq\nAdvocate",
    role: "JOINT SECRETARY",
    tag: "Excellence is not an exception",
    paragraphs: [
      "I, Imran Ishfaq, Advocate, am deeply honored to serve as Joint Secretary of the Islamabad High Court Bar Association. I remain committed to upholding the values and principles of our association.",
      "Together we can strengthen our association and contribute positively to the legal community and society.",
      "Sincerely,",
    ],
  },
  "Fazal-Maula": {
    pageTitle: "Additional Secretary Message",
    bannerImage: "/president-message.png",
    personImage: "/office-bearer-6.png",
    name: "Mr. Fazal Maula\nAdvocate",
    role: "ADDITIONAL SECRETARY",
    tag: "Excellence is not an exception",
    paragraphs: [
      "I, Fazal Maula, Advocate, am honored to serve as Additional Secretary of the Islamabad High Court Bar Association. I pledge to work tirelessly in service of our members.",
      "Together we can strengthen our association and contribute positively to the legal community and society.",
      "Sincerely,",
    ],
  },
  "Bushra-Tariq-Raja": {
    pageTitle: "Additional Secretary Message",
    bannerImage: "/president-message.png",
    personImage: "/office-bearer-5.png",
    name: "Ms. Bushra Tariq Raja\nAdvocate",
    role: "ADDITIONAL SECRETARY",
    tag: "Excellence is not an exception",
    paragraphs: [
      "I, Bushra Tariq Raja, Advocate, am deeply honored to serve as Additional Secretary of the Islamabad High Court Bar Association. I am committed to representing the interests of all members.",
      "Together we can strengthen our association and contribute positively to the legal community and society.",
      "Sincerely,",
    ],
  },
  "Wajahat-Ghauri": {
    pageTitle: "Library Secretary Message",
    bannerImage: "/president-message.png",
    personImage: "/office-bearer-7.png",
    name: "Mr. Wajahat Ghauri\nAdvocate",
    role: "LIBRARY SECRETARY",
    tag: "Excellence is not an exception",
    paragraphs: [
      "I, Wajahat Ghauri, Advocate, am honored to serve as Library Secretary of the Islamabad High Court Bar Association. I will work to enhance our library resources and legal education initiatives.",
      "Together we can strengthen our association and contribute positively to the legal community and society.",
      "Sincerely,",
    ],
  },
  "Saif-Ur-Rehman-Shah": {
    pageTitle: "Auditor Message",
    bannerImage: "/president-message.png",
    personImage: "/office-bearer-8.png",
    name: "Mr. Saif Ur Rehman Shah\nBukhari Advocate",
    role: "AUDITOR",
    tag: "Excellence is not an exception",
    paragraphs: [
      "I, Saif Ur Rehman Shah, Bukhari Advocate, am honored to serve as Auditor of the Islamabad High Court Bar Association. I pledge full transparency and accountability in all financial matters.",
      "Together we can strengthen our association and contribute positively to the legal community and society.",
      "Sincerely,",
    ],
  },
};

export async function getStaticProps({ params }) {
  const bearer = bearerData[params.name];

  if (!bearer) {
    return { notFound: true };
  }

  return {
    props: { bearer },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(bearerData).map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
}
