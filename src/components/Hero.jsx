import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

const ROLES = ["创新者", "全栈工程师", "创业者", "终身学习者"];
const NAV_LINKS = [
  { label: "首页", target: "top" },
  { label: "简历", target: "resume" },
  { label: "作品", target: "work" },
];

function scrollTo(target) {
  if (target === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Hero() {
  const videoRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});

    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });

    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    try {
      const tl = gsap.timeline();
      tl.to(".name-reveal", {
        opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.1,
      });
      tl.to(".blur-in", {
        opacity: 1, filter: "blur(0px)", y: 0,
        duration: 1, stagger: 0.1, ease: "power2.out", delay: 0.3,
      }, "-=0.8");
    } catch (e) {
      console.warn("GSAP animation failed:", e);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(roleInterval);
    };
  }, []);

  const navClass = scrolled ? styles.nav + " " + styles.navShadow : styles.nav;

  return (
    <section className={styles.hero}>
      <video ref={videoRef} className={styles.videoBg} src="/hero-video.mp4" autoPlay muted loop playsInline />
      <div className={styles.overlay} />
      <div className={styles.bottomFade} />

      <nav className={navClass}>
        <div className={styles.navPill}>
          <div className={styles.navLinks}>
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.target)}
                className={i === 0 ? styles.navLink + " " + styles.navLinkActive : styles.navLink}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className={styles.divider} />
          <button
            onClick={() => scrollTo("contact")}
            className={styles.sayHi}
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
          >
            <span className={styles.sayHiBg} />
            <span className={styles.sayHiText}>联系我 <span className={styles.arrow}>&#x2197;</span></span>
          </button>
        </div>
      </nav>

      <div className={styles.content}>
        <div className={styles.contentInner}>
          <motion.div className={styles.eyebrow + " blur-in"}>作品精选 · 2026</motion.div>
          <h1 className={styles.name + " name-reveal"}>XiaoLin</h1>
          <p className={styles.roleLine + " blur-in"}>
            为理想奋斗的<span className={styles.roleWord} key={roleIndex}>{ROLES[roleIndex]}</span>
          </p>
          <p className={styles.description + " blur-in"}>
            专注于 AI 应用工程化落地，打造无缝、智能的数字交互体验，让技术与人文在每一次交互中自然融合。
          </p>
          <div className={styles.ctaGroup}>
            <button onClick={() => scrollTo("work")} className={styles.ctaPrimary}>查看作品</button>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>向下滚动</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollHighlight} />
        </div>
      </div>
    </section>
  );
}
