import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento de acolhimento e escuta. Vamos conversar sobre o que te trouxe à terapia, suas expectativas e como podemos construir juntos um plano terapêutico adequado. É um espaço seguro e sem julgamentos.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "Cada sessão tem duração média de 50 minutos, seguindo o padrão ético e técnico da psicologia clínica.",
  },
  {
    question: "O atendimento online é tão eficaz quanto o presencial?",
    answer:
      "Sim. Pesquisas científicas demonstram que a terapia online tem a mesma eficácia do atendimento presencial. Utilizo uma plataforma segura e certificada para garantir sigilo e qualidade.",
  },
  {
    question: "Qual a frequência ideal das sessões?",
    answer:
      "Geralmente, iniciamos com sessões semanais. Com o avanço do processo terapêutico, a frequência pode ser ajustada de acordo com a sua necessidade e evolução.",
  },
  {
    question: "Vocês atendem por convênio?",
    answer:
      "Atualmente trabalho com atendimento particular. Emito recibo para reembolso junto ao plano de saúde, caso o seu convênio ofereça essa possibilidade.",
  },
];

const ease = [0.2, 0.8, 0.2, 1] as const;

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
          Dúvidas Frequentes
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Perguntas e Respostas
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl shadow-card border-none px-6"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
