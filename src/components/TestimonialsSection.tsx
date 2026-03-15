import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "A Luciana é uma profissional incrível. Desde a primeira sessão me senti acolhida e segura. Recomendo de olhos fechados.",
    author: "Maria C.",
    rating: 5,
  },
  {
    text: "Excelente psicóloga! Muito atenciosa e competente. Me ajudou muito em um momento difícil da minha vida.",
    author: "Pedro S.",
    rating: 5,
  },
  {
    text: "Minha filha adolescente se sentiu muito à vontade com a Luciana. O atendimento é acolhedor e muito profissional.",
    author: "Ana L.",
    rating: 5,
  },
];

const ease = [0.2, 0.8, 0.2, 1];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-24 md:py-32 bg-accent/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
          Depoimentos
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          O que dizem os pacientes
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease, delay: i * 0.05 }}
            className="bg-card rounded-3xl p-8 shadow-card"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              "{t.text}"
            </p>
            <p className="text-sm font-medium text-foreground">{t.author}</p>
            <p className="text-xs text-muted-foreground">Via Google Maps</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
