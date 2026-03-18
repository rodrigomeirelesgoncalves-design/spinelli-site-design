import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Tenho uma dúvida sobre o atendimento.";

const narcissismFaqs = [
  { question: "Como sei que estou em um relacionamento com um narcisista?", answer: "Alguns sinais incluem: você sente que 'pisa em ovos' constantemente, duvida das suas percepções, se sente isolada das pessoas que ama, e alterna entre momentos de extrema felicidade e profunda tristeza no relacionamento. Se você se identifica, buscar ajuda profissional especializada é fundamental." },
  { question: "O narcisista pode mudar?", answer: "O Transtorno de Personalidade Narcisista é uma condição complexa. Embora mudanças sejam teoricamente possíveis, elas são extremamente raras e dependem de um desejo genuíno de mudança — algo que narcisistas tipicamente não possuem. Meu trabalho foca em você: em protegê-la e reconstruir sua vida." },
  { question: "Por que é tão difícil sair de um relacionamento com um narcisista?", answer: "O trauma bonding (vínculo traumático) cria uma dependência emocional semelhante a uma dependência química. Os ciclos de idealização e descarte liberam dopamina e cortisol de forma alternada, criando um padrão viciante. É por isso que ajuda especializada é essencial." },
  { question: "Quanto tempo leva para se recuperar do abuso narcisista?", answer: "Cada caso é único. Algumas mulheres começam a sentir mudanças significativas em 3-4 meses de terapia especializada. A reconstrução completa da identidade pode levar mais tempo, mas os avanços são progressivos e perceptíveis desde as primeiras sessões." },
];

const therapyFaqs = [
  { question: "Como funciona a primeira sessão?", answer: "A primeira sessão é um espaço de acolhimento total. Vamos conversar sobre sua situação atual, seus objetivos e como posso te ajudar. Não há pressão para compartilhar mais do que se sente confortável. Tudo com total sigilo e discrição." },
  { question: "Quanto tempo dura cada sessão?", answer: "Cada sessão tem duração média de 50 minutos, seguindo o padrão ético e técnico da psicologia clínica." },
  { question: "O atendimento é presencial ou online?", answer: "Ambos. Atendo presencialmente em Água Boa/MT e online para todo o Brasil via plataforma segura. A qualidade e eficácia são as mesmas em ambas as modalidades." },
  { question: "O sigilo é garantido?", answer: "Absolutamente. O sigilo profissional é um dos pilares da ética em Psicologia e é garantido por lei. Seu caso é tratado com total confidencialidade e discrição." },
];

const practicalFaqs = [
  { question: "Qual é o valor da sessão?", answer: "O valor é informado diretamente no momento do agendamento via WhatsApp. Trabalho com atendimento particular e emito recibo para reembolso junto ao plano de saúde." },
  { question: "Como faço para agendar?", answer: "Basta clicar no botão 'Agendar Consulta' em qualquer página do site. Você será direcionada ao WhatsApp com total discrição." },
  { question: "Atende por convênio?", answer: "Trabalho com atendimento particular. Emito recibo para possibilidade de reembolso junto ao seu plano de saúde." },
];

const FAQPage = () => {
  return (
    <>
      <section className="py-24 md:py-36 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">FAQ</p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.05] mb-8">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre narcisismo, o processo terapêutico e questões práticas.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Narcissism FAQs */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <SectionHeader label="Narcisismo" title="Sobre o abuso narcisista" />
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {narcissismFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`narc-${i}`} className="glass rounded-xl border-none px-6">
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Therapy FAQs */}
      <section className="py-28 md:py-36 bg-accent/50">
        <div className="container mx-auto px-6">
          <SectionHeader label="Terapia" title="Sobre o atendimento" />
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {therapyFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`therapy-${i}`} className="glass rounded-xl border-none px-6">
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Practical FAQs */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <SectionHeader label="Prático" title="Questões práticas" />
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {practicalFaqs.map((faq, i) => (
                  <AccordionItem key={i} value={`prac-${i}`} className="glass rounded-xl border-none px-6">
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
      <section className="py-28 md:py-36 bg-accent/50">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Ainda tem dúvidas?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Entre em contato pelo WhatsApp com total discrição.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-foreground text-background text-xs font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
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
