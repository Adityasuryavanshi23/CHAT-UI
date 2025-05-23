/* eslint-disable no-unused-vars */
import { animate, motion } from "framer-motion";

export const AnimatedMessage = ({ children, key }) => {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 20, skewY: 4, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, skewY: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};
