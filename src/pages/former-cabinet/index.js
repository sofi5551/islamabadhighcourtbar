import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
const bearers = [
  {
    name: "MR. RIASAT ALI AZAD",
    designation: "Advocate",
    post: "President",
    image: "/former1.png",
    slug: "Riasat-Ali-Azad",
  },
  {
    name: "MR. MUJAHID ISLAM ASIF",
    designation: "Advocate",
    post: "Vice President",
    image: "/former2.png",
    slug: "Mujahid-Islam-Asif",
  },
  {
    name: "MR. SHAFAQAT ABBAS TARAR",
    designation: "Advocate",
    post: "Secretary",
    image: "/former3.png",
    slug: "Shafaqat-Abbas-Tarar",
  },
  {
    name: "MR. NADEEM AKHTAR",
    designation: "Advocate",
    post: "Joint Secretary",
    image: "/former4.png",
    slug: "Nadeem-Akhtar",
  },
  {
    name: "MS. NUSRAT PARVEEN",
    designation: "Advocate",
    post: "Additional Secretary",
    image: "/former5.png",
    slug: "Nusrat-Parveen",
  },
  {
    name: "MS. FARAH HASSAN",
    designation: "Advocate",
    post: "Finance Secretary",
    image: "/former6.png",
    slug: "Farah-Hassan",
  },
  {
    name: "MR. WAJAHAT GHAURI",
    designation: "Advocate",
    post: "Library Secretary",
    image: "/former7.png",
    slug: "Wajahat-Ghauri",
  },
  {
    name: "MS. TALAT RIZWAN",
    designation: "Auditor",
    post: "Bukhari Advocate",
    image: "/former8.png",
    slug: "Talat-Rizwan",
  },
];
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
            src="/current-cabinet.png"
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
              Former Cabinet
            </h1>

            <p
              className="dmsans mt-3"
              style={{
                fontSize: "clamp(12px, 1.2vw, 20px)",
                lineHeight: "120%",
                letterSpacing: "-0.04em",
              }}
            >
              2024-02-24
            </p>
          </div>
        </div>
      </section>
      <section className="w-full overflow-hidden mt-5">
        <div className="px-6 md:px-12 py-10 md:py-14">
          {/* ── Carousel ── */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bearers.map((bearer, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl"
                >
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={bearer.image}
                      alt={bearer.name}
                      fill
                      className="object-cover object-top"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
                      <div className="flex flex-col gap-1">
                        <p className="basker text-white text-sm md:text-lg leading-tight">
                          {bearer.name}
                        </p>
                        <p className="dmsans text-white text-xs md:text-base opacity-80">
                          {bearer.designation}
                        </p>
                        <p className="dmsans text-white text-xs md:text-base opacity-80">
                          {bearer.post}
                        </p>
                      </div>
                      {/* 
                      <Link href={`/current-cabinet/${bearer.slug}`}>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1E6228]">
                          <Image
                            src="/tilted-white-arrow.png"
                            alt="Arrow"
                            width={16}
                            height={16}
                          />
                        </div>
                      </Link> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
