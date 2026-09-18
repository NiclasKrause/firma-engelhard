import type { Metadata } from "next";
import Image from "next/image";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";
import { locations } from "@/data/locations";
import { content } from "@/data/content";

export const metadata: Metadata = {
  title: "Unternehmen",
  description: company.aboutText,
};

export default function UnternehmenPage() {
  const p = content.pages.unternehmen;

  return (
    <>
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {p.eyebrow}
        </span>
        <h1 className="mt-4 font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.4rem,7vw,5.5rem)]">
          <MaskReveal trigger="mount" lines={[...p.lines]} />
        </h1>
        <Reveal delay={0.2} className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-ink sm:text-xl">
          <p>{company.aboutText}</p>
        </Reveal>
      </section>

      <div className="relative h-[50vh] min-h-[320px]">
        <Image src={p.image} alt={p.imageAlt} fill sizes="100vw" className="object-cover" />
      </div>

      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid grid-cols-1 gap-10 border-t border-line pt-12 sm:grid-cols-3">
          <Reveal>
            <p className="font-display text-4xl font-bold text-accent">{company.foundedYear}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">Gründung</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.foundingText}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-display text-4xl font-bold text-accent">{company.generation}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">Generation</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.generationText}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-display text-4xl font-bold text-accent">Heute</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">
              {locations.length} Standort{locations.length === 1 ? "" : "e"}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.todayText}</p>
          </Reveal>
        </div>
      </section>

      <section className="dark-section bg-dark px-6 py-24 text-dark-text sm:px-10 sm:py-28">
        <Reveal>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            Management
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-16">
            {company.management.map((name) => (
              <p key={name} className="font-display text-xl font-semibold sm:text-2xl">
                {name}
              </p>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
