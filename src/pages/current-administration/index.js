import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
const employees = [
  {
    sno: "01",
    name: "Qazi Rashid Ahmad",
    cellNumber: "0300-5277265",
    designation: "Incharge",
  },
  {
    sno: "02",
    name: "Hassan Akhtar",
    cellNumber: "0320-8572794",
    designation: "Computer Operator",
  },
  {
    sno: "03",
    name: "Mubashir Hashmi",
    cellNumber: "0333-5126666",
    designation: "Librarian",
  },
  {
    sno: "04",
    name: "M. Imran Abbasi",
    cellNumber: "0343-1210022\n0301-5502710",
    designation: "Library Attendant",
  },
  {
    sno: "05",
    name: "Zahid Akhtar",
    cellNumber: "0343-8346663\n0310-5058004",
    designation: "Bar Attendant / Receipt Welfare Fund in Institution Branch",
  },
  {
    sno: "06",
    name: "Muhammad Tariq",
    cellNumber: "0300-9182834\n0333-5723420",
    designation: "OFFICE BOY/Bar Attendant",
  },
  {
    sno: "07",
    name: "Qamar Abbas",
    cellNumber: "0333-5984055",
    designation:
      "Bar Attendant/Books are taken from the parking lot to the Court",
  },
  {
    sno: "08",
    name: "Muhammad Rizwan",
    cellNumber: "0333-5633336",
    designation: "Library Assistant",
  },
  {
    sno: "09",
    name: "Raja Khalid Mehmood",
    cellNumber: "0316-5773007",
    designation: "Driver",
  },
  {
    sno: "10",
    name: "Babar Masih",
    cellNumber: "0341-0001831",
    designation: "Driver",
  },
  {
    sno: "11",
    name: "Asif Masih",
    cellNumber: "0343-1522405",
    designation: "Sweeper/Jointer",
  },
];
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
            src="/current-administration.png"
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
              Current
              <br /> Administration
            </h1>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10 sm:py-16">
        {/* Title */}
        <h1
          className="text-center mb-8 sm:mb-12"
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            lineHeight: "95%",
            letterSpacing: "-0.04em",
            color: "#1E1E1E",
            maxWidth: "900px",
          }}
        >
          List of Islamabad High Court Bar Employees and Their Detail
        </h1>

        {/* Outer Gray Card */}
        <div
          className="w-full max-w-5xl p-3"
          style={{
            backgroundColor: "#EEEEEE",
            borderRadius: "20px",
            boxShadow: "none",
          }}
        >
          {/* Header Row — sits on gray background, no white pill */}
          <div
            className="grid w-full px-4 sm:px-6 py-3 sm:py-4"
            style={{
              gridTemplateColumns: "1fr 2fr 2fr 2.5fr", // Equal grid column proportions
              gap: "1rem", // Ensures equal margin between columns
            }}
          >
            {["S.NO", "NAME", "CELL NUMBER", "DESIGNATION"].map((header) => (
              <span key={header} style={headerStyle}>
                {header}
              </span>
            ))}
          </div>

          {/* Data Rows — alternating white pill vs transparent */}
          <div className="flex flex-col gap-1">
            {employees.map((employee, index) => {
              const isWhiteRow = index % 2 === 0; // 0,2,4... = white; 1,3,5... = transparent
              return (
                <div
                  key={employee.sno}
                  className="grid w-full px-4 sm:px-6 py-3 sm:py-4"
                  style={{
                    gridTemplateColumns: "1fr 2fr 2fr 2.5fr", // Ensuring consistent column proportions
                    gap: "1rem", // Ensures equal margin between columns
                    alignItems: "start",
                    backgroundColor: isWhiteRow ? "#FFFFFF" : "transparent",
                    borderRadius: isWhiteRow ? "14px" : "0",
                  }}
                >
                  {/* S.NO */}
                  <span style={cellStyle}>{employee.sno}</span>

                  {/* NAME */}
                  <span style={cellStyle}>{employee.name}</span>

                  {/* CELL NUMBER — supports multi-line via \n */}
                  <span style={{ ...cellStyle, whiteSpace: "pre-line" }}>
                    {employee.cellNumber}
                  </span>

                  {/* DESIGNATION */}
                  <span style={cellStyle}>{employee.designation}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
