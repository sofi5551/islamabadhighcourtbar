import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ComingSoon() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#143D2B" }}
    >
      {/* Animated particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logo.png"
            alt="IHCBA Logo"
            width={90}
            height={90}
            className="object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p
            className="dmsans text-white uppercase tracking-widest"
            style={{ fontSize: "clamp(10px, 1.2vw, 14px)", opacity: 0.7 }}
          >
            Islamabad High Court Bar Association
          </p>
        </div>

        {/* Divider */}
        <div style={{ width: "60px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />

        {/* Heading */}
        <div className="flex flex-col gap-4">
          <p
            className="dmsans text-white uppercase tracking-widest"
            style={{
              fontSize: "clamp(11px, 1.2vw, 15px)",
              letterSpacing: "0.2em",
              opacity: 0.6,
            }}
          >
            We Are
          </p>
          <h1
            className="basker text-white"
            style={{
              fontSize: "clamp(56px, 10vw, 130px)",
              lineHeight: "90%",
              letterSpacing: "-0.04em",
            }}
          >
            Coming
            <br />
            Soon
          </h1>
        </div>

        {/* Description */}
        <p
          className="dmsans text-white"
          style={{
            fontSize: "clamp(13px, 1.4vw, 18px)",
            lineHeight: "160%",
            letterSpacing: "-0.02em",
            opacity: 0.65,
            maxWidth: "480px",
          }}
        >
          Our website is under construction. We&apos;re working hard to bring
          you a better experience. Stay tuned.
        </p>

        {/* Divider */}
        <div style={{ width: "60px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href="tel:0519218058"
            className="dmsans text-white flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ fontSize: "clamp(13px, 1.2vw, 16px)", opacity: 0.8 }}
          >
            <Image src="/call-logo.svg" alt="Call" width={18} height={18} className="object-contain invert" />
            0519218058
          </a>
          <div
            className="hidden sm:block"
            style={{ width: "1px", height: "16px", backgroundColor: "rgba(255,255,255,0.3)" }}
          />
          <a
            href="mailto:info@ihcba.org.pk"
            className="dmsans text-white flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ fontSize: "clamp(13px, 1.2vw, 16px)", opacity: 0.8 }}
          >
            info@ihcba.org.pk
          </a>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <p
          className="dmsans text-white"
          style={{ fontSize: "12px", opacity: 0.35, letterSpacing: "0.08em" }}
        >
          © {new Date().getFullYear()} IHCBA. All rights reserved.
        </p>
      </div>
    </div>
  );
}
