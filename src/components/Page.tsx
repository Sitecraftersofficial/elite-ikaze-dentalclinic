import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-primary-deep md:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-6xl px-5 py-14 md:py-20 ${className}`}>{children}</section>;
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {items.map((s, i) => (
        <li key={s.title} className="card-soft flex gap-4 p-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display font-semibold text-primary-foreground">{i + 1}</span>
          <div>
            <h3 className="font-semibold text-primary-deep">{s.title}</h3>
            <p className="mt-1 text-muted-foreground">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
