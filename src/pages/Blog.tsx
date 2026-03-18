import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FadeIn, FadeInUp, SectionHeader } from "@/components/AnimationUtils";
import { blogArticles } from "@/data/blogArticles";
import { getBlogImage } from "@/data/blogImages";

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Gostaria de receber o Guia de Identificação de Narcisistas.";

const BlogPage = () => {
  const featured = blogArticles[0];
  const allPosts = blogArticles;

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
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={getBlogImage(featured.image1)}
                    alt={featured.image1Alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <span className="inline-block self-start px-4 py-1.5 border border-gold/30 text-gold text-xs uppercase tracking-[0.15em] mb-6">
                    {featured.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-6 text-xs text-muted-foreground mb-8">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {featured.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-medium text-foreground uppercase tracking-[0.15em] hover:gap-3 transition-all"
                  >
                    Ler artigo completo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
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
            {allPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={(i % 3) * 0.05}>
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <article className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-card-hover transition-shadow duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getBlogImage(post.image1)}
                        alt={post.image1Alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <span className="inline-block self-start px-3 py-1 border border-gold/30 text-gold text-xs uppercase tracking-wider mb-4">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-lg text-foreground mb-3 leading-snug">{post.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow line-clamp-3">
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
