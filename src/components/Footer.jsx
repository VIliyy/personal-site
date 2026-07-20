import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section id="contact" className={styles.footer}>
      <div className={styles.bgVideo}>
        <div className={styles.videoOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.ctaSection}>
          <a
            href="mailto:1378780334@qq.com"
            className={styles.ctaButton}
          >
            <span className={styles.ctaButtonBg} />
            1378780334@qq.com ↗
          </a>
        </div>

        <div className={styles.bar}>
          
          
          <div className={styles.status}>
            <span className={styles.dot} />
            <span>开放合作机会</span>
          </div>
        </div>
      </div>
    </section>
  );
}
