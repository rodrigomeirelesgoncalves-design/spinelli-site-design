import { Award, BookOpen, Heart, GraduationCap, Target, Clock } from "lucide-react";
import heroImage from "@/assets/luciana-hero.jpg";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";

const values = [
  { icon: Heart, title: "Acolhimento", description: "Cada pessoa é recebida com empatia e respeito, em um espaço livre de julgamentos." },
  { icon: BookOpen, title: "Ética", description: "Compromisso total com o código de ética profissional e o sigilo terapêutico." },
  { icon: Target, title: "Evidências", description: "Prática clínica fundamentada em pesquisas e métodos validados pela ciência." },
  { icon: Clock, title: "Dedicação", description: "Cada sessão é um momento de atenção plena, dedicado inteiramente a você." },
];

const timeline = [
  { year: "Formação", text: "Graduação em Psicologia com aprofundamento em clínica e saúde mental." },
  { year: "Especialização", text: "Formação em Terapia Cognitivo-Comportamental (TCC), uma das abordagens mais validadas pela ciência." },
  { year: "Registro", text: "CRP 18/03885 — Conselho Regional de Psicologia de Mato Grosso." },
  { year: "Atuação", text: "Atendimento presencial em Barra do Garças/MT e online para todo o Brasil." },
];

const SobrePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeInUp>
              <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Sobre mim</p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
                Luciana Spinelli
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou psicóloga clínica registrada no CRP 18/03885, com formação em
                  Psicologia e especialização em Terapia Cognitivo-Comportamental (TCC).
                  Atuo em Barra do Garças/MT e também por atendimento online, oferecendo
                  um espaço de escuta ativa e acolhimento genuíno.
                </p>
                <p>
                  Minha prática clínica é baseada em evidências científicas, buscando
                  compreender cada pessoa em sua individualidade. Acredito que o processo
                  terapêutico é uma jornada de autoconhecimento e transformação, onde o
                  vínculo entre terapeuta e paciente é fundamental.
                </p>
                <p>
                  Trabalho com adultos e adolescentes, auxiliando no enfrentamento de
                  ansiedade, depressão, questões de autoestima, luto, dificuldades nos
                  relacionamentos e outros desafios emocionais da vida contemporânea.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-sm text-foreground">
                  <Award className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  CRP 18/03885
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-sm text-foreground">
                  <GraduationCap className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  Especialista em TCC
                </div>
              </div>
            </FadeInUp>

            <FadeIn delay={0.15}>
              <img
                src={heroImage}
                alt="Luciana Spinelli - Psicóloga Clínica"
                className="w-full rounded-3xl img-border object-cover aspect-[3/4] max-w-md mx-auto"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <SectionHeader label="Valores" title="O que guia meu trabalho" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="bg-card rounded-3xl p-7 shadow-card text-center h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader label="Trajetória" title="Formação e experiência" />

          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {i < timeline.length - 1 && <div className="w-px h-full bg-border flex-grow" />}
                  </div>
                  <div className="pb-10">
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">{item.year}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="font-serif text-3xl md:text-4xl text-foreground leading-snug italic mb-6">
                "O processo terapêutico é uma jornada de autoconhecimento — e cada passo importa."
              </blockquote>
              <p className="text-sm text-muted-foreground font-medium">— Luciana Spinelli</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default SobrePage;
