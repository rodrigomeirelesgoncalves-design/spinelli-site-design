import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, Sun, Star, Lock, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroImage from "@/assets/luciana-hero.jpg";
import { FadeIn, FadeInUp } from "@/components/AnimationUtils";

const ease = [0.2, 0.8, 0.2, 1] as const;

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Gostaria de agendar uma consulta com discrição.";

const cycle = [
  {
    icon: Eye,
    phase: "Fase 1",
    title: "O Encantamento",
    subtitle: "Love Bombing",
    description: "Elogios excessivos, presentes, atenção constante. Você se sente especial — mas é uma armadilha calculada para criar dependência emocional.",
  },
  {
    icon: Shield,
    phase: "Fase 2",
    title: "A Desvalorização",
    subtitle: "Gaslighting",
    description: "Críticas veladas, isolamento social, manipulação da realidade. Você começa a duvidar de si mesma, das suas percepções e do seu valor.",
  },
  {
    icon: Sun,
    phase: "Fase 3",
    title: "A Libertação",
    subtitle: "Reconstrução",
    description: "O despertar. Reconhecer o ciclo, romper o vínculo e reconstruir sua identidade. Aqui começa a verdadeira transformação.",
  },
];

const differentials = [
  { icon: Lock, title: "Discrição absoluta", text: "Atendimento sigiloso, projetado para mulheres que valorizam privacidade e não podem se expor." },
  { icon: Clock, title: "Sem terapia genérica", text: "Abordagem especializada e direta ao ponto, sem perder tempo com métodos que não entendem o narcisismo." },
  { icon: Star, title: "Alto padrão", text: "Atendimento presencial e online com a sofisticação e o cuidado que você merece." },
];

const testimonials = [
  { text: "Finalmente encontrei alguém que entende o que eu passei. A Luciana mudou minha vida.", author: "C.M.", context: "Executiva · São Paulo" },
  { text: "Me ajudou a sair de um casamento de 15 anos com um narcisista. Estou reconstruindo minha vida.", author: "A.R.", context: "Empresária · Goiânia" },
  { text: "Discreta, competente e direta. Exatamente o que eu precisava. Recomendo fortemente.", author: "P.L.", context: "Médica · Água Boa" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">
                Psicóloga Clínica · CRP 18/03885
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-8">
                Líder lá fora.<br />
                <span className="italic">Prisioneira aqui dentro?</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
                Especialista em reconstrução de identidade e libertação do ciclo narcisista para mulheres de alto valor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-xs font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
                >
                  Recupere sua Liberdade
                </a>
                <Link
                  to="/sobre"
                  className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground text-xs font-medium uppercase tracking-[0.15em] hover:bg-foreground/5 transition-colors"
                >
                  Conheça meu trabalho
                </Link>
              </div>
            </FadeInUp>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <img
                src={heroImage}
                alt="Dra. Luciana Spinelli"
                className="w-full max-w-sm object-cover aspect-[3/4] img-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cycle */}
      <section className="py-28 md:py-40">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">Entenda o ciclo</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              O ciclo do abuso narcisista
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cycle.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-10 h-full text-center">
                  <div className="w-14 h-14 rounded-full border border-foreground/10 flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="w-6 h-6 text-foreground" strokeWidth={1} />
                  </div>
                  <p className="text-xs text-gold uppercase tracking-[0.2em] mb-2">{item.phase}</p>
                  <h3 className="font-serif text-2xl text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">{item.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-28 md:py-40 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">Diferencial</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground">
              Você não precisa de terapia genérica
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {differentials.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="glass-dark rounded-2xl p-10 h-full text-center">
                  <div className="w-14 h-14 rounded-full border border-primary-foreground/10 flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1} />
                  </div>
                  <h3 className="font-serif text-2xl text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-28 md:py-40">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">Depoimentos</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Histórias de libertação</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-10 h-full">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 italic">"{t.text}"</p>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.context}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-16">
            <Link
              to="/depoimentos"
              className="inline-flex items-center gap-2 text-xs font-medium text-foreground uppercase tracking-[0.15em] hover:gap-3 transition-all"
            >
              Ver todos os depoimentos <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">Próximo passo</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Você merece mais do que sobreviver.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">
                O primeiro passo é reconhecer que você precisa de ajuda especializada. O segundo é entrar em contato. Com total discrição.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-foreground text-background text-xs font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
              >
                Agendar Consulta Discreta
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Index;
