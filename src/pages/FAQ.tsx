import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";

const generalFaqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer: "A primeira sessão é um momento de acolhimento e escuta. Vamos conversar sobre o que te trouxe à terapia, suas expectativas e como podemos construir juntos um plano terapêutico adequado. É um espaço seguro e sem julgamentos.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "Cada sessão tem duração média de 50 minutos, seguindo o padrão ético e técnico da psicologia clínica.",
  },
  {
    question: "Qual a frequência ideal das sessões?",
    answer: "Geralmente, iniciamos com sessões semanais. Com o avanço do processo terapêutico, a frequência pode ser ajustada de acordo com a sua necessidade e evolução.",
  },
  {
    question: "Como sei que preciso de terapia?",
    answer: "Se você sente que suas emoções estão impactando negativamente sua qualidade de vida, relacionamentos ou desempenho profissional, a terapia pode ser muito benéfica. Não é preciso estar em crise para buscar ajuda — a prevenção e o autoconhecimento também são motivos válidos.",
  },
  {
    question: "Quanto tempo dura o processo terapêutico?",
    answer: "Não existe um prazo fixo. A duração varia de acordo com os objetivos, a demanda e o ritmo de cada pessoa. Algumas questões podem ser trabalhadas em meses, outras pedem um acompanhamento mais longo.",
  },
];

const onlineFaqs = [
  {
    question: "O atendimento online é tão eficaz quanto o presencial?",
    answer: "Sim. Pesquisas científicas demonstram que a terapia online tem a mesma eficácia do atendimento presencial. Utilizo uma plataforma segura e certificada para garantir sigilo e qualidade.",
  },
  {
    question: "O que preciso para fazer terapia online?",
    answer: "Você precisa de um dispositivo com câmera e microfone (celular, tablet ou computador), uma conexão estável de internet e um ambiente privado e tranquilo durante a sessão.",
  },
  {
    question: "A terapia online é permitida pelo Conselho de Psicologia?",
    answer: "Sim, o Conselho Federal de Psicologia regulamenta e autoriza o atendimento psicológico online, desde que respeitadas as normas éticas e técnicas da profissão.",
  },
];

const practicalFaqs = [
  {
    question: "Vocês atendem por convênio?",
    answer: "Atualmente trabalho com atendimento particular. Emito recibo para reembolso junto ao plano de saúde, caso o seu convênio ofereça essa possibilidade.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer: "Você pode entrar em contato diretamente pelo WhatsApp. Basta clicar no botão 'Agendar Consulta' disponível no site. Responderei o mais breve possível.",
  },
  {
    question: "Qual é o valor da sessão?",
    answer: "O valor é informado diretamente no momento do agendamento. Entre em contato pelo WhatsApp para mais detalhes sobre valores e formas de pagamento.",
  },
  {
    question: "O sigilo é garantido?",
    answer: "Absolutamente. O sigilo profissional é um dos pilares da ética em Psicologia e é garantido por lei. Tudo o que é compartilhado na sessão é estritamente confidencial.",
  },
];

const FAQPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">FAQ</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o processo terapêutico, atendimento online e questões práticas.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* General */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader label="Geral" title="Sobre a terapia" />
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {generalFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`gen-${i}`} className="bg-card rounded-2xl shadow-card border-none px-6">
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Online */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <SectionHeader label="Online" title="Terapia Online" />
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {onlineFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`online-${i}`} className="bg-card rounded-2xl shadow-card border-none px-6">
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Practical */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader label="Prático" title="Questões práticas" />
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {practicalFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`prac-${i}`} className="bg-card rounded-2xl shadow-card border-none px-6">
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl text-foreground mb-4">Ainda tem dúvidas?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Entre em contato pelo WhatsApp e terei prazer em esclarecer qualquer pergunta.
            </p>
            <a
              href="https://wa.me/5566999999999?text=Olá! Tenho uma dúvida sobre o atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Falar no WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
