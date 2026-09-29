import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import PageClient from "@/components/PageClient";

async function getPage() {
  return client.queries.page({ relativePath: "home.json" });
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getPage();
  return { title: data.page.seoTitle || "Maré", description: data.page.seoDescription || undefined };
}

export default async function Home() {
  const res = await getPage();
  return <PageClient data={res.data} query={res.query} variables={res.variables} />;
}
