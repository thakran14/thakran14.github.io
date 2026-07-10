import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Making } from "@/components/sections/Making";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { about, experience, skills, socials, site } from "@/lib/content";

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
          {/* Experience */}
          <section id="work" className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
            <SectionHeading eyebrow="Experience" title="Where I've worked" />
            <Reveal>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">
                {experience.intro}
              </p>
            </Reveal>
            <ul className="flex flex-col divide-y divide-border">
              {experience.roles.map((role, i) => (
                <Reveal as="li" key={role.company} delay={i * 0.05}>
                  <div className="flex flex-col gap-1 py-6 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <div>
                      <h3 className="font-semibold tracking-tight text-foreground">
                        {role.company}
                      </h3>
                      <p className="text-sm text-muted">{role.title}</p>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-faint sm:text-right">
                      {role.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.1}>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block text-sm link-quiet"
              >
                Full résumé ↗
              </a>
            </Reveal>
          </section>
        </div>

        <div className="border-t border-border">
          <Making />
        </div>

        <div className="border-t border-border">
          {/* Skills */}
          <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
            <SectionHeading eyebrow="Toolkit" title="Skills & tech" />
            <Reveal>
              <ul className="flex flex-wrap gap-x-3 gap-y-3">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-4 py-1.5 font-mono text-xs tracking-wide text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
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
