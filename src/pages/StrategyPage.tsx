import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Sparkles, BookOpen } from "lucide-react";
import { GAMES, getGame } from "@/data/games";

const StrategyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = slug ? getGame(slug) : undefined;

  if (!game) return <Navigate to="/games" replace />;

  document.title = `${game.name} — обзор игры | Aurelius`;

  return (
    <article className="container py-12">
      <Link
        to="/games"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Все игры
      </Link>

      {/* HEADER */}
      <header className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Обзор игры</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">
            {game.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{game.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="rounded-md border border-border/60 bg-card px-4 py-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">RTP</div>
              <div className="text-primary">{game.rtp}</div>
            </div>
            <div className="rounded-md border border-border/60 bg-card px-4 py-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Сложность</div>
              <div>{game.difficulty}</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 shadow-deep animate-fade-in">
          <img
            src={game.image}
            alt={game.name}
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
        </div>
      </header>

      {/* INTRO */}
      <section className="mt-16 max-w-3xl">
        <p className="text-lg leading-relaxed text-muted-foreground">{game.intro}</p>
      </section>

      {/* WARNING */}
      <aside className="mt-10 flex gap-4 rounded-lg border border-destructive/40 bg-destructive/10 p-5">
        <AlertTriangle className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
        <p className="text-sm text-foreground/90">
          <strong>Информационный характер:</strong> материал носит ознакомительный характер и не является призывом к игре.
          Азартные игры связаны с финансовым риском и могут вызвать зависимость. 18+.
        </p>
      </aside>

      {/* SECTIONS */}
      <section className="mt-16">
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="font-display text-3xl">Об игре</h2>
        </div>

        <div className="space-y-6">
          {game.strategies.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border border-border/60 bg-card-luxe p-6 sm:p-8 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="font-display text-xl text-gradient-gold sm:text-2xl">{s.title}</h3>
              <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS */}
      <section className="mt-16">
        <h2 className="font-display text-3xl">Интересные факты</h2>
        <ul className="mt-6 space-y-3">
          {game.tips.map((tip) => (
            <li key={tip} className="flex gap-3 rounded-lg border border-border/60 bg-card/50 p-4">
              <Sparkles className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <span className="text-foreground/90">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* OTHER GAMES */}
      <section className="mt-20">
        <h2 className="font-display text-2xl">Другие игры</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.filter((g) => g.slug !== game.slug)
            .slice(0, 3)
            .map((g) => (
              <Link
                key={g.slug}
                to={`/games/${g.slug}`}
                className="group flex items-center gap-4 rounded-lg border border-border/60 bg-card-luxe p-3 transition-colors hover:border-primary/50"
              >
                <img
                  src={g.image}
                  alt={g.name}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="h-16 w-16 shrink-0 rounded-md object-cover"
                />
                <div>
                  <div className="font-display text-lg group-hover:text-primary transition-colors">
                    {g.name}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-1">{g.tagline}</div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </article>
  );
};

export default StrategyPage;
