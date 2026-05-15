import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import newsData from "@/data/newsData";

// Repeat data to fill multiple pages (replace with real data later)
const allNews = [...newsData, ...newsData, ...newsData, ...newsData].map(
  (item, i) => ({ ...item, _key: i })
);

const PER_PAGE = 9;
const VISIBLE_PAGES = 3;

export default function NewsUpdates() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allNews.length / PER_PAGE);

  const windowStart = Math.min(
    Math.max(1, currentPage - 1),
    Math.max(1, totalPages - VISIBLE_PAGES + 1),
  );
  const pageNumbers = Array.from(
    { length: Math.min(VISIBLE_PAGES, totalPages) },
    (_, i) => windowStart + i,
  );

  const pageData = allNews.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const goTo = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full">
        <div
          className="relative w-full overflow-hidden flex justify-center items-center"
          style={{ minWidth: "100%", minHeight: "450px", borderRadius: "20px" }}
        >
          <Image
            src="/news-updates.png"
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
              News &amp; Updates
            </h1>
          </div>
        </div>
      </section>

      {/* ── Cards + Pagination ───────────────────────────────────────────── */}
      <section className="w-full bg-white px-6 md:px-14 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageData.map((item) => (
            <Link
              key={item._key}
              href={`/news-updates/${item.slug}`}
              className="flex flex-col group"
              style={{
                border: "1px solid #D9D9D9",
                borderRadius: "0",
                boxShadow: "none",
                textDecoration: "none",
              }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
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
                  <Image
                    src="/black-right-arrow.png"
                    alt="Read more"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-10">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => goTo(page)}
              className="dmsans cursor-pointer"
              style={{
                fontSize: "21px",
                lineHeight: "37px",
                letterSpacing: "-0.02em",
                color: page === currentPage ? "#000000" : "#9CA3AF",
                background: "none",
                border: "none",
                padding: 0,
                transition: "color 0.2s",
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
