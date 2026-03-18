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
                  "Acredito que o autoconhecimento é uma escolha que transforma destinos — 
                  e é nesse encontro entre o humano e o profissional que minha atuação ganha sentido."
                </p>
                <p>
                  Sou psicóloga, formada pela Universidade Estadual de Minas Gerais em 2003, 
                  registrada no CRP 18/03885, e desde então transformo minha dedicação ao 
                  cuidado humano em propósito.
                </p>
                <p>
                  Minha própria trajetória, marcada por aprendizados e construção consciente, 
                  sustenta o trabalho que realizo hoje: ajudar mulheres fortes e bem-sucedidas 
                  a se libertarem de relacionamentos amorosos com homens narcisistas, com 
                  profundidade, ética e responsabilidade.
                </p>
                <p>
                  Sou casada há 21 anos, construindo diariamente uma relação saudável, e mãe 
                  de dois meninos que são parte essencial da minha história. Nos detalhes da vida, 
                  encontro equilíbrio: cozinhar, pescar, cuidar dos meus pets e das minhas plantas.
                </p>
                <p>
                  Mais do que uma profissão, meu trabalho é um compromisso com relações mais 
                  conscientes, leves e verdadeiras. Atuo em Água Boa/MT e por atendimento 
                  online para todo o Brasil, oferecendo um espaço de escuta ativa, segurança 
                  e transformação genuína.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                <div className="flex items-center gap-2 px-5 py-2.5 border border-foreground/10 text-xs text-foreground uppercase tracking-wider">
                  <Award className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  CRP 18/03885
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 border border-foreground/10 text-xs text-foreground uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  UEMG · 2003
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
                  Ao longo dos meus mais de 20 anos de prática clínica, percebi um padrão alarmante: mulheres 
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
              Agende sua consulta com total discrição. Presencial em Água Boa/MT ou online para todo o Brasil.
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
