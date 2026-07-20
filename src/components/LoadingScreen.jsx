import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LoadingScreen.module.css";

const ROTATING_WORDS = ["设计", "创造", "启迪"];

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const DURATION = 2700;

  useEffect(() => {
    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      // Rotate words every 900ms
      setWordIndex(Math.floor((elapsed % 2700) / 900));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  return (
    <motion.div
      className={styles.loading}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top-left label */}
      <div className={styles.topLeft}>
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          作品集
        </motion.span>
      </div>

      {/* Center rotating word */}
      <div className={styles.center}>
        <AnimatePresence mode="wait">
          <motion.h2
            key={wordIndex}
            className={styles.rotatingWord}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {ROTATING_WORDS[wordIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <div className={styles.bottomRight}>
        <span className={styles.counter}>
          {String(count).padStart(3, "0")}
        </span>
      </div>

      {/* Bottom progress bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            style={{ scaleX: count / 100 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
