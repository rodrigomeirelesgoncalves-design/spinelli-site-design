import { motion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.2, 0.8, 0.2, 1] as const;

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn = ({ children, className, delay = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, ease, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInUp = ({ children, className, delay = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ label, title, description }: SectionHeaderProps) => (
  <FadeIn className="text-center mb-20">
    <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
      {label}
    </p>
    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-5">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </FadeIn>
);
