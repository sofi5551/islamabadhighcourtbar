import Image from "next/image";
import { useState, useRef, useEffect } from "react";
const blogs = [
  {
    id: 1,
    image: "/blog1.png",
    date: "Dated 29th April, 2025",
    title:
      "The contractor assured that the ongoing project, including the Library, Bar Office, Bar Room, President Office, Secretary Office, Committee Room, and Parking will be completed by July 31, 2025",
    paragraph:
      "The contractor assured that the ongoing project, including the Library, Bar Office, Bar Room, President Office, Secretary Office, Committee Room, and Parking will be completed by July 31, 2025. The association has been closely monitoring the progress and all stakeholders have been informed of the timeline. Members are encouraged to remain patient as the facilities are brought to completion.",
  },
  {
    id: 2,
    image: "/blog1.png",
    date: "Dated 29th April, 2025",
    title: "Mobahisa",
    paragraph:
      'A debate competition on resolution topic "صاف کتاب" was held at the Islamabad High Court Bar Association premises. The event saw enthusiastic participation from members and young advocates. The competition aimed to encourage critical thinking and public speaking skills among the legal fraternity.',
  },
  {
    id: 3,
    image: "/blog1.png",
    date: "Dated 29th April, 2025",
    title: "Front Page",
    paragraph:
      "Front Page news coverage of the Islamabad High Court Bar Association's latest activities.",
  },
];

const COLLAPSED_HEIGHT = 120; // px — fixed content area height for all cards

function BlogCard({ blog }) {
  const [expanded, setExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const [remainingForPara, setRemainingForPara] = useState(0);
  const [titleLineClamp, setTitleLineClamp] = useState(undefined);

  const dateRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const calculate = () => {
      if (!dateRef.current || !titleRef.current) return;

      const dateH = dateRef.current.offsetHeight + 8; // 8px = mb-2
      const titleMargin = 6; // marginBottom on title

      // Title line height in px (112% of font size)
      const titleFontSize = parseFloat(
        getComputedStyle(titleRef.current).fontSize,
      );
      const titleLineH = titleFontSize * 1.12;

      const titleFullH = titleRef.current.scrollHeight; // natural full height
      const spaceForTitle = COLLAPSED_HEIGHT - dateH - titleMargin;

      // Max lines title is allowed before it must ellipse
      const maxTitleLines = Math.floor(spaceForTitle / titleLineH);
      const clampedTitleH = maxTitleLines * titleLineH;

      // Does title need clamping?
      const titleOverflows = titleFullH > spaceForTitle;

      // Set clamp — if title overflows use maxTitleLines, else let it be natural
      setTitleLineClamp(titleOverflows ? maxTitleLines : undefined);

      // Remaining space after title (clamped or natural)
      const actualTitleH = titleOverflows ? clampedTitleH : titleFullH;
      const remaining = COLLAPSED_HEIGHT - dateH - actualTitleH - titleMargin;

      setRemainingForPara(Math.max(0, remaining));

      // Para overflow check
      let paraOverflows = false;
      const noRoomForPara =
        remaining <= 0 && (paraRef.current?.scrollHeight ?? 0) > 0;
      if (paraRef.current && remaining > 0) {
        paraOverflows = paraRef.current.scrollHeight > remaining;
      }

      setNeedsReadMore(titleOverflows || paraOverflows || noRoomForPara);
    };

    // Small timeout so refs are measured after paint
    const timer = setTimeout(calculate, 50);
    window.addEventListener("resize", calculate);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculate);
    };
  }, []);

  return (
    <div
      className="flex flex-col p-3 transition-transform duration-300 hover:scale-105"
      style={{ backgroundColor: "#F3F3F3", borderRadius: "14.32px" }}
    >
      {/* Image */}
      <div
        className="w-full overflow-hidden flex-shrink-0"
        style={{ borderRadius: "10.74px" }}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={240}
          className="w-full object-cover"
          style={{ borderRadius: "10.74px" }}
        />
      </div>

      {/* Content box — fixed height when collapsed, auto when expanded */}
      <div
        style={{
          marginTop: "12px",
          height: expanded ? "auto" : `${COLLAPSED_HEIGHT}px`,
          overflow: "hidden",
          flexShrink: 0,
          position: "relative",
        }}
      >
        {/* Date */}
        <p
          ref={dateRef}
          className="dmsans mb-2"
          style={{
            fontSize: "clamp(13px, 1.2vw, 16.11px)",
            lineHeight: "25.1px",
            letterSpacing: "0",
            color: "#777777",
          }}
        >
          {blog.date}
        </p>

        {/* Title — clamped to exactly the lines that fit, ellipsis on last line */}
        <h3
          ref={titleRef}
          className="basker"
          style={{
            fontSize: "clamp(18px, 2vw, 24px)",
            lineHeight: "112%",
            letterSpacing: "-0.04em",
            color: "#1E1E1E",
            marginBottom: "6px",
            ...(!expanded && titleLineClamp
              ? {
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: titleLineClamp,
                  overflow: "hidden",
                }
              : {}),
          }}
        >
          {blog.title}
        </h3>

        {/* Paragraph — only shows if there's remaining space after the title.
            Clamped to fit that remaining space when collapsed. */}
        {remainingForPara > 0 && (
          <p
            ref={paraRef}
            className="dmsans"
            style={{
              fontSize: "clamp(13px, 1.2vw, 16.11px)",
              lineHeight: "25.1px",
              letterSpacing: "0",
              color: "#777777",
              // When collapsed: hard clip to remaining space
              maxHeight: expanded ? "none" : `${remainingForPara}px`,
              overflow: expanded ? "visible" : "hidden",
              // Ellipsis on last visible line
              display: expanded ? "block" : "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: expanded
                ? "unset"
                : Math.floor(remainingForPara / 25), // ~25px per line
            }}
          >
            {blog.paragraph}
          </p>
        )}

        {/* Hidden para ref for measurement even when not shown */}
        {remainingForPara === 0 && (
          <p
            ref={paraRef}
            style={{
              position: "absolute",
              visibility: "hidden",
              pointerEvents: "none",
              top: 0,
            }}
            aria-hidden="true"
          >
            {blog.paragraph}
          </p>
        )}
      </div>

      <hr className="border-t border-gray-300 mt-3 mb-3" />

      {/* Read More / Read Less */}
      <button
        onClick={() => needsReadMore && setExpanded((prev) => !prev)}
        disabled={!needsReadMore}
        className="dmsans font-semibold text-left"
        style={{
          fontSize: "14px",
          lineHeight: "24px",
          letterSpacing: "0",
          color: needsReadMore ? "#143D2B" : "#AAAAAA",
          cursor: needsReadMore ? "pointer" : "default",
          background: "none",
          border: "none",
          padding: 0,
        }}
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
export default function Blogs() {
  return (
    <>
      <section className="w-full">
        <div
          className="relative w-full overflow-hidden flex justify-center items-center"
          style={{ minWidth: "100%", minHeight: "450px", borderRadius: "20px" }}
        >
          <Image
            src="/blogs.png"
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
              Blogs
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="w-full py-15 px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start p-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
}
