"use client";
import { useCallback, useEffect, useRef, useState } from "react";
export type TestimonialItem = {
  key: string; quote?: string | null; name?: string | null; role?: string | null; photo?: string | null; rating?: number | null;
  field?: string; quoteField?: string; nameField?: string; roleField?: string; photoField?: string;
};

export default function TestimonialSlider({ items, autoplay, interval }: { items: TestimonialItem[]; autoplay: boolean; interval: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => { if (index >= count && count > 0) setIndex(0); }, [count, index]);

  useEffect(() => {
    if (!autoplay || paused || count < 2) return;
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setTimeout(() => go(index + 1), Math.max(2, interval) * 1000);
    return () => clearTimeout(t);
  }, [autoplay, paused, count, index, interval, go]);

  if (!count) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
      role="region" aria-roledescription="carrossel" aria-label="Depoimentos"
    >
      <div className="overflow-hidden rounded-3xl bg-teal-50 ring-1 ring-teal-100">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((t, i) => {
            const stars = Math.min(5, Math.max(0, Math.round(t.rating || 0)));
            const img = t.photo;
            return (
              <figure key={t.key} data-tina-field={t.field} aria-hidden={i !== index} aria-roledescription="slide" aria-label={`${i + 1} de ${count}`}
                className="w-full shrink-0 px-8 py-12 md:px-20 md:py-16">
                {stars > 0 && <div className="mb-5 text-lg tracking-widest text-amber-500" aria-label={`${stars} de 5 estrelas`}>{"★".repeat(stars)}<span className="text-teal-200">{"★".repeat(5 - stars)}</span></div>}
                <blockquote data-tina-field={t.quoteField} className="text-xl leading-relaxed text-slate-800 md:text-2xl">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  {img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img data-tina-field={t.photoField} src={img} alt={t.name || ""} className="h-14 w-14 rounded-full object-cover" />
                  ) : (
                    <span aria-hidden className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-lg font-semibold text-white">
                      {(t.name || "?").replace(/^(Dra?\.)\s*/, "").charAt(0)}
                    </span>
                  )}
                  <span>
                    <span data-tina-field={t.nameField} className="block font-semibold text-slate-900">{t.name}</span>
                    <span data-tina-field={t.roleField} className="block text-sm text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {items.map((t, i) => (
              <button key={t.key} onClick={() => go(i)} aria-label={`Ir para depoimento ${i + 1}`} aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-teal-700" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => go(index - 1)} aria-label="Depoimento anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-teal-700 hover:text-teal-700">←</button>
            <button onClick={() => go(index + 1)} aria-label="Próximo depoimento" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-teal-700 hover:text-teal-700">→</button>
          </div>
        </div>
      )}
    </div>
  );
}
