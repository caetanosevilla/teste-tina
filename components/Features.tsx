import { tinaField } from "tinacms/dist/react";
import type { PageBlocksFeatures } from "@/tina/__generated__/types";
import Icon from "./Icon";

export default function Features({ blok }: { blok: PageBlocksFeatures }) {
  return (
    <section id={blok.anchor || undefined} data-tina-field={tinaField(blok)} className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 data-tina-field={tinaField(blok, "title")} className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900">{blok.title}</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blok.items?.map((it, i) => it && (
            <div key={i} data-tina-field={tinaField(blok, "items", i)} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div data-tina-field={tinaField(it, "icon")} className="mb-4 inline-flex rounded-xl bg-teal-50 p-3 text-teal-700"><Icon name={it.icon || undefined} /></div>
              <h3 data-tina-field={tinaField(it, "title")} className="font-semibold text-slate-900">{it.title}</h3>
              <p data-tina-field={tinaField(it, "text")} className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
