const AboutPage = () => {
  document.title = "О казино — что это и как устроено | Aurelius";

  const sections = [
    {
      title: "Краткая история",
      text: "Первое публичное игорное заведение — венецианский Ridotto — открылось в 1638 году. В XIX веке центрами игорной культуры стали Баден-Баден и Монте-Карло, а в XX-м — Лас-Вегас, Атлантик-Сити и Макао.",
    },
    {
      title: "Какие бывают игры",
      text: "Все игры казино делят на три большие группы: карточные (покер, блэкджек, баккара), игры со случайным механическим устройством (рулетка, кости, крэпс) и слоты — современные потомки механических автоматов конца XIX века.",
    },
    {
      title: "RTP и преимущество казино",
      text: "RTP (Return to Player) — статистический процент ставок, который игра возвращает игрокам в среднем за миллионы раундов. Обратная сторона — house edge, доля, которую заведение оставляет себе. Эти числа описывают игру в целом, а не конкретную сессию.",
    },
    {
      title: "Онлайн и live-казино",
      text: "С конца 1990-х появились онлайн-казино, а позже — live-форматы с настоящими дилерами и трансляцией с реальных столов. Это сделало классические игры доступными из любой точки мира.",
    },
    {
      title: "Регулирование и ответственная игра",
      text: "В большинстве стран игорная деятельность лицензируется, операторы обязаны проверять возраст игроков (обычно 18+ или 21+) и предлагать инструменты ответственной игры: лимиты, паузы и самоисключение.",
    },
  ];

  return (
    <article className="container max-w-3xl py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Введение</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">
        Что такое <span className="text-gradient-gold">казино</span>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Казино — это особый культурный феномен с многовековой историей. Здесь — небольшой обзор того, как устроена индустрия и из чего она состоит.
      </p>

      <div className="mt-12 space-y-8">
        {sections.map((s, i) => (
          <div
            key={s.title}
            className="border-l-2 border-primary/40 pl-6 animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <h2 className="font-display text-2xl">
              <span className="text-primary mr-3">{String(i + 1).padStart(2, "0")}.</span>
              {s.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-xl border border-primary/30 bg-gradient-card p-8">
        <h3 className="font-display text-2xl text-gradient-gold">Важно помнить</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Азартные игры — это форма платного развлечения, а не способ заработка. У большинства игр математическое преимущество на стороне заведения,
          и никакая система не превращает их в источник стабильного дохода. Играйте только на те деньги, потерю которых легко переживёте.
        </p>
      </section>
    </article>
  );
};

export default AboutPage;
