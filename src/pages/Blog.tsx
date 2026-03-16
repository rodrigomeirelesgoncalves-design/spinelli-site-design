import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Gostaria de receber o Guia de Identificação de Narcisistas.";

const blogPosts = [
  {
    slug: "como-identificar-um-narcisista",
    title: "Como identificar um narcisista: 10 sinais que você não pode ignorar",
    excerpt: "Os narcisistas são mestres da dissimulação. Aprenda a reconhecer os padrões de comportamento antes de se tornar mais uma vítima.",
    date: "15 de Março, 2026",
    readTime: "8 min de leitura",
    category: "Narcisismo",
  },
  {
    slug: "trauma-bonding-por-que-e-tao-dificil-sair",
    title: "Trauma Bonding: por que é tão difícil sair de um relacionamento abusivo",
    excerpt: "O vínculo traumático é um dos mecanismos mais poderosos que mantêm vítimas presas. Entenda a neurociência por trás disso.",
    date: "8 de Março, 2026",
    readTime: "7 min de leitura",
    category: "Relacionamentos",
  },
  {
    slug: "gaslighting-manipulacao-da-realidade",
    title: "Gaslighting: quando alguém manipula sua percepção da realidade",
    excerpt: "Você já ouviu 'isso nunca aconteceu' ou 'você está exagerando'? Esse é um dos sinais mais claros de gaslighting.",
    date: "1 de Março, 2026",
    readTime: "6 min de leitura",
    category: "Narcisismo",
  },
  {
    slug: "autoestima-apos-relacionamento-toxico",
    title: "Como reconstruir a autoestima após um relacionamento tóxico",
    excerpt: "Relacionamentos com narcisistas destroem sistematicamente sua autoestima. Conheça o caminho de volta para si mesma.",
    date: "22 de Fevereiro, 2026",
    readTime: "5 min de leitura",
    category: "Autoestima",
  },
  {
    slug: "mulheres-bem-sucedidas-e-narcisistas",
    title: "Por que mulheres bem-sucedidas atraem narcisistas",
    excerpt: "Quanto mais brilhante você é, mais atraente se torna para um narcisista. Entenda essa dinâmica e proteja-se.",
    date: "15 de Fevereiro, 2026",
    readTime: "7 min de leitura",
    category: "Relacionamentos",
  },
  {
    slug: "no-contact-guia-completo",
    title: "No Contact: o guia completo para se libertar de um narcisista",
    excerpt: "A estratégia de no-contact é uma das ferramentas mais eficazes para romper o ciclo narcisista. Saiba como implementar.",
    date: "8 de Fevereiro, 2026",
    readTime: "9 min de leitura",
    category: "Narcisismo",
  },
];

const BlogPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-36 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">Blog</p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-[1.05] mb-8">
              Conhecimento é proteção
            </h1>
            <p className="text-lg text-muted-foreground">
              Artigos sobre narcisismo, relacionamentos tóxicos e reconstrução emocional para mulheres de alto valor.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="glass rounded-2xl overflow-hidden max-w-5xl mx-auto">
              <div className="p-10 md:p-14">
                <span className="inline-block px-4 py-1.5 border border-gold/30 text-gold text-xs uppercase tracking-[0.15em] mb-6">
                  {blogPosts[0].category}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5 leading-snug">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-xs text-muted-foreground mb-8">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-foreground uppercase tracking-[0.15em] hover:gap-3 transition-all"
                >
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-3xl text-primary-foreground mb-4">
                Guia de Identificação de Narcisistas
              </h3>
              <p className="text-primary-foreground/60 mb-8">
                Receba gratuitamente um guia completo para identificar personalidades narcisistas antes que seja tarde.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 border border-primary-foreground/30 text-primary-foreground text-xs font-medium uppercase tracking-[0.15em] hover:bg-primary-foreground/10 transition-colors"
              >
                Receber Guia Gratuito
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <SectionHeader label="Artigos" title="Todos os artigos" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={(i % 3) * 0.05}>
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <article className="glass rounded-2xl p-8 h-full flex flex-col hover:shadow-card-hover transition-shadow duration-300">
                    <span className="inline-block self-start px-3 py-1 border border-gold/30 text-gold text-xs uppercase tracking-wider mb-5">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-xl text-foreground mb-3 leading-snug">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                        {post.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
