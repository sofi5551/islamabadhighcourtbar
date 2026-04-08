import Image from "next/image";
import { useState } from "react";

const allGallery = [
  {
    id: 1,
    image: "/gallery1.png",
    title: "IHCBA Cabinet meeting with Chief Justice Constitutional Court",
    desc: "Presenting Flowers to Hon'ble Chief Justice",
  },
  {
    id: 2,
    image: "/gallery2.png",
    title:
      "A dinner was hosted by the Islamabad High Court Bar in honor of the Chief Justice of the Islamabad High Court",
    desc: "اسلام آباد ہائی کورٹ بار کی کابینہ کو مسٹر جسٹس سردار سرفراز احمد ڈوگر چیف جسٹس اسلام آباد ہائیکورٹ کے اعزاز میں پروقار تقریب منعقد کرنے پر م",
  },
  {
    id: 3,
    image: "/gallery3.png",
    title:
      "On a special request from Syed Wajid Gillani President IHCBA and Ch Mansoor Ahmed Jaja Secretary IHCBA Mr. Justice Inam Amin Minhas and Mr. Justice Azam Khan visited the under-construction Litigation Complex",
    desc: "",
  },
  {
    id: 4,
    image: "/gallery4.png",
    title:
      "Federal Law Minister Mr. Azam Nazir Tarar visited the under-construction Lawyers Chambers and Complex",
    desc: "Presenting Flowers to Hon'ble Chief Justice",
  },
  {
    id: 5,
    image: "/gallery5.png",
    title:
      "H.E Una Kelly First Secretary- Rule of Law, Delegation of the European Union to Pakistan",
    desc: "We had a highly productive meeting with H.E Una Kelly First Secretary",
  },
  {
    id: 6,
    image: "/gallery6.png",
    title:
      "On a special request of Syed Wajid Gillani President IHCBA and Ch Mansoor Ahmed Jaja Secretary IHCBA Mr. Justice Inam Amin Minhas and Mr. Justice Azam Khan visited the under-construction Litigation Complex. Officials from the Law",
    desc: "",
  },
  {
    id: 7,
    image: "/gallery7.png",
    title: "Chairman NIRC Shoukat Aziz Siddiqui",
    desc: "Mr. Justice (R) Shoukat Aziz Siddiqui Chairman of the National Industrial Relations Commission NIRC addressed the Islamabad High Court Bar Association today",
  },
  {
    id: 8,
    image: "/gallery8.png",
    title: "Eid Milan Party",
    desc: "A delightful Eid Milan gathering was hosted Islamabad High Court Bar Association",
  },
  {
    id: 9,
    image: "/gallery9.png",
    title:
      "Youm-e-Takbeer was celebrated today h May 29- 2023 at the Islamabad High Court Bar Association",
    desc: "On a special request from Syed Wajid Gillani President IHCBA A We extend our special thanks to the Honourable Ahsan Iqbal Federal Minister for Planning",
  },
  {
    id: 10,
    image: "/gallery10.png",
    title: "Grant to million rupees",
    desc: "Mr. Azam Nazir Tarar the Law Minister conscientiously demonstrates his kindness and unwavering support",
  },
  {
    id: 11,
    image: "/gallery11.png",
    title: "Sardar Saleem Haider Khan, Governor of Punjab",
    desc: "We extend our sincere gratitude to the Honorable Sardar Saleem Haider Khan Governor of Punjab",
  },
  {
    id: 12,
    image: "/gallery12.png",
    title: "H.E. Yerzhan Kistafin, Ambassador of Kazakhstan",
    desc: "H.E. Yerzhan Kistafin, Ambassador of Kazakhstan held a fruitful meeting with the Islamabad High Court Bar Association",
  },
  {
    id: 13,
    image: "/gallery2.png",
    title:
      "A dinner was hosted by the Islamabad High Court Bar in honor of the Chief Justice of the Islamabad High Court",
    desc: "",
  },
  {
    id: 14,
    image: "/gallery1.png",
    title: "IHCBA Cabinet meeting with Chief Justice Constitutional Court",
    desc: "Presenting Flowers to Hon'ble Chief Justice",
  },
  {
    id: 15,
    image: "/gallery3.png",
    title:
      "On a special request from Syed Wajid Gillani President IHCBA and Ch Mansoor Ahmed Jaja Secretary IHCBA Mr. Justice Inam Amin Minhas and Mr. Justice Azam Khan visited the under-construction Litigation Complex",
    desc: "",
  },
  {
    id: 16,
    image: "/gallery4.png",
    title:
      "Federal Law Minister Mr. Azam Nazir Tarar visited the under-construction Lawyers Chambers and Complex",
    desc: "Presenting Flowers to Hon'ble Chief Justice",
  },
  {
    id: 17,
    image: "/gallery5.png",
    title:
      "H.E Una Kelly First Secretary- Rule of Law, Delegation of the European Union to Pakistan",
    desc: "We had a highly productive meeting with H.E Una Kelly First Secretary",
  },
  {
    id: 18,
    image: "/gallery6.png",
    title:
      "On a special request of Syed Wajid Gillani President IHCBA and Ch Mansoor Ahmed Jaja Secretary IHCBA Mr. Justice Inam Amin Minhas and Mr. Justice Azam Khan visited the under-construction Litigation Complex. Officials from the Law",
    desc: "",
  },
  {
    id: 19,
    image: "/gallery7.png",
    title: "Chairman NIRC Shoukat Aziz Siddiqui",
    desc: "Mr. Justice (R) Shoukat Aziz Siddiqui Chairman of the National Industrial Relations Commission NIRC addressed the Islamabad High Court Bar Association today",
  },
  {
    id: 20,
    image: "/gallery8.png",
    title: "Eid Milan Party",
    desc: "A delightful Eid Milan gathering was hosted Islamabad High Court Bar Association",
  },
  {
    id: 21,
    image: "/gallery9.png",
    title:
      "Youm-e-Takbeer was celebrated today h May 29- 2023 at the Islamabad High Court Bar Association",
    desc: "On a special request from Syed Wajid Gillani President IHCBA",
  },
  {
    id: 22,
    image: "/gallery10.png",
    title: "Grant to million rupees",
    desc: "Mr. Azam Nazir Tarar the Law Minister conscientiously demonstrates his kindness",
  },
  {
    id: 23,
    image: "/gallery11.png",
    title: "Sardar Saleem Haider Khan, Governor of Punjab",
    desc: "We extend our sincere gratitude to the Honorable Sardar Saleem Haider Khan Governor of Punjab",
  },
  {
    id: 24,
    image: "/gallery12.png",
    title: "H.E. Yerzhan Kistafin, Ambassador of Kazakhstan",
    desc: "H.E. Yerzhan Kistafin, Ambassador of Kazakhstan held a fruitful meeting with the Islamabad High Court Bar Association",
  },
];

