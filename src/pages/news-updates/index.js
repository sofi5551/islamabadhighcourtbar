import Image from "next/image";
import { useState } from "react";

const allNews = [
  {
    id: 1,
    image: "/news1.png",
    title: "Directory Form",
    desc: "For updating lawyers data",
    date: "Monday, 14-Apr-2025",
  },
  {
    id: 2,
    image: "/news2.png",
    title: "Notice For Directory",
    desc: "Final Date 19.4.2025",
    date: "Thursday, 10-Apr-2025",
  },
  {
    id: 3,
    image: "/news3.png",
    title: "DIED NOTICE",
    desc: "Senior Advocate Supreme Court of Pakistan & Former District & Session Judge SABAH MOHIUDDIN KHAN",
    date: "Saturday, 08-Mar-2025",
  },
  {
    id: 4,
    image: "/news4.png",
    title: "Died Notice",
    desc: "Brother of Wajid Ali Abbasi, Advocate",
    date: "Tuesday, 04-Mar-2025",
  },
  {
    id: 5,
    image: "/news5.png",
    title: "Annual Dues IHCBA",
    desc: "Final Date 30th October, 2024 for Eligible Voter List",
    date: "Thursday, 10-Oct-2024",
  },
  {
    id: 6,
    image: "/news6.png",
    title: "Eid Milad-Un-Nabi",
    desc: "Public Holiday",
    date: "Friday, 13-Sep-2024",
  },
  {
    id: 7,
    image: "/news7.png",
    title: "Meeting With Registrar Islamabad High Court",
    desc: "on different issues of the Bar and Honble Members of the Bar",
    date: "Tuesday, 27-Aug-2024",
  },
  {
    id: 8,
    image: "/news8.png",
    title: "Cabinet IHCBA",
    desc: "Notice dated 26.2.2024",
    date: "Wednesday, 28-Feb-2024",
  },
  {
    id: 9,
    image: "/news9.png",
    title: "Final Notice Dues",
    desc: "Annual Dues of Lawyers for Voter List",
    date: "Monday, 04-Dec-2023",
  },
  {
    id: 10,
    image: "/news2.png",
    title: "Notice For Directory",
    desc: "Final Date 19.4.2025",
    date: "Thursday, 10-Apr-2025",
  },
  {
    id: 11,
    image: "/news1.png",
    title: "Directory Form",
    desc: "For updating lawyers data",
    date: "Monday, 14-Apr-2025",
  },

  {
    id: 12,
    image: "/news3.png",
    title: "DIED NOTICE",
    desc: "Senior Advocate Supreme Court of Pakistan & Former District & Session Judge SABAH MOHIUDDIN KHAN",
    date: "Saturday, 08-Mar-2025",
  },
  {
    id: 13,
    image: "/news4.png",
    title: "Died Notice",
    desc: "Brother of Wajid Ali Abbasi, Advocate",
    date: "Tuesday, 04-Mar-2025",
  },
  {
    id: 14,
    image: "/news5.png",
    title: "Annual Dues IHCBA",
    desc: "Final Date 30th October, 2024 for Eligible Voter List",
    date: "Thursday, 10-Oct-2024",
  },
  {
    id: 15,
    image: "/news6.png",
    title: "Eid Milad-Un-Nabi",
    desc: "Public Holiday",
    date: "Friday, 13-Sep-2024",
  },
  {
    id: 16,
    image: "/news7.png",
    title: "Meeting With Registrar Islamabad High Court",
    desc: "on different issues of the Bar and Honble Members of the Bar",
    date: "Tuesday, 27-Aug-2024",
  },
  {
    id: 17,
    image: "/news8.png",
    title: "Cabinet IHCBA",
    desc: "Notice dated 26.2.2024",
    date: "Wednesday, 28-Feb-2024",
  },
  {
    id: 18,
    image: "/news9.png",
    title: "Final Notice Dues",
    desc: "Annual Dues of Lawyers for Voter List",
    date: "Monday, 04-Dec-2023",
  },
  {
    id: 19,
    image: "/news1.png",
    title: "Directory Form",
    desc: "For updating lawyers data",
    date: "Monday, 14-Apr-2025",
  },
  {
    id: 20,
    image: "/news2.png",
    title: "Notice For Directory",
    desc: "Final Date 19.4.2025",
    date: "Thursday, 10-Apr-2025",
  },
  {
    id: 21,
    image: "/news3.png",
    title: "DIED NOTICE",
    desc: "Senior Advocate Supreme Court of Pakistan & Former District & Session Judge SABAH MOHIUDDIN KHAN",
    date: "Saturday, 08-Mar-2025",
  },
  {
    id: 22,
    image: "/news4.png",
    title: "Died Notice",
    desc: "Brother of Wajid Ali Abbasi, Advocate",
    date: "Tuesday, 04-Mar-2025",
  },
  {
    id: 23,
    image: "/news5.png",
    title: "Annual Dues IHCBA",
    desc: "Final Date 30th October, 2024 for Eligible Voter List",
    date: "Thursday, 10-Oct-2024",
  },
  {
    id: 24,
    image: "/news6.png",
    title: "Eid Milad-Un-Nabi",
    desc: "Public Holiday",
    date: "Friday, 13-Sep-2024",
  },
  {
    id: 25,
    image: "/news7.png",
    title: "Meeting With Registrar Islamabad High Court",
    desc: "on different issues of the Bar and Honble Members of the Bar",
    date: "Tuesday, 27-Aug-2024",
  },
  {
    id: 26,
    image: "/news8.png",
    title: "Cabinet IHCBA",
    desc: "Notice dated 26.2.2024",
    date: "Wednesday, 28-Feb-2024",
  },
  {
    id: 27,
    image: "/news9.png",
    title: "Final Notice Dues",
    desc: "Annual Dues of Lawyers for Voter List",
    date: "Monday, 04-Dec-2023",
  },
  {
    id: 28,
    image: "/news1.png",
    title: "Directory Form",
    desc: "For updating lawyers data",
    date: "Monday, 14-Apr-2025",
  },
  {
    id: 29,
    image: "/news2.png",
    title: "Notice For Directory",
    desc: "Final Date 19.4.2025",
    date: "Thursday, 10-Apr-2025",
  },
  {
    id: 30,
    image: "/news3.png",
    title: "DIED NOTICE",
    desc: "Senior Advocate Supreme Court of Pakistan & Former District & Session Judge SABAH MOHIUDDIN KHAN",
    date: "Saturday, 08-Mar-2025",
  },
  {
    id: 31,
    image: "/news4.png",
    title: "Died Notice",
    desc: "Brother of Wajid Ali Abbasi, Advocate",
    date: "Tuesday, 04-Mar-2025",
  },
  {
    id: 32,
    image: "/news5.png",
    title: "Annual Dues IHCBA",
    desc: "Final Date 30th October, 2024 for Eligible Voter List",
    date: "Thursday, 10-Oct-2024",
  },
  {
    id: 33,
    image: "/news6.png",
    title: "Eid Milad-Un-Nabi",
    desc: "Public Holiday",
    date: "Friday, 13-Sep-2024",
  },
  {
    id: 34,
    image: "/news7.png",
    title: "Meeting With Registrar Islamabad High Court",
    desc: "on different issues of the Bar and Honble Members of the Bar",
    date: "Tuesday, 27-Aug-2024",
  },
  {
    id: 35,
    image: "/news8.png",
    title: "Cabinet IHCBA",
    desc: "Notice dated 26.2.2024",
    date: "Wednesday, 28-Feb-2024",
  },
  {
    id: 36,
    image: "/news9.png",
    title: "Final Notice Dues",
    desc: "Annual Dues of Lawyers for Voter List",
    date: "Monday, 04-Dec-2023",
  },
];

