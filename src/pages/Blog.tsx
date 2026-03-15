import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";

const blogPosts = [
  {
    slug: "ansiedade-sinais-e-como-lidar",
    title: "Ansiedade: sinais de alerta e como lidar no dia a dia",
    excerpt: "A ansiedade é uma resposta natural do corpo, mas quando se torna frequente e intensa, pode comprometer significativamente a qualidade de vida. Aprenda a reconhecer os sinais.",
    date: "15 de Março, 2026",
    readTime: "5 min de leitura",
    category: "Saúde Mental",
  },
  {
    slug: "terapia-online-funciona",
    title: "Terapia online funciona? O que a ciência diz",
    excerpt: "Muitas pessoas ainda têm dúvidas sobre a eficácia da terapia online. Neste artigo, apresento as evidências científicas que comprovam os benefícios do atendimento remoto.",
    date: "8 de Março, 2026",
    readTime: "4 min de leitura",
    category: "Terapia Online",
  },
  {
    slug: "primeira-sessao-terapia",
    title: "O que esperar da primeira sessão de terapia",
    excerpt: "Se você está pensando em começar a terapia mas não sabe o que esperar, este artigo vai te ajudar a entender como funciona a primeira consulta e como se preparar.",
    date: "1 de Março, 2026",
    readTime: "6 min de leitura",
    category: "Para Iniciantes",
  },
  {
    slug: "adolescencia-desafios-emocionais",
    title: "Adolescência: como ajudar seu filho nos desafios emocionais",
    excerpt: "A adolescência é uma fase de grandes mudanças. Entenda como os pais podem oferecer suporte emocional e quando buscar ajuda profissional para seus filhos.",
    date: "22 de Fevereiro, 2026",
    readTime: "7 min de leitura",
    category: "Adolescentes",
  },
  {
    slug: "autoestima-construir-relacao-saudavel",
    title: "Autoestima: como construir uma relação saudável consigo",
    excerpt: "A autoestima não é algo fixo — ela pode ser cultivada e fortalecida. Descubra práticas baseadas em evidências para desenvolver uma autoimagem mais positiva.",
    date: "15 de Fevereiro, 2026",
    readTime: "5 min de leitura",
    category: "Autoconhecimento",
  },
  {
    slug: "luto-processo-cura",
    title: "Luto: entendendo o processo e encontrando caminhos de cura",
    excerpt: "O luto é uma experiência universal, mas cada pessoa vive de maneira única. Compreenda as fases do luto e como a terapia pode auxiliar nesse processo.",
    date: "8 de Fevereiro, 2026",
    readTime: "6 min de leitura",
    category: "Saúde Mental",
  },
];

const BlogPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-accent/50">
        <div className="container mx-auto px-6">
          <FadeInUp className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Blog</p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
              Conteúdo para o seu bem-estar
            </h1>
            <p className="text-lg text-muted-foreground">
              Artigos sobre saúde mental, autoconhecimento e psicologia clínica para informar e inspirar.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-card rounded-3xl shadow-card overflow-hidden max-w-5xl mx-auto">
              <div className="p-8 md:p-12">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-xs text-muted-foreground mb-6">
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Ler artigo completo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24 md:py-32 bg-accent/50">
        <div className="container mx-auto px-6">
          <SectionHeader label="Artigos" title="Todos os artigos" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={(i % 3) * 0.05}>
                <article className="bg-card rounded-3xl p-7 shadow-card h-full flex flex-col">
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg text-foreground mb-3 leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
