export const SiteFooter = () => (
  <footer className="mt-24 border-t border-border/60 bg-muted/30">
    <div className="container py-10 text-sm text-muted-foreground">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-lg text-gradient-gold mb-2">Aurelius</div>
          <p className="leading-relaxed">
            Аналитический портал о математике и стратегиях азартных игр. Контент носит образовательный характер.
          </p>
        </div>
        <div>
          <h4 className="font-display text-foreground mb-3">Ответственная игра</h4>
          <ul className="space-y-1.5">
            <li>Устанавливайте лимиты времени и денег.</li>
            <li>Никогда не играйте в долг.</li>
            <li>Игра — развлечение, не источник дохода.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-foreground mb-3">Помощь</h4>
          <p className="leading-relaxed">
            Если вы или ваши близкие столкнулись с игровой зависимостью — обратитесь в анонимную службу помощи в вашем регионе.
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Aurelius Casino Strategy. 18+. Все права защищены.
      </div>
    </div>
  </footer>
);
