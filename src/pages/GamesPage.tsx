import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GAMES } from "@/data/games";

const GamesPage = () => {
  document.title = "Выбор игры — стратегии казино | Aurelius";

  return (
    <section className="container py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Каталог стратегий</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          Выберите <span className="text-gradient-gold">игру</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          Кликните по карточке — откроется свежая стратегия с математической базой, конкретными решениями и правилами банкролл-менеджмента.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((g, i) => (
          <Link
            key={g.slug}
            to={`/games/${g.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card-luxe transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-gold animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={g.image}
                alt={g.name}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-primary/80">RTP {g.rtp}</span>
                <span>Сложность: {g.difficulty}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl">{g.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{g.tagline}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Открыть стратегию
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GamesPage;
