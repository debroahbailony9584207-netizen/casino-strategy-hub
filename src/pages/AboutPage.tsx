const AboutPage = () => {
  document.title = "О казино — что это и как работает | Aurelius";

  const sections = [
    {
      title: "Преимущество казино (House Edge)",
      text: "Это статистический процент, который заведение оставляет себе на длинной дистанции. У европейской рулетки — 2.7%, у американской — 5.26%, у блэкджека с базовой стратегией — всего 0.5%. Чем ниже эдж — тем выше ваш шанс уйти в плюс.",
    },
    {
      title: "RTP (Return to Player)",
      text: "Обратная сторона эджа: процент ставок, который игра возвращает игрокам в среднем за миллионы спинов. RTP 96% означает, что с €100 ставок казино в среднем оставит €4. Это статистика, а не гарантия для конкретной сессии.",
    },
    {
      title: "Дисперсия и матожидание",
      text: "Матожидание показывает средний результат на длинной дистанции, дисперсия — разброс. Высокая дисперсия = редкие крупные выигрыши, низкая = частые мелкие. Грамотный игрок выбирает дисперсию под размер банкролла и цель сессии.",
    },
    {
      title: "Где навык реально работает",
      text: "Покер — единственная массовая игра казино, где скилл напрямую определяет долгосрочный результат: вы играете против других игроков, а казино берёт комиссию (рейк). В блэкджеке скилл снижает эдж казино до минимума, но не превращает его в плюс.",
    },
    {
      title: "Банкролл-менеджмент",
      text: "Главный фактор выживания. Размер ставки должен составлять 0.5–2% от сессионного банка. Это даёт достаточно «жизней» чтобы пережить отрицательную дисперсию и дождаться положительной.",
    },
  ];

  return (
    <article className="container max-w-3xl py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Введение</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">
        Что такое <span className="text-gradient-gold">казино</span>
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Казино — это не лотерея и не магия. Это бизнес, основанный на теории вероятностей. Чтобы играть осознанно, нужно понимать
        пять ключевых концепций.
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
        <h3 className="font-display text-2xl text-gradient-gold">Главное правило</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Никакая стратегия не превращает игру с отрицательным матожиданием в источник дохода. Стратегия — это способ
          максимизировать удовольствие и минимизировать потери. Воспринимайте проигрыш как стоимость развлечения,
          а выигрыш — как бонус.
        </p>
      </section>
    </article>
  );
};

export default AboutPage;
