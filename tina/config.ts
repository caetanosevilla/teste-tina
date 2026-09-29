import { defineConfig, type Template } from "tinacms";

// Cada bloco da página = um "template" do Tina (equivale a um componente do Storyblok)
const hero: Template = {
  name: "hero", label: "Hero",
  ui: { defaultItem: { headline: "Novo título", ctaLabel: "Saiba mais", ctaLink: "#" } },
  fields: [
    { type: "string", name: "eyebrow", label: "Chamada acima do título" },
    { type: "string", name: "headline", label: "Título" },
    { type: "string", name: "subheadline", label: "Subtítulo", ui: { component: "textarea" } },
    { type: "string", name: "ctaLabel", label: "Texto do botão principal" },
    { type: "string", name: "ctaLink", label: "Link do botão principal" },
    { type: "string", name: "secondaryLabel", label: "Texto do botão secundário" },
    { type: "string", name: "secondaryLink", label: "Link do botão secundário" },
    { type: "image", name: "image", label: "Imagem (opcional)" },
  ],
};

const features: Template = {
  name: "features", label: "Benefícios",
  fields: [
    { type: "string", name: "title", label: "Título" },
    { type: "string", name: "anchor", label: "Âncora (id da seção)" },
    {
      type: "object", name: "items", label: "Itens", list: true,
      ui: { itemProps: (i) => ({ label: i?.title || "Benefício" }), defaultItem: { icon: "star", title: "Novo benefício", text: "" } },
      fields: [
        { type: "string", name: "icon", label: "Ícone", options: [
          { label: "Calendário", value: "calendar" }, { label: "Mensagem", value: "message" }, { label: "Atualizar", value: "refresh" },
          { label: "Gráfico", value: "chart" }, { label: "Escudo", value: "shield" }, { label: "Estrela", value: "star" } ] },
        { type: "string", name: "title", label: "Título" },
        { type: "string", name: "text", label: "Texto", ui: { component: "textarea" } },
      ],
    },
  ],
};

const testimonials: Template = {
  name: "testimonials", label: "Depoimentos (slider)",
  fields: [
    { type: "string", name: "title", label: "Título" },
    { type: "string", name: "subtitle", label: "Subtítulo (opcional)" },
    { type: "boolean", name: "autoplay", label: "Passar sozinho" },
    { type: "number", name: "interval", label: "Tempo de cada slide (segundos)" },
    {
      type: "object", name: "items", label: "Depoimentos", list: true,
      ui: { itemProps: (i) => ({ label: i?.name || "Depoimento" }), defaultItem: { quote: "", name: "Nome", rating: 5 } },
      fields: [
        { type: "string", name: "quote", label: "Depoimento", ui: { component: "textarea" } },
        { type: "string", name: "name", label: "Nome" },
        { type: "string", name: "role", label: "Cargo / empresa" },
        { type: "image", name: "photo", label: "Foto (opcional)" },
        { type: "number", name: "rating", label: "Estrelas (0 a 5)" },
      ],
    },
  ],
};

const faq: Template = {
  name: "faq", label: "FAQ",
  fields: [
    { type: "string", name: "title", label: "Título" },
    {
      type: "object", name: "items", label: "Perguntas", list: true,
      ui: { itemProps: (i) => ({ label: i?.question || "Pergunta" }) },
      fields: [
        { type: "string", name: "question", label: "Pergunta" },
        { type: "string", name: "answer", label: "Resposta", ui: { component: "textarea" } },
      ],
    },
  ],
};

const ctaBanner: Template = {
  name: "ctaBanner", label: "Chamada final (CTA)",
  fields: [
    { type: "string", name: "headline", label: "Título" },
    { type: "string", name: "text", label: "Texto", ui: { component: "textarea" } },
    { type: "string", name: "buttonLabel", label: "Texto do botão" },
    { type: "string", name: "buttonLink", label: "Link do botão" },
    { type: "string", name: "anchor", label: "Âncora (id da seção)" },
  ],
};

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "uploads", publicFolder: "public" } },
  schema: {
    collections: [
      {
        name: "page", label: "Páginas", path: "content/pages", format: "json",
        ui: { router: ({ document }) => (document._sys.filename === "home" ? "/" : `/${document._sys.filename}`) },
        fields: [
          { type: "string", name: "seoTitle", label: "Título SEO" },
          { type: "string", name: "seoDescription", label: "Descrição SEO", ui: { component: "textarea" } },
          { type: "object", name: "blocks", label: "Seções", list: true, templates: [hero, features, testimonials, faq, ctaBanner] },
        ],
      },
    ],
  },
});
