import { Reveal } from "../Reveal";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-3xl px-6 pt-24 pb-24 sm:pt-32 sm:pb-28"
    >
      <Reveal>
        <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          {hero.headline}
        </h1>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {hero.subhead}
        </p>
      </Reveal>
      <Reveal delay={0.14}>
        <div className="mt-8 flex items-center gap-6 text-sm">
          <a href="#contact" className="link-quiet font-medium">
            Get in touch
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            Résumé ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
