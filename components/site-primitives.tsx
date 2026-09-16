import type { ReactNode } from "react";

export function SectionContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[80rem] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

export function TechnicalLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[0.8125rem] font-medium uppercase leading-5 tracking-[0.15em] text-cloud/90 sm:text-xs sm:leading-4 sm:tracking-[0.17em]">
      <span className="size-1.5 shrink-0 bg-signal-orange" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <TechnicalLabel>{label}</TechnicalLabel>
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-lg leading-8 text-cloud">{description}</p> : null}
    </div>
  );
}

export function ActionLink({ children, href, variant = "primary" }: { children: ReactNode; href: string; variant?: "primary" | "secondary" }) {
  const styles = variant === "primary"
    ? "border-signal-orange bg-signal-orange text-deep-black hover:border-white hover:bg-white"
    : "border-slate/90 bg-transparent text-white hover:border-cloud hover:bg-charcoal";

  return (
    <a href={href} className={`group inline-flex min-h-12 w-full items-center justify-center gap-4 border px-4 py-3 text-center text-sm font-semibold tracking-[-0.01em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange focus-visible:ring-offset-4 focus-visible:ring-offset-deep-black min-[360px]:gap-6 min-[360px]:px-6 min-[360px]:text-[0.9375rem] sm:w-auto ${styles}`}>
      <span>{children}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
    </a>
  );
}
