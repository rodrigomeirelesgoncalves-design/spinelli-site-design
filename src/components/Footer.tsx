import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-lg text-foreground">Luciana Spinelli</p>
          <p className="text-xs text-muted-foreground mt-1">
            Psicóloga Clínica · CRP 18/03885
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/luciana.spinellipsico/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.google.com/maps/place/Luciana+Spinelli+Psic%C3%B3loga/@-14.0525972,-52.1564166,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Google Maps
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} Luciana Spinelli Psicóloga. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
