import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isPrivacyPolicy = router.pathname === "/privacy-policy";
  const isNewsUpdates = router.pathname === "/news-updates";
  const navLinks = [
    {
      label: "About",
      href: "#",
      dropdown: [
        { label: "President Message", href: "/president-message" },
        { label: "Secretary Message", href: "/secretary-message" },
        {
          label: "Important Links",
          href: "/important-links",
        },
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
        },
      ],
    },
    {
      label: "Office Bearers",
      href: "#",
      dropdown: [
        { label: "Current Cabinet", href: "/current-cabinet" },
        { label: "Former Cabinet", href: "/former-cabinet" },
        {
          label: "Current Committees",
          href: "/current-committees",
        },
        {
          label: "Current Administration",
          href: "/current-administration",
        },
      ],
    },
    { label: "Search Lawyers", href: "/search-lawyers" },
    { label: "Gallery", href: "/photo-gallery" },
    { label: "Blogs", href: "/blogs" },
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
    { label: "News 1", href: "#" },
    { label: "News 12", href: "#" },
    { label: "News 14", href: "#" },
    { label: "News 13", href: "#" },
    { label: "News 14", href: "#" },
  ];

  return (
    <div
      className={`${isPrivacyPolicy || isNewsUpdates ? "bg-[#C9C9C9]" : ""}`}
      style={{
        maxWidth: "1351px",
        margin: "0 auto", // centers horizontally
        width: "100%", // ensures it stretches up to maxWidth
      }}
    >
      <div className={`min-h-screen flex flex-col mx-3 py-3`}>
        {/* ─── NAVBAR ─── */}
        <header className="fixed top-0 left-0 right-0 z-50 px-10 md:px-20 pt-7">
          <nav className="bg-white rounded-full px-4 py-2 flex items-center justify-between shadow-md">
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
            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className="dmsans16 text-black hover:text-green-700 transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg py-2 min-w-[220px] border border-gray-100">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-5 py-2.5 text-sm text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-colors whitespace-nowrap"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side: Call icon + text */}
            <a
              href="tel:0519218058"
              className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity"
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
              className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
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
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl mt-2 px-6 py-4 shadow-lg">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.dropdown ? (
                      <div className="flex flex-col gap-2">
                        <span className="text-sm text-gray-700 font-medium">
                          {link.label}
                        </span>
                        <div className="flex flex-col gap-2 pl-4 border-l-2 border-green-700">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="text-sm text-gray-500 hover:text-green-700 transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
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
