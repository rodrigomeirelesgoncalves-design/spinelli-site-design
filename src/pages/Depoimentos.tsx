import { Star, Quote } from "lucide-react";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";

const testimonials = [
  {
    text: "A Luciana é uma profissional incrível. Desde a primeira sessão me senti acolhida e segura. Recomendo de olhos fechados para quem busca um atendimento de qualidade.",
    author: "Maria C.",
    context: "Psicoterapia Individual",
  },
  {
    text: "Excelente psicóloga! Muito atenciosa e competente. Me ajudou muito em um momento difícil da minha vida. Sou muito grato pelo cuidado e profissionalismo.",
    author: "Pedro S.",
    context: "Psicoterapia Individual",
  },
  {
    text: "Minha filha adolescente se sentiu muito à vontade com a Luciana. O atendimento é acolhedor e muito profissional. Percebemos uma evolução significativa.",
    author: "Ana L.",
    context: "Atendimento a Adolescentes",
  },
  {
    text: "Faz terapia online com a Luciana há meses e é maravilhoso. A qualidade do atendimento é a mesma do presencial. Super recomendo para quem tem rotina corrida.",
    author: "Juliana M.",
    context: "Terapia Online",
  },
  {
    text: "Profissional extremamente ética e dedicada. Cada sessão é um momento de verdadeira escuta e acolhimento. Mudou a minha forma de lidar com a ansiedade.",
    author: "Carlos R.",
    context: "Psicoterapia Individual",
  },
  {
    text: "A Luciana tem uma sensibilidade única para entender as questões dos adolescentes. Meu filho se abriu muito depois de iniciar o acompanhamento com ela.",
    author: "Fernanda B.",
    context: "Atendimento a Adolescentes",
  },
  {
    text: "Estava passando por um luto muito difícil e a Luciana me ajudou a processar tudo com muita humanidade e competência. Serei eternamente grata.",
    author: "Roberta A.",
    context: "Psicoterapia Individual",
  },
  {
    text: "O consultório é muito acolhedor e a Luciana transmite uma tranquilidade que facilita muito o processo terapêutico. Recomendo a todos.",
    author: "Lucas P.",
    context: "Psicoterapia Individual",
  },
  {
    text: "Depois de tentar outros profissionais, finalmente encontrei alguém que realmente me entende. A abordagem da Luciana é clara, prática e muito eficaz.",
    author: "Patrícia G.",
    context: "Terapia Online",
  },
];

const DepoimentosPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Depoimentos</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
              Histórias de quem já passou por aqui
            </h1>
            <p className="text-lg text-muted-foreground">
              O maior reconhecimento do meu trabalho vem das palavras de quem confiou em mim para essa jornada.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Featured */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-primary rounded-3xl p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
              <Quote className="w-16 h-16 text-primary-foreground/10 absolute top-8 right-8" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-foreground text-primary-foreground" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl md:text-3xl text-primary-foreground leading-snug mb-8">
                "A Luciana é uma profissional incrível. Desde a primeira sessão me senti acolhida e segura. Recomendo de olhos fechados."
              </blockquote>
              <div>
                <p className="text-primary-foreground font-medium">Maria C.</p>
                <p className="text-primary-foreground/60 text-sm">Psicoterapia Individual · Via Google Maps</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <SectionHeader label="Avaliações" title="Todas as avaliações" description="Avaliações reais de pacientes via Google Maps." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.05}>
                <div className="bg-card rounded-3xl p-8 shadow-card h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">"{t.text}"</p>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.context} · Via Google Maps</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Quer fazer parte dessas histórias?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Agende sua primeira sessão e comece sua própria jornada de transformação.
            </p>
            <a
              href="https://wa.me/5566999999999?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Agendar Consulta
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default DepoimentosPage;
