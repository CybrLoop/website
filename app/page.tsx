import Image from "next/image";
import { ActionLink, SectionContainer, SectionHeading, TechnicalLabel } from "@/components/site-primitives";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TechnicalBackdrop } from "@/components/technical-backdrop";

const capabilities = [
  { index: "01", title: "Security Assessments", description: "Structured assessment of applications, workflows, roles, APIs, and security controls." },
  { index: "02", title: "Risk Prioritization", description: "Focus on real-world impact rather than vulnerability count." },
  { index: "03", title: "Developer Collaboration", description: "Communicate findings clearly and work with technical teams toward remediation." },
] as const;

const approach = [
  { title: "Understand", description: "Learn the application, architecture, workflows, roles, and business context." },
  { title: "Assess", description: "Perform structured security testing within an agreed scope." },
  { title: "Prioritize", description: "Evaluate findings based on technical and business impact." },
  { title: "Collaborate", description: "Explain findings and work with the development team." },
  { title: "Improve", description: "Support the team in turning security findings into real improvements." },
] as const;

const deliverables = [
  "Security findings",
  "Severity and risk prioritization",
  "Reproduction evidence",
  "Technical impact explanation",
  "Remediation guidance",
  "Final assessment report",
  "Findings discussion",
  "Retesting when included in the engagement",
] as const;

