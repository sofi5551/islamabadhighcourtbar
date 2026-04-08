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
            src="/current-committes.png"
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
              Current Committees
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full bg-white px-6 md:px-16 py-16 md:py-24 flex flex-col items-center gap-20">
        {/* ── PRESIDENT ROW ── */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 rounded-lg overflow-hidden">
            <Image
              src="/current-committes-2.png"
              alt="President"
              width={604}
              height={654}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center gap-4 w-full lg:w-1/2 ">
            <h2
              className="basker"
              style={{
                fontSize: "clamp(28px, 4vw, 64px)",
                lineHeight: "95%",
                letterSpacing: "-0.04em",
                color: "#1E1E1E",
              }}
            >
              Foreign Qualified Lawyers
            </h2>

            <div
              className="dmsans flex flex-col gap-3"
              style={{
                fontSize: "clamp(13px, 1.1vw, 20px)",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
                color: "#1E1E1E",
              }}
            >
              <p>
                The Foreign Qualified Lawyers Committee was first established in
                2020, by the Islamabad High Court Bar Association and is now
                reconstituted in 2023 by the new cabinet of IHCBA.
              </p>
              <p>
                The objective of the FQLC is facilitating enrollment at
                Islamabad Bar Council, enhancing capacity and fostering
                networking and knowledge exchange.
              </p>
              <p>Wednesday, 18-Oct-2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
