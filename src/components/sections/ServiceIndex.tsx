import Image from "next/image";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedLink } from "@/components/AnimatedLink";
import { services } from "@/data/services";
import { content } from "@/data/content";
import { cn } from "@/lib/cn";

export function ServiceIndex() {
  return (
    <section id="leistungen" className="px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {content.serviceIndex.eyebrow}
        </span>
      </Reveal>
      <h2 className="mt-4 font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.2rem,6vw,4.5rem)]">
        <MaskReveal lines={[...content.serviceIndex.lines]} />
      </h2>

      <div className="mt-16 flex flex-col gap-6 sm:mt-20">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={0.06 * i}>
            <div
              className={cn(
                "grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-10",
              )}
            >
              <div
                className={cn(
                  "relative h-[46vw] max-h-[520px] min-h-[280px] overflow-hidden lg:col-span-7 lg:h-auto",
                  i % 2 === 1 && "lg:order-2",
                )}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div
                className={cn(
                  "flex flex-col justify-center lg:col-span-5",
                  i % 2 === 1 && "lg:order-1",
                )}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {service.index}
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-3 font-display text-base font-semibold uppercase tracking-tight text-accent">
                  {service.subline}
                </p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                  {service.intro}
                </p>
                <AnimatedLink href={`/leistungen/${service.slug}`} className="mt-7 w-fit text-ink">
                  {service.ctaLabel}
                </AnimatedLink>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
