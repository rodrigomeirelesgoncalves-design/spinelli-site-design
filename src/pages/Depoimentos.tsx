import { Star, Quote } from "lucide-react";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Gostaria de agendar uma consulta com discrição.";

const testimonials = [
  { text: "A Luciana foi a primeira profissional que realmente entendeu o que eu estava vivendo. Depois de anos com um narcisista, eu não sabia mais quem eu era. Ela me ajudou a me encontrar.", author: "C.M.", context: "Executiva · 42 anos" },
  { text: "Tentei outros psicólogos antes, mas nenhum entendia a dinâmica do abuso narcisista. Com a Luciana, em poucas sessões eu já consegui enxergar o padrão e começar a me libertar.", author: "A.R.", context: "Empresária · 38 anos" },
  { text: "Discreta, competente e direta ao ponto. Não perde tempo com abordagens genéricas. Sabe exatamente o que uma mulher nessa situação precisa ouvir e fazer.", author: "P.L.", context: "Médica · 45 anos" },
  { text: "Eu tinha vergonha de contar minha história. A Luciana criou um espaço tão seguro que pela primeira vez me senti à vontade para ser vulnerável sem julgamento.", author: "M.S.", context: "Advogada · 36 anos" },
  { text: "Me ajudou a sair de um casamento de 15 anos com um narcisista. Hoje estou reconstruindo minha vida e minha carreira com uma confiança que achei que tinha perdido para sempre.", author: "J.F.", context: "Arquiteta · 44 anos" },
  { text: "O atendimento online é impecável. Tenho uma rotina intensa e a Luciana se adapta perfeitamente. A qualidade é a mesma do presencial — com total sigilo.", author: "R.D.", context: "Diretora Financeira · 40 anos" },
  { text: "A Luciana não é apenas uma psicóloga — é uma estrategista emocional. Me deu ferramentas práticas para me proteger e reconstruir meus limites.", author: "V.C.", context: "Consultora · 35 anos" },
  { text: "Depois de meses de gaslighting, eu não confiava mais na minha própria percepção. A Luciana me ajudou a validar minha realidade e recuperar minha sanidade mental.", author: "L.A.", context: "Professora Universitária · 41 anos" },
  { text: "Recomendo de olhos fechados para qualquer mulher que esteja presa num ciclo narcisista. Ela sabe o que está fazendo e faz com uma humanidade rara.", author: "T.B.", context: "Empreendedora · 39 anos" },
];

const DepoimentosPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-36 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">Depoimentos</p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.05] mb-8">
              Histórias de mulheres que se libertaram
            </h1>
            <p className="text-lg text-muted-foreground">
              Depoimentos reais de mulheres que romperam o ciclo narcisista e reconstruíram suas vidas.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Featured */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-foreground rounded-2xl p-12 md:p-20 max-w-4xl mx-auto relative overflow-hidden">
              <Quote className="w-20 h-20 text-primary-foreground/5 absolute top-8 right-8" />
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl md:text-4xl text-primary-foreground leading-snug mb-10">
                "A Luciana foi a primeira profissional que realmente entendeu o que eu estava vivendo. Depois de anos com um narcisista, eu não sabia mais quem eu era."
              </blockquote>
              <div>
                <p className="text-primary-foreground font-medium">C.M.</p>
                <p className="text-primary-foreground/50 text-sm">Executiva · 42 anos</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-28 md:py-36 bg-accent/50">
        <div className="container mx-auto px-6">
          <SectionHeader label="Relatos" title="Todas as histórias" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.05}>
                <div className="glass rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-5">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow italic">"{t.text}"</p>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.context}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl text-foreground mb-6">
              Pronta para escrever a sua história de libertação?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Agende sua consulta com total discrição e dê o primeiro passo.
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

export default DepoimentosPage;
