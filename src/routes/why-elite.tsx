
import { PageHeader, Section, Steps, CheckList } from "@/components/Page";
import { whatsappLink } from "@/lib/site";



export default function Why() {
  return (
    <>
      <PageHeader eyebrow="What makes us different" title="Signature services you will not easily find elsewhere in Kicukiro." />
      <Section className="space-y-16">
        <div className="grid gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-semibold text-primary-deep">See your smile on screen — intraoral camera</h2>
          <p className="text-lg text-muted-foreground">During your consultation, our dentist uses a small intraoral camera to show you your own teeth, live, on a screen. You see exactly what the dentist sees, so you understand your diagnosis and can make confident decisions. The images also record your before-and-after results.</p>
        </div>
        <div className="card-soft p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-primary-deep">Elite Home-Visit Dentistry</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">Can't come to the clinic? We come to you. Our mobile dental team brings professional care to your home, workplace or care facility. Ideal for:</p>
          <div className="mt-5 max-w-3xl"><CheckList items={["Elderly patients", "People with reduced mobility or disabilities", "Patients recovering from surgery or confined to bed", "Busy professionals who value privacy and convenience"]} /></div>
          <h3 className="mt-10 eyebrow">How it works</h3>
          <div className="mt-4"><Steps items={[
            { title: "Book", text: "Call, WhatsApp or book online." },
            { title: "Quick call", text: "We ask a few questions about your condition, confirm which care can be done at home and tell you the visit fee." },
            { title: "We visit", text: "Check-ups, cleaning, simple fillings, denture fitting and adjustments, and oral health assessment." },
            { title: "Aftercare", text: "You receive an aftercare summary on WhatsApp and a reminder for your next visit." },
          ]} /></div>
          <p className="mt-6 text-sm text-muted-foreground">All instruments are sterilized and sealed at the clinic before every visit. If you need treatment that requires clinic equipment, we will book you in at the clinic.</p>
          <a href={whatsappLink("Hello, I would like to request a home visit.")} target="_blank" rel="noreferrer" className="btn btn-primary mt-6">Request a Home Visit</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-muted p-7"><h3 className="text-xl font-semibold text-primary-deep">Fresh-Breath Clinic</h3><p className="mt-3 text-muted-foreground">Bad breath is common, and nothing to be embarrassed about. We carry out a careful assessment, professional cleaning, treatment of any gum problems and tongue-coating care, then give you a personal home-care routine and a follow-up visit — privately and with respect.</p></div>
          <div className="rounded-2xl bg-muted p-7"><h3 className="text-xl font-semibold text-primary-deep">Sports Mouthguards & Night Guards</h3><p className="mt-3 text-muted-foreground">Custom-fitted mouthguards for football, basketball, boxing, rugby and more. We also make night guards for teeth grinding, whitening trays and retainers. Clubs, schools and gyms: ask about team fittings.</p></div>
          <div className="rounded-2xl bg-muted p-7"><h3 className="text-xl font-semibold text-primary-deep">Easy WhatsApp Care</h3><p className="mt-3 text-muted-foreground">Book appointments, receive reminders and get your aftercare instructions on WhatsApp — simple, quick and convenient.</p></div>
        </div>
      </Section>
    </>
  );
}