const PER_PAGE = 9;
const VISIBLE_PAGES = 3; // how many page numbers shown at once

export default function NewsUpdates() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allNews.length / PER_PAGE);

  // Window of 3 page numbers that slides as you navigate
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
      {/* Hero */}
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

      {/* News Grid */}
      <section className="w-full py-15 px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pageData.map((item) => (
            <div key={item.id} className="flex flex-row gap-3 items-start">
              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={110}
                  height={110}
                  className="object-cover"
                  style={{
                    borderRadius: "12px",
                    width: "clamp(80px, 12vw, 110px)",
                    height: "clamp(80px, 12vw, 110px)",
                  }}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between gap-1 min-w-0">
                <h3
                  className="basker"
                  style={{
                    fontSize: "clamp(15px, 1.5vw, 20px)",
                    lineHeight: "112%",
                    letterSpacing: "-0.04em",
                    color: "#000000",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="dmsans"
                  style={{
                    fontSize: "clamp(13px, 1.2vw, 16px)",
                    lineHeight: "21px",
                    letterSpacing: "0",
                    color: "#000000",
                  }}
                >
                  {item.desc}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <Image
                    src="/calender-logo.png"
                    alt="date"
                    width={14}
                    height={14}
                    className="object-contain flex-shrink-0"
                  />
                  <p
                    className="dmsans"
                    style={{
                      fontSize: "clamp(11px, 1vw, 14px)",
                      lineHeight: "25px",
                      letterSpacing: "0",
                      color: "#1E6228",
                    }}
                  >
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-10">
          {pageNumbers.map((page) => {
            const color = page === currentPage ? "#000000" : "#9CA3AF";

            return (
              <button
                key={page}
                onClick={() => goTo(page)}
                className="dmsans cursor-pointer"
                style={{
                  fontSize: "21px",
                  lineHeight: "37px",
                  letterSpacing: "-0.02em",
                  color: color,
                  background: "none",
                  border: "none",
                  padding: 0,
                  border: "none",
                  transition: "background-color 0.2s",
                }}
              >
                {page}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
