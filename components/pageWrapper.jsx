"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}>
      {children}
    </motion.div>
  </AnimatePresence>
);

export const PageWrapper2 = ({ children }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 15,
      }}>
      {children}
    </motion.div>
  </AnimatePresence>
);
