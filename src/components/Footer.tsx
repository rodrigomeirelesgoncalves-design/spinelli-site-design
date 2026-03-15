import { Link } from "react-router-dom";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-serif text-2xl mb-2">Luciana Spinelli</p>
          <p className="text-sm opacity-70 mb-4">
            Psicóloga Clínica · CRP 18/03885
          </p>
          <p className="text-sm opacity-60 leading-relaxed">
            Psicoterapia clínica com foco em acolhimento, ética e o desenvolvimento de uma vida com mais sentido.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-medium text-sm mb-4 opacity-90">Navegação</p>
          <nav className="grid grid-cols-2 gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="font-medium text-sm mb-4 opacity-90">Contato</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm opacity-60">
              <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span>Barra do Garças — MT</span>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-60">
              <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span>WhatsApp</span>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-60">
              <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
              <span>contato@lucianaspinelli.com.br</span>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/luciana.spinellipsico/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.google.com/maps/place/Luciana+Spinelli+Psic%C3%B3loga/@-14.0525972,-52.1564166,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-50">
          © {new Date().getFullYear()} Luciana Spinelli Psicóloga. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-xs opacity-50">
          <span>Política de Privacidade</span>
          <span>Termos de Uso</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
