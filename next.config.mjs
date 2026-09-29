/** @type {import('next').NextConfig} */
export default {
  // O editor do Tina fica em /admin (arquivos gerados em public/admin)
  async rewrites() { return [{ source: "/admin", destination: "/admin/index.html" }]; },
};
