import { Link } from "react-router-dom";

const NotFound = () => {
  document.title = "Страница не найдена | Aurelius";
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl text-gradient-gold">404</p>
      <h1 className="mt-4 font-display text-3xl">Страница не найдена</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Возможно, ставка не сыграла. Вернитесь на главную и выберите свежую стратегию.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold"
      >
        На главную
      </Link>
    </section>
  );
};

export default NotFound;
