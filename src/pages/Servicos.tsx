import { Shield, Sparkles, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Gostaria de agendar uma consulta com discrição.";

const pillars = [
  {
    icon: Shield,
    title: "Terapia para Vítimas de Narcisistas",
    focus: "Quebra de vínculo e reconstrução",
    description: "Abordagem especializada para identificar, compreender e romper o ciclo do abuso narcisista. Trabalhamos a desintoxicação emocional, o fortalecimento da identidade e a retomada do controle sobre sua vida.",
    methods: [
      "Identificação de padrões de trauma bonding",
      "Desconstrução do gaslighting internalizado",
      "Reconstrução da autoestima e autoconfiança",
      "Estratégias de no-contact ou low-contact",
      "Processamento de traumas com TCC",
      "Proteção emocional e limites saudáveis",
    ],
  },
  {
    icon: Sparkles,
    title: "Mentoria para Mulheres Fortes",
    focus: "Retomada de carreira e brilho",
    description: "Para mulheres que já romperam o ciclo mas ainda sentem os efeitos: insegurança profissional, dificuldade de confiar, perda de identidade. Ajudo a reconectar com sua força e retomar o protagonismo.",
    methods: [
      "Resgate da identidade profissional",
      "Superação da síndrome da impostora pós-abuso",
      "Desenvolvimento de liderança autêntica",
      "Gestão emocional em ambientes de pressão",
      "Redefinição de metas e propósito de vida",
      "Fortalecimento da rede de apoio",
    ],
  },
  {
    icon: Heart,
    title: "Consultoria de Relacionamentos",
    focus: "Prevenção e limites",
    description: "Identificação de red flags, construção de limites saudáveis e desenvolvimento de habilidades para relacionamentos genuínos. Prevenção para quem não quer repetir padrões.",
    methods: [
      "Identificação de padrões de relacionamentos tóxicos",
      "Construção de limites emocionais saudáveis",
      "Red flags: como identificar narcisistas",
      "Comunicação assertiva e não-violenta",
      "Reconstrução da confiança em novos vínculos",
      "Autoconhecimento relacional aprofundado",
    ],
  },
];

const ServicosPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">Especialidades</p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.05] mb-8">
              Três pilares para sua libertação
            </h1>
            <p className="text-lg text-muted-foreground">
              Cada mulher precisa de uma abordagem sob medida. Minha prática é dividida em três frentes complementares.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-28 md:py-40">
        <div className="container mx-auto px-6">
          <div className="space-y-20 max-w-5xl mx-auto">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.05}>
                <div className="glass rounded-2xl p-10 md:p-14">
                  <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div>
                      <div className="w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center mb-8">
                        <pillar.icon className="w-7 h-7 text-foreground" strokeWidth={1} />
                      </div>
                      <p className="text-xs text-gold uppercase tracking-[0.2em] mb-2">{pillar.focus}</p>
                      <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">{pillar.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground uppercase tracking-[0.15em] mb-6">Metodologia</p>
                      <ul className="space-y-3">
                        {pillar.methods.map((method) => (
                          <li key={method} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                            {method}
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

      {/* CTA */}
      <section className="py-28 md:py-40 bg-foreground">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">Próximo passo</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6">Vamos começar?</h2>
              <p className="text-primary-foreground/60 mb-10 max-w-xl mx-auto">
                Agende sua primeira consulta com total discrição. Presencial ou online.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 border border-primary-foreground/30 text-primary-foreground text-xs font-medium uppercase tracking-[0.15em] hover:bg-primary-foreground/10 transition-colors"
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

export default ServicosPage;
