import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className={styles.decoOrb1} />
      <div className={styles.decoOrb2} />
      <div className={styles.decoStar1} />
      <div className={styles.decoStar2} />
      <div className={styles.decoStar3} />

      <div className="section-inner">
        <span className="section-label">Career Path</span>
        <h2 className="section-title">个人经历</h2>

        <div className={styles.layout}>
          {/* Left — AI Avatar Card */}
          <div className={styles.left}>
            <div className={styles.avatarCard}>
              <div className={styles.avatarCardBg} />
              <div className={styles.avatarCardContent}>
                <div className={styles.avatarImage}>
                  <img src="/images/avatar-placeholder.png" alt="XiaoLin" />
                </div>
                <div className={styles.playBtn}>
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none">
                    <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Info Grid */}
          <div className={styles.right}>
            <div className={styles.introBlock}>
              <span className={styles.introLabel}>ABOUT ME</span>
              <h3 className={styles.introTitle}>Hi, I am <span className="glow-text">XiaoLin!</span></h3>
              <p className={styles.introText}>
                AI 应用开发工程师，专注于 LLM 工程化落地与智能系统构建。
                将大语言模型的能力，转化为真实可用的产品。
              </p>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>当前身份</span>
                <span className={styles.infoValue}>AI 应用开发工程师</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>服务方向</span>
                <span className={styles.infoValue}>Brand / 3D / AIGC</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>手机</span>
                <span className={styles.infoValue}>136******74</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>邮箱</span>
                <a href="mailto:1378780334@qq.com" className={styles.infoValueLink}>
                  1378780334@qq.com
                </a>
              </div>
            </div>

            {/* Stats Row */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>500+</span>
                <span className={styles.statLabel}>Pages Built</span>
              </div>
            </div>

            {/* Active Projects */}
            <div className={styles.activeBlock}>
              <div className={styles.activeHeader}>
                <span className={styles.activeTitle}>NOW BUILDING</span>
                <span className={styles.activeSub}>进行中的项目</span>
              </div>
              <div className={styles.activeTags}>
                <span className={styles.tag}>品牌视觉系统</span>
                <span className={styles.tag}>AIGC 视觉工作流</span>
                <span className={styles.tag}>短视频封面体系</span>
                <span className={styles.tag}>电商营销视觉</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
