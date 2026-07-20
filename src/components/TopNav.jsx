import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "首页", to: "/" },
  { label: "作品", to: "/#work" },
  { label: "简历", to: "/#resume" },
];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", justifyContent: "center", padding: 16,
      background: scrolled ? "rgba(10,10,30,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.35s ease",
    }}>
      <div style={{
        display: "inline-flex", alignItems: "center",
        borderRadius: 100, gap: 4,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "hsl(0 0% 8%)",
        padding: "8px 16px",
      }}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            style={{
              fontSize: "0.8rem", color: "rgba(255,255,255,0.75)",
              borderRadius: 100, padding: "6px 12px",
              transition: "all 0.25s", textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)" }} />
        <Link
          to="/#contact"
          style={{
            position: "relative", fontSize: "0.8rem", color: "#ffffff",
            borderRadius: 100, padding: "6px 16px",
            textDecoration: "none", overflow: "hidden",
          }}
        >
          联系我 <span style={{ fontSize: "0.9rem" }}>↗</span>
        </Link>
      </div>
    </nav>
  );
}
