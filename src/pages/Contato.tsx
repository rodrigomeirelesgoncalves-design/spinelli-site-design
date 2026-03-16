import { useState } from "react";
import { MapPin, Clock, Phone, Instagram, Mail } from "lucide-react";
import { FadeIn, FadeInUp } from "@/components/AnimationUtils";

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Gostaria de agendar uma consulta com discrição.";

const ContatoPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.name}. Assunto: ${form.subject}. ${form.message}`;
    window.open(`https://wa.me/5566999784828?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-36 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">Contato</p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.05] mb-8">
              Vamos conversar com discrição
            </h1>
            <p className="text-lg text-muted-foreground">
              Entre em contato para agendar sua consulta ou tirar qualquer dúvida. Total sigilo garantido.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-medium text-foreground uppercase tracking-[0.15em] block mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground uppercase tracking-[0.15em] block mb-2">E-mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground uppercase tracking-[0.15em] block mb-2">Assunto</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground uppercase tracking-[0.15em] block mb-2">Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-foreground text-background text-xs font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity mt-4"
                >
                  Enviar Mensagem
                </button>
              </form>
            </FadeIn>

            {/* Sidebar */}
            <div className="space-y-8">
              <FadeIn delay={0.05}>
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-xs font-medium text-foreground uppercase tracking-[0.15em] mb-6">WhatsApp</h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    (66) 99978-4828
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-xs font-medium text-foreground uppercase tracking-[0.15em] mb-6">Informações</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-sm text-muted-foreground">Barra do Garças — MT</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-sm text-muted-foreground">Segunda a Sexta · 8h às 18h (MT)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-sm text-muted-foreground">contato@lucianaspinelli.com.br</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-xs font-medium text-foreground uppercase tracking-[0.15em] mb-6">Redes Sociais</h3>
                  <a
                    href="https://www.instagram.com/luciana.spinellipsico/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    @luciana.spinellipsico
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0">
        <FadeIn>
          <div className="h-[500px] w-full">
            <iframe
              title="Localização - Luciana Spinelli Psicóloga"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.5!2d-52.1564166!3d-14.0525972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x936db72ce86ecc3f%3A0xc594f0e62ffe68f4!2sLuciana%20Spinelli%20Psic%C3%B3loga!5e0!3m2!1spt-BR!2sbr!4v1710000000000&maptype=roadmap"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default ContatoPage;
