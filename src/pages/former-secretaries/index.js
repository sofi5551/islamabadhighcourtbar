import Image from "next/image";
import Link from "next/link";

const secretaries = [
  {
    name: "MR. SHAFAQAT ABBAS TARAR",
    designation: "Advocate",
    post: "Secretary (2024)",
    image: "/office-bearer-1.png",
    slug: "Shafaqat-Abbas-Tarar",
  },
  {
    name: "MR. ASIF IQBAL CHAUDHRY",
    designation: "Advocate",
    post: "Secretary (2023)",
    image: "/office-bearer-2.png",
    slug: "Asif-Iqbal-Chaudhry",
  },
  {
    name: "MR. ADNAN ZAFAR GONDAL",
    designation: "Advocate",
    post: "Secretary (2022)",
    image: "/office-bearer-3.png",
    slug: "Adnan-Zafar-Gondal",
  },
  {
    name: "MR. JAVED IQBAL HASHMI",
    designation: "Advocate",
    post: "Secretary (2021)",
    image: "/office-bearer-4.jpg",
    slug: "Javed-Iqbal-Hashmi",
  },
  {
    name: "MR. TAHIR IQBAL CHAUDHRY",
    designation: "Advocate",
    post: "Secretary (2020)",
    image: "/office-bearer-5.png",
    slug: "Tahir-Iqbal-Chaudhry",
  },
  {
    name: "MR. RASHID LATIF KHAN",
    designation: "Advocate",
    post: "Secretary (2019)",
    image: "/office-bearer-6.png",
    slug: "Rashid-Latif-Khan",
  },
  {
    name: "MR. NASIR MEHMOOD BUTT",
    designation: "Advocate",
    post: "Secretary (2018)",
    image: "/office-bearer-7.png",
    slug: "Nasir-Mehmood-Butt",
  },
  {
    name: "MR. JUNAID IQBAL GILL",
    designation: "Advocate",
    post: "Secretary (2017)",
    image: "/office-bearer-8.png",
    slug: "Junaid-Iqbal-Gill",
  },
];

export default function FormerSecretaries() {
  return (
    <>
      <section className="w-full">
        <div
          className="relative w-full overflow-hidden flex justify-center items-center"
          style={{ minWidth: "100%", minHeight: "450px", borderRadius: "20px" }}
        >
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
              Former Secretaries
            </h1>
            <p
              className="dmsans mt-3"
              style={{
                fontSize: "clamp(12px, 1.2vw, 20px)",
                lineHeight: "120%",
                letterSpacing: "-0.04em",
              }}
            >
              2017 – 2024
            </p>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden mt-5">
        <div className="px-6 md:px-12 py-10 md:py-14">
          <div className="overflow-visible">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
              {secretaries.map((bearer, index) => (
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
