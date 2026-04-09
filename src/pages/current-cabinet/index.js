import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
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
              Current Cabinet
            </h1>

            <p
              className="dmsans mt-3"
              style={{
                fontSize: "clamp(12px, 1.2vw, 20px)",
                lineHeight: "120%",
                letterSpacing: "-0.04em",
              }}
            >
              2025-02-24
            </p>
          </div>
        </div>
      </section>
      <section className="w-full overflow-hidden mt-5">
        <div className="px-6 md:px-12 py-10 md:py-14">
          {/* ── Carousel ── */}
          <div className="overflow-visible">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
              {bearers.map((bearer, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
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

                      <Link href={`/current-cabinet/${bearer.slug}`}>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1E6228]">
                          <Image
                            src="/tilted-white-arrow.png"
                            alt="Arrow"
                            width={16}
                            height={16}
                          />
                        </div>
                      </Link>
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
