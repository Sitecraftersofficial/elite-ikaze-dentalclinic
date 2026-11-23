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
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
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
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Replace these placeholders with the app's name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elite Ikaze Dental Clinic | Dentist in Kicukiro, Kigali" },
      { name: "description", content: "Licensed dental clinic at Kicukiro Centre, Kigali." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
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
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo.url} alt={CLINIC.name} className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn btn-primary hidden sm:inline-flex">Book now</Link>
          <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-background px-5 py-4 lg:hidden">
          {[...NAV, { to: "/contact", label: "Contact & Booking" } as const].map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2 font-medium text-primary-deep">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">{CLINIC.name}</p>
          <p className="mt-3 opacity-80">Elite care for every smile. Specialized care, shorter waits.</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp mt-5">Chat on WhatsApp</a>
        </div>
        <div className="space-y-3 opacity-90">
          <p className="flex gap-2"><MapPin className="h-5 w-5 shrink-0" />{CLINIC.address}</p>
          <p className="flex gap-2"><Phone className="h-5 w-5" /><a href={`tel:+${CLINIC.phoneIntl}`}>{CLINIC.phone}</a></p>
          <p className="flex gap-2 break-all"><Mail className="h-5 w-5 shrink-0" /><a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a></p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm opacity-90">
          {[...NAV, { to: "/contact", label: "Contact" } as const].map((n) => (
            <Link key={n.to} to={n.to} className="hover:underline">{n.label}</Link>
          ))}
        </nav>
      </div>
      <p className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-70">© {new Date().getFullYear()} {CLINIC.name}. Kicukiro, Kigali.</p>
    </footer>
  );
}
