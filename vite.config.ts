import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// SSG-пререндер для GitHub Pages: на сборке Puppeteer открывает каждый
// маршрут и сохраняет его как статический HTML. Это даёт SEO-friendly
// страницы и корректную работу при первом заходе на любой URL.
//
// Список маршрутов синхронизирован с роутером в src/App.tsx.
const PRERENDER_ROUTES = [
  "/",
  "/games",
  "/about",
  "/games/poker",
  "/games/baccarat",
  "/games/roulette",
  "/games/slots",
  "/games/blackjack",
  "/games/craps",
];

async function getPrerenderPlugin(): Promise<PluginOption | null> {
  try {
    // динамически — плагин нужен только на build и не должен ломать dev,
    // если пакет ещё не установлен.
    const mod = await import("vite-plugin-prerender").catch(() => null as any);
    if (!mod) return null;
    const Prerender = (mod.default ?? mod) as any;
    return new Prerender({
      staticDir: path.resolve(__dirname, "dist"),
      routes: PRERENDER_ROUTES,
      renderer: new Prerender.PuppeteerRenderer({
        renderAfterDocumentEvent: "render-event",
        headless: "new",
      }),
    }) as unknown as PluginOption;
  } catch {
    return null;
  }
}

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const isProd = mode === "production";
  const prerender = isProd ? await getPrerenderPlugin() : null;

  return {
    // BASE_URL читается приложением через import.meta.env.BASE_URL.
    // Для GitHub Pages передайте: VITE_BASE=/repo-name/ npm run build
    base: process.env.VITE_BASE ?? "/",
    server: {
      host: "::",
      port: 8080,
      hmr: { overlay: false },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      prerender,
    ].filter(Boolean) as PluginOption[],
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
  };
});
