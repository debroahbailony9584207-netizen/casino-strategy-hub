import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import StrategyPage from "./pages/StrategyPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games", element: <GamesPage /> },
      { path: "games/:slug", element: <StrategyPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

// На GitHub Pages используем HashRouter, чтобы deep-links работали без серверной конфигурации.
// Локально и в превью — обычный BrowserRouter.
const useHash = import.meta.env.VITE_USE_HASH_ROUTER === "true";
const router = useHash
  ? createHashRouter(routes)
  : createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
