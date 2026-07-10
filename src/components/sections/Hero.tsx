import Image from "next/image";
import { Reveal } from "../Reveal";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pt-20 pb-24 sm:pt-28 sm:pb-28 md:flex-row md:items-center md:gap-14"
    >
      <div className="flex-1">
        <Reveal>
          <span className="eyebrow">{site.role}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            {hero.headline}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {hero.subhead}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
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
      </div>

      <Reveal delay={0.1} className="shrink-0">
        <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border border-border grayscale transition-[filter] duration-500 hover:grayscale-0 sm:h-52 sm:w-52">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(max-width: 640px) 11rem, 13rem"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
