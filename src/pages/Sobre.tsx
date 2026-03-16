import { Award, GraduationCap } from "lucide-react";
import heroImage from "@/assets/luciana-hero.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import { FadeIn, FadeInUp } from "@/components/AnimationUtils";

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Gostaria de agendar uma consulta com discrição.";

const SobrePage = () => {
  return (
    <>
      {/* Hero / Manifesto + Photo */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <FadeInUp>
              <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">Sobre mim</p>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.05] mb-8">
                Luciana Spinelli
              </h1>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-lg font-serif italic text-foreground leading-snug">
                  "O mercado está cheio de terapeutas generalistas. Mas poucas profissionais 
                  realmente entendem a dinâmica do abuso narcisista — e ainda menos sabem 
                  como tratar mulheres de alto desempenho que passaram por isso."
                </p>
                <p>
                  Sou psicóloga clínica registrada no CRP 18/03885, com formação em
                  Psicologia e especialização em Terapia Cognitivo-Comportamental (TCC).
                  Ao longo da minha carreira, me especializei em casos complexos de abuso
                  emocional e relacionamentos com personalidades narcisistas.
                </p>
                <p>
                  Minha missão é clara: ajudar mulheres bem-sucedidas a recuperarem
                  sua identidade, sua confiança e sua liberdade emocional. Sem julgamentos.
                  Com técnica, estratégia e total discrição.
                </p>
                <p>
                  Atuo em Barra do Garças/MT e por atendimento online para todo o Brasil,
                  oferecendo um espaço de escuta ativa, segurança e transformação genuína.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                <div className="flex items-center gap-2 px-5 py-2.5 border border-foreground/10 text-xs text-foreground uppercase tracking-wider">
                  <Award className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  CRP 18/03885
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 border border-foreground/10 text-xs text-foreground uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  Especialista em TCC
                </div>
              </div>
            </FadeInUp>

            <FadeIn delay={0.15}>
              <img
                src={heroImage}
                alt="Dra. Luciana Spinelli - Psicóloga Clínica"
                className="w-full max-w-md mx-auto object-cover aspect-[3/4] img-border"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Primal Branding - Origin Story */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">Minha história</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-10">
                Por que me especializei nisso
              </h2>
              <div className="space-y-6 text-primary-foreground/70 text-left md:text-center">
                <p>
                  Ao longo dos meus anos de prática clínica, percebi um padrão alarmante: mulheres 
                  incrivelmente competentes e bem-sucedidas chegavam ao meu consultório 
                  emocionalmente destruídas por relacionamentos abusivos com personalidades narcisistas.
                </p>
                <p>
                  O que mais me incomodava era que a maioria já tinha passado por outros 
                  profissionais que não compreendiam a complexidade desse tipo de abuso. 
                  Terapias genéricas, conselhos superficiais, e uma frustração crescente.
                </p>
                <p>
                  Foi assim que decidi me especializar profundamente nessa área. Estudei 
                  as dinâmicas do abuso narcisista, os mecanismos de trauma bonding, 
                  gaslighting e a desconstrução sistemática da identidade. E criei uma 
                  abordagem direta, eficaz e sob medida para mulheres que não podem 
                  perder mais tempo.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quote */}
      <section className="py-28 md:py-40">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="font-serif text-3xl md:text-5xl text-foreground leading-snug italic mb-8">
                "Você não está quebrada. Você foi manipulada por alguém que sabia exatamente o que estava fazendo."
              </blockquote>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">— Luciana Spinelli</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 bg-accent/50">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl text-foreground mb-6">Pronta para começar?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Agende sua consulta com total discrição. Presencial em Barra do Garças/MT ou online para todo o Brasil.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-foreground text-background text-xs font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
            >
              Agendar Consulta
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default SobrePage;
