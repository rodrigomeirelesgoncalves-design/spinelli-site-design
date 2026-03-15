import { motion } from "framer-motion";
import heroImage from "@/assets/luciana-hero.jpg";

const ease = [0.2, 0.8, 0.2, 1] as const;

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5566999999999?text=Olá! Gostaria de agendar uma consulta.",
      "_blank"
    );
  };

  return (
    <section id="inicio" className="relative pt-16 overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
              Psicóloga Clínica · CRP 18/03885
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Um espaço seguro para a sua transformação pessoal.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Psicoterapia clínica com foco em acolhimento, ética e o
              desenvolvimento de uma vida com mais sentido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Agendar Consulta
              </button>
              <button
                onClick={() =>
                  document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-2xl border border-border text-foreground font-medium hover:bg-accent transition-colors"
              >
                Conheça meu trabalho
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={heroImage}
                alt="Luciana Spinelli - Psicóloga Clínica"
                className="w-full rounded-3xl img-border object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
