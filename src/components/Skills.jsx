import styles from './Skills.module.css';

const skillGroups = [
  {
    title: '后端开发',
    icon: '⚙',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'Spring Boot', level: 70 },
      { name: 'RESTful API', level: 88 },
    ],
    accent: 'cyan',
  },
  {
    title: 'AI / LLM 应用',
    icon: '✦',
    skills: [
      { name: 'LangChain', level: 85 },
      { name: 'RAG', level: 88 },
      { name: 'Prompt Engineering', level: 82 },
      { name: 'Tool Calling', level: 78 },
      { name: 'LangGraph', level: 72 },
    ],
    accent: 'purple',
  },
  {
    title: '数据库 & 工具',
    icon: '◈',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'SQL 优化', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'Vue.js', level: 70 },
      { name: 'LangSmith', level: 70 },
    ],
    accent: 'teal',
  },
  {
    title: '软实力',
    icon: '◆',
    skills: [
      { name: '技术文档', level: 82 },
      { name: '需求评审', level: 78 },
      { name: '团队协作', level: 85 },
      { name: '代码 Review', level: 75 },
      { name: '快速学习', level: 90 },
    ],
    accent: 'warm',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className={styles.decoOrb1} />
      <div className={styles.decoOrb2} />
      <div className={styles.decoLine} />

      <div className="section-inner">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">个人优势</h2>
        <p className="section-desc">
          从后端架构到 AI 应用层，全链路技术能力覆盖。
        </p>

        <div className={styles.grid}>
          {skillGroups.map((group) => {
            const accentClass = `card_accent_${group.accent}`;
            return (
              <div key={group.title} className={`${styles.card} ${styles[accentClass]}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{group.icon}</span>
                  <h3 className={styles.cardTitle}>{group.title}</h3>
                </div>
                <div className={styles.skillList}>
                  {group.skills.map((skill) => (
                    <div key={skill.name} className={styles.skill}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillPct}>{skill.level}%</span>
                      </div>
                      <div className={styles.skillBar}>
                        <div
                          className={styles.skillFill}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
