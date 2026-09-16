import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";

const navigationItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate/50 bg-deep-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-[80rem] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#main-content" aria-label="CybrLoop home" className="relative h-11 w-[8.75rem] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange focus-visible:ring-offset-4 focus-visible:ring-offset-deep-black sm:h-[2.15rem] sm:w-[9.4rem]">
          <Image src="/assets/logo-full-light.svg" alt="CybrLoop" fill priority sizes="150px" className="object-contain object-left py-1.5 sm:py-0" />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[0.9375rem] font-medium text-cloud/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange focus-visible:ring-offset-4 focus-visible:ring-offset-deep-black">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contact" className="inline-flex min-h-10 items-center border border-signal-orange px-5 py-2 text-sm font-semibold text-signal-orange transition-colors hover:bg-signal-orange hover:text-deep-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange focus-visible:ring-offset-4 focus-visible:ring-offset-deep-black">Contact Us</a>
        </div>
        <MobileNav items={navigationItems} />
      </div>
    </header>
  );
}
