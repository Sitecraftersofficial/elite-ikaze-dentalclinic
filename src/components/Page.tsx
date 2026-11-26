import type { ReactNode } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="page-hero">
      <div className="shell relative grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-24">
        <div className="max-w-5xl fade-up">
          <p className="eyebrow !text-accent">{eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">{title}</h1>
          {intro && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">{intro}</p>}
        </div>
        <div className="hidden h-28 w-28 shrink-0 animate-drift items-center justify-center rounded-full border border-primary-foreground/25 md:flex">
          <ArrowDownRight className="h-9 w-9 text-accent" strokeWidth={1.25} />
        </div>
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`shell py-14 md:py-24 ${className}`}>{children}</section>;
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-2">
      {items.map((s, i) => (
        <li key={s.title} className="card-soft group flex gap-5 p-6 md:p-7">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-semibold text-accent-foreground transition-transform group-hover:rotate-12">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="text-lg font-semibold text-primary-deep">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((t) => (
        <li key={t} className="flex gap-3 rounded-2xl bg-enamel p-4 leading-relaxed">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
