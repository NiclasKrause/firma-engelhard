import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedLink } from "@/components/AnimatedLink";
import { locations } from "@/data/locations";
import { content } from "@/data/content";

export function ContactCta() {
  const phone = locations[0];

  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="flex flex-col items-start gap-8 border-t border-line pt-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display font-bold uppercase leading-[0.98] tracking-tight text-[clamp(2.4rem,7vw,5.5rem)]">
            <MaskReveal lines={[...content.contactCta.lines]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-base text-muted sm:text-lg">
              {content.contactCta.sub}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex flex-col items-start gap-5">
          <AnimatedLink href="/kontakt" variant="solid" arrow="right">
            Projekt anfragen
          </AnimatedLink>
          <a href={`tel:${phone.phoneHref}`} className="text-sm font-semibold text-ink hover:text-accent">
            {phone.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
