import { MapPin, Clock, Phone, Instagram, Mail } from "lucide-react";
import { FadeIn, FadeInUp } from "@/components/AnimationUtils";

const ContatoPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Contato</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
              Vamos conversar?
            </h1>
            <p className="text-lg text-muted-foreground">
              Entre em contato para agendar sua consulta ou tirar qualquer dúvida. Estou à disposição.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Info Cards */}
            <div className="space-y-6">
              <FadeIn>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <h2 className="font-serif text-xl text-foreground mb-6">Informações de contato</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm mb-1">Endereço</h3>
                        <p className="text-sm text-muted-foreground">Barra do Garças — MT</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm mb-1">Horário de Atendimento</h3>
                        <p className="text-sm text-muted-foreground">Segunda a Sexta · 8h às 18h</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm mb-1">Telefone / WhatsApp</h3>
                        <p className="text-sm text-muted-foreground">Via WhatsApp</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm mb-1">E-mail</h3>
                        <p className="text-sm text-muted-foreground">contato@lucianaspinelli.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.05}>
                <div className="bg-card rounded-3xl p-8 shadow-card">
                  <h2 className="font-serif text-xl text-foreground mb-6">Redes Sociais</h2>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/luciana.spinellipsico/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-accent text-sm text-foreground hover:bg-primary/10 transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      @luciana.spinellipsico
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <a
                  href="https://wa.me/5566999999999?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-7 py-4 rounded-2xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Agendar pelo WhatsApp
                </a>
              </FadeIn>
            </div>

            {/* Map */}
            <FadeIn delay={0.1}>
              <div className="rounded-3xl overflow-hidden shadow-card h-full min-h-[500px]">
                <iframe
                  title="Localização - Luciana Spinelli Psicóloga"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.5!2d-52.1564166!3d-14.0525972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x936db72ce86ecc3f%3A0xc594f0e62ffe68f4!2sLuciana%20Spinelli%20Psic%C3%B3loga!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeIn>
              <div className="bg-card rounded-3xl p-8 shadow-card text-center h-full">
                <h3 className="font-serif text-lg text-foreground mb-3">Atendimento Presencial</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consultório localizado em Barra do Garças/MT, com ambiente acolhedor e preparado para o seu conforto.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="bg-card rounded-3xl p-8 shadow-card text-center h-full">
                <h3 className="font-serif text-lg text-foreground mb-3">Atendimento Online</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sessões via plataforma segura para todo o Brasil. A mesma qualidade e sigilo do atendimento presencial.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-card rounded-3xl p-8 shadow-card text-center h-full">
                <h3 className="font-serif text-lg text-foreground mb-3">Primeira Consulta</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A primeira sessão é um momento de acolhimento. Não é necessário preparação especial — venha como se sentir confortável.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContatoPage;
