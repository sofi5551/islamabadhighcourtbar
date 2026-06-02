import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isPrivacyPolicy = router.pathname === "/privacy-policy";
  const navLinks = [
    {
      label: "About",
      href: "#",
      dropdown: [
        { label: "President Message", href: "/president-message" },
        { label: "Secretary Message", href: "/secretary-message" },

        // {
        //   label: "Important Links",
        //   href: "/important-links",
        // },
        // {
        //   label: "Privacy Policy",
        //   href: "/privacy-policy",
        // },
      ],
    },
    {
      label: "Office Bearers",
      href: "#",
      dropdown: [
        { label: "Former Presidents", href: "/former-presidents" },
        { label: "Former Secretaries", href: "/former-secretaries" },
        { label: "Current Cabinet", href: "/current-cabinet" },
        { label: "Former Cabinet", href: "/former-cabinet" },
        // { label: "Current Committees", href: "/current-committees" },
        {
          label: "Administrative Officer",
          href: "/administrative-officer-message",
        },
        { label: "Current Administration", href: "/current-administration" },
      ],
    },
    {
      label: "Case Management",
      href: "#",
      dropdown: [
        {
          label: "Cause List",
          href: "https://mis.ihc.gov.pk/frmCausLst",
          newTab: true,
        },
        {
          label: "Case Status / Case Search",
          href: "https://mis.ihc.gov.pk/frmCseSrch",
          newTab: true,
        },
        {
          label: "Objection Cancellation",
          href: "https://mis.ihc.gov.pk/frmObjctn",
          newTab: true,
        },
        {
          label: "e-Dairy Tracker",
          href: "https://mis.ihc.gov.pk/frmDrSrch",
          newTab: true,
        },
      ],
    },
    {
      label: "Download Forms",
      href: "#",
      dropdown: [
        {
          label: "Asset Declaration Proforma",
          href: "/download forms/Performa_of_Assets_Form________________638234630653033343.pdf",
          download: true,
        },
        {
          label: "Proforma of Particulars (Person Details)",
          href: "/download forms/Particulars Proforma638016908142565528.pdf",
          download: true,
        },
        {
          label: "Lawyer's Registration Form",
          href: "/download forms/Lawyer_Registration_Form_635841410078291888.doc",
          download: true,
        },
        {
          label: "Talbana",
          href: "/download forms/Fard_Talbana______________637467664639550059.pdf",
          download: true,
        },
        {
          label: "Proforma for E-Court Facility",
          href: "/download forms/Proforma_for_E-Court_Facility________________.pdf",
          download: true,
        },
        {
          label: "Opening Sheet for Civil Appeals / Revisions",
          href: "/download forms/Opening_Sheet_for_Civil_Appeals_________________637402670721907442.pdf",
          download: true,
        },
        {
          label: "Opening Sheet For Criminal Appeals / Revision Cs.",
          href: "/download forms/Opening_Sheet_for_Criminal_Appeals______________637402685946442183.pdf",
          download: true,
        },
        {
          label: "Template of Power of Attorney (Wakalatname)",
          href: "/download forms/WAKALATNAME_Format_Urdu_________________637539126779316585.pdf",
          download: true,
        },
        {
          label: "Urgent Proforma",
          href: "/download forms/Urgent_Form636907575590538498.pdf",
          download: true,
        },
        {
          label: "Institution Proforma",
          href: "/download forms/Instituon_Performa636907599321924180.pdf",
          download: true,
        },
        {
          label: "Record / File Inspection Form",
          href: "/download forms/Inspect_Record_Performa636336485735613457.pdf",
          download: true,
        },
        {
          label: "Two Surety Bond",
          href: "/download forms/Dual Surety Bond636257826215835552.doc",
          download: true,
        },
        {
          label: "One Surety Bond",
          href: "/download forms/Single Surety Bond636257825022433456.doc",
          download: true,
        },
        {
          label: "Personal Surety Bond",
          href: "/download forms/Personal Bond636257823302686436.doc",
          download: true,
        },
        {
          label: "Defense Counsel Fee Form",
          href: "/download forms/Advocates fee bill636257828336971278.docx",
          download: true,
        },
        {
          label: "Complaint Form",
          href: "/download forms/ComplainForm636194770479478077.pdf",
          download: true,
        },
        {
          label: "Application Form For Grant Of Fitness Certificate",
          href: "/download forms/Fitness Certificate635979578518035797.docx",
          download: true,
        },
        {
          label: "Copy Petition Form",
          href: "/download forms/Copy_Petition_Proforma_Sample_______.pdf",
          download: true,
        },
        {
          label: "Application of Cases List for Lawyers",
          href: "/download forms/Application_for_cases_list_.pdf",
          download: true,
        },
      ],
    },
    // { label: "Search Lawyers", href: "/search-lawyers" },
    { label: "News & Updates", href: "/news-updates" },
    { label: "Contact", href: "/contact-us" },
  ];

  const usefulLinks = [
    {
      label: "KP Bar Council",
      href: "https://www.kpbarcouncil.com/site/index",
    },
    { label: "Pakistan Bar Council", href: "https://pakistanbarcouncil.org/" },
    { label: "Punjab Bar Council", href: "https://pbbarcouncil.com/" },
    { label: "Sindh Bar Council", href: "https://sindhbarcouncil.org/" },
    { label: "Balochistan Bar Council", href: "https://bbcq.org.pk/" },
  ];

  const latestNews = [
    { label: "Directory Form", href: "/news-updates/directory-form" },
    {
      label: "Notice For Directory",
      href: "/news-updates/notice-for-directory",
    },
    { label: "Annual Dues IHCBA", href: "/news-updates/annual-dues-ihcba" },
    { label: "Cabinet IHCBA", href: "/news-updates/cabinet-ihcba" },
    { label: "Final Notice Dues", href: "/news-updates/final-notice-dues" },
  ];

  return (
    <div
      className={`${isPrivacyPolicy ? "bg-[#C9C9C9]" : ""}`}
      style={{
        maxWidth: "1708px",
        margin: "0 auto", // centers horizontally
        width: "100%", // ensures it stretches up to maxWidth
      }}
    >
      <div className={`min-h-screen flex flex-col mx-3 py-3`}>
        {/* ─── NAVBAR ─── */}
        <header className="fixed top-0 left-0 right-0 z-50 px-10 md:px-20 pt-7">
          <nav
            className="bg-white rounded-full px-4 py-2 flex items-center justify-between shadow-md"
            style={{
              maxWidth: "1191px",
              margin: "0 auto", // centers horizontally
              width: "100%", // ensures it stretches up to maxWidth
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="IHCBA Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="logo-font leading-tight hidden sm:block">
                <p className="uppercase tracking-wide">Islamabad High Court</p>
                <p className="uppercase tracking-wide">Bar Association</p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden navbar:flex items-center gap-3">
              {navLinks.map((link) => (
                <li key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className="dmsans14 text-black hover:text-green-700 transition-colors duration-200 whitespace-nowrap flex items-center gap-1"
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="transition-transform duration-200 group-hover:rotate-180"
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="nav-dropdown-scroll bg-white rounded-xl shadow-lg py-2 min-w-[220px] border border-gray-100 max-h-80 overflow-y-auto">
                        {link.dropdown.map((item) =>
                          item.download ? (
                            <a
                              key={item.label}
                              href={item.href}
                              download
                              className="block px-5 py-2.5 text-sm text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <Link
                              key={item.label}
                              href={item.href}
                              target={item.newTab ? "_blank" : undefined}
                              rel={
                                item.newTab ? "noopener noreferrer" : undefined
                              }
                              className="block px-5 py-2.5 text-sm text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
                            >
                              {item.label}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side: Call icon + text */}
            <a
              href="tel:0519218058"
              className="hidden navbar:flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Image
                src="/call-logo.svg"
                alt="Call"
                width={32}
                height={32}
                className="object-contain"
              />
              <div className="leading-tight">
                <p className="number2-font text-gray-400 uppercase tracking-wider">
                  Call Us For Query
                </p>
                <p className="number-font text-black tracking-wide">
                  0519218058
                </p>
              </div>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="navbar:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-green-800 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-green-800 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-green-800 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          <div
            className={`navbar:hidden transition-all duration-300 ${
              menuOpen ? "opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="nav-dropdown-scroll bg-white rounded-2xl mt-2 px-6 py-4 shadow-lg max-h-[80vh] overflow-y-auto">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.dropdown ? (
                      <div className="flex flex-col gap-2">
                        <span className="text-sm text-gray-700 font-medium">
                          {link.label}
                        </span>
                        <div className="nav-dropdown-scroll flex flex-col gap-2 pl-4 border-l-2 border-green-700 max-h-60 overflow-y-auto">
                          {link.dropdown.map((item) =>
                            item.download ? (
                              <a
                                key={item.label}
                                href={item.href}
                                download
                                className="text-sm text-gray-500 hover:text-green-700 transition-colors"
                                onClick={() => setMenuOpen(false)}
                              >
                                {item.label}
                              </a>
                            ) : (
                              <Link
                                key={item.label}
                                href={item.href}
                                target={item.newTab ? "_blank" : undefined}
                                rel={
                                  item.newTab
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="text-sm text-gray-500 hover:text-green-700 transition-colors"
                                onClick={() => setMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-700 hover:text-green-700 font-medium transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <a
                href="tel:0519218058"
                className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/call-logo.png"
                  alt="Call"
                  width={28}
                  height={28}
                  className="object-contain"
                />
                <span className="text-sm font-bold text-gray-800">
                  0519218058
                </span>
              </a>
            </div>
          </div>
        </header>

        {/* ─── PAGE CONTENT ─── */}
        <main className="flex-1">{children}</main>

        {/* ─── FOOTER ─── */}
        <footer
          className="text-white rounded-2xl"
          style={{ backgroundColor: "#143D2B" }}
        >
          <div className="max-w-7xl mx-auto px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Col 1: Logo + Tagline */}
              <div className="flex flex-col gap-4">
                <Image
                  src="/logo-white.jpeg"
                  alt="IHCBA Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
                <p className="basker20 leading-snug">
                  15 Years Of
                  <br />
                  Excellence
                </p>
              </div>

              {/* Col 2: Useful Links */}
              <div>
                <p
                  className="dmsans15 uppercase tracking-widest mb-4"
                  style={{ color: "#C9C9C9" }}
                >
                  Useful Links
                </p>
                <ul className="dmsans16 flex flex-col gap-2.5">
                  {usefulLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-70 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Latest News */}
              <div>
                <p
                  className="dmsans15  uppercase tracking-widest mb-4"
                  style={{ color: "#C9C9C9" }}
                >
                  Latest News
                </p>
                <ul className="dmsans16 flex flex-col gap-2.5">
                  {latestNews.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="text-white hover:opacity-70 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 4: Contact Info */}
              <div>
                <p
                  className="dmsans15 uppercase tracking-widest mb-4"
                  style={{ color: "#C9C9C9" }}
                >
                  Address
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Islamabad+High+Court+Bar+Association,+Constitution+Avenue,+G-5/1,+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dmsans16 leading-relaxed mb-4 text-white block hover:opacity-70 transition-opacity"
                >
                  Islamabad High Court Bar Association, Constitution Avenue,
                  G-5/1, Islamabad
                </a>

                <p
                  className="dmsans15 uppercase tracking-widest mb-1"
                  style={{ color: "#C9C9C9" }}
                >
                  Phone
                </p>
                <a
                  href="tel:0519218058"
                  className="dmsans16 mb-4 text-white block hover:opacity-70 transition-opacity"
                >
                  0519218058
                </a>

                <p
                  className="dmsans15 uppercase tracking-widest mb-1"
                  style={{ color: "#C9C9C9" }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@ihcba.org.pk"
                  className="dmsans16 text-white hover:opacity-70 transition-opacity"
                >
                  info@ihcba.org.pk
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 pt-5 border-t border-green-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="dmsans16">Copyright 2026</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/p/Islamabad-High-Court-Bar-Association-61575651516459/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/facebook-logo.png"
                    alt="Facebook"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://www.instagram.com/explore/locations/352310015116376/islamabad-high-court-bar-association/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/insta-logo.png"
                    alt="Instagram"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/ihcba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/linkdin-logo.png"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
