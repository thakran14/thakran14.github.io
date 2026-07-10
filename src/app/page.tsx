import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Making } from "@/components/sections/Making";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { about, experience, socials, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <div className="border-t border-border">
          {/* About */}
          <section id="about" className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
            <SectionHeading eyebrow="About" title="A little about me" />
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </section>
        </div>

        <div className="border-t border-border">
          {/* Experience — timeline */}
          <section id="work" className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
            <SectionHeading eyebrow="Experience" title="Professional journey" />
            <Reveal>
              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted">
                {experience.intro}
              </p>
            </Reveal>
            <ol className="relative ml-2 border-l border-border">
              {experience.roles.map((role, i) => (
                <Reveal as="li" key={role.company} delay={i * 0.05}>
                  <div className="relative pb-10 pl-8 last:pb-0">
                    <span
                      aria-hidden
                      className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-border bg-foreground"
                    />
                    <h3 className="font-semibold tracking-tight text-foreground">
                      {role.company}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">{role.title}</p>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-faint">
                      {role.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.1}>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm link-quiet"
              >
                Full résumé ↗
              </a>
            </Reveal>
          </section>
        </div>

        <div className="border-t border-border">
          <Making />
        </div>
      </main>

      {/* Contact / footer */}
      <footer id="contact" className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <SectionHeading eyebrow="Contact" title="Let's connect" />
          <Reveal>
            <a
              href={`mailto:${site.email}`}
              className="text-xl font-medium tracking-tight text-foreground link-quiet sm:text-2xl"
            >
              {site.email}
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <p className="mt-16 font-mono text-xs text-faint">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>
    </>
  );
}
