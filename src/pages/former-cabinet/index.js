import Image from "next/image";
import { useState } from "react";

// ── Cabinet data per year ─────────────────────────────────────────────────────
const cabinetData = {
  2024: [
    { sno: "01", name: "MR. RIASAT ALI AZAD", designation: "President" },
    { sno: "02", name: "MR. MUJAHID ISLAM ASIF", designation: "Vice President" },
    { sno: "03", name: "MR. SHAFAQAT ABBAS TARAR", designation: "Secretary" },
    { sno: "04", name: "MR. NADEEM AKHTAR", designation: "Joint Secretary" },
    { sno: "05", name: "MS. NUSRAT PARVEEN", designation: "Additional Secretary" },
    { sno: "06", name: "MS. FARAH HASSAN", designation: "Finance Secretary" },
    { sno: "07", name: "MR. WAJAHAT GHAURI", designation: "Library Secretary" },
    { sno: "08", name: "MS. TALAT RIZWAN", designation: "Auditor" },
  ],
  2023: [
    { sno: "01", name: "MR. TARIQ MAHMOOD BUTT", designation: "President" },
    { sno: "02", name: "MR. ZAHID HUSSAIN SHAH", designation: "Senior Vice President" },
    { sno: "03", name: "MR. KHALID MEHMOOD AWAN", designation: "Vice President" },
    { sno: "04", name: "MR. ASIF IQBAL CHAUDHRY", designation: "Secretary" },
    { sno: "05", name: "MR. IMTIAZ AHMED KHAN", designation: "Joint Secretary" },
    { sno: "06", name: "MS. SAMINA BIBI", designation: "Additional Secretary" },
    { sno: "07", name: "MR. FARHAN RAZA QURESHI", designation: "Finance Secretary" },
    { sno: "08", name: "MR. ATIF SAEED ABBASI", designation: "Library Secretary" },
    { sno: "09", name: "MR. NASEER AHMAD MALIK", designation: "Auditor" },
  ],
  2022: [
    { sno: "01", name: "MR. AMJAD ALI TABASSUM", designation: "President" },
    { sno: "02", name: "MR. SHAHID IQBAL MIRZA", designation: "Senior Vice President" },
    { sno: "03", name: "MR. WAQAR AHMED SIDDIQUI", designation: "Vice President" },
    { sno: "04", name: "MR. ADNAN ZAFAR GONDAL", designation: "Secretary" },
    { sno: "05", name: "MS. RUKHSANA PARVEEN", designation: "Joint Secretary" },
    { sno: "06", name: "MR. ZAFAR IQBAL BAJWA", designation: "Additional Secretary" },
    { sno: "07", name: "MR. NAVEED RASHID CHAUDHRY", designation: "Finance Secretary" },
    { sno: "08", name: "MR. MUBASHAR HASSAN NAQVI", designation: "Library Secretary" },
    { sno: "09", name: "MS. LUBNA AKHTAR", designation: "Auditor" },
  ],
  2021: [
    { sno: "01", name: "MR. SAEED AHMED ZAFAR", designation: "President" },
    { sno: "02", name: "MR. BABAR HUSSAIN TARAR", designation: "Senior Vice President" },
    { sno: "03", name: "MR. MOHSIN ALI RAZA", designation: "Vice President" },
    { sno: "04", name: "MR. JAVED IQBAL HASHMI", designation: "Secretary" },
    { sno: "05", name: "MR. RASHID MEHMOOD KIANI", designation: "Joint Secretary" },
    { sno: "06", name: "MS. SADIA ALTAF", designation: "Additional Secretary" },
    { sno: "07", name: "MR. TANVEER AHMED BUTT", designation: "Finance Secretary" },
    { sno: "08", name: "MR. SHAHZAD MANZOOR", designation: "Library Secretary" },
    { sno: "09", name: "MR. ARSHAD HUSSAIN SHAH", designation: "Auditor" },
  ],
  2020: [
    { sno: "01", name: "MR. RAJA ARSHAD MEHMOOD", designation: "President" },
    { sno: "02", name: "MR. ZULFIQAR ALI BOKHARI", designation: "Senior Vice President" },
    { sno: "03", name: "MS. FARZANA MAQBOOL", designation: "Vice President" },
    { sno: "04", name: "MR. TAHIR IQBAL CHAUDHRY", designation: "Secretary" },
    { sno: "05", name: "MR. USMAN GHANI AWAN", designation: "Joint Secretary" },
    { sno: "06", name: "MR. KAMRAN LATIF MIRZA", designation: "Additional Secretary" },
    { sno: "07", name: "MR. AAMIR SHEHZAD BUTT", designation: "Finance Secretary" },
    { sno: "08", name: "MS. ASIA NAWAZ", designation: "Library Secretary" },
    { sno: "09", name: "MR. SOHAIL AHMED MALIK", designation: "Auditor" },
  ],
  2019: [
    { sno: "01", name: "MR. CHAUDHRY RIZWAN ZAMAN", designation: "President" },
    { sno: "02", name: "MR. FAISAL MEHMOOD GONDAL", designation: "Senior Vice President" },
    { sno: "03", name: "MR. BILAL MUSTAFA AWAN", designation: "Vice President" },
    { sno: "04", name: "MR. RASHID LATIF KHAN", designation: "Secretary" },
    { sno: "05", name: "MR. SARFRAZ AHMED GUJJAR", designation: "Joint Secretary" },
    { sno: "06", name: "MS. NADIA SHAHID", designation: "Additional Secretary" },
    { sno: "07", name: "MR. HASNAIN RAZA QURESHI", designation: "Finance Secretary" },
    { sno: "08", name: "MR. SHAHZAIB AHMED", designation: "Library Secretary" },
    { sno: "09", name: "MS. SHAZIA KARIM", designation: "Auditor" },
  ],
  2018: [
    { sno: "01", name: "MR. QASIM IQBAL CHAUDHRY", designation: "President" },
    { sno: "02", name: "MR. TARIQ NAWAZ MALIK", designation: "Senior Vice President" },
    { sno: "03", name: "MR. ALI RAZA SIDDIQUI", designation: "Vice President" },
    { sno: "04", name: "MR. NASIR MEHMOOD BUTT", designation: "Secretary" },
    { sno: "05", name: "MR. ZUBAIR HASSAN SHAH", designation: "Joint Secretary" },
    { sno: "06", name: "MS. AMNA IJAZ MIRZA", designation: "Additional Secretary" },
    { sno: "07", name: "MR. IRFAN ULLAH KHAN", designation: "Finance Secretary" },
    { sno: "08", name: "MR. OMER FAROOQ ABBASI", designation: "Library Secretary" },
    { sno: "09", name: "MS. RABIA ASHRAF", designation: "Auditor" },
  ],
  2017: [
    { sno: "01", name: "MR. FAYYAZ AHMED AWAN", designation: "President" },
    { sno: "02", name: "MR. HASSAN IQBAL TARAR", designation: "Senior Vice President" },
    { sno: "03", name: "MR. AHMED RAZA NAQVI", designation: "Vice President" },
    { sno: "04", name: "MR. JUNAID IQBAL GILL", designation: "Secretary" },
    { sno: "05", name: "MR. RIAZ AHMED CHAUDHRY", designation: "Joint Secretary" },
    { sno: "06", name: "MS. MARYAM SHAFIQ", designation: "Additional Secretary" },
    { sno: "07", name: "MR. LIAQAT ALI BAJWA", designation: "Finance Secretary" },
    { sno: "08", name: "MR. WASEEM AKRAM KHAN", designation: "Library Secretary" },
    { sno: "09", name: "MR. SHAKEEL AHMED MIRZA", designation: "Auditor" },
  ],
  2016: [
    { sno: "01", name: "MR. ASLAM PERVEZ KHAN", designation: "President" },
    { sno: "02", name: "MR. MIAN AZHAR HUSSAIN", designation: "Senior Vice President" },
    { sno: "03", name: "MS. BUSHRA REHMAN", designation: "Vice President" },
    { sno: "04", name: "MR. KAMRAN BASHIR AWAN", designation: "Secretary" },
    { sno: "05", name: "MR. ABID ULLAH SHAH", designation: "Joint Secretary" },
    { sno: "06", name: "MR. TANVEER IQBAL", designation: "Additional Secretary" },
    { sno: "07", name: "MS. SAIMA SULTAN", designation: "Finance Secretary" },
    { sno: "08", name: "MR. AZHAR MEHMOOD", designation: "Library Secretary" },
    { sno: "09", name: "MR. IHSAN ULLAH KHAN", designation: "Auditor" },
  ],
  2015: [
    { sno: "01", name: "MR. RASHEED AHMED GONDAL", designation: "President" },
    { sno: "02", name: "MR. ARIF HUSSAIN NAQVI", designation: "Senior Vice President" },
    { sno: "03", name: "MR. KHALIQ UR REHMAN", designation: "Vice President" },
    { sno: "04", name: "MR. SAJID ALI BUTT", designation: "Secretary" },
    { sno: "05", name: "MR. OBAID ULLAH MALIK", designation: "Joint Secretary" },
    { sno: "06", name: "MS. UZMA KAUSAR", designation: "Additional Secretary" },
    { sno: "07", name: "MR. JAVED MEHMOOD SATTI", designation: "Finance Secretary" },
    { sno: "08", name: "MR. FAWAD HASSAN QURESHI", designation: "Library Secretary" },
    { sno: "09", name: "MR. NISAR AHMED AWAN", designation: "Auditor" },
  ],
  2014: [
    { sno: "01", name: "MR. GHULAM MUSTAFA CHAUDHRY", designation: "President" },
    { sno: "02", name: "MR. SAJJAD HUSSAIN SHAH", designation: "Senior Vice President" },
    { sno: "03", name: "MR. MUNAWAR ALI AWAN", designation: "Vice President" },
    { sno: "04", name: "MR. TAHIR AHMED MALIK", designation: "Secretary" },
    { sno: "05", name: "MR. ZAHEER UD DIN BABAR", designation: "Joint Secretary" },
    { sno: "06", name: "MS. HINA SHAHID", designation: "Additional Secretary" },
    { sno: "07", name: "MR. DANISH RAZA MIRZA", designation: "Finance Secretary" },
    { sno: "08", name: "MR. NAEEM AKHTAR KHAN", designation: "Library Secretary" },
    { sno: "09", name: "MR. IFTIKHAR HUSSAIN GILL", designation: "Auditor" },
  ],
  2013: [
    { sno: "01", name: "MR. MUHAMMAD SARWAR KHAN", designation: "President" },
    { sno: "02", name: "MR. AMIR HASSAN SIDDIQUI", designation: "Senior Vice President" },
    { sno: "03", name: "MS. FARHAT SULTANA", designation: "Vice President" },
    { sno: "04", name: "MR. IMRAN ULLAH BUTT", designation: "Secretary" },
    { sno: "05", name: "MR. WAQAS AHMED CHAUDHRY", designation: "Joint Secretary" },
    { sno: "06", name: "MR. NAVEED IQBAL AWAN", designation: "Additional Secretary" },
    { sno: "07", name: "MR. HASSAN RAZA NAQVI", designation: "Finance Secretary" },
    { sno: "08", name: "MR. MOHSIN KAMAL BAJWA", designation: "Library Secretary" },
    { sno: "09", name: "MS. RAHAT YAQUB", designation: "Auditor" },
  ],
  2012: [
    { sno: "01", name: "MR. NISAR UL HAQ KHAN", designation: "President" },
    { sno: "02", name: "MR. FAHAD IQBAL MIRZA", designation: "Senior Vice President" },
    { sno: "03", name: "MR. SOHAIL AHMED AWAN", designation: "Vice President" },
    { sno: "04", name: "MR. AMJAD MEHMOOD SATTI", designation: "Secretary" },
    { sno: "05", name: "MR. RANA ZAFAR IQBAL", designation: "Joint Secretary" },
    { sno: "06", name: "MS. SHAISTA JABEEN", designation: "Additional Secretary" },
    { sno: "07", name: "MR. ASAD ULLAH MALIK", designation: "Finance Secretary" },
    { sno: "08", name: "MR. BILAL AHMED GONDAL", designation: "Library Secretary" },
    { sno: "09", name: "MR. SAQIB ALI KHAN", designation: "Auditor" },
  ],
  2011: [
    { sno: "01", name: "MR. SHOUKAT ALI CHAUDHRY", designation: "President" },
    { sno: "02", name: "MR. HABIB UR REHMAN AWAN", designation: "Senior Vice President" },
    { sno: "03", name: "MR. MAZHAR IQBAL BUTT", designation: "Vice President" },
    { sno: "04", name: "MR. SULTAN MEHMOOD KHAN", designation: "Secretary" },
    { sno: "05", name: "MR. SHAFIQ AHMED TARAR", designation: "Joint Secretary" },
    { sno: "06", name: "MS. PARVEEN AKHTAR", designation: "Additional Secretary" },
    { sno: "07", name: "MR. FAISAL LATIF BAJWA", designation: "Finance Secretary" },
    { sno: "08", name: "MR. TARIQ MEHMOOD NAQVI", designation: "Library Secretary" },
    { sno: "09", name: "MR. RIAZ UD DIN SHAH", designation: "Auditor" },
  ],
};

