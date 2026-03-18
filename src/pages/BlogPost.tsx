import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeIn, FadeInUp } from "@/components/AnimationUtils";
import { blogArticles, getWhatsappLink } from "@/data/blogArticles";
import { getBlogImage } from "@/data/blogImages";

const WHATSAPP_URL = "https://wa.me/5566999784828?text=Olá! Gostaria de agendar uma consulta com discrição.";

// SEO tags for article footers - subtle city + keyword tags
const seoTags = {
  cities: [
    "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Curitiba",
    "Salvador", "Fortaleza", "Goiânia", "Recife", "Porto Alegre",
    "Manaus", "Campinas", "Florianópolis", "Cuiabá", "Água Boa MT",
  ],
  keywords: [
    "psicóloga narcisismo", "terapia online narcisismo", "abuso narcisista",
    "relacionamento tóxico", "gaslighting", "manipulação emocional",
    "autoestima feminina", "reconstrução emocional", "trauma bonding",
    "love bombing", "vítima de narcisista", "psicóloga online",
  ],
};

// Rotate tags per article for variety
const getArticleTags = (index: number) => {
  const cityStart = (index * 3) % seoTags.cities.length;
  const kwStart = (index * 2) % seoTags.keywords.length;
  const cities = [];
  const kws = [];
  for (let i = 0; i < 5; i++) cities.push(seoTags.cities[(cityStart + i) % seoTags.cities.length]);
  for (let i = 0; i < 4; i++) kws.push(seoTags.keywords[(kwStart + i) % seoTags.keywords.length]);
  return [...kws, ...cities];
};

const renderParagraph = (text: string, index: number) => {
  const trimmed = text.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("## ")) {
    return <h2 key={index} className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4">{trimmed.replace("## ", "")}</h2>;
  }
  if (trimmed.startsWith("### ")) {
    return <h3 key={index} className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-3">{trimmed.replace("### ", "")}</h3>;
  }
  // Handle bold text
  const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="text-foreground font-medium">{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </p>
  );
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const articleIndex = blogArticles.findIndex((a) => a.slug === slug);
  const article = articleIndex >= 0 ? blogArticles[articleIndex] : null;

  if (!article) {
    return (
      <section className="py-32 text-center">
        <h1 className="font-serif text-3xl text-foreground mb-4">Artigo não encontrado</h1>
        <Link to="/blog" className="text-gold hover:underline">Voltar ao blog</Link>
      </section>
    );
  }

  const paragraphs = article.content.split("\n\n").filter(Boolean);
  const totalParagraphs = paragraphs.length;
  const image1Pos = Math.floor(totalParagraphs * 0.25);
  const ctaPos = Math.floor(totalParagraphs * 0.5);
  const image2Pos = Math.floor(totalParagraphs * 0.75);

  // Extract headings for TOC
  const tocItems = paragraphs
    .map((p, i) => ({ text: p.trim(), index: i }))
    .filter((p) => p.text.startsWith("## "))
    .map((p) => ({ heading: p.text.replace("## ", ""), index: p.index }));

  const tags = getArticleTags(articleIndex);

  // Related articles
  const related = blogArticles
    .filter((a) => a.slug !== article.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.metaDescription,
        author: { "@type": "Person", name: "Dra. Luciana Spinelli", jobTitle: "Psicóloga Clínica" },
        datePublished: "2026-03-16",
        keywords: article.keywords.join(", "),
      }) }} />
      {article.faqSchema.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqSchema.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }) }} />
      )}

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
              {article.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.1] mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                {article.readTime}
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
              <article className="max-w-[800px]">
                {paragraphs.map((paragraph, i) => (
                  <div key={i} id={`section-${i}`}>
                    {renderParagraph(paragraph, i)}

                    {i === image1Pos && getBlogImage(article.image1) && (
                      <img
                        src={getBlogImage(article.image1)}
                        alt={article.image1Alt}
                        className="w-full rounded-xl my-10 img-border"
                        loading="lazy"
                      />
                    )}

                    {i === ctaPos && (
                      <div className="my-12 p-8 md:p-10 bg-foreground rounded-2xl text-center">
                        <p className="font-serif text-xl md:text-2xl text-primary-foreground mb-6 italic">
                          "{article.ctaPhrase}"
                        </p>
                        <a
                          href={getWhatsappLink(article.ctaWhatsappText)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground/30 text-primary-foreground text-xs font-medium uppercase tracking-[0.15em] hover:bg-primary-foreground/10 transition-colors"
                        >
                          Vamos Conversar
                        </a>
                      </div>
                    )}

                    {i === image2Pos && getBlogImage(article.image2) && (
                      <img
                        src={getBlogImage(article.image2)}
                        alt={article.image2Alt}
                        className="w-full rounded-xl my-10 img-border"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}

                {/* SEO Tags Footer - subtle */}
                <div className="mt-16 pt-8 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] text-muted-foreground/60 border border-border/50 rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>

            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-medium text-foreground uppercase tracking-[0.15em] mb-4">Sumário</p>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a
                      key={item.index}
                      href={`#section-${item.index}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      {item.heading}
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

      {/* Related Articles */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader label="Leia também" title="Artigos relacionados" />
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {related.map((rel) => (
                <Link key={rel.slug} to={`/blog/${rel.slug}`} className="group block">
                  <div className="glass rounded-2xl overflow-hidden hover:shadow-card-hover transition-shadow">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={getBlogImage(rel.image1)}
                        alt={rel.image1Alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] text-gold uppercase tracking-widest">{rel.category}</span>
                      <h4 className="font-serif text-base text-foreground mt-2 leading-snug line-clamp-2 group-hover:text-gold transition-colors">
                        {rel.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
