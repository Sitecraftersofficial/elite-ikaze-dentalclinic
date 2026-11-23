import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/Page";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: meta("Dental Services | Elite Ikaze Dental Clinic", "Check-ups, cleaning, fillings, root canals, extractions, gum treatment, children's dentistry, crowns, braces and whitening in Kicukiro.") }),
  component: Services,
});

const list: [string, string][] = [
  ["Check-ups & Diagnosis", "Complete oral examination, diagnosis and a personalised treatment plan. Digital X-rays help us see what the eye cannot."],
  ["Preventive Care", "Professional cleaning (scaling and polishing), fluoride application and oral hygiene advice to keep your teeth and gums healthy."],
  ["Fillings", "Tooth-coloured fillings that repair decay and restore the natural look and strength of your teeth."],
  ["Root Canal Treatment", "Save a painful or infected tooth with root canal therapy for front teeth, premolars and molars."],
  ["Tooth Extractions", "Gentle simple and surgical extractions under local anaesthesia, including impacted teeth within our scope."],
  ["Gum Treatment", "Deep cleaning and root planing to treat gum disease, followed by regular maintenance visits."],
  ["Children's Dentistry", "Friendly preventive and restorative care for children, helping them build healthy habits from an early age."],
  ["Crowns, Bridges & Dentures", "Replace or restore damaged and missing teeth with crowns, bridges and removable or fixed dentures, made by a partner dental laboratory."],
  ["Orthodontics (Braces & Aligners)", "Straighten your teeth with fixed braces or aligners, provided by a visiting registered specialist orthodontist on scheduled clinic days."],
  ["Teeth Whitening", "Brighten your smile with professional whitening, including custom take-home whitening trays."],
  ["Community Outreach", "Oral health screening and education for schools, churches and workplaces."],
];

function Services() {
  return (
    <>
      <PageHeader eyebrow="Our services" title="Full dental care for adults and children" intro="Each treatment begins with a proper examination and a clear treatment plan." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map(([t, d], i) => (
            <div key={t} className="card-soft p-7">
              <span className="font-display text-sm font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-xl font-semibold text-primary-deep">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl bg-secondary p-8">
          <h2 className="text-2xl font-semibold text-primary-deep">When we refer you</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">Some conditions need hospital-level care — for example advanced jaw (maxillofacial) surgery or procedures under general anaesthesia. In these cases we refer you to a trusted referral hospital with full documentation and follow up on your care.</p>
        </div>
      </Section>
    </>
  );
}
