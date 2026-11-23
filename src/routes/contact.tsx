import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHeader, Section } from "@/components/Page";
import { CLINIC, meta, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: meta("Contact & Book | Elite Ikaze Dental Clinic", "Book your dental appointment at Kicukiro Centre, Kigali. Call or WhatsApp 0788 837 911.") }),
  component: Contact,
});

const field = "mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [visit, setVisit] = useState("Clinic visit");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `Hello, I would like to book an appointment.\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nType: ${visit}\nPreferred date: ${f.get("date") || "-"}\nReason: ${f.get("reason") || "-"}`;
    window.open(whatsappLink(text), "_blank");
  }
  return (
    <>
      <PageHeader eyebrow="Contact us" title="Book your appointment today" intro="We look forward to caring for your smile." />
      <Section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <p className="flex gap-3"><MapPin className="h-6 w-6 shrink-0 text-primary" />{CLINIC.address}</p>
          <p className="flex gap-3"><Phone className="h-6 w-6 text-primary" /><a href={`tel:+${CLINIC.phoneIntl}`} className="font-semibold">{CLINIC.phone}</a> (phone & WhatsApp)</p>
          <p className="flex gap-3 break-all"><Mail className="h-6 w-6 shrink-0 text-primary" /><a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a></p>
          <iframe title="Map" className="h-64 w-full rounded-2xl border" loading="lazy" src="https://www.google.com/maps?q=RG+Market+Plaza+Kicukiro+Kigali&output=embed" />
        </div>
        <form onSubmit={submit} className="card-soft space-y-4 p-7">
          <h2 className="text-2xl font-semibold text-primary-deep">Request an appointment</h2>
          <label className="block text-sm font-medium">Full name<input name="name" required className={field} /></label>
          <label className="block text-sm font-medium">Phone number<input name="phone" required type="tel" className={field} /></label>
          <div className="flex gap-2">
            {["Clinic visit", "Home visit"].map((v) => (
              <button type="button" key={v} onClick={() => setVisit(v)} className={`btn flex-1 ${visit === v ? "btn-primary" : "btn-outline"}`}>{v}</button>
            ))}
          </div>
          <label className="block text-sm font-medium">Preferred date<input name="date" type="date" className={field} /></label>
          <label className="block text-sm font-medium">Reason for visit<textarea name="reason" rows={3} className={field} /></label>
          <button type="submit" className="btn btn-whatsapp w-full">Send via WhatsApp</button>
          <p className="text-xs text-muted-foreground">Your request opens in WhatsApp so our team can confirm your time.</p>
        </form>
      </Section>
    </>
  );
}
