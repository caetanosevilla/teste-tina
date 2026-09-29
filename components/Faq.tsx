import { tinaField } from "tinacms/dist/react";
import type { PageBlocksFaq } from "@/tina/__generated__/types";

export default function Faq({ blok }: { blok: PageBlocksFaq }) {
  return (
    <section data-tina-field={tinaField(blok)} className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 data-tina-field={tinaField(blok, "title")} className="text-3xl font-bold tracking-tight text-slate-900">{blok.title}</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
          {blok.items?.map((q, i) => q && (
            <details key={i} data-tina-field={tinaField(blok, "items", i)} className="group p-6">
              <summary data-tina-field={tinaField(q, "question")} className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">
                {q.question}<span className="ml-4 text-teal-700 transition group-open:rotate-45">+</span>
              </summary>
              <p data-tina-field={tinaField(q, "answer")} className="mt-3 leading-relaxed text-slate-600">{q.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
