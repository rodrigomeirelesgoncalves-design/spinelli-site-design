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
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInUp = ({ children, className, delay = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease, delay }}
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
  <FadeIn className="text-center mb-16">
    <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
      {label}
    </p>
    <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </FadeIn>
);