const communityAreas = ["Research", "Tools", "Writeups", "Talks", "Projects", "Competitions"] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cybrloop.com/#organization",
      name: "CybrLoop",
      url: "https://cybrloop.com",
      logo: "https://cybrloop.com/assets/icon-512.png",
      email: "contact@cybrloop.com",
      description: "Application Security for Product Teams.",
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
          <SectionContainer className="relative z-10 grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,.85fr)] lg:gap-10 lg:py-12 xl:py-14">
            <div className="hero-copy max-w-3xl">
              <TechnicalLabel>Application Security for Product Teams</TechnicalLabel>
              <h1 className="mt-6 max-w-[12ch] text-balance text-[clamp(3.65rem,10vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
                Secure the <span className="text-signal-orange">Loop.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-cloud sm:text-xl sm:leading-9">
                CybrLoop helps product teams identify security risks, understand their real impact, prioritize what matters, and turn findings into actionable improvements in collaboration with developers.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ActionLink href="#contact">Request a Security Assessment</ActionLink>
                <ActionLink href="#approach" variant="secondary">Learn How We Work</ActionLink>
              </div>
            </div>

            <div className="hero-visual relative mx-auto aspect-square w-full max-w-[34rem] lg:max-w-none" aria-hidden="true">
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

        <section id="about" className="scroll-mt-24 border-b border-slate/60 py-24 sm:py-32 lg:pb-32 lg:pt-24">
          <SectionContainer className="grid gap-12 lg:grid-cols-[minmax(14rem,.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <SectionHeading label="01 / Who We Are" title="Security expertise that works with your team." />
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-cloud sm:text-xl sm:leading-9">
              <p className="text-white">CybrLoop is a cybersecurity team focused on application security.</p>
              <p>We work with startups and growing companies to identify security risks, understand their real impact, and turn findings into actionable improvements together with development teams.</p>
              <p>Our goal is not simply to produce vulnerability reports. We want security findings to become understandable technical decisions that teams can actually act on.</p>
            </div>
          </SectionContainer>
        </section>

        <section id="services" className="scroll-mt-24 bg-charcoal py-24 sm:py-32 lg:pb-32 lg:pt-24">
          <SectionContainer>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:items-end">
              <SectionHeading label="02 / What We Do" title="Web Application Security" />
              <p className="max-w-2xl text-lg leading-8 text-cloud lg:justify-self-end">Security assessment of web applications and related APIs—focused on the risks that matter and the improvements your team can make.</p>
            </div>
            <div className="mt-16 grid border-l border-t border-slate/80 md:grid-cols-3">
              {capabilities.map((capability) => (
                <article key={capability.title} className="group min-h-64 border-b border-r border-slate/80 p-7 transition-colors duration-300 hover:bg-deep-black/35 sm:p-8">
                  <span className="font-mono text-xs tracking-[0.18em] text-signal-orange">{capability.index}</span>
                  <h3 className="mt-14 text-2xl font-medium tracking-[-0.03em] text-white">{capability.title}</h3>
                  <p className="mt-4 leading-7 text-cloud">{capability.description}</p>
                </article>
              ))}
            </div>
          </SectionContainer>
        </section>

        <section id="approach" className="scroll-mt-24 border-y border-slate/60 py-24 sm:py-32 lg:pb-32 lg:pt-24">
          <SectionContainer>
            <SectionHeading label="03 / How We Work" title="A structured path from context to improvement." description="Understand → Assess → Prioritize → Collaborate → Improve." />
            <ol className="mt-16 grid gap-0 lg:grid-cols-5">
              {approach.map((step, index) => (
                <li key={step.title} className="relative border-l border-slate py-7 pl-10 pr-5 lg:border-l-0 lg:border-t lg:px-4 lg:pb-0 lg:pt-10">
                  <span className="absolute left-[-0.3125rem] top-8 size-2.5 bg-signal-orange lg:left-4 lg:top-[-0.3125rem]" />
                  <span className="font-mono text-xs tracking-[0.18em] text-cloud/55">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-medium text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-cloud">{step.description}</p>
                </li>
              ))}
            </ol>
          </SectionContainer>
        </section>

        <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32 lg:pb-32 lg:pt-24">
          <div className="service-grid absolute inset-0 opacity-40" aria-hidden="true" />
          <SectionContainer className="relative z-10 grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,.95fr)] lg:gap-24">
            <div>
              <SectionHeading label="Primary Service" title="Web Application Security Assessment" />
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-cloud">
                <p>A structured security assessment designed to identify weaknesses across your application, APIs, authentication flows, authorization boundaries, business logic, and other security-sensitive functionality.</p>
                <p>We combine technical testing with contextual risk analysis so your team understands what matters, why it matters, and what to do next.</p>
              </div>
              <div className="mt-10"><ActionLink href="#contact">Discuss an Assessment</ActionLink></div>
            </div>
            <div>
              <TechnicalLabel>Assessment outcomes</TechnicalLabel>
              <ul className="mt-6 border-t border-slate/80">
                {deliverables.map((deliverable, index) => (
                  <li key={deliverable} className="flex items-start gap-4 border-b border-slate/80 py-4 text-cloud">
                    <span className="mt-2 size-1.5 shrink-0 bg-signal-orange" aria-hidden="true" />
                    <span>{deliverable}</span>
                    <span className="ml-auto font-mono text-[0.625rem] text-cloud/35">{String(index + 1).padStart(2, "0")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionContainer>
        </section>

        <section id="research" className="scroll-mt-24 border-y border-slate/60 py-24 sm:py-32 lg:pb-32 lg:pt-24">
          <SectionContainer>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <SectionHeading label="04 / Research & Community" title="Security knowledge should circulate." />
              <p className="max-w-2xl text-lg leading-8 text-cloud lg:pt-8">Alongside client work, CybrLoop participates in the cybersecurity community through technical research, tools, content, talks, experiments, and competitions.</p>
            </div>
            <ul className="mt-16 grid border-l border-t border-slate/70 sm:grid-cols-2 lg:grid-cols-3">
              {communityAreas.map((area, index) => (
                <li key={area} className="flex min-h-28 items-end justify-between border-b border-r border-slate/70 p-5">
                  <span className="text-lg font-medium text-white">{area}</span>
                  <span className="font-mono text-[0.625rem] tracking-widest text-signal-orange">{String(index + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
          </SectionContainer>
        </section>

        <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32 lg:pb-32 lg:pt-24">
          <div className="absolute -right-32 top-1/2 size-[34rem] -translate-y-1/2 opacity-[0.045] lg:right-0" aria-hidden="true">
            <Image src="/assets/logo-mark-light.svg" alt="" fill sizes="34rem" className="object-contain" />
          </div>
          <SectionContainer className="relative z-10">
            <TechnicalLabel>05 / Contact</TechnicalLabel>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">Have an application you want assessed—or something security-related you&apos;d like to discuss?</h2>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-cloud">Let&apos;s talk. We&apos;ll start with your application, your context, and what your team needs to understand.</p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <ActionLink href="mailto:contact@cybrloop.com">Start a Conversation</ActionLink>
              <a href="mailto:contact@cybrloop.com" className="link-underline w-fit text-lg text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-orange focus-visible:ring-offset-4 focus-visible:ring-offset-deep-black">contact@cybrloop.com</a>
            </div>
          </SectionContainer>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
