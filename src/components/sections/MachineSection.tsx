import Image from "next/image";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";
import { machines } from "@/data/machines";
import { content } from "@/data/content";

export function MachineSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-[60vw] max-h-[560px] min-h-[320px] lg:h-auto lg:max-h-none">
        <Image
          src={content.equipment.image}
          alt={content.equipment.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center bg-dark px-6 py-20 text-dark-text sm:px-10 sm:py-24 lg:px-16">
        <h2 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2rem,4.5vw,3.2rem)]">
          <MaskReveal lines={[...content.equipment.lines]} />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-dark-muted sm:text-base">
            {content.equipment.text}
          </p>
        </Reveal>

        {machines.length > 0 ? (
          <div className="mt-10 flex flex-col gap-4 border-t border-dark-line pt-8">
            {machines.map((m) => (
              <div key={m.name} className="text-sm text-dark-text/90">
                <span className="font-semibold">{m.name}</span> — {m.manufacturer}, {m.type}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
