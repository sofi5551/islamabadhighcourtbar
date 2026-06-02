import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
const bearers = [
  {
    name: "SABIR AHMAD",
    designation: "Advocate",
    post: "Vice President",
    image: "/Current Cabinet/cabinet-vice-president.jpeg",
    slug: "Sabir-Ahmad",
  },
  {
    name: "USMAN NASIR",
    designation: "Advocate",
    post: "Joint Secretary",
    image: "/Current Cabinet/cabinet-joint-secretary.jpeg",
    slug: "Usman-Nasir",
  },
  {
    name: "FARZANA FAISAL",
    designation: "Advocate",
    post: "Additional Secretary",
    image: "/Current Cabinet/cabinet-additional-secretary.jpeg",
    slug: "Farzana-Faisal",
  },
  {
    name: "SYEDA RIDA E BATOOL",
    designation: "Advocate",
    post: "Finance Secretary",
    image: "/Current Cabinet/cabinet-finance-secretary.jpeg",
    slug: "Syeda-Rida-e-Batool",
  },
  {
    name: "SHOEBA AKHTAR",
    designation: "Advocate",
    post: "Library Secretary",
    image: "/Current Cabinet/cabinet-library-secretary.jpeg",
    slug: "Shoeba-Akhtar",
  },
];
export default function Bearer() {
  return (
    <>
      <Head>
        <title>Islamabad High Court Bar Association: Current Cabinet</title>
      </Head>
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
              2026-02-24
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
