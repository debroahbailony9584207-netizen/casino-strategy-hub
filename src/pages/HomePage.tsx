import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Shield, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-casino.jpg";
import { GAMES } from "@/data/games";

const HomePage = () => {
  document.title = "Aurelius — стратегии для покера, рулетки, баккары и слотов";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Премиальный казино-стол с рулеткой и картами"
            className="h-full w-full object-cover opacity-40"
            width={1920}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="container relative z-10 flex min-h-[78vh] flex-col items-center justify-center py-24 text-center">
          <span className="ornament mb-6 text-xs uppercase tracking-[0.4em] text-primary/80 animate-fade-in">
            Аналитика игорных стратегий
          </span>
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in-up">
            Математика <br />
            <span className="text-gradient-gold">против удачи</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Свежие, проверенные стратегии для покера, баккары, рулетки, блэкджека, крэпса и слотов. Минимизируем преимущество казино — максимизируем шанс уйти в плюс.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/games"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.03]"
            >
              Выбрать игру
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md border border-gold px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10"
            >
              Что такое казино
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Что такое <span className="text-gradient-gold">казино</span> и можно ли в нём выиграть?
          </h2>
          <div className="mt-8 space-y-5 text-left text-muted-foreground leading-relaxed">
            <p>
              Казино — это бизнес, построенный на математике вероятностей. В каждой игре заложено{" "}
              <span className="text-foreground font-medium">«преимущество казино» (house edge)</span> — статистический процент,
              который заведение в среднем оставляет себе с каждой ставки на длинной дистанции.
            </p>
            <p>
              <span className="text-foreground font-medium">Выиграть на короткой дистанции</span> — реально и происходит постоянно.
              Дисперсия (разброс случайных результатов) позволяет даже в играх с отрицательным матожиданием получать прибыль за вечер, неделю или месяц.
            </p>
            <p>
              <span className="text-foreground font-medium">Выиграть стабильно</span> возможно только в играх, где навык влияет на результат —
              в первую очередь это <span className="text-primary">покер</span> (игрок против игроков, казино берёт комиссию).
              В играх с фиксированным математическим эджем — рулетке, слотах, баккаре — задача стратегии сводится к минимизации потерь и грамотному управлению банкроллом.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Target, title: "Математика", text: "Знайте RTP и преимущество казино каждой игры." },
              { icon: Shield, title: "Дисциплина", text: "Стоп-лоссы, лимиты, банкролл-менеджмент." },
              { icon: Sparkles, title: "Выбор игры", text: "Выбирайте варианты с самым низким эджем." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-lg border border-border/60 bg-card-luxe p-5 text-left">
                <Icon className="mb-3 h-5 w-5 text-primary" />
                <h3 className="font-display text-lg">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMES PREVIEW */}
      <section className="container pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Свежие стратегии</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Выберите игру</h2>
          </div>
          <Link to="/games" className="hidden items-center gap-1 text-sm text-primary hover:underline sm:inline-flex">
            Все игры <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.slice(0, 6).map((g) => (
            <Link
              key={g.slug}
              to={`/games/${g.slug}`}
              className="group relative overflow-hidden rounded-lg border border-border/60 bg-card-luxe transition-all hover:border-primary/50 hover:shadow-gold"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={g.image}
                  alt={g.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-primary/80">
                  <BookOpen className="h-3 w-3" /> Стратегия
                </div>
                <h3 className="mt-1 font-display text-2xl">{g.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{g.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
