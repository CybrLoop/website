import Image from "next/image";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cybrloop" },
  { label: "GitHub", href: "https://github.com/CybrLoop" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-slate bg-charcoal py-12">
      <div className="mx-auto grid w-full max-w-[80rem] gap-10 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
        <div>
          <a href="#main-content" aria-label="CybrLoop home" className="relative block h-9 w-[9.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange">
            <Image src="/assets/logo-full-light.svg" alt="CybrLoop" fill sizes="156px" className="object-contain object-left" />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-6 text-cloud/90">Application Security for Product Teams.</p>
        </div>
        <div className="space-y-4 md:text-right">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.9375rem] text-cloud md:justify-end md:gap-y-2 md:text-sm">
            <a className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal" href="mailto:contact@cybrloop.com">contact@cybrloop.com</a>
            {socialLinks.map((link) => (
              <a key={link.label} className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.12em] text-cloud/60 sm:flex-row sm:justify-end sm:gap-5 md:text-[0.6875rem] md:tracking-[0.14em] md:text-cloud/50">
            <a className="transition-colors hover:text-cloud focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange focus-visible:ring-offset-4 focus-visible:ring-offset-charcoal" href="https://cybrloop.com">cybrloop.com</a>
            <p>© {new Date().getFullYear()} CybrLoop</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
