import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, CheckList } from "@/components/Page";
import { CLINIC, meta } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: meta("About Us | Elite Ikaze Dental Clinic", "A private, licensed dental clinic at Kicukiro Centre, Kigali, built around efficiency, availability and clinical quality.") }),
  component: About,
});

const values: [string, string][] = [
  ["Quality and patient safety", "Your health and safety come first in everything we do."],
  ["Integrity and professional ethics", "We are honest about your diagnosis, options and costs."],
  ["Teamwork", "Our team works together to give you smooth, coordinated care."],
  ["Patient-centred care", "We listen, explain clearly and respect your choices."],
  ["Evidence-based practice", "Our treatments follow current clinical evidence and national guidelines."],
  ["Social responsibility", "We give back through community screening and oral health education."],
];

function About() {
  return (
    <>
      <PageHeader eyebrow="About us" title="Who we are" intro={`${CLINIC.name} is a private dental clinic at Kicukiro Centre, Kigali, offering diagnostic, preventive, restorative, surgical and prosthetic dental services in one place, delivered by licensed oral health professionals.`} />
      <Section className="grid gap-8 md:grid-cols-2">
        <p className="text-lg text-muted-foreground">Many people in Kigali wait for hours for dental care or are sent elsewhere for specialized treatment. We set out to change that. Our clinic is built around efficiency, availability and clinical quality — so you get the right care, at the right time, without unnecessary delays.</p>
        <div className="space-y-4">
          <div className="card-soft p-6"><h3 className="font-semibold text-primary">Our vision</h3><p className="mt-2">To become a nationally recognized and accredited dental clinic of excellence for oral health care, and a catalyst for community oral health and general well-being.</p></div>
          <div className="card-soft p-6"><h3 className="font-semibold text-primary">Our mission</h3><p className="mt-2">To provide standard, evidence-based oral health services delivered by competent, licensed oral health professionals, combining preventive, curative and promotive care for the community.</p></div>
        </div>
      </Section>
      <Section className="pt-0">
        <h2 className="text-3xl font-semibold text-primary-deep">Our values</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, d]) => (<div key={t} className="rounded-2xl bg-muted p-6"><h3 className="font-semibold text-primary-deep">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>))}
        </div>
      </Section>
      <Section className="pt-0">
        <h2 className="text-3xl font-semibold text-primary-deep">Why choose Elite?</h2>
        <div className="mt-6 max-w-3xl"><CheckList items={[
          "Less waiting: a maximum waiting-time target of 20 minutes and predictable scheduling.",
          "Specialized care close to home: root canals, crowns, bridges and orthodontics without travelling across the city.",
          "Clear explanations: you see your own teeth on screen and receive a written treatment plan with a cost estimate before treatment starts.",
          "Fair pricing: quality specialist care at prices below many premium clinics.",
          "Modern technology: digital X-rays, intraoral camera and electronic patient records.",
          "Safety you can see: strict sterilization, single-use items and full protective equipment for every patient.",
        ]} /></div>
      </Section>
    </>
  );
}
