import { motion } from "framer-motion";
import { Award, BookOpen, Heart } from "lucide-react";

const ease = [0.2, 0.8, 0.2, 1];

const highlights = [
  { icon: Award, label: "CRP 18/03885" },
  { icon: BookOpen, label: "Abordagem Cognitivo-Comportamental" },
  { icon: Heart, label: "Atendimento humanizado" },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            Sobre
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Luciana Spinelli
          </h2>
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
              relacionamentos e outros desafios emocionais.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-accent text-sm text-foreground"
              >
                <item.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          <div className="bg-accent rounded-3xl p-12 md:p-16 relative">
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-snug italic">
              "O processo terapêutico é uma jornada de autoconhecimento — e cada passo importa."
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground font-medium">
              — Luciana Spinelli
            </p>
            <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-primary/15" />
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-xl bg-primary/10" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
