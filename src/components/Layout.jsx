// Layout.jsx
import { motion } from "framer-motion";

export function Layout({ children }) {
  return (
   <motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.98 }}
  transition={{ duration: 0.12, ease: "easeOut" }}
>
  {children}
</motion.div>
  );
}