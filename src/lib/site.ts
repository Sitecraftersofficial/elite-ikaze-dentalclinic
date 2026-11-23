export const CLINIC = {
  name: "Elite Ikaze Dental Clinic",
  phone: "0788 837 911",
  phoneIntl: "250788837911",
  email: "elitespecializeddentalclinicltd26@gmail.com",
  address: "4th Floor, RG Market Plaza, Kicukiro Centre, Kicukiro District, Kigali, Rwanda",
};

export const whatsappLink = (text = "Hello, I would like to book an appointment.") =>
  `https://wa.me/${CLINIC.phoneIntl}?text=${encodeURIComponent(text)}`;

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-elite", label: "Why Elite" },
  { to: "/safety", label: "Safety" },
  { to: "/your-visit", label: "Your Visit" },
  { to: "/payment", label: "Payment" },
  { to: "/community", label: "Community" },
  { to: "/faq", label: "FAQ" },
] as const;

export const meta = (title: string, description: string) => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];
