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

// Определяем, на GitHub Pages ли мы находимся.
// Для GH Pages используем HashRouter — это самый надёжный способ:
// все маршруты работают через #, не нужно настраивать сервер,
// deep-links и обновление страницы работают «из коробки».
const isGitHubPages =
  typeof window !== "undefined" &&
  window.location.hostname.endsWith("github.io");

const useHash =
  import.meta.env.VITE_USE_HASH_ROUTER === "true" || isGitHubPages;

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
