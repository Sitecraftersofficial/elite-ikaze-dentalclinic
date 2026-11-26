
import { PageHeader, Section } from "@/components/Page";




const prices: [string, string][] = [
  ["Consultation & diagnosis", "12,000"],
  ["Tooth-coloured filling (complex)", "35,000"],
  ["Root canal treatment (molar)", "110,000"],
  ["Crown (PFM)", "260,000"],
  ["Orthodontic treatment (full arch)", "1,350,000"],
];

export default function Payment() {
  return (
    <>
      <PageHeader eyebrow="Payment & insurance" title="Quality care, kept affordable" intro="Our prices are set below many premium clinics while maintaining high clinical standards." />
      <Section className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-primary-deep">Insurance</h2>
          <p className="mt-3 text-muted-foreground">We are working to accept RSSB/RAMA and private insurance schemes, including Radiant, Sanlam, MMI and Britam. Please contact us to check the current status of your insurance.</p>
        </div>
        <div className="card-soft overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-primary text-primary-foreground"><tr><th className="p-4">Service</th><th className="p-4 text-right">Indicative price (RWF)</th></tr></thead>
            <tbody>{prices.map(([s, p]) => (<tr key={s} className="border-t"><td className="p-4">{s}</td><td className="p-4 text-right font-semibold text-primary-deep">{p}</td></tr>))}</tbody>
          </table>
          <p className="border-t p-4 text-sm text-muted-foreground">Prices may vary depending on your diagnosis.</p>
        </div>
      </Section>
    </>
  );
}
