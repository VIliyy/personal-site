import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className={styles.bg}>
        <div className={styles.collageOrb1} />
        <div className={styles.collageOrb2} />
        <div className={styles.collageRing1} />
        <div className={styles.collageBlob1} />

        <div className="section-inner">
          <span className="section-label">Contact</span>
          <h2 className={`section-title ${styles.title}`}>
            Let&apos;s <span className="glow-text">Connect</span>
          </h2>
          <p className={styles.desc}>
            如果你对我的项目或能力感兴趣，欢迎联系我。
            <br />期待与你的交流与合作。
          </p>

          <div className={styles.cards}>
            <a href="mailto:1378780334@qq.com" className={styles.card}>
              <span className={styles.cardIcon}>✉</span>
              <div>
                <span className={styles.cardLabel}>Email</span>
                <span className={styles.cardValue}>1378780334@qq.com</span>
              </div>
              <span className={styles.cardArrow}>→</span>
            </a>
            <div className={styles.card}>
              <span className={styles.cardIcon}>☎</span>
              <div>
                <span className={styles.cardLabel}>Phone</span>
                <span className={styles.cardValue}>13616913274</span>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.footerLeft}>
              <span className={styles.footerLogo}>
                <span className="glow-text">&lt;</span> xiaoLin{' '}
                <span className="glow-text">/&gt;</span>
              </span>
            </div>
            <div className={styles.footerRight}>
              <span className={styles.footerText}>
                © {new Date().getFullYear()} · AI Application Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
