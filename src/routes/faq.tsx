import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHeader, Section } from "@/components/Page";
import { meta } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: meta("FAQ | Elite Ikaze Dental Clinic", "Answers about location, booking, waiting times, children, home visits, braces, pain and sterilization.") }),
  component: Faq,
});

const faqs: [string, string][] = [
  ["Where is the clinic located?", "We are on the 4th floor of RG Market Plaza at Kicukiro Centre, Kicukiro District, Kigali."],
  ["How do I book an appointment?", "Call or WhatsApp us on 0788 837 911, or use the booking form on this website."],
  ["How long will I wait?", "We aim to see every patient within 20 minutes of their appointment time."],
  ["Do you treat children?", "Yes. We offer preventive and restorative care for children in a friendly setting. A parent or guardian must sign consent for any procedure."],
  ["Can a dentist visit me at home?", "Yes. Our Home-Visit Dentistry service brings check-ups, cleaning, simple fillings and denture care to your home, workplace or care facility."],
  ["Do you offer braces?", "Yes. Braces and aligners are provided by a visiting specialist orthodontist on scheduled days. Contact us to book a consultation."],
  ["Is treatment painful?", "We use local anaesthesia for procedures that could cause discomfort, and we explain each step before we begin."],
  ["How do you keep instruments clean?", "Every instrument is cleaned, sealed and sterilized in a Class B autoclave, and disposable items are used only once."],
  ["What if I need treatment you cannot provide?", "We refer you to a referral hospital with full documentation and follow up on your care."],
];

function Faq() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Frequently asked questions" />
      <Section className="max-w-3xl">
        <Accordion type="single" collapsible className="card-soft px-6">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger className="text-left font-semibold text-primary-deep">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
