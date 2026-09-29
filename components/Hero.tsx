import { tinaField } from "tinacms/dist/react";
import type { PageBlocksHero } from "@/tina/__generated__/types";

export default function Hero({ blok }: { blok: PageBlocksHero }) {
  return (
    <section data-tina-field={tinaField(blok)} className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          {blok.eyebrow && <p data-tina-field={tinaField(blok, "eyebrow")} className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-700">{blok.eyebrow}</p>}
          <h1 data-tina-field={tinaField(blok, "headline")} className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">{blok.headline}</h1>
          {blok.subheadline && <p data-tina-field={tinaField(blok, "subheadline")} className="mt-6 text-lg leading-relaxed text-slate-600">{blok.subheadline}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            {blok.ctaLabel && <a data-tina-field={tinaField(blok, "ctaLabel")} href={blok.ctaLink || "#"} className="rounded-full bg-teal-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-teal-800">{blok.ctaLabel}</a>}
            {blok.secondaryLabel && <a data-tina-field={tinaField(blok, "secondaryLabel")} href={blok.secondaryLink || "#"} className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-400">{blok.secondaryLabel}</a>}
          </div>
        </div>
        <div className="relative" data-tina-field={tinaField(blok, "image")}>
          {blok.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={blok.image} alt="" className="w-full rounded-3xl shadow-xl" />
          ) : (
            <div aria-hidden className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-teal-100 via-cyan-50 to-sky-100 p-6 shadow-xl">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <p className="text-sm font-semibold text-slate-500">Terça, 14 de outubro</p>
                {["08:30 · Ana S. · confirmada", "09:15 · Bruno M. · confirmada", "10:00 · vaga preenchida pela lista", "11:30 · Carla T. · aguardando"].map((t, i) => (
                  <div key={t} className="mt-3 flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    <span className={`h-2.5 w-2.5 rounded-full ${i === 3 ? "bg-amber-400" : "bg-teal-500"}`} />{t}
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-teal-800 shadow-lg">−48% de faltas</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
