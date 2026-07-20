import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
};

const sectionStyle = { maxWidth: 960, margin: "0 auto", padding: "0 24px 80px" };

export default function ProjectDetail() {
  return (
    <div style={{ minHeight: "100vh", background: "#050510", color: "hsl(0 0% 96%)", paddingBottom: 80 }}>
      
      {/* === Top Nav Pill === */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: 16, display: "flex", justifyContent: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, borderRadius: 100, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(10,10,30,0.85)", padding: "8px 16px" }}>
          <a href="#/" onClick={(e) => { e.preventDefault(); window.location.hash = "#/"; setTimeout(() => { var el = document.getElementById("work"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 150); }} style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.8rem", borderRadius: 100, padding: "6px 12px", transition: "all 0.25s", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>返回首页
          </a>
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)" }} />
          <span style={{ fontSize: "0.8rem", color: "#fff", padding: "6px 12px", borderRadius: 100, background: "rgba(255,255,255,0.08)" }}>AI Cockpit</span>
        </div>
      </div>

      {/* === Hero === */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
        style={{ paddingTop: 140, paddingBottom: 60, paddingLeft: 24, paddingRight: 24, maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <motion.div {...fadeUp}>
          <span style={{ fontSize: "0.7rem", color: "#5BB8F4", textTransform: "uppercase", letterSpacing: "0.3em" }}>Featured Project</span>
        </motion.div>
        <motion.h1 {...fadeUp} style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1, margin: "16px 0 8px" }}>
          AI <span style={{ background: "linear-gradient(90deg, #5BB8F4, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Cockpit</span>
        </motion.h1>
        <motion.p {...fadeUp} style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", marginBottom: 16 }}>个人 AI 驾驶舱</motion.p>
        <motion.p {...fadeUp} style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
          集成智能知识问答、简历匹配优化、学习队列管理的一站式 AI 效率工具
        </motion.p>
        <motion.div {...fadeUp} style={{ marginTop: 28, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {["LangChain", "RAG", "DeepSeek", "FastAPI", "Vue3", "ChromaDB"].map((t) => (
            <span key={t} style={{ fontSize: "0.75rem", padding: "5px 14px", borderRadius: 100, border: "1px solid rgba(91,184,244,0.25)", color: "#5BB8F4", background: "rgba(91,184,244,0.06)" }}>{t}</span>
          ))}
        </motion.div>
      </motion.section>

      {/* === Project Image === */}
      <motion.section {...fadeUp} style={sectionStyle}>
        <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(91,184,244,0.1)", boxShadow: "0 8px 60px rgba(0,0,0,0.4)" }}>
          <img src="/images/个人站图片1.png" alt="AI Cockpit 项目预览" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </motion.section>

      {/* === 一句话 === */}
      <motion.section {...fadeUp} style={sectionStyle}>
        <Block title="一句话">
          <p style={pStyle}>
            基于 LangChain RAG + DeepSeek + FastAPI + Vue3 的个人 AI 工作面板，一块页面取代 Obsidian、浏览器、笔记软件之间的频繁切换。
          </p>
        </Block>
      </motion.section>

      {/* === 解决什么问题 === */}
      <motion.section {...fadeUp} style={sectionStyle}>
        <Block title="解决什么问题">
          <p style={pStyle}>
            日常工作中，查知识要开 Obsidian，投简历要开浏览器，记灵感要开笔记软件，改简历要对 JD。AI Cockpit 把这三个高频场景整合到一个 Web 面板里，用 AI 串联起来。
          </p>
        </Block>
      </motion.section>

      {/* === 系统架构 === */}
      <motion.section {...fadeUp} style={sectionStyle}>
        <Block title="系统架构">
          <div style={{ background: "rgba(10,15,30,0.5)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", padding: 32, overflowX: "auto" }}>
            <pre style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", lineHeight: 1.8, margin: 0, fontFamily: "monospace" }}>
{`Vue3 SPA（Vite）    →    FastAPI 网关（:18001）    →    LangChain 服务层    →    ChromaDB / DeepSeek
      │                          │                           │
  纸质感 UI                RESTful 10+ 接口              RAG 检索管道
  Pinia 状态管理           StaticFiles 静态服务           Prompt 模板编排
  Hash 路由                 CORS 跨域                     查询改写 + 去重`}
            </pre>
          </div>
        </Block>
      </motion.section>

      {/* === 技术栈表 === */}
      <motion.section {...fadeUp} style={sectionStyle}>
        <Block title="技术栈">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#5BB8F4", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>层</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#5BB8F4", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>技术</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["前端", "Vue 3 · Vite · Pinia · Vue Router · 自定义纸质感 UI 系统"],
                  ["API 网关", "Python FastAPI · RESTful 接口 · CORS 中间件"],
                  ["AI 服务", "LangChain · DeepSeek API（deepseek-chat）· 硅基流动 Embedding"],
                  ["数据存储", "ChromaDB（向量检索）· JSON 文件（会话/队列）· localStorage（用户配置）"],
                  ["设计系统", "Floral Notepaper（Paper 纸 + Ink 墨 + Bamboo 竹青）"],
                  ["部署", "Railway 一键部署 · Procfile · Python 3.11"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.55)", width: 120, verticalAlign: "top" }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>
      </motion.section>

      {/* === 三个核心功能 === */}
      <motion.section {...fadeUp} style={sectionStyle}>
        <Block title="三个核心功能">
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* 功能1 */}
            <FeatureBlock num="1" title="智能知识问答" color="#5BB8F4">
              <p style={pStyle}>输入关键词 → RAG 检索 Obsidian 知识库 → DeepSeek 生成回答 → 标注来源笔记</p>
              <ul style={ulStyle}>
                <li>LangChain 构建检索链：查询改写 → ChromaDB 向量检索 → 分数过滤 → 去重 → LLM 生成</li>
                <li>多轮对话上下文记忆，支持连续追问</li>
                <li>知识库未命中时自动降级为纯 LLM 模式</li>
                <li>历史对话管理（加载/切换/恢复）</li>
              </ul>
              <img src="/images/项目1.png" alt="智能知识问答" style={{width:"100%",borderRadius:12,marginTop:16,border:"1px solid rgba(255,255,255,0.06)"}} />
            </FeatureBlock>

            {/* 功能2 */}
            <FeatureBlock num="2" title="简历匹配优化" color="#8B5CF6">
              <p style={pStyle}>上传简历（PDF/DOCX/TXT）→ 粘贴 JD → AI 多维度分析</p>
              <ul style={ulStyle}>
                <li>综合评分：0-100 整体匹配度</li>
                <li>技能 &amp; 经验匹配度：逐项对照</li>
                <li>差距分析：简历缺少什么</li>
                <li>关键词补充：建议加入的关键词</li>
                <li>优化建议：可操作的修改方向</li>
                <li>面试题生成：基于 JD 自动出题 + STAR 法则润色答案</li>
                <li>多平台打招呼语：Boss / 拉勾 / 猎聘，一键生成</li>
              </ul>
              <img src="/images/项目3.png" alt="简历匹配优化" style={{width:"100%",borderRadius:12,marginTop:16,border:"1px solid rgba(255,255,255,0.06)"}} />
            </FeatureBlock>

            {/* 功能3 */}
            <FeatureBlock num="3" title="学习队列" color="#3AB8A0">
              <p style={pStyle}>看到想学的知识 → 一键加入 → 卡片网格管理 → 学完划掉</p>
              <ul style={ulStyle}>
                <li>卡片式双列网格布局</li>
                <li>乐观更新（先更新 UI 再同步后端，失败回滚）</li>
                <li>完成项划线动画</li>
                <li>标签分类 + 时间记录</li>
                <li>刷新不丢失</li>
              </ul>
              <img src="/images/项目2.png" alt="学习队列" style={{width:"100%",borderRadius:12,marginTop:16,border:"1px solid rgba(255,255,255,0.06)"}} />
            </FeatureBlock>
          </div>
        </Block>
      </motion.section>

      {/* === 技术亮点 === */}
      <motion.section {...fadeUp} style={sectionStyle}>
        <Block title="技术亮点">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#5BB8F4", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", width: 140 }}>亮点</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#5BB8F4", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>说明</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["RAG 全链路", "LangChain + ChromaDB，覆盖查询改写、语义检索、分数过滤、去重、上下文拼接"],
                  ["多场景 Prompt 编排", "4 套 Prompt 模板（知识问答 / JD 匹配 / 面试题生成 / 打招呼语），按场景切换"],
                  ["FastAPI 接口封装", "10+ RESTful 接口，JSON + localStorage 双层持久化，会话历史管理"],
                  ["Vue3 前端独立开发", "4 页面 + 6 组件 + 完整纸质感设计系统（Paper + Ink + Bamboo）"],
                  ["无数据库依赖", "不依赖 MySQL/Redis，JSON 文件 + localStorage 即可运行"],
                  ["可部署上线", "Railway 一键部署，用户配置 API Key 即可使用"],
                  ["优雅降级", "无知识库时自动切换纯 LLM 模式，不影响核心功能"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "12px 16px", color: "#5BB8F4", fontWeight: 500, verticalAlign: "top" }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>
      </motion.section>

      {/* === 项目结构 === */}
      <motion.section {...fadeUp} style={sectionStyle}>
        <Block title="项目结构">
          <div style={{ background: "rgba(10,15,30,0.5)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", padding: 32, overflowX: "auto" }}>
            <pre style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", lineHeight: 1.75, margin: 0, fontFamily: "monospace" }}>
{`├── backend/                 # Python FastAPI
│   ├── main.py              # 入口 + StaticFiles 挂载
│   ├── config.py            # 配置管理（API Key、路径）
│   ├── storage.py           # JSON 持久化（会话、队列）
│   ├── build_index.py       # 知识库索引构建工具
│   ├── modules/
│   │   ├── chat.py          # RAG 问答模块
│   │   ├── job.py           # JD 工具箱模块
│   │   └── capture.py       # 学习队列模块
│   ├── Procfile             # Railway 部署配置
│   └── requirements.txt
│
├── frontend/                # Vue3 + Vite
│   └── src/
│       ├── views/           # Chat / Capture / Job / Settings
│       ├── api/             # axios 封装
│       ├── stores/          # Pinia 状态管理
│       ├── router/          # Hash 路由
│       └── styles/theme.css # Floral Notepaper 主题
│
├── docs/                    # 项目文档（API 规范、设计规范、错误记录）
├── start.bat                # Windows 一键启动
└── README.md`}
            </pre>
          </div>
        </Block>
      </motion.section>

      
      {/* === 开源 === */}
      <motion.section {...fadeUp} style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 80px", textAlign: "center" }}>
        <div style={{ background: "linear-gradient(135deg, rgba(91,184,244,0.08), rgba(139,92,246,0.08))", borderRadius: 24, border: "1px solid rgba(91,184,244,0.15)", padding: "48px 32px" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🌟</div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: 8 }}>已开源</h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", marginBottom: 24 }}>
            代码已在 GitHub 开放，欢迎 Star、Fork 和 PR
          </p>
          <a
            href="https://github.com/VIliyy/AI-Cockpit-"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 32px", borderRadius: 100,
              background: "linear-gradient(90deg, #5BB8F4, #8B5CF6)",
              color: "#fff", fontSize: "0.9rem", fontWeight: 600,
              textDecoration: "none", transition: "all 0.3s",
              boxShadow: "0 4px 24px rgba(91,184,244,0.3)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 6px 32px rgba(91,184,244,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(91,184,244,0.3)"; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            VIliyy/AI-Cockpit-  →
          </a>
        </div>
      </motion.section>

      {/*
      {/* === Footer CTA === */}
      <motion.section {...fadeUp} style={{ textAlign: "center", padding: "0 24px" }}>
        <a href="#/" onClick={(e) => { e.preventDefault(); window.location.hash = "#/"; setTimeout(() => { var el = document.getElementById("work"); if (el) el.scrollIntoView({ behavior: "smooth" }); }, 150); }} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", borderRadius: 100, background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)", transition: "all 0.3s" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>返回首页
        </a>
      </motion.section>
    </div>
  );
}

/* Reusable sub-components */
function Block({ title, children }) {
  return (
    <div>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 4, height: 24, borderRadius: 2, background: "linear-gradient(180deg, #5BB8F4, #8B5CF6)", display: "inline-block", flexShrink: 0 }} />
        {title}
      </h2>
      {children}
    </div>
  );
}

function FeatureBlock({ num, title, color, children }) {
  return (
    <div style={{ background: "rgba(10,15,30,0.5)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", padding: 28 }}>
      <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: 8, background: color + "18", color: color, fontSize: "0.85rem", fontWeight: 700 }}>{num}</span>
        {title}
      </h3>
      {children}
    </div>
  );
}

const pStyle = { fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: 12 };
const ulStyle = { margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6, fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 };
