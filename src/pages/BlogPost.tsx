import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn, FadeInUp } from "@/components/AnimationUtils";

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Gostaria de agendar uma consulta com discrição.";

const postsContent: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  sections: { heading: string; content: string }[];
}> = {
  "como-identificar-um-narcisista": {
    title: "Como identificar um narcisista: 10 sinais que você não pode ignorar",
    category: "Narcisismo",
    date: "15 de Março, 2026",
    readTime: "8 min de leitura",
    sections: [
      { heading: "O charme inicial", content: "Narcisistas são extremamente carismáticos no início. Eles sabem exatamente o que dizer para conquistar sua confiança. O love bombing — bombardeio de amor — é a primeira fase de um ciclo que pode se tornar devastador. Presentes excessivos, mensagens constantes, declarações prematuras de amor. Tudo parece perfeito demais. E é exatamente isso que deveria acender o primeiro sinal de alerta." },
      { heading: "A necessidade de controle", content: "Aos poucos, o narcisista começa a controlar aspectos sutis da sua vida: com quem você sai, como se veste, o que posta nas redes sociais. No início pode parecer ciúme ou proteção. Mas é controle. E ele se intensifica progressivamente, isolando você das pessoas que poderiam te ajudar a enxergar a realidade." },
      { heading: "Gaslighting constante", content: "Uma das ferramentas mais poderosas do narcisista é fazer você duvidar da sua própria percepção. 'Isso nunca aconteceu', 'Você está exagerando', 'Você é muito sensível'. Essas frases repetidas sistematicamente corroem sua autoconfiança e fazem você acreditar que o problema é você." },
      { heading: "Ciclos de idealização e descarte", content: "O narcisista alterna entre momentos de extrema valorização e completa desvalorização. Num dia você é a pessoa mais importante do mundo. No outro, é descartada como se não tivesse valor. Esses ciclos criam uma montanha-russa emocional que gera dependência psicológica profunda." },
      { heading: "Quando buscar ajuda", content: "Se você reconhece esses padrões em seus relacionamentos, o primeiro passo é buscar orientação profissional especializada. Não se trata de fraqueza — é estratégia. Uma psicóloga especializada em narcisismo pode te ajudar a romper o ciclo e reconstruir sua vida com segurança." },
    ],
  },
};

const defaultPost = {
  title: "Artigo em desenvolvimento",
  category: "Em breve",
  date: "Em breve",
  readTime: "—",
  sections: [
    { heading: "Conteúdo em breve", content: "Este artigo está sendo desenvolvido e será publicado em breve. Enquanto isso, siga nosso Instagram para conteúdos diários sobre narcisismo e relacionamentos." },
  ],
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postsContent[slug] || defaultPost : defaultPost;

  const tocItems = post.sections.map((s) => s.heading);

  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-[0.15em] mb-8 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar ao blog
            </Link>
            <span className="inline-block px-4 py-1.5 border border-gold/30 text-gold text-xs uppercase tracking-[0.15em] mb-6">
              {post.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                {post.readTime}
              </span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Content + TOC */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_250px] gap-16">
            {/* Article */}
            <FadeIn>
              <article className="max-w-[800px] space-y-10">
                {post.sections.map((section, i) => (
                  <div key={i} id={`section-${i}`}>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{section.heading}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </article>
            </FadeIn>

            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-medium text-foreground uppercase tracking-[0.15em] mb-4">Sumário</p>
                <nav className="space-y-2">
                  {tocItems.map((item, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Post CTA */}
      <section className="py-20 md:py-28 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-3xl text-foreground mb-4">
                Sente que este texto descreve sua vida?
              </h3>
              <p className="text-muted-foreground mb-8">
                Vamos conversar com discrição. Agende sua consulta e dê o primeiro passo para a sua libertação.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-foreground text-background text-xs font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
              >
                Vamos Conversar
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
