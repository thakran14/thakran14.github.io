import Image from "next/image";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { projects } from "@/lib/content";

export function Making() {
  return (
    <section id="making" className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
      <SectionHeading eyebrow="Beyond work" title="Things I make" />
      <div className="flex flex-col divide-y divide-border">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.title} delay={i * 0.05}>
            <div className="flex flex-col gap-6 py-10 first:pt-0 sm:flex-row sm:items-start sm:gap-8">
              {p.image && (
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md border border-border grayscale transition-[filter] duration-500 hover:grayscale-0 sm:h-28 sm:w-40">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 10rem"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{p.blurb}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm link-quiet"
                >
                  {p.cta} ↗
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
