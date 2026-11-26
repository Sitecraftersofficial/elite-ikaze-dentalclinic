import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, Plus, X } from "lucide-react";
import type { routeComponents as DentalRoutes } from "@/pages";
import { CLINIC, NAV, whatsappLink } from "@/lib/site";
import logo from "@/assets/logo.png";

export default function App({ routeComponents }: { routeComponents: typeof DentalRoutes }) {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Elite Ikaze Dental Clinic | Dentist in Kicukiro, Kigali",
      "/about": "About Us | Elite Ikaze Dental Clinic",
      "/services": "Dental Services | Elite Ikaze Dental Clinic",
      "/why-elite": "What Makes Us Different | Elite Ikaze Dental Clinic",
      "/safety": "Your Safety | Elite Ikaze Dental Clinic",
      "/your-visit": "Your Visit | Elite Ikaze Dental Clinic",
      "/payment": "Payment & Insurance | Elite Ikaze Dental Clinic",
      "/community": "Community & Partnerships | Elite Ikaze Dental Clinic",
      "/faq": "FAQ | Elite Ikaze Dental Clinic",
      "/contact": "Contact & Book | Elite Ikaze Dental Clinic",
    };
    document.title = titles[location.pathname] ?? "Page Not Found | Elite Ikaze Dental Clinic";
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <SiteHeader />
      <main>
        <Routes>
          {routeComponents.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}



function NotFound() {
  return (
    <div className="flex min-h-[55vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary-deep">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-primary-deep">Page not found</h2>
        <p className="mt-2 text-muted-foreground">The page you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/" className="btn btn-primary mt-6">Go home</Link>
      </div>
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5">
      <div className="mx-auto flex max-w-344 items-center justify-between gap-3 rounded-full border bg-background/90 p-2 pl-3 shadow-(--shadow-soft) backdrop-blur-xl">
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)} aria-label={`${CLINIC.name} home`}>
          <img src={logo} alt="" className="h-18 w-auto rounded-[1.5rem] object-contain" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {NAV.slice(0, 4).map((item) => (
            <Link key={item.to} to={item.to} className={`rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-primary-deep ${window.location.pathname === item.to ? "bg-secondary text-primary-deep" : ""}`}>{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn btn-primary min-h-11! px-4! py-2.5! max-sm:hidden">Book now <ArrowUpRight className="h-4 w-4" /></Link>
          <button className="flex h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-bold text-accent-foreground transition-colors hover:bg-secondary" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}<span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div id="site-menu" className="menu-orbit fixed inset-0 -z-10 overflow-y-auto px-5 pb-10 pt-28 text-primary-foreground md:pt-32">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <nav aria-label="Full navigation" className="border-t border-primary-foreground/20">
              {[{ to: "/", label: "Home" }, ...NAV, { to: "/contact", label: "Contact & Booking" }].map((item, i) => (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="group flex items-center gap-4 border-b border-primary-foreground/20 py-3 md:py-4">
                  <span className="w-7 text-xs font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl font-medium transition-transform group-hover:translate-x-2 md:text-4xl">{item.label}</span>
                  <ArrowUpRight className="ml-auto h-6 w-6 text-accent transition-transform group-hover:rotate-45" />
                </Link>
              ))}
            </nav>
            <div className="rounded-[2rem_0.5rem_2rem_0.5rem] border-primary-foreground/20 p-6">
              <p className="eyebrow text-accent!">Visit us</p>
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
          <p className="eyebrow text-accent!">Kigali, Rwanda</p>
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
          {[...NAV, { to: "/contact", label: "Contact" }].map((item) => <Link key={item.to} to={item.to} className="transition-colors hover:text-accent">{item.label}</Link>)}
        </nav>
      </div>
      <div className="shell mt-16 overflow-hidden md:mt-20" aria-hidden="true">
        <p className="translate-y-[12%] whitespace-nowrap text-center font-display text-[21vw] font-semibold leading-[0.7] tracking-[-0.09em] text-primary">IKAZE<span className="text-accent">.</span></p>
      </div>
      <div className="relative border-t border-primary-foreground/15 bg-primary-deep">
        <div className="shell flex-wrap items-center justify-between gap-3 py-5 text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} {CLINIC.name}.</p>
          <p className="flex items-center gap-2">Made for brighter days <Plus className="h-3 w-3 text-accent" /></p>
        </div>
      </div>
    </footer>
  );
}
