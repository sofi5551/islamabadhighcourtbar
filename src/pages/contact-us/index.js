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
            src="/contact-us.png"
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
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-6 flex justify-center">
        <div
          className="w-full max-w-2xl px-10 py-10"
          style={{ backgroundColor: "#F7F7F7", borderRadius: "20px" }}
        >
          {/* Name */}
          <div className="mb-5">
            <label
              className="dmsans flex items-center gap-2 mb-2"
              style={{
                fontSize: "16.45px",
                lineHeight: "21.9px",
                letterSpacing: "0",
              }}
            >
              <span>•</span> Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="dmsans w-full bg-white border-0 outline-none px-4 py-3 rounded-lg"
              style={{
                fontSize: "19.2px",
                lineHeight: "32.9px",
                letterSpacing: "0",
                color: "#1E1E1E",
                backgroundColor: "#F7F7F7",
                border: "1px solid #E5E5E5",
              }}
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              className="dmsans flex items-center gap-2 mb-2"
              style={{
                fontSize: "16.45px",
                lineHeight: "21.9px",
                letterSpacing: "0",
              }}
            >
              <span>•</span> Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="dmsans w-full bg-white border-0 outline-none px-4 py-3 rounded-lg"
              style={{
                fontSize: "19.2px",
                lineHeight: "32.9px",
                letterSpacing: "0",
                color: "#1E1E1E",
                backgroundColor: "#F7F7F7",
                border: "1px solid #E5E5E5",
              }}
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              className="dmsans flex items-center gap-2 mb-2"
              style={{
                fontSize: "16.45px",
                lineHeight: "21.9px",
                letterSpacing: "0",
              }}
            >
              <span>•</span> Message
            </label>
            <textarea
              placeholder="Message goes in here..."
              rows={5}
              className="dmsans w-full bg-white border-0 outline-none px-4 py-3 rounded-lg resize-none"
              style={{
                fontSize: "19.2px",
                lineHeight: "32.9px",
                letterSpacing: "0",
                color: "#1E1E1E",
                backgroundColor: "#F7F7F7",
                border: "1px solid #1E1E1E",
              }}
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3 mb-6">
            <input
              type="checkbox"
              id="privacy"
              className="w-4 h-4 rounded"
              style={{ accentColor: "#143D2B" }}
            />
            <label
              htmlFor="privacy"
              className="dmsans"
              style={{
                fontSize: "16.45px",
                lineHeight: "21.9px",
                letterSpacing: "0",
              }}
            >
              I agree to{" "}
              <Link href="/privacy-policy" className="underline hover:opacity-70">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline hover:opacity-70">
                Term of Conditions
              </Link>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="dmsans w-full text-white rounded-full py-3"
            style={{
              backgroundColor: "#000000",
              fontSize: "19.2px",
              lineHeight: "32.9px",
              letterSpacing: "0",
            }}
          >
            Submit
          </button>

          {/* Below button text */}
          <p
            className="dmsans text-center mt-3"
            style={{
              fontSize: "16.45px",
              lineHeight: "21.9px",
              letterSpacing: "0",
            }}
          >
            *This is an additional with a direct link example.
          </p>
        </div>
      </section>

      {/* Map + Contact Info */}
      <section className="w-full py-6 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-6">

          {/* Map */}
          <div className="w-full sm:w-1/2 overflow-hidden rounded-2xl" style={{ minHeight: "300px" }}>
            <iframe
              className="w-full h-full"
              style={{ minHeight: "300px", border: 0 }}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=islamabad high court bar association &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>

          {/* Contact Details */}
          <div className="w-full sm:w-1/2 flex flex-col gap-6 justify-center">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: "#E9ECED", borderRadius: "133.08px", width: "56px", height: "56px" }}
              >
                <Image src="/envelop-logo.png" alt="Email" width={24} height={24} className="object-contain" />
              </div>
              <div>
                <p
                  className="dmsans font-semibold"
                  style={{ fontSize: "clamp(18px, 2.5vw, 24.2px)", lineHeight: "43px", letterSpacing: "-0.02em", color: "#000000" }}
                >
                  Email
                </p>
                <p
                  className="dmsans text-gray-700"
                  style={{ fontSize: "clamp(14px, 2vw, 18.82px)", lineHeight: "21.5px", letterSpacing: "0" }}
                >
                  info@ihcba.org.pk
                </p>
                <a
                  href="mailto:info@ihcba.org.pk"
                  className="dmsans mt-2 inline-block border border-gray-300 rounded-full px-4 py-1 text-gray-800 hover:bg-gray-100 transition-colors"
                  style={{ fontSize: "clamp(12px, 1.5vw, 16.13px)", lineHeight: "21.5px", letterSpacing: "0" }}
                >
                  CONTACT
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: "#E9ECED", borderRadius: "133.08px", width: "56px", height: "56px" }}
              >
                <Image src="/phone-logo.png" alt="Phone" width={24} height={24} className="object-contain" />
              </div>
              <div>
                <p
                  className="dmsans font-semibold"
                  style={{ fontSize: "clamp(18px, 2.5vw, 24.2px)", lineHeight: "43px", letterSpacing: "-0.02em", color: "#000000" }}
                >
                  Phone
                </p>
                <p
                  className="dmsans text-gray-700"
                  style={{ fontSize: "clamp(14px, 2vw, 18.82px)", lineHeight: "21.5px", letterSpacing: "0" }}
                >
                  0519218058
                </p>
                <a
                  href="tel:0519218058"
                  className="dmsans mt-2 inline-block border border-gray-300 rounded-full px-4 py-1 text-gray-800 hover:bg-gray-100 transition-colors"
                  style={{ fontSize: "clamp(12px, 1.5vw, 16.13px)", lineHeight: "21.5px", letterSpacing: "0" }}
                >
                  CALL
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: "#E9ECED", borderRadius: "133.08px", width: "56px", height: "56px" }}
              >
                <Image src="/location-logo.png" alt="Address" width={24} height={24} className="object-contain" />
              </div>
              <div>
                <p
                  className="dmsans font-semibold"
                  style={{ fontSize: "clamp(18px, 2.5vw, 24.2px)", lineHeight: "43px", letterSpacing: "-0.02em", color: "#000000" }}
                >
                  Address
                </p>
                <p
                  className="dmsans text-gray-700"
                  style={{ fontSize: "clamp(14px, 2vw, 18.82px)", lineHeight: "21.5px", letterSpacing: "0" }}
                >
                  Islamabad High Court Bar Association,<br />Constitution Avenue, G-5/1, Islamabad
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Islamabad+High+Court+Bar+Association,+Constitution+Avenue,+G-5/1,+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dmsans mt-2 inline-block border border-gray-300 rounded-full px-4 py-1 text-gray-800 hover:bg-gray-100 transition-colors"
                  style={{ fontSize: "clamp(12px, 1.5vw, 16.13px)", lineHeight: "21.5px", letterSpacing: "0" }}
                >
                  LOCATION
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
