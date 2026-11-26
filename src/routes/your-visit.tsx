
import { PageHeader, Section, Steps } from "@/components/Page";




export default function Visit() {
  return (
    <>
      <PageHeader eyebrow="Your visit" title="What to expect" />
      <Section>
        <Steps items={[
          { title: "Book your appointment", text: "By phone, WhatsApp or online." },
          { title: "Welcome and medical history", text: "Our receptionist registers you and we review your health history." },
          { title: "Examination", text: "The dentist examines your mouth, using the intraoral camera and digital X-rays where needed." },
          { title: "Your treatment plan", text: "We explain what we found, your treatment options (including no treatment) and the estimated cost, in a language you understand." },
          { title: "Your consent", text: "For procedures such as injections, fillings, extractions or root canals, we ask you (or a parent or guardian for children) to sign a consent form. You can ask questions at any time and change your mind." },
          { title: "Treatment", text: "Care is delivered by licensed professionals in a clean, safe environment." },
          { title: "Aftercare and follow-up", text: "You receive aftercare instructions and a reminder for your next visit." },
        ]} />
        <div className="mt-12 rounded-2xl bg-secondary p-8">
          <h2 className="text-2xl font-semibold text-primary-deep">Your feedback matters</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">We welcome compliments, suggestions and complaints — in person, by email or through our suggestion box. We acknowledge every complaint within 48 hours and aim to resolve simple issues within 7 working days.</p>
        </div>
      </Section>
    </>
  );
}
