# CybrLoop Website — Agent Instructions (تعليمات الوكيل)

## Project Context (سياق المشروع)

This repository contains the public website for CybrLoop.

Before making UI (واجهة المستخدم), content, or structural changes, read:

- `docs/website-brief.md`
- `docs/brand.md`

These documents are the source of truth for positioning, content direction, visual identity, and scope.

Do not invent new brand directions, services, claims, or visual systems unless explicitly requested.

---

## Technology Stack (الحزمة التقنية)

Use:

- Next.js (نيكست جي إس)
- App Router (موجّه التطبيقات)
- TypeScript (تايب سكربت)
- Tailwind CSS (تايلويند سي إس إس)

Prefer Server Components (مكوّنات الخادم) by default.

Use Client Components (مكوّنات العميل) only when interaction requires them.

Do not introduce a database, authentication, CMS (نظام إدارة محتوى), backend API (واجهة خلفية), or state-management library unless explicitly requested.

---

## General Engineering Principles (مبادئ الهندسة العامة)

Keep the implementation:

- Simple
- Maintainable
- Fast
- Accessible
- Responsive
- Easy to extend

Avoid over-engineering.

Do not create abstractions before they provide clear value.

Do not split small components unnecessarily.

Prefer obvious code over clever code.

---

## Dependencies (الاعتماديات)

Keep external dependencies minimal.

Before adding a dependency:

1. Check whether the requirement can be implemented cleanly with the existing stack.
2. Add the dependency only when it provides meaningful value.
3. Prefer mature and lightweight packages.

Do not add UI frameworks or large component libraries unless explicitly requested.

Avoid introducing a dependency for functionality that can reasonably be implemented with CSS (سي إس إس) or a small amount of code.

---

## Project Structure (بنية المشروع)

Prefer a structure similar to:

website/
├── AGENTS.md
├── docs/
│   ├── brand.md
│   └── website-brief.md
├── public/
├── src/
│   ├── app/
│   ├── components/
│   └── lib/
└── ...

Do not create folders without a clear need.

Reusable site-level components may live under:

`src/components`

Small section-specific components may remain close to the section that uses them.

---

## Design System (نظام التصميم)

Follow `docs/brand.md`.

The visual direction is:

Structured Technical Minimalism (بساطة تقنية منظمة)

Primary colors:

- Deep Black (أسود عميق): `#0B0D0D`
- Charcoal (فحمي): `#1A1A1E`
- Slate (رمادي أردوازي): `#3A3A40`
- Cloud (رمادي فاتح): `#D7D7DB`
- White (أبيض): `#FAFAFB`
- Signal Orange (برتقالي إشاري): `#FF7A1A`

Signal Orange (البرتقالي الإشاري) is the only strong accent color.

Do not introduce additional strong accent colors without explicit approval.

---

## Visual Rules (القواعد البصرية)

Prefer:

- Dark backgrounds
- Generous whitespace
- Strong alignment
- Technical grids
- Fine lines
- Geometric elements
- Subtle technical details
- Large translucent CybrLoop logo shapes
- Small orange markers
- Controlled visual hierarchy

Avoid:

- Generic cybersecurity templates
- Hooded hackers
- Matrix-style imagery
- Neon green
- Cyberpunk purple/blue gradients
- Excessive glow
- Excessive rounded cards
- Large amounts of visual noise
- Generic SaaS (البرمجيات كخدمة) layouts

The design should feel engineered, not decorated.

---

## Typography (الخطوط)

Preferred font:

Geist (غيست)

Fallback:

Inter (إنتر)

Use typography hierarchy through:

- Font size
- Font weight
- Spacing
- Contrast

Avoid decorative fonts.

Maintain comfortable reading width for body text.

---

## Layout (التخطيط)

The first release is a single-page marketing website.

Expected sections:

1. Navigation (شريط التنقل)
2. Hero (الواجهة الرئيسية)
3. Who We Are (من نحن)
4. What We Do (ماذا نفعل)
5. How We Work (كيف نعمل)
6. Web Application Security Assessment (تقييم أمن تطبيقات الويب)
7. Research & Community (البحث والمجتمع)
8. Contact (التواصل)
9. Footer (تذييل الصفحة)

Do not add additional pages unless explicitly requested.

---

## Content Rules (قواعد المحتوى)

Do not invent:

