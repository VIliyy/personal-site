import styles from './Projects.module.css';

const projects = [
  {
    title: '智能产品咨询助手',
    period: '2026/03 — 2026/05',
    stack: 'Python · LangChain · RAG · FastAPI',
    description: '基于检索增强生成（RAG）技术构建的智能产品咨询系统。将产品手册与说明文档构建为知识库，通过自然语言问答实现精准产品咨询，有效降低客服人力成本。',
    details: [
      '构建 RAG 管线：文档加载 → 文本分片 → 向量存储 → 知识检索 → 回答生成',
      '使用 LangChain Memory 维护会话历史，支持多轮追问，提升对话连贯性',
      '通过 LCEL 编排链式调用，结合 Prompt Engineering 确保回答质量',
      '搭建 Web 交互页面，支持流式输出，优化用户体验',
    ],
    accent: 'cyan',
  },
  {
    title: '企业内部业务系统',
    period: '2025/10 — 2026/01',
    stack: 'Spring Boot · Vue · Element UI · MySQL',
    description: '参与公司内部业务系统的后端开发，负责订单管理、用户权限模块的接口设计、实现与优化。使用 Vue + Element UI 搭建管理后台前端页面。',
    details: [
      '使用 Spring Boot 高效开发 RESTful API，集成 MySQL 数据库表结构设计',
      '优化 SQL 查询与索引策略，显著提升复杂查询场景下的响应速度',
      '使用 Vue + Element UI 构建管理后台页面，完成前后端联调与数据可视化',
      '参与团队需求评审、代码 Review，确保模块按时高质量交付',
    ],
    accent: 'purple',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className={styles.decoOrb} />
      <div className={styles.decoRing} />

      <div className="section-inner">
        <span className="section-label">Projects</span>
        <h2 className="section-title">精选项目</h2>
        <p className="section-desc">
          每一个项目都是对 AI 工程化能力的一次深度实践。
        </p>

        <div className={styles.grid}>
          {projects.map((p, i) => {
            const visualClass = `visual_${p.accent}`;
            return (
              <div key={i} className={`${styles.card} fade-in`} style={{ animationDelay: `${i * 0.2}s` }}>
                <div className={`${styles.cardVisual} ${styles[visualClass]}`}>
                  <div className={styles.visualPattern} />
                  <div className={styles.visualOverlay} />
                  <div className={styles.visualIcon}>
                    {i === 0 ? '⟨/⟩' : '∞'}
                  </div>
                  <div className={styles.visualAccent1} />
                  <div className={styles.visualAccent2} />
                </div>

                <div className={styles.cardBody}>
                  <span className={styles.cardPeriod}>{p.period}</span>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.description}</p>
                  <ul className={styles.cardDetails}>
                    {p.details.map((d, di) => (
                      <li key={di}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
