import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, MapPin, Phone, Mail, ArrowUpRight, Plus } from "lucide-react";
import logo from "@/assets/elite-ikaze-logo.png.asset.json";
import { CLINIC, NAV, whatsappLink } from "@/lib/site";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6"><Link to="/" className="btn btn-primary">Go home</Link></div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn btn-primary">Try again</button>
          <a href="/" className="btn btn-outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elite Ikaze Dental Clinic | Dentist in Kicukiro, Kigali" },
      { name: "description", content: "Licensed dental clinic at Kicukiro Centre, Kigali." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Lexend:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5">
      <div className="mx-auto flex max-w-[86rem] items-center justify-between gap-3 rounded-full border bg-background/90 p-2 pl-3 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)} aria-label={`${CLINIC.name} home`}>
          <span className="logo-pod flex h-14 w-14 items-center justify-center px-1 pt-1"><img src={logo.url} alt="" className="h-11 w-auto object-contain" /></span>
          <span className="hidden leading-none sm:block"><span className="block font-display text-sm font-semibold text-primary-deep">ELITE IKAZE</span><span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">Dental Clinic</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {NAV.slice(0, 4).map((n) => (
            <Link key={n.to} to={n.to} className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-primary-deep" activeProps={{ className: "bg-secondary text-primary-deep" }}>{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn btn-primary !min-h-11 !px-4 !py-2.5 max-sm:hidden">Book now <ArrowUpRight className="h-4 w-4" /></Link>
          <button className="flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-bold text-accent-foreground transition-colors hover:bg-secondary" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}<span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div id="site-menu" className="menu-orbit fixed inset-0 -z-10 overflow-y-auto px-5 pb-10 pt-28 text-primary-foreground md:pt-32">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <nav aria-label="Full navigation" className="border-t border-primary-foreground/20">
              {[{ to: "/", label: "Home" } as const, ...NAV, { to: "/contact", label: "Contact & Booking" } as const].map((n, i) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="group flex items-center gap-4 border-b border-primary-foreground/20 py-3 md:py-4">
                  <span className="w-7 text-xs font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl font-medium transition-transform group-hover:translate-x-2 md:text-4xl">{n.label}</span>
                  <ArrowUpRight className="ml-auto h-6 w-6 text-accent transition-transform group-hover:rotate-45" />
                </Link>
              ))}
            </nav>
            <div className="rounded-[2rem_0.5rem_2rem_0.5rem] border border-primary-foreground/20 p-6">
              <p className="eyebrow !text-accent">Visit us</p>
              <p className="mt-5 leading-relaxed text-primary-foreground/80">{CLINIC.address}</p>
              <a href={`tel:+${CLINIC.phoneIntl}`} className="mt-5 block font-display text-2xl text-accent">{CLINIC.phone}</a>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-accent mt-6 w-full">Book your visit</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep pb-0 pt-16 text-primary-foreground md:pt-24">
      <div className="shell grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="eyebrow !text-accent">Kigali, Rwanda</p>
          <p className="mt-5 max-w-md font-display text-3xl font-semibold leading-tight">Elite care for every smile.</p>
          <p className="mt-4 max-w-sm text-primary-foreground/65">Specialized care, shorter waits, and a team that takes time to explain.</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-accent mt-7">Chat on WhatsApp <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <div className="space-y-5 text-sm text-primary-foreground/75">
          <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-accent" />{CLINIC.address}</p>
          <p className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-accent" /><a href={`tel:+${CLINIC.phoneIntl}`}>{CLINIC.phone}</a></p>
          <p className="flex gap-3 break-all"><Mail className="h-5 w-5 shrink-0 text-accent" /><a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a></p>
        </div>
        <nav className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-primary-foreground/75">
          {[...NAV, { to: "/contact", label: "Contact" } as const].map((n) => <Link key={n.to} to={n.to} className="transition-colors hover:text-accent">{n.label}</Link>)}
        </nav>
      </div>
      <div className="shell mt-16 overflow-hidden md:mt-20" aria-hidden="true">
        <p className="translate-y-[12%] whitespace-nowrap text-center font-display text-[21vw] font-semibold leading-[0.7] tracking-[-0.09em] text-primary">IKAZE<span className="text-accent">.</span></p>
      </div>
      <div className="relative border-t border-primary-foreground/15 bg-primary-deep">
        <div className="shell flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} {CLINIC.name}.</p>
          <p className="flex items-center gap-2">Made for brighter days <Plus className="h-3 w-3 text-accent" /></p>
        </div>
      </div>
    </footer>
  );
}
