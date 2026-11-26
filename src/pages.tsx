import About from "./routes/about";
import Community from "./routes/community";
import Contact from "./routes/contact";
import Faq from "./routes/faq";
import Home from "./routes";
import Payment from "./routes/payment";
import Safety from "./routes/safety";
import Services from "./routes/services";
import Visit from "./routes/your-visit";
import WhyElite from "./routes/why-elite";

export const routeComponents = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/why-elite", component: WhyElite },
  { path: "/safety", component: Safety },
  { path: "/your-visit", component: Visit },
  { path: "/payment", component: Payment },
  { path: "/community", component: Community },
  { path: "/faq", component: Faq },
  { path: "/contact", component: Contact },
] as const;
