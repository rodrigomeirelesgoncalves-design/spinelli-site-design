import { motion } from "framer-motion";
import { User, Users, Monitor } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    description:
      "Processo terapêutico voltado ao autoconhecimento, gestão emocional e superação de desafios pessoais para adultos.",
  },
  {
    icon: Users,
    title: "Atendimento a Adolescentes",
    description:
      "Suporte especializado para as transições e desafios próprios da juventude, com acolhimento e escuta qualificada.",
  },
  {
    icon: Monitor,
    title: "Terapia Online",
    description:
      "A mesma qualidade clínica e ética profissional no conforto e privacidade do seu ambiente, via plataforma segura.",
  },
];

const ease = [0.2, 0.8, 0.2, 1];

const ServicesSection = () => (
  <section id="servicos" className="py-24 md:py-32 bg-accent/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
          Serviços
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Como posso te ajudar
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease, delay: i * 0.05 }}
            className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
