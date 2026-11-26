import { Link } from "react-router-dom";
import { PageHeader, Section } from "@/components/Page";




export default function Community() {
  return (
    <>
      <PageHeader eyebrow="Community & partnerships" title="Good oral health starts in the community" intro="We offer free or low-cost dental screening days at schools, churches and workplaces, and provide oral health education to prevent tooth decay and gum disease." />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {([
            ["For employers", "Staff dental check-up and treatment packages for companies in Kicukiro, Gikondo and across Kigali. Contact us to set up a corporate agreement."],
            ["For health facilities", "Polyclinics and health posts without a dental department can refer patients to us. We share diagnostic feedback with the referring clinician."],
            ["For sports teams and schools", "Book a team fitting for custom sports mouthguards."],
          ] as [string, string][]).map(([t, d]) => (<div key={t} className="card-soft p-7"><h3 className="text-xl font-semibold text-primary-deep">{t}</h3><p className="mt-3 text-muted-foreground">{d}</p></div>))}
        </div>
        <Link to="/contact" className="btn btn-primary mt-10">Get in touch</Link>
      </Section>
    </>
  );
}