- Clients
- Testimonials
- Statistics
- Case studies
- Certifications
- Company history
- Team size
- Security achievements
- Services not currently offered

Do not make unsupported security claims.

Avoid fear-based marketing.

Prefer direct technical language.

Do not significantly rewrite approved copy without explaining why.

---

## Components (المكوّنات)

Build reusable components when they represent meaningful repeated patterns.

Possible examples:

- SectionContainer (حاوية القسم)
- SectionHeading (عنوان القسم)
- PrimaryButton (الزر الأساسي)
- TechnicalLabel (التسمية التقنية)

Do not create generic abstractions for one-time elements.

---

## Responsive Design (التصميم المتجاوب)

The website must work well on:

- Mobile
- Tablet
- Laptop
- Large desktop

Design mobile layouts intentionally.

Do not simply compress desktop layouts.

Technical decorative elements may be reduced or hidden on smaller screens if they affect readability.

Test major breakpoints after meaningful layout changes.

---

## Accessibility (إمكانية الوصول)

Use semantic HTML (إتش تي إم إل دلالي).

Maintain correct heading hierarchy.

Ensure:

- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Accessible links
- Accessible buttons
- Appropriate aria attributes where necessary
- Meaningful alternative text for informative images

Decorative visual elements should be hidden from assistive technologies when appropriate.

---

## Performance (الأداء)

Keep the site lightweight.

Prefer:

- Static rendering
- Server Components (مكوّنات الخادم)
- SVG (رسومات متجهة) for technical graphics
- Optimized images
- Minimal JavaScript (جافاسكربت) on the client

Avoid unnecessary hydration.

Avoid large animation libraries unless clearly justified.

---

## Animation (الحركة)

Animations must be subtle.

Allowed:

- Fade
- Reveal
- Small transforms
- Button feedback
- Subtle line movement
- Slow background technical movement

Avoid:

- Scroll hijacking
- Heavy parallax
- Continuous distracting motion
- Large cinematic animations
- Excessive glowing effects

Respect reduced-motion preferences.

---

## SEO (تحسين محركات البحث)

Maintain proper metadata.

Canonical domain:

`https://cybrloop.com`

Default title:

`CybrLoop — Application Security for Product Teams`

Default description:

`CybrLoop helps startups and growing product teams identify, understand, and act on application security risks through collaborative security assessments.`

Include appropriate Open Graph (الرسم البياني المفتوح) metadata.

---

## Code Quality (جودة الكود)

Use TypeScript (تايب سكربت) correctly.

Avoid `any` unless genuinely necessary.

Keep naming clear.

Remove dead code.

Do not leave debugging output.

Do not leave unfinished TODO (مهام مؤجلة) comments unless explicitly necessary.

Keep styling consistent with the existing project.

---

## Task Workflow (سير تنفيذ المهمة)

Before implementation:

1. Read relevant documentation.
2. Inspect existing code.
3. Understand the existing architecture.
4. Prefer modifying existing patterns over creating parallel ones.

For substantial changes, first provide a short implementation plan before modifying files.

During implementation:

- Work only on the requested scope.
- Avoid unrelated refactoring.
- Preserve working functionality.
- Keep changes easy to review.

---

## Validation (التحقق)

Before considering an implementation task complete, run:


npm run lint
npm run build


If the project contains additional relevant checks, run them too.

Fix errors introduced by the task.

Do not claim completion if the production build fails.

---

## Visual Review (المراجعة البصرية)

After implementing UI (واجهة المستخدم) work, check:

- Desktop layout
    
- Mobile layout
    
- Text hierarchy
    
- Spacing
    
- Overflow
    
- Contrast
    
- Alignment
    
- Navigation
    
- CTA (دعوات الإجراء)
    
- Decorative elements
    

Check whether the result still matches `docs/brand.md`.

---

## Definition of Good Work (تعريف العمل الجيد)

A good implementation should:

- Look like CybrLoop
    
- Feel technical and structured
    
- Remain visually calm
    
- Be easy to understand
    
- Load quickly
    
- Work on mobile
    
- Be accessible
    
- Avoid unnecessary complexity
    
- Avoid fake content
    
- Be maintainable by another developer
    

When choosing between visual complexity and clarity:

Choose clarity.

When choosing between abstraction and straightforward code:

Prefer straightforward code.

When choosing between adding another element and preserving whitespace:

Prefer whitespace.
