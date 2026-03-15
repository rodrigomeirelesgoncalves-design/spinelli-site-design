import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, User, Users, Monitor } from "lucide-react";
import heroImage from "@/assets/luciana-hero.jpg";
import { FadeIn, FadeInUp } from "@/components/AnimationUtils";

const ease = [0.2, 0.8, 0.2, 1] as const;

const services = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    description: "Processo terapêutico voltado ao autoconhecimento e gestão emocional para adultos.",
  },
  {
    icon: Users,
    title: "Atendimento a Adolescentes",
    description: "Suporte especializado para as transições e desafios da juventude.",
  },
  {
    icon: Monitor,
    title: "Terapia Online",
    description: "A mesma qualidade clínica no conforto e privacidade do seu ambiente.",
  },
];

const testimonials = [
  {
    text: "A Luciana é uma profissional incrível. Desde a primeira sessão me senti acolhida e segura.",
    author: "Maria C.",
  },
  {
    text: "Excelente psicóloga! Muito atenciosa e competente. Me ajudou muito em um momento difícil.",
    author: "Pedro S.",
  },
  {
    text: "Minha filha se sentiu muito à vontade. O atendimento é acolhedor e muito profissional.",
    author: "Ana L.",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInUp className="order-2 lg:order-1">
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
                Psicóloga Clínica · CRP 18/03885
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
                Um espaço seguro para a sua transformação pessoal.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                Psicoterapia clínica com foco em acolhimento, ética e o
                desenvolvimento de uma vida com mais sentido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5566999999999?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Agendar Consulta
                </a>
                <Link
                  to="/sobre"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl border border-border text-foreground font-medium hover:bg-accent transition-colors"
                >
                  Conheça meu trabalho
                </Link>
              </div>
            </FadeInUp>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img
                  src={heroImage}
                  alt="Luciana Spinelli - Psicóloga Clínica"
                  className="w-full rounded-3xl img-border object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10" />
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Serviços</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Como posso te ajudar</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.05}>
                <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Ver todos os serviços <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn>
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Sobre</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Luciana Spinelli</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sou psicóloga clínica registrada no CRP 18/03885, com formação em
                Psicologia e especialização em Terapia Cognitivo-Comportamental. Atuo em
                Barra do Garças/MT e também por atendimento online.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Minha prática clínica é baseada em evidências científicas, buscando
                compreender cada pessoa em sua individualidade.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Saiba mais sobre mim <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-accent rounded-3xl p-12 md:p-16 relative">
                <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-snug italic">
                  "O processo terapêutico é uma jornada de autoconhecimento — e cada passo importa."
                </blockquote>
                <p className="mt-6 text-sm text-muted-foreground font-medium">— Luciana Spinelli</p>
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-primary/15" />
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-xl bg-primary/10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Depoimentos</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">O que dizem os pacientes</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-card rounded-3xl p-8 shadow-card h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                  <p className="text-sm font-medium text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">Via Google Maps</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link
              to="/depoimentos"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Ver todos os depoimentos <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-primary rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
                Pronto para dar o primeiro passo?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                O caminho para o autoconhecimento começa com uma conversa. Entre em contato e agende sua primeira sessão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5566999999999?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-primary-foreground text-primary font-medium hover:opacity-90 transition-opacity"
                >
                  Agendar via WhatsApp
                </a>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Ver localização
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Index;
