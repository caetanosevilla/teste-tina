import { tinaField } from "tinacms/dist/react";
import type { PageBlocksTestimonials } from "@/tina/__generated__/types";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials({ blok }: { blok: PageBlocksTestimonials }) {
  const items = (blok.items || []).flatMap((t, i) => (t ? [{
    key: String(i), quote: t.quote, name: t.name, role: t.role, photo: t.photo, rating: t.rating,
    field: tinaField(blok, "items", i), quoteField: tinaField(t, "quote"), nameField: tinaField(t, "name"), roleField: tinaField(t, "role"), photoField: tinaField(t, "photo"),
  }] : []));
  return (
    <section data-tina-field={tinaField(blok)} className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 data-tina-field={tinaField(blok, "title")} className="text-3xl font-bold tracking-tight text-slate-900">{blok.title}</h2>
        {blok.subtitle && <p data-tina-field={tinaField(blok, "subtitle")} className="mt-3 text-lg text-slate-600">{blok.subtitle}</p>}
        <div className="mt-10">
          <TestimonialSlider items={items} autoplay={blok.autoplay ?? true} interval={blok.interval || 6} />
        </div>
      </div>
    </section>
  );
}
