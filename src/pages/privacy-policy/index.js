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
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="w-full py-6">
        <div className="bg-white px-15 py-10" style={{ borderRadius: "20px" }}>
          {/* General Provisions */}
          <h2
            className="basker mb-4"
            style={{
              fontSize: "24px",
              lineHeight: "95%",
              letterSpacing: "-0.04em",
            }}
          >
            General Provisions
          </h2>
          <ul className="list-disc pl-6 flex flex-col gap-3 ms-3">
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              All information you have uploaded for public in your profile at
              our website will be considered as public information and we ensure
              your privacy. Private information will not be released without
              your consent. Your personal information (Account details e.g your
              passwords, details you have already mark as hidden in your
              profile, bank account details and CNIC etc.) remains safe in our
              data base.
            </li>
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              We may collect various pieces of information if you seek to place
              an order for Upgradation of your account or premium placement with
              us on the Site.
            </li>
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              We collect, store and process your data for processing your
              purchase on the Site and any possible later claims, and to provide
              you with our services.
            </li>
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              We will use the information you provide for your profile to enable
              us to process your orders and to provide you with the services and
              information offered through our website and which you request.
            </li>
          </ul>

          {/* Third Party Links */}
          <h2
            className="basker mt-8 mb-4"
            style={{
              fontSize: "24px",
              lineHeight: "95%",
              letterSpacing: "-0.04em",
            }}
          >
            Third Party Links:
          </h2>
          <ul className="list-disc pl-6 flex flex-col gap-3 ms-3">
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              We may pass your name and address on to a third party in order to
              make delivery of the product to you (for example to our payment
              processor etc). You must only submit to us the Site information
              which is accurate and not misleading and you must keep it up to
              date and inform us of changes (addresses, emails, phone number).
            </li>
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              We may also pass info to our agency which does marketing research
              for us and to service development to cater your near future needs.
            </li>
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              We may Cross check the data provided by you with the third party
              for the authenticity of the data.
            </li>
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              Other than as set out in this Privacy Policy, we shall NOT sell or
              disclose your personal data to third parties without obtaining
              your prior consent unless this is necessary for the purposes set
              out in this Privacy Policy or unless we are required to do so by
              law.
            </li>
          </ul>

          {/* Other Uses of Information */}
          <h2
            className="basker mt-8 mb-4"
            style={{
              fontSize: "24px",
              lineHeight: "95%",
              letterSpacing: "-0.04em",
            }}
          >
            Other Uses of Information:
          </h2>
          <ul className="list-disc pl-6 flex flex-col gap-3 ms-3">
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              Your information may be used for the purpose of research eg.
              Measuring clients satisfaction, new trends followed by clients
              etc. Only statistics will be used, which is not obligatory you can
              disqualify from it anytime you want. Your email will only be
              disclosed if you take part in competitions.
            </li>
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              We may send you emails regarding updates on promotions, new
              arrivals, newsletter etc. all related to our company and services,
              however you have an option to unsubscribe to it.
            </li>
          </ul>

          {/* Security */}
          <h2
            className="basker mt-8 mb-4"
            style={{
              fontSize: "24px",
              lineHeight: "95%",
              letterSpacing: "-0.04em",
            }}
          >
            Security:
          </h2>
          <ul className="list-disc pl-6 flex flex-col gap-3 ms-3">
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              We collect your personal details on a secure server. We use
              firewalls on our servers. Our security procedures mean that we may
              occasionally request proof of identity before we disclose personal
              information to you. You are responsible for protecting against
              unauthorized access to your password and to your computer.
            </li>
          </ul>

          {/* Your Rights */}
          <h2
            className="basker mt-8 mb-4"
            style={{
              fontSize: "24px",
              lineHeight: "95%",
              letterSpacing: "-0.04em",
            }}
          >
            Your Rights:
          </h2>
          <ul className="list-disc pl-6 flex flex-col gap-3 ms-3">
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              If you are concerned about your data you have the right not to put
              such data in your public profile or hide the entered data.
            </li>
            <li
              className="dmsans"
              style={{
                fontSize: "20px",
                lineHeight: "124%",
                letterSpacing: "-0.04em",
              }}
            >
              You have the right to require us to correct any inaccuracies in
              your data free of charge.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
