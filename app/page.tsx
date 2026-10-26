import Image from "next/image";
import { ActionLink, SectionContainer, SectionHeading, TechnicalLabel } from "@/components/site-primitives";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TechnicalBackdrop } from "@/components/technical-backdrop";

const workstreams = [
  { index: "01", title: "Services", description: "Specialized security services focused on helping organizations identify risks, understand their impact, and improve security." },
  { index: "02", title: "Research & Projects", description: "Researching security problems, developing tools, and working on technical projects that offer practical value." },
  { index: "03", title: "Community & Education", description: "Sharing knowledge through talks, workshops, technical content, and collaboration with the cybersecurity community." },
  { index: "04", title: "Competitions & Challenges", description: "Participating in CTFs and technical challenges to build practical skills, exchange experience, and explore new approaches." },
] as const;

const approach = [
  { title: "Understand", description: "Identify real problems and understand their context." },
  { title: "Collaborate", description: "Bring different skills and perspectives together." },
  { title: "Build", description: "Develop, test, and improve practical solutions." },
  { title: "Share", description: "Make useful knowledge and results available to others." },
  { title: "Improve", description: "Learn from experience and use it to do better work." },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cybrloop.com/#organization",
      name: "CybrLoop",
      url: "https://cybrloop.com",
      logo: "https://cybrloop.com/assets/icon-512.png",
      description: "CybrLoop is a cybersecurity team working to improve digital security through technical projects, research, knowledge sharing, and specialized security services.",
      sameAs: ["https://github.com/CybrLoop", "https://www.linkedin.com/company/cybrloop"],
    },
    {
      "@type": "WebSite",
      "@id": "https://cybrloop.com/#website",
      url: "https://cybrloop.com",
      name: "CybrLoop",
      publisher: { "@id": "https://cybrloop.com/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a href="#main-content" className="sr-only z-[100] bg-white px-4 py-3 text-deep-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="relative isolate flex min-h-[calc(100svh-4.75rem)] items-center overflow-hidden border-b border-slate/60 pt-20 sm:pt-24 lg:min-h-svh lg:items-start lg:pt-[4.75rem]">
          <TechnicalBackdrop />
          <SectionContainer className="relative z-10 grid items-center gap-10 py-20 sm:gap-14 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,.85fr)] lg:gap-10 lg:py-12 xl:py-14">
            <div className="hero-copy max-w-3xl">
              <TechnicalLabel>CYBERSECURITY TEAM</TechnicalLabel>
              <h1 className="mt-6 max-w-[12ch] text-balance text-[clamp(3.65rem,10vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
                Secure the <span className="text-signal-orange">Loop.</span>
              </h1>
              <p className="mt-8 max-w-[42rem] text-pretty text-lg leading-8 text-cloud/95 sm:text-xl sm:leading-9">
                CybrLoop is a cybersecurity team working to improve digital security through technical projects, research, knowledge sharing, and specialized security services.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
                <ActionLink href="#workstreams">What We Do</ActionLink>
                <ActionLink href="#contact" variant="secondary">Get in Touch</ActionLink>
              </div>
            </div>

            <div className="hero-visual relative mx-auto aspect-square w-[84%] max-w-[18rem] sm:w-full sm:max-w-[34rem] lg:max-w-none" aria-hidden="true">
              <div className="absolute inset-[8%] rounded-full border border-dashed border-cloud/20" />
              <div className="absolute inset-[15%] rounded-full border border-slate/55" />
              <div className="absolute left-[8%] top-[18%] h-px w-[84%] bg-slate/55" />
              <div className="absolute bottom-[18%] left-[8%] h-px w-[84%] bg-slate/55" />
              <span className="absolute left-[6%] top-[17.4%] size-2 bg-signal-orange" />
              <span className="absolute bottom-[17.3%] right-[6%] size-2 bg-signal-orange" />
              <span className="absolute right-[2%] top-[47%] font-mono text-[0.625rem] tracking-[0.18em] text-cloud/45">35.1775° N</span>
              <Image src="/assets/logo-mark-light.svg" alt="" fill priority sizes="(max-width: 1024px) 80vw, 40vw" className="object-contain p-[18%] opacity-[0.17]" />
              <div className="marker-grid absolute right-[2%] top-[7%]" />
              <div className="marker-grid absolute bottom-[4%] left-[2%]" />
            </div>
          </SectionContainer>
        </section>

        <section id="about" className="scroll-mt-24 border-b border-slate/60 pb-24 pt-20 sm:py-32 lg:pb-32 lg:pt-24">
          <SectionContainer className="grid gap-12 lg:grid-cols-[minmax(14rem,.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <SectionHeading label="01 / Who We Are" title="Security expertise built through collaboration." />
            <div className="max-w-[44rem] space-y-6 text-lg leading-8 text-cloud/95 sm:text-xl sm:leading-9">
              <p className="text-white">CybrLoop brings together people with different technical backgrounds to work on cybersecurity projects, research, and initiatives.</p>
              <p>We believe that sharing knowledge, building practical solutions, and working together can help improve security while developing the skills and experience of everyone involved.</p>
            </div>
          </SectionContainer>
        </section>

        <section id="workstreams" className="scroll-mt-24 bg-charcoal pb-24 pt-20 sm:py-32 lg:pb-32 lg:pt-24">
          <SectionContainer>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-end">
              <SectionHeading label="02 / What We Do" title="Different areas. One direction." />
              <p className="max-w-[40rem] text-[1.0625rem] leading-8 text-cloud/95 lg:justify-self-end">Our work covers four areas, each contributing to better cybersecurity through practical work, shared knowledge, and collaboration.</p>
            </div>
            <div className="mt-16 grid border-l border-t border-slate/70 md:grid-cols-2">
              {workstreams.map((workstream) => (
                <article key={workstream.title} className="group border-b border-r border-slate/70 p-6 transition-colors duration-300 hover:bg-deep-black/30 sm:min-h-64 sm:p-8">
                  <span className="font-mono text-xs tracking-[0.18em] text-signal-orange">{workstream.index}</span>
                  <h3 className="mt-10 text-2xl font-medium tracking-[-0.03em] text-white sm:mt-14">{workstream.title}</h3>
                  <p className="mt-4 text-[1.0625rem] leading-7 text-cloud/95">{workstream.description}</p>
                </article>
              ))}
            </div>
          </SectionContainer>
        </section>

        <section id="approach" className="scroll-mt-24 border-y border-slate/60 pb-24 pt-20 sm:py-32 lg:pb-32 lg:pt-24">
          <SectionContainer>
            <SectionHeading label="03 / Our Approach" title="From ideas to meaningful contributions." />
            <ul className="mt-16 grid gap-0 lg:grid-cols-5">
              {approach.map((step, index) => (
                <li key={step.title} className="relative border-l border-slate/70 py-8 pl-10 pr-5 lg:border-l-0 lg:border-t lg:px-4 lg:pb-0 lg:pt-10">
                  <span className="absolute left-[-0.3125rem] top-8 size-2.5 bg-signal-orange lg:left-4 lg:top-[-0.3125rem]" />
                  <span className="font-mono text-xs tracking-[0.16em] text-cloud/70">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-medium text-white">{step.title}</h3>
                  <p className="mt-3 text-base leading-6 text-cloud/90 sm:text-[0.9375rem]">{step.description}</p>
                </li>
              ))}
            </ul>
          </SectionContainer>
        </section>

        <section id="contact" className="relative scroll-mt-24 overflow-hidden pb-24 pt-20 sm:py-32 lg:pb-32 lg:pt-24">
          <div className="absolute -right-32 top-1/2 size-[34rem] -translate-y-1/2 opacity-[0.045] lg:right-0" aria-hidden="true">
            <Image src="/assets/logo-mark-light.svg" alt="" fill sizes="34rem" className="object-contain" />
          </div>
          <SectionContainer className="relative z-10">
            <TechnicalLabel>04 / Contact</TechnicalLabel>
            <h2 className="mt-6 max-w-[58rem] text-balance text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.045em] text-white min-[360px]:text-4xl sm:text-[3.5rem] sm:leading-[1.06] lg:text-[4rem]">Let&apos;s talk about security.</h2>
            <div className="mt-7 max-w-2xl space-y-4 text-lg leading-8 text-cloud/95 sm:text-xl">
              <p>Whether you&apos;re building a product, running a business, working in cybersecurity, or exploring an idea, we&apos;re open to discussions and collaboration.</p>
              <p>Tell us what you&apos;re working on or what you&apos;d like to discuss.</p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ActionLink href="https://wa.me/963982698204" target="_blank" rel="noopener noreferrer" icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                  <path d="M20.5 11.5a8.5 8.5 0 0 1-12.8 7.3L3 20l1.3-4.7a8.5 8.5 0 1 1 16.2-3.8Z" />
                  <path d="M8.2 8.1c-.4.4-.6 1-.4 1.6.8 2.8 3 5 5.8 5.8.6.2 1.2 0 1.6-.4l.5-.6-2.1-1.7-1 1a7.5 7.5 0 0 1-2.4-2.4l1-1-1.7-2.1-.6.5Z" />
                </svg>
              }>
                WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </ActionLink>
              <ActionLink href="https://t.me/cybrloop" target="_blank" rel="noopener noreferrer" variant="secondary" icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                  <path d="M21.5 3 2.8 10.5c-.9.4-.9 1.6.1 1.9l5.1 1.5 1.7 5.2c.3.9 1.5 1 2 .2l2.4-3.4 4.6 3.4c.7.5 1.6.1 1.8-.8L23 4.4c.2-1-.6-1.7-1.5-1.4Z" />
                  <path d="m8 13.9 11-7.7-9.3 12.9" />
                </svg>
              }>
                Telegram<span className="sr-only"> (opens in a new tab)</span>
              </ActionLink>
            </div>
          </SectionContainer>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
