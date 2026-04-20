import { Outlet, ScrollRestoration } from "react-router-dom";
import { RiskBanner } from "./RiskBanner";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <RiskBanner />
    <SiteHeader />
    <main className="flex-1">
      <Outlet />
    </main>
    <SiteFooter />
    <ScrollRestoration getKey={(location) => location.pathname} />
  </div>
);
