const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent border-t border-border/10 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-accent-foreground/60">
        <p className="font-heading font-semibold text-accent-foreground">
          JH'S <span className="text-primary">Axelteknik</span>
        </p>
        <p>© {year} JH'S Mobila Axelteknik AB. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