const years = Array.from({ length: 14 }, (_, i) => 2024 - i); // 2024 down to 2011

const cellStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "clamp(13px, 1.6vw, 20px)",
  lineHeight: "124%",
  letterSpacing: "-0.04em",
  color: "#1E1E1E",
};

const headerStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "clamp(14px, 2vw, 22px)",
  lineHeight: "124%",
  letterSpacing: "-0.04em",
  color: "#1E1E1E",
  fontWeight: "500",
};

export default function FormerCabinet() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const members = cabinetData[selectedYear] || [];

  return (
    <>
      {/* ── Section 1: Hero (unchanged) ───────────────────────────────────── */}
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
              {selectedYear}-02-24
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Filter + Table ─────────────────────────────────────── */}
      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10 sm:py-16">

        {/* Year Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14 max-w-3xl">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className="dmsans px-4 py-2 rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
              style={{
                fontSize: "clamp(13px, 1.4vw, 16px)",
                fontWeight: "500",
                border: selectedYear === year ? "none" : "1px solid #CCCCCC",
                backgroundColor: selectedYear === year ? "#143D2B" : "#F5F5F5",
                color: selectedYear === year ? "#FFFFFF" : "#1E1E1E",
              }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Table Title */}
        <h1
          className="text-center mb-8 sm:mb-12"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: "clamp(28px, 4vw, 56px)",
            lineHeight: "95%",
            letterSpacing: "-0.04em",
            color: "#1E1E1E",
            maxWidth: "800px",
          }}
        >
          Cabinet Members — {selectedYear}
        </h1>

        {/* Outer Gray Card */}
        <div
          className="w-full max-w-4xl p-3"
          style={{ backgroundColor: "#EEEEEE", borderRadius: "20px" }}
        >
          {/* Header Row */}
          <div
            className="grid w-full px-4 sm:px-6 py-3 sm:py-4"
            style={{ gridTemplateColumns: "1fr 3fr 3fr", gap: "1rem" }}
          >
            {["S.NO", "NAME", "DESIGNATION"].map((header) => (
              <span key={header} style={headerStyle}>
                {header}
              </span>
            ))}
          </div>

          {/* Data Rows */}
          <div className="flex flex-col gap-1">
            {members.map((member, index) => {
              const isWhiteRow = index % 2 === 0;
              return (
                <div
                  key={member.sno}
                  className="grid w-full px-4 sm:px-6 py-3 sm:py-4"
                  style={{
                    gridTemplateColumns: "1fr 3fr 3fr",
                    gap: "1rem",
                    alignItems: "start",
                    backgroundColor: isWhiteRow ? "#FFFFFF" : "transparent",
                    borderRadius: isWhiteRow ? "14px" : "0",
                  }}
                >
                  <span style={cellStyle}>{member.sno}</span>
                  <span style={cellStyle}>{member.name}</span>
                  <span style={cellStyle}>{member.designation}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/*
      ── OLD DESIGN (commented out) ───────────────────────────────────────────

      const bearers = [
        { name: "MR. RIASAT ALI AZAD", designation: "Advocate", post: "President", image: "/former1.png", slug: "Riasat-Ali-Azad" },
        { name: "MR. MUJAHID ISLAM ASIF", designation: "Advocate", post: "Vice President", image: "/former2.png", slug: "Mujahid-Islam-Asif" },
        { name: "MR. SHAFAQAT ABBAS TARAR", designation: "Advocate", post: "Secretary", image: "/former3.png", slug: "Shafaqat-Abbas-Tarar" },
        { name: "MR. NADEEM AKHTAR", designation: "Advocate", post: "Joint Secretary", image: "/former4.png", slug: "Nadeem-Akhtar" },
        { name: "MS. NUSRAT PARVEEN", designation: "Advocate", post: "Additional Secretary", image: "/former5.png", slug: "Nusrat-Parveen" },
        { name: "MS. FARAH HASSAN", designation: "Advocate", post: "Finance Secretary", image: "/former6.png", slug: "Farah-Hassan" },
        { name: "MR. WAJAHAT GHAURI", designation: "Advocate", post: "Library Secretary", image: "/former7.png", slug: "Wajahat-Ghauri" },
        { name: "MS. TALAT RIZWAN", designation: "Auditor", post: "Bukhari Advocate", image: "/former8.png", slug: "Talat-Rizwan" },
      ];

      <section className="w-full overflow-hidden mt-5">
        <div className="px-6 md:px-12 py-10 md:py-14">
          <div className="overflow-visible">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
              {bearers.map((bearer, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105">
                  <div className="relative w-full aspect-[3/4]">
                    <Image src={bearer.image} alt={bearer.name} fill className="object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
                      <div className="flex flex-col gap-1">
                        <p className="basker text-white text-sm md:text-lg leading-tight">{bearer.name}</p>
                        <p className="dmsans text-white text-xs md:text-base opacity-80">{bearer.designation}</p>
                        <p className="dmsans text-white text-xs md:text-base opacity-80">{bearer.post}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      ── END OLD DESIGN ───────────────────────────────────────────────────── */}
    </>
  );
}
