"use client";
import { useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "@/tina/__generated__/types";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import CtaBanner from "./CtaBanner";

// useTina = atualização ao vivo quando a página está aberta dentro do editor (/admin)
export default function PageClient(props: { data: PageQuery; query: string; variables: PageQueryVariables }) {
  const { data } = useTina(props);
  return (
    <main>
      {data.page.blocks?.map((b, i) => {
        if (!b) return null;
        switch (b.__typename) {
          case "PageBlocksHero": return <Hero key={i} blok={b} />;
          case "PageBlocksFeatures": return <Features key={i} blok={b} />;
          case "PageBlocksTestimonials": return <Testimonials key={i} blok={b} />;
          case "PageBlocksFaq": return <Faq key={i} blok={b} />;
          case "PageBlocksCtaBanner": return <CtaBanner key={i} blok={b} />;
          default: return null;
        }
      })}
    </main>
  );
}
