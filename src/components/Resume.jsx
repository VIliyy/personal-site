import { Link } from "react-router-dom";
import styles from "./Resume.module.css";

function scrollToFooter() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Resume() {
  return (
    <div id="resume" className={styles.page}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.lineDeco} />
      <div className={styles.star1} />
      <div className={styles.star2} />
      <div className={styles.star3} />

      <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.portraitCard}>
              <div className={styles.portraitBg} />
              <div className={styles.portraitImg}>
                <img src="/images/头像.png" alt="林育丞 头像" />
              </div>
              <div className={styles.portraitCornerTag}>作品集 '26</div>
              <div className={styles.portraitStatus}>
                <span className={styles.statusDot} />
                求职中
              </div>
            </div>
        </div>

        <div className={styles.right}>

          <div>
            <span className={styles.sectionLabel}>个人简历</span>
            <h1 className={styles.heading}>
              你好，我是 <span className="glow-text">林育丞</span>
            </h1>
            <p className={styles.bio}>
              AI 应用开发工程师，专注于大语言模型工程化落地与智能系统构建。
              擅长将前沿 AI 技术转化为稳定、可商用的产品体验。
              拥有扎实的后端架构能力与前端交互经验，致力于用技术创造有温度的数字产品。
            </p>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>求职意向</span>
              <span className={styles.infoValue}>AI 应用开发工程师</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>工作经验</span>
              <span className={styles.infoValue}>应届毕业生（1年开发经验）</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>手机</span>
              <span className={styles.infoValue}>13616913274</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>邮箱</span>
              <span className={styles.infoValue}>
                <a href="mailto:1378780334@qq.com">1378780334@qq.com</a>
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>所在城市</span>
              <span className={styles.infoValue}>中国</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>学历</span>
              <span className={styles.infoValue}>本科</span>
            </div>
          </div>

          <div>
            <span className={styles.sectionLabel}>技术栈</span>
            <h2 className={styles.heading} style={{ fontSize: "1.8rem", marginBottom: 20 }}>专业技能</h2>
            <div className={styles.tags}>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>FastAPI</span>
              <span className={styles.tag}>LangChain</span>
              <span className={styles.tag}>RAG</span>
              <span className={styles.tag}>LangGraph</span>
              <span className={styles.tag}>Workflow</span>
              <span className={styles.tag}>LLM</span>
              <span className={styles.tag}>Prompt Engineering</span>
              <span className={styles.tag}>向量数据库</span>
              <span className={styles.tag}>上下文工程</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Vue</span>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>TailwindCSS</span>
              <span className={styles.tag}>MySQL</span>
              <span className={styles.tag}>Git</span>
            </div>
          </div>

          <div>
            <span className={styles.sectionLabel}>联系方式</span>
            <h2 className={styles.heading} style={{ fontSize: "1.8rem", marginBottom: 20 }}>联系我</h2>
            <div className={styles.contactActions}>
              <button onClick={scrollToFooter} className={styles.contactBtn + " " + styles.contactBtnPrimary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                发送邮件
              </button>
              <a href="tel:13616913274" className={styles.contactBtn + " " + styles.contactBtnSecondary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                拨打电话
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}