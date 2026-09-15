"use client";

import { useEffect, useRef, useState } from "react";

type NavigationItem = { href: string; label: string };

export function MobileNav({ items }: { items: readonly NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    firstLinkRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-slate text-white transition-colors hover:border-cloud focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="relative block h-3.5 w-5" aria-hidden="true">
          <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${isOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`absolute left-0 top-[6px] h-px w-5 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </span>
      </button>

      {isOpen ? (
        <div id="mobile-navigation" className="absolute left-0 top-full w-full border-b border-slate bg-deep-black/98 px-5 pb-6 pt-3 shadow-2xl">
          <nav aria-label="Mobile navigation">
            <ul className="border-t border-slate/70">
              {items.map((item, index) => (
                <li key={item.href} className="border-b border-slate/70">
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-12 items-center justify-between py-3 text-sm font-medium text-cloud transition-colors hover:text-white focus-visible:outline-none focus-visible:text-signal-orange"
                  >
                    {item.label}<span className="text-signal-orange" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contact" onClick={() => setIsOpen(false)} className="mt-5 flex min-h-12 items-center justify-center bg-signal-orange px-5 py-3 text-sm font-semibold text-deep-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Contact Us</a>
        </div>
      ) : null}
    </div>
  );
}
