import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Monitor, Home, ShieldCheck, ArrowRight } from "lucide-react";
import hero from "@/assets/clinic-room.jpg";
import { Section } from "@/components/Page";
import { CLINIC, meta, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: meta(
      "Elite Ikaze Dental Clinic | Dentist in Kicukiro, Kigali",
      "Licensed dental clinic at Kicukiro Centre, Kigali. Check-ups, fillings, root canals, crowns, braces, whitening and home-visit dentistry. Short waiting times.",
    ),
  }),
  component: Index,
});

const highlights = [
  { icon: Clock, title: "Short waiting times", text: "We aim to see you within 20 minutes of your appointment." },
  { icon: Monitor, title: "See what the dentist sees", text: "Our intraoral camera shows your teeth live on screen." },
  { icon: Home, title: "We come to you", text: "Dental care at home, at work or in care facilities." },
  { icon: ShieldCheck, title: "Licensed and safe", text: "Qualified professionals and strict sterilization standards." },
];

const services = ["Check-ups & Diagnosis", "Fillings", "Root Canal Treatment", "Crowns, Bridges & Dentures", "Braces & Aligners", "Teeth Whitening"];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow">Kicukiro Centre · Kigali</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-primary-deep md:text-6xl">
              Specialized dental care in Kicukiro — on time, every time.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Modern, licensed and patient-centred oral health care for the whole family, from routine check-ups to root canals, crowns and braces — all under one roof at Kicukiro Centre.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">Book an Appointment</Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn-whatsapp">Chat with us on WhatsApp</a>
              <a href={whatsappLink("Hello, I would like to request a home visit.")} target="_blank" rel="noreferrer" className="btn btn-outline">Request a Home Visit</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-secondary" />
            <img src={hero} alt="Bright treatment room with a teal dental chair" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
          </div>
        </div>
      </section>

      <section className="bg-primary-deep">
        <div className="mx-auto grid max-w-6xl gap-px px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-5 text-primary-foreground">
              <Icon className="h-7 w-7 text-accent" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm opacity-80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Section className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow">Welcome</p>
          <h2 className="mt-3 text-3xl font-semibold text-primary-deep md:text-4xl">Care you can trust, without the long wait.</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Welcome to {CLINIC.name}, a private dental clinic in the heart of Kicukiro, Kigali. We were founded to make quality oral health care easier to reach: less waiting, clear explanations, fair prices and care you can trust. Whether you need a check-up, a filling, a root canal or a brighter smile, our licensed team uses modern equipment and evidence-based methods to look after you and your family.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="card-soft p-8 md:p-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold text-primary-deep">Our services</h2>
            <Link to="/services" className="inline-flex items-center gap-1 font-semibold text-primary">All services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s} className="rounded-xl bg-muted px-5 py-4 font-medium text-primary-deep">{s}</div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0 text-center">
        <h2 className="text-3xl font-semibold text-primary-deep">Book your appointment today</h2>
        <p className="mt-3 text-muted-foreground">We look forward to caring for your smile. Call or WhatsApp {CLINIC.phone}.</p>
        <Link to="/contact" className="btn btn-primary mt-6">Book an Appointment</Link>
      </Section>
    </>
  );
}
