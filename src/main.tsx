import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Сигнал для vite-plugin-prerender (Puppeteer): рендер готов.
// На обычном клиенте это no-op.
requestAnimationFrame(() => {
  document.dispatchEvent(new Event("render-event"));
});
