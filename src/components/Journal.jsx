import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Journal.module.css";

const entries = [
  { title: "从零到一：构建电商智能 Agent 全链路", date: "2026年7月", color: "#89AACC" },
  { title: "RAG 检索增强生成：从理论到生产级落地", date: "2026年7月", color: "#4E85BF" },
  { title: "LangGraph 工作流编排实战：多 Agent 协作", date: "2026年6月", color: "#6B9BD2" },
  { title: "向量数据库选型指南：ChromaDB vs Milvus vs Pinecone", date: "2026年6月", color: "#A0B8CC" },
  { title: "Prompt Engineering 进阶：上下文窗口与思维链", date: "2026年5月", color: "#89AACC" },
  { title: "FastAPI 微服务架构：高并发下的最佳实践", date: "2026年5月", color: "#4E85BF" },
  { title: "LLM 应用的可观测性：日志、追踪与评估体系", date: "2026年4月", color: "#6B9BD2" },
  { title: "从 Monolith 到微服务：后端架构演进实录", date: "2026年4月", color: "#A0B8CC" },
  { title: "AI 产品的用户体验设计：对话式交互的思考", date: "2026年3月", color: "#89AACC" },
  { title: "深度学习入门：Transformer 架构拆解", date: "2026年3月", color: "#4E85BF" },
  { title: "Python 异步编程：asyncio 与协程深度解析", date: "2026年2月", color: "#6B9BD2" },
  { title: "React 19 新特性：Server Components 与 Actions", date: "2026年2月", color: "#A0B8CC" },
  { title: "Git 工作流与 CI/CD：团队协作效率翻倍指南", date: "2026年1月", color: "#89AACC" },
  { title: "Docker 容器化实战：从开发到部署一站式", date: "2026年1月", color: "#4E85BF" },
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

export default function Journal() {
  return (
    <section id="resume" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="技术笔记"
          title={<span>近期<em>思考</em></span>}
          subtitle="关于 AI 工程化、系统架构与技术实践的笔记与反思。"
        />

        <div className={styles.entries}>
          {entries.map((entry, i) => (
            <motion.div
              key={entry.title}
              className={styles.entry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className={styles.entryLeft}>
                <div className={styles.entryAccent} style={{ background: entry.color }} />
                <span className={styles.entryTitle}>{entry.title}</span>
              </div>
              <div className={styles.entryRight}>
                <span className={styles.entryMeta}>{entry.readTime} {entry.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
