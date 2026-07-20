import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import styles from "./Works.module.css";

const projects = [
  {
    id: "ai-cockpit",
    title: "AI Cockpit",
    subtitle: "个人 AI 驾驶舱",
    category: "AI 应用 · 全栈",
    color: "#5BB8F4",
    tech: "React · FastAPI · LangChain · RAG · Agent",
    description: "一站式 AI 工作台，集成 RAG 检索、Agent 编排、多模型对话与知识库管理。",
  },
];

function SectionHeader({ eyebrow, title, subtitle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={styles.header}
    >
      <div className={styles.headerTop}>
        <div className={styles.headerLine} />
        <span className={styles.eyebrow}>{eyebrow}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </motion.div>
  );
}

export default function Works() {
  const navigate = useNavigate();

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="精选作品"
          title={<span>代表<em>项目</em></span>}
          subtitle="从概念到落地的精选项目，最擅长<偷懒>的工程师，以最小的力气完成最便捷的服务。"
        />

        <div className={styles.bentoGrid}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className={styles.card + " col-span-12"}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => navigate("/project/" + p.id)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.cardVisual} style={{ borderColor: p.color + "40" }}>
                <div
                  className={styles.cardGradient}
                  style={{
                    background: "radial-gradient(ellipse at 30% 40%, " + p.color + "15 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, " + p.color + "08 0%, transparent 50%)",
                  }}
                />
                <div className={styles.cardHalftone} />
                <div className={styles.cardHoverOverlay} />
                <div className={styles.cardIcon}>
                  <img src="/images/个人站图片1.png" alt="AI Cockpit" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                </div>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardCategory}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardSubtitle}>{p.subtitle}</p>
                <span className={styles.cardTech}>{p.tech}</span>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.cardViewPill}>
                  <span>查看详情</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
