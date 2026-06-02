import Head from "next/head";
import Image from "next/image";

const presidents = [
  {
    name: "SYED WAJID ALI SHAH GILLANI",
    designation: "Advocate",
    post: "President (2026-2027)",
    image: "/President Folder/2026-2027.jpg",
  },
  {
    name: "SYED WAJID ALI SHAH GILLANI",
    designation: "Advocate",
    post: "President (2025-2026)",
    image: "/President Folder/2025-2026.jpg",
  },
  {
    name: "RIASAT ALI AZAD",
    designation: "Advocate",
    post: "President (2024-2025)",
    image: "/President Folder/2024-2025.jpg",
  },
  {
    name: "NAVEED HAYAT MALIK",
    designation: "Advocate",
    post: "President (2023-2024)",
    image: "/President Folder/2023-2024.jpg",
  },
  {
    name: "MUHAMMAD SHOAIB SHAHEEN",
    designation: "Advocate",
    post: "President (2022-2023)",
    image: "/President Folder/2022-2023.jpg",
  },
  {
    name: "ZAHID MAHMOOD RAJA",
    designation: "Advocate",
    post: "President (2021-2022)",
    image: "/President Folder/2021-2022.jpg",
  },
  {
    name: "CH. HASEEB MUHAMMAD",
    designation: "Advocate",
    post: "President (2020-2021)",
    image: "/President Folder/2020-2021.jpg",
  },
  {
    name: "RAJA INAAM AMEEN MINHAS",
    designation: "Advocate",
    post: "President (2019-2020)",
    image: "/President Folder/2019-2020.jpg",
  },
  {
    name: "SYED JAVED AKBAR",
    designation: "Advocate",
    post: "President (2018-2019)",
    image: "/President Folder/2018-2019.jpg",
  },
  {
    name: "ARIF CHAUDHARY",
    designation: "Advocate",
    post: "President (2017-2018)",
    image: "/President Folder/2017-2018.jpg",
  },
  {
    name: "TARIQ MEHMOOD JAHANGIRI",
    designation: "Advocate",
    post: "President (2016-2017)",
    image: "/President Folder/2016-2017.jpg",
  },
  {
    name: "RAJA M ALEEM KHAN ABBASI",
    designation: "Advocate",
    post: "President (2015-2016)",
    image: "/President Folder/2015-2016.jpg",
  },
  {
    name: "MOHSIN AKHTAR KAYANI",
    designation: "Advocate",
    post: "President (2014-2015)",
    image: "/President Folder/2014-2015.jpg",
  },
  {
    name: "HAROON UR RASHID",
    designation: "Advocate",
    post: "President (2013-2014)",
    image: "/President Folder/2013-2014.jpg",
  },
  {
    name: "SYED NAYAB HASSAN GARDEZI",
    designation: "Advocate",
    post: "President (2012-2013)",
    image: "/President Folder/2012-2013.jpg",
  },
  {
    name: "CH. MUHAMMAD ASHRAF GUJJAR",
    designation: "Advocate",
    post: "President (2011-2012)",
    image: "/President Folder/2011-2012.jpg",
  },
  {
    name: "SAJJAD AFZAL CHEEMAA",
    designation: "Advocate",
    post: "President (2009-2011)",
    image: "/President Folder/2009-2011.jpg",
  },
];

export default function FormerPresidents() {
  return (
    <>
      <Head>
        <title>Islamabad High Court Bar Association: Former Presidents</title>
      </Head>
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
              Former Presidents
            </h1>
            <p
              className="dmsans mt-3"
              style={{
                fontSize: "clamp(12px, 1.2vw, 20px)",
                lineHeight: "120%",
                letterSpacing: "-0.04em",
              }}
            >
              2009 – 2027
            </p>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden mt-5">
        <div className="px-6 md:px-12 py-10 md:py-14">
          <div className="overflow-visible">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
              {presidents.map((bearer, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 ring-1 ring-gray-200"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={bearer.image}
                      alt={bearer.name}
                      fill
                      className="object-cover object-top scale-110"
                    />
                  </div>
                  <div className="relative z-10 px-4 py-7 flex flex-col gap-1">
                    <p className="basker text-white text-sm md:text-lg leading-tight">
                      {bearer.name}
                    </p>
                    <p className="dmsans text-white/70 text-xs md:text-base">
                      {bearer.designation}
                    </p>
                    <p className="dmsans text-white/70 text-xs md:text-base">
                      {bearer.post}
                    </p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(20,61,43,0.85) 0%, rgba(20,61,43,0.1) 50%, transparent 100%)" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