const PER_PAGE = 12;

export default function PhotoGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allGallery.length / PER_PAGE);

  const pageData = allGallery.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const prev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const next = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
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
            src="/photo-gallery.png"
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
              Photo Gallery
            </h1>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-15 px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pageData.map((item) => (
            <div
              key={item.id}
              className="px-4 py-4 flex flex-col"
              style={{ backgroundColor: "#F3F3F3", borderRadius: "14px" }}
            >
              {/* Image */}
              <div
                className="mb-4 w-full overflow-hidden flex-shrink-0"
                style={{ borderRadius: "11px" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={360}
                  className="w-full object-cover"
                  style={{ borderRadius: "11px" }}
                />
              </div>

              {/* Text */}
              <div className=" flex flex-col gap-2">
                <h3
                  className="basker"
                  style={{
                    fontSize: "clamp(16px, 1.8vw, 24px)",
                    lineHeight: "112%",
                    letterSpacing: "-0.04em",
                    color: "#1E1E1E",
                  }}
                >
                  {item.title}
                </h3>
                {item.desc && (
                  <p
                    className="dmsans"
                    style={{
                      fontSize: "clamp(13px, 1.4vw, 18px)",
                      lineHeight: "21px",
                      letterSpacing: "0",
                      color: "#777777",
                    }}
                  >
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination arrows */}
        <div className="flex justify-center items-center gap-6 mt-15">
          <button
            onClick={prev}
            disabled={currentPage === 1}
            className="cursor-pointer disabled:opacity-30"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <Image
              src="/arrow-left.png"
              alt="Previous"
              width={32}
              height={32}
              className="object-contain"
            />
          </button>

          <button
            onClick={next}
            disabled={currentPage === totalPages}
            className="cursor-pointer disabled:opacity-30"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <Image
              src="/arrow-right.png"
              alt="Next"
              width={32}
              height={32}
              className="object-contain"
            />
          </button>
        </div>
      </section>
    </>
  );
}
