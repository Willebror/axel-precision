import { Link } from "react-router-dom";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent border-t border-border/10 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-accent-foreground/60">
        <p className="font-heading font-semibold text-accent-foreground">
          JH'S <span className="text-primary">Axelteknik</span>
        </p>
        <div className="flex items-center gap-4">
          <Link to="/integritetspolicy" className="hover:text-primary transition-colors">
            Integritetspolicy
          </Link>
          <span>·</span>
          <p>© {year} JH'S Mobila Axelteknik AB</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
