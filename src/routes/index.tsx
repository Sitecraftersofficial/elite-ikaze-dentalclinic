import { Link } from "react-router-dom";
import { Clock, Monitor, Home, ShieldCheck, ArrowUpRight, ArrowRight, MapPin, Plus } from "lucide-react";
import hero from "@/assets/clinic-room.jpg";
import { Section } from "@/components/Page";
import { CLINIC, whatsappLink } from "@/lib/site";



const highlights = [
  { icon: Clock, title: "Short waiting times", text: "We aim to see you within 20 minutes of your appointment.", number: "01" },
  { icon: Monitor, title: "See what the dentist sees", text: "Our intraoral camera shows your teeth live on screen.", number: "02" },
  { icon: Home, title: "We come to you", text: "Dental care at home, at work or in care facilities.", number: "03" },
  { icon: ShieldCheck, title: "Licensed and safe", text: "Qualified professionals and strict sterilization standards.", number: "04" },
];

const services = ["Check-ups & Diagnosis", "Fillings", "Root Canal Treatment", "Crowns, Bridges & Dentures", "Braces & Aligners", "Teeth Whitening"];

export default function Index() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden border-b">
        <div className="shell relative grid min-h-[calc(100svh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
          <div className="relative z-10 fade-up">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <p className="eyebrow">Kicukiro Centre · Kigali</p>
              <span className="rounded-full border border-primary/20 bg-enamel px-3 py-1 text-xs font-medium tracking-wide text-primary-deep">Independent dental studio</span>
            </div>
            <h1 className="display-fluid max-w-4xl text-primary-deep">
              Specialized care.<br />
              <span className="outline-word">Remarkable</span> smiles.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Modern, licensed and patient-centred oral health care for the whole family — from routine check-ups to root canals, crowns and braces, all under one roof.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">Book an Appointment <ArrowUpRight className="h-4 w-4" /></Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-outline">Chat on WhatsApp</a>
            </div>
            <a href={whatsappLink("Hello, I would like to request a home visit.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-deep underline decoration-accent decoration-2 underline-offset-4">
              <Home className="h-4 w-4" /> Can’t come to us? Request a home visit.
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem] pb-10 lg:mx-0 lg:justify-self-end">
            <div className="absolute -left-8 top-[15%] h-28 w-28 animate-drift rounded-full border border-accent/60 bg-accent/25" aria-hidden="true" />
            <div className="smile-arch relative overflow-hidden border-[6px] border-enamel bg-secondary shadow-[var(--shadow-soft)]">
              <img src={hero} alt="Bright treatment room with a teal dental chair" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-primary-deep/85 to-transparent p-7 pt-20 text-primary-foreground">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Come as you are</p>
                  <p className="mt-1 font-display text-2xl font-medium">Leave smiling.</p>
                </div>
                <MapPin className="mb-1 h-6 w-6 text-accent" />
              </div>
            </div>
            <div className="absolute -bottom-1 -left-2 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-background bg-primary-deep text-center text-primary-foreground shadow-[var(--shadow-soft)] sm:-left-8">
              <span className="font-display text-4xl font-semibold text-accent">20</span>
              <span className="text-xs font-semibold uppercase tracking-widest">minute target</span>
            </div>
            <svg className="absolute -right-5 -top-6 h-28 w-28 text-primary-deep sm:-right-9" viewBox="0 0 100 100" aria-hidden="true">
              <defs><path id="smileCircle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" /></defs>
              <text className="fill-current text-[8px] font-semibold uppercase tracking-[2px]"><textPath href="#smileCircle">ELITE IKAZE • KIGALI • ELITE IKAZE • </textPath></text>
              <path d="M32 48 Q50 66 68 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-primary-deep py-5 text-primary-foreground" aria-label="Our dental services">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center" aria-hidden={group === 1}>
              {services.map((service) => (
                <span key={`${group}-${service}`} className="flex items-center font-display text-xl font-medium md:text-2xl">
                  <span className="px-7">{service}</span><Plus className="h-5 w-5 text-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Section>
        <div className="mb-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="eyebrow">The Elite difference</p><h2 className="mt-4 text-4xl font-semibold text-primary-deep md:text-5xl">Dentistry, designed around you.</h2></div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:justify-self-end">Less waiting. Clear explanations. Modern equipment. Everything we do is built to make looking after your smile feel simpler.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text, number }) => (
            <div key={title} className="card-soft flex min-h-72 flex-col p-7">
              <div className="flex items-start justify-between"><Icon className="h-8 w-8 text-primary" strokeWidth={1.5} /><span className="font-display text-sm text-muted-foreground">{number}</span></div>
              <div className="mt-auto pt-12"><h3 className="text-xl font-semibold text-primary-deep">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <section className="shell pb-6 pt-10 md:pb-10 md:pt-24">
        <div className="relative overflow-hidden rounded-[3rem_0.75rem_3rem_0.75rem] bg-secondary px-6 py-14 md:px-14 md:py-20">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[42px] border-enamel/70" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Welcome to Elite Ikaze</p>
              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight text-primary-deep md:text-5xl">Care you can trust, <span className="text-primary">without the long wait.</span></h2>
            </div>
            <div className="max-w-2xl lg:pt-10">
              <p className="text-lg leading-relaxed text-secondary-foreground/80">Welcome to {CLINIC.name}, a private dental clinic in the heart of Kicukiro, Kigali. We were founded to make quality oral health care easier to reach: less waiting, clear explanations, fair prices and care you can trust.</p>
              <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/80">Whether you need a check-up, a filling, a root canal or a brighter smile, our licensed team uses modern equipment and evidence-based methods to look after you and your family.</p>
              <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-display font-semibold text-primary-deep">Meet your dental team <ArrowRight className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">Everything under one roof</p>
            <h2 className="mt-5 text-4xl font-semibold text-primary-deep md:text-5xl">A healthier smile starts here.</h2>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">Every treatment begins with a proper examination and a plan you understand.</p>
            <Link to="/services" className="btn btn-outline mt-7">Explore all services <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="border-t border-primary/25">
            {services.map((service, i) => (
              <Link key={service} to="/services" className="service-row group flex items-center gap-5 border-b border-primary/25 py-6">
                <span className="w-8 font-display text-xs font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl font-medium text-primary-deep md:text-3xl">{service}</span>
                <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 transition-all group-hover:rotate-45 group-hover:bg-accent"><ArrowUpRight className="h-5 w-5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <section className="shell pb-16 md:pb-24">
        <div className="relative overflow-hidden bg-primary-deep px-6 py-16 text-center text-primary-foreground smile-arch md:px-12 md:py-24">
          <div className="absolute left-[8%] top-8 h-8 w-8 rounded-full bg-accent" aria-hidden="true" />
          <div className="absolute bottom-16 right-[9%] h-16 w-16 rounded-full border border-primary-foreground/25" aria-hidden="true" />
          <p className="eyebrow !text-accent">Your next smile</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-tight md:text-6xl">Let’s make your appointment the easiest part of your day.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/75">Call or WhatsApp {CLINIC.phone}. We look forward to caring for your smile.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn btn-accent">Book an Appointment <ArrowUpRight className="h-4 w-4" /></Link>
            <a href={`tel:+${CLINIC.phoneIntl}`} className="btn border border-primary-foreground/30 text-primary-foreground hover:bg-primary">Call {CLINIC.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
