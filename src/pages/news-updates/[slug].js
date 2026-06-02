import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getNewsBySlug, getOtherNews } from "@/data/newsData";

export default function NewsDetail() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const article = getNewsBySlug(slug);
  const related = getOtherNews(slug, 3);

  return (
    <>
      <Head>
        <title>Islamabad High Court Bar Association: {article.title}</title>
      </Head>
      {/* ── Section 1: Full-width image with title overlay ───────────────── */}
      <section className="w-full">
        <div
          className="relative w-full overflow-hidden flex items-center justify-center"
          style={{ minHeight: "500px", borderRadius: "20px" }}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 px-8 text-center">
            <h1
              className="basker text-white"
              style={{
                fontSize: "clamp(28px, 5vw, 72px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
              }}
            >
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── Section 2: Date + body ────────────────────────────────────────── */}
      <section className="w-full bg-white px-6 md:px-20 lg:px-40 py-14 md:py-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <p
            className="dmsans"
            style={{
              fontSize: "clamp(13px, 1.2vw, 16px)",
              color: "#1E6228",
              letterSpacing: "-0.02em",
            }}
          >
            {article.date}
          </p>

          <div style={{ width: "60px", height: "1px", backgroundColor: "#D9D9D9" }} />

          <div className="flex flex-col gap-5">
            {article.body.map((para, i) => (
              <p
                key={i}
                className="dmsans"
                style={{
                  fontSize: "clamp(14px, 1.4vw, 18px)",
                  lineHeight: "170%",
                  letterSpacing: "-0.02em",
                  color: "#3A3A3A",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Browse The Journal ────────────────────────────────── */}
      <section className="w-full bg-white px-6 md:px-14 py-14 md:py-20 border-t border-[#D9D9D9]">
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
            Browse The Journal
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/news-updates/${item.slug}`}
              className="flex flex-col group"
              style={{ border: "1px solid #D9D9D9", borderRadius: "0", textDecoration: "none" }}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
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
                  {item.title}
                </h3>
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
                    {item.date}
                  </p>
                  <Image src="/black-right-arrow.png" alt="Read more" width={20} height={20} className="object-contain" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More */}
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
      </section>
    </>
  );
}
