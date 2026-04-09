import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Bearer() {
  return (
    <>
      <section className="w-full">
        {/* Background image container with border radius */}
        <div
          className="relative w-full overflow-hidden flex justify-center items-center "
          style={{
            minWidth: "100%",
            minHeight: "450px",
            borderRadius: "20px",
          }}
        >
          {/* Background Image */}
          <Image
            src="/search-lawyer.png"
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
              Search
              <br />
              Lawyers
            </h1>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full py-18 px-15">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search by Name */}
          <div
            className="group flex items-center justify-between gap-3 px-5 py-4 w-full transition-all duration-300 hover:shadow-md"
            style={{ backgroundColor: "#EEEEEE", borderRadius: "20px", border: "1.5px solid transparent" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#143D2B"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
          >
            <input
              type="text"
              placeholder="Search by name"
              className="dmsans bg-transparent outline-none border-none w-full transition-transform duration-300 group-hover:translate-x-1"
              style={{
                fontSize: "clamp(14px, 2vw, 22px)",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
                color: "#000000",
              }}
            />
            <Image
              src="/magnifying-glass.png"
              alt="Search"
              width={22}
              height={22}
              className="object-contain flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
            />
          </div>

          {/* Search by CNIC */}
          <div
            className="group flex items-center justify-between gap-3 px-5 py-4 w-full transition-all duration-300 hover:shadow-md"
            style={{ backgroundColor: "#EEEEEE", borderRadius: "20px", border: "1.5px solid transparent" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#143D2B"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
          >
            <input
              type="text"
              placeholder="Search by CNIC"
              className="dmsans bg-transparent outline-none border-none w-full transition-transform duration-300 group-hover:translate-x-1"
              style={{
                fontSize: "clamp(14px, 2vw, 22px)",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
                color: "#000000",
              }}
            />
            <Image
              src="/magnifying-glass.png"
              alt="Search"
              width={22}
              height={22}
              className="object-contain flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
            />
          </div>
        </div>
      </section>
    </>
  );
}
