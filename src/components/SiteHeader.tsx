import { Link, NavLink } from "react-router-dom";
import { Spade } from "lucide-react";

const navItems = [
  { to: "/", label: "Главная", end: true },
  { to: "/games", label: "Игры" },
  { to: "/about", label: "О казино" },
];

export const SiteHeader = () => (
  <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
    <div className="container flex h-16 items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-gold text-primary-foreground shadow-gold transition-transform group-hover:scale-105">
          <Spade className="h-5 w-5" />
        </div>
        <div className="leading-tight">
          <div className="font-display text-lg text-gradient-gold">Aurelius</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Casino Strategy</div>
        </div>
      </Link>
      <nav className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);
