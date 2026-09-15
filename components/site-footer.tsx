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
          <p className="mt-5 max-w-sm text-sm leading-6 text-cloud">Application Security for Product Teams.</p>
        </div>
        <div className="space-y-4 md:text-right">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-cloud md:justify-end">
            <a className="transition-colors hover:text-white focus-visible:outline-none focus-visible:text-signal-orange" href="mailto:contact@cybrloop.com">contact@cybrloop.com</a>
            {socialLinks.map((link) => (
              <a key={link.label} className="transition-colors hover:text-white focus-visible:outline-none focus-visible:text-signal-orange" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-cloud/50 sm:flex-row sm:justify-end sm:gap-5">
            <a className="transition-colors hover:text-cloud" href="https://cybrloop.com">cybrloop.com</a>
            <p>© {new Date().getFullYear()} CybrLoop</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
