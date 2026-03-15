import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const ease = [0.2, 0.8, 0.2, 1] as const;

const LocationSection = () => (
  <section id="contato" className="py-24 md:py-32 bg-accent/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
          Localização & Contato
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Venha me conhecer
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease }}
          className="bg-card rounded-3xl p-8 shadow-card space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-sm mb-1">Endereço</h3>
              <p className="text-sm text-muted-foreground">
                Barra do Garças — MT
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-sm mb-1">Horário</h3>
              <p className="text-sm text-muted-foreground">
                Segunda a Sexta · 8h às 18h
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-sm mb-1">Contato</h3>
              <p className="text-sm text-muted-foreground">Via WhatsApp</p>
            </div>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/5566999999999?text=Olá! Gostaria de agendar uma consulta.",
                "_blank"
              )
            }
            className="w-full mt-4 px-6 py-3.5 rounded-2xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Agendar pelo WhatsApp
          </button>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="rounded-3xl overflow-hidden shadow-card min-h-[360px]"
        >
          <iframe
            title="Localização - Luciana Spinelli Psicóloga"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.5!2d-52.1564166!3d-14.0525972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x936db72ce86ecc3f%3A0xc594f0e62ffe68f4!2sLuciana%20Spinelli%20Psic%C3%B3loga!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "360px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;
