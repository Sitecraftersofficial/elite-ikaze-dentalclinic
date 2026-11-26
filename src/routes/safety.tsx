
import { ShieldCheck } from "lucide-react";
import { PageHeader, Section } from "@/components/Page";




const items: [string, string][] = [
  ["Sterilized instruments", "Every instrument is cleaned and sterilized in a Class B autoclave, sealed in a pouch and traced to its cycle date."],
  ["Regular testing", "Our sterilization equipment is checked with chemical and biological tests."],
  ["Single-use items", "Disposable items are used once and thrown away; surfaces are covered and changed between patients."],
  ["Full protection", "Our clinical staff wear gloves, masks, eye protection and gowns for every patient."],
  ["Health check before treatment", "We review your medical history and check your vital signs before treatment."],
  ["Emergency ready", "Our team is trained in Basic Life Support and the clinic has emergency equipment on site."],
  ["Safe waste handling", "Medical waste is separated and collected by a licensed waste handler."],
  ["Licensed professionals", "All our clinicians hold valid practising licences and keep their training up to date every year."],
  ["Private records", "Your information is kept in a secure electronic system and shared only with your written permission or where the law requires it."],
];

export default function Safety() {
  return (
    <>
      <PageHeader eyebrow="Your safety" title="Safety at the centre of everything we do" intro="We follow Rwanda Ministry of Health guidelines for infection prevention and patient safety." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([t, d]) => (
            <div key={t} className="card-soft p-6"><ShieldCheck className="h-6 w-6 text-primary" /><h3 className="mt-3 font-semibold text-primary-deep">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </Section>
    </>
  );
}
