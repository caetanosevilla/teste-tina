import { tinaField } from "tinacms/dist/react";
import type { PageBlocksCtaBanner } from "@/tina/__generated__/types";

export default function CtaBanner({ blok }: { blok: PageBlocksCtaBanner }) {
  return (
    <section id={blok.anchor || undefined} data-tina-field={tinaField(blok)} className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-teal-800 px-8 py-14 text-center text-white md:px-16">
          <h2 data-tina-field={tinaField(blok, "headline")} className="text-3xl font-bold tracking-tight md:text-4xl">{blok.headline}</h2>
          {blok.text && <p data-tina-field={tinaField(blok, "text")} className="mx-auto mt-4 max-w-xl text-teal-100">{blok.text}</p>}
          {blok.buttonLabel && <a data-tina-field={tinaField(blok, "buttonLabel")} href={blok.buttonLink || "#"} className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-teal-900 transition hover:bg-teal-50">{blok.buttonLabel}</a>}
        </div>
      </div>
    </section>
  );
}
