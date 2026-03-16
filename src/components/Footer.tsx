import { Link } from "react-router-dom";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = [
  { label: "Início", href: "/" },
  { label: "Especialidades", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-16">
        <div>
          <p className="font-serif text-3xl mb-3">Luciana Spinelli</p>
          <p className="text-xs uppercase tracking-[0.15em] opacity-50 mb-6">
            Psicóloga Clínica · CRP 18/03885
          </p>
          <p className="text-sm opacity-50 leading-relaxed">
            Especialista em reconstrução de identidade e libertação do ciclo narcisista para mulheres de alto valor.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] font-medium mb-6 opacity-70">Navegação</p>
          <nav className="grid grid-cols-2 gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] font-medium mb-6 opacity-70">Contato</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm opacity-50">
              <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span>Barra do Garças — MT</span>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-50">
              <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span>(66) 99978-4828</span>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-50">
              <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span>contato@lucianaspinelli.com.br</span>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/luciana.spinellipsico/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.google.com/maps/place/Luciana+Spinelli+Psic%C3%B3loga/@-14.0525972,-52.1564166,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Luciana Spinelli Psicóloga. Todos os direitos reservados.
        </p>
        <div className="flex gap-8 text-xs opacity-40">
          <span>Política de Privacidade</span>
          <span>Termos de Uso</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
