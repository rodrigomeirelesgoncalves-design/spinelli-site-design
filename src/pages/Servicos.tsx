import { Link } from "react-router-dom";
import { User, Users, Monitor, Brain, HeartHandshake, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";

const mainServices = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    description: "Processo terapêutico voltado ao autoconhecimento, gestão emocional e superação de desafios pessoais para adultos.",
    details: [
      "Ansiedade e estresse",
      "Depressão e tristeza persistente",
      "Autoestima e autoconfiança",
      "Luto e perdas",
      "Dificuldades nos relacionamentos",
      "Tomada de decisões",
    ],
  },
  {
    icon: Users,
    title: "Atendimento a Adolescentes",
    description: "Suporte especializado para as transições e desafios próprios da juventude, com acolhimento e escuta qualificada.",
    details: [
      "Conflitos familiares",
      "Dificuldades escolares",
      "Ansiedade e insegurança",
      "Identidade e autoconhecimento",
      "Habilidades sociais",
      "Orientação vocacional",
    ],
  },
  {
    icon: Monitor,
    title: "Terapia Online",
    description: "A mesma qualidade clínica e ética profissional no conforto e privacidade do seu ambiente, via plataforma segura.",
    details: [
      "Plataforma segura e certificada",
      "Mesma eficácia comprovada",
      "Flexibilidade de horários",
      "Atendimento de qualquer lugar",
      "Sigilo garantido",
      "Ideal para rotinas corridas",
    ],
  },
];

const approaches = [
  {
    icon: Brain,
    title: "Terapia Cognitivo-Comportamental",
    description: "Abordagem baseada em evidências que identifica e modifica padrões de pensamento e comportamento que geram sofrimento.",
  },
  {
    icon: HeartHandshake,
    title: "Escuta Ativa e Acolhimento",
    description: "Um ambiente seguro onde você pode se expressar livremente, sem julgamentos, sendo ouvido com empatia e respeito.",
  },
  {
    icon: Lightbulb,
    title: "Psicoeducação",
    description: "Compreender o que acontece com você é parte fundamental do tratamento. Trabalho com clareza e transparência.",
  },
];

const ServicosPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Serviços</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
              Cuidado profissional para cada fase da vida
            </h1>
            <p className="text-lg text-muted-foreground">
              Ofereço diferentes modalidades de atendimento para atender às suas necessidades de forma personalizada e acolhedora.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-16 max-w-5xl mx-auto">
            {mainServices.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.05}>
                <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{service.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-4">Principais demandas atendidas:</p>
                      <ul className="space-y-2.5">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <SectionHeader label="Abordagem" title="Como trabalho" description="Minha prática é fundamentada em métodos validados pela ciência, sempre com foco na individualidade de cada paciente." />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {approaches.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="bg-card rounded-3xl p-8 shadow-card h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-primary rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-primary-foreground mb-4">Vamos começar?</h2>
              <p className="text-primary-foreground/80 mb-8">
                Agende sua primeira sessão e dê o primeiro passo rumo ao seu bem-estar emocional.
              </p>
              <a
                href="https://wa.me/5566999999999?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-primary-foreground text-primary font-medium hover:opacity-90 transition-opacity"
              >
                Agendar Consulta
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default ServicosPage;
