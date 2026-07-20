import { useState, useEffect } from 'react';
import styles from './VideoHero.module.css';

export default function VideoHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: '工作经历' },
    { href: '#projects', label: '精选作品' },
    { href: '#skills', label: '个人优势' },
    { href: '#contact', label: '联系我' },
  ];

  return (
    <section className={styles.hero}>
      {/* Video Background */}
      <video
        className={styles.videoBg}
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Navigation Bar */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navInner}>
          <a href="#" className={styles.brand}>
            xiaoLin
          </a>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Content */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <span className={styles.label}>AI APPLICATION ENGINEER</span>
          <h1 className={styles.heading}>
            <span className={styles.line1}>Hi, I am</span>
            <span className={styles.line2}>xiaoLin</span>
          </h1>
          <p className={styles.subtitle}>
            专注 LLM 应用开发与智能系统构建
            <br />
            将大语言模型的能力，转化为真实可用的产品
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>
              探索项目
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              取得联系
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
