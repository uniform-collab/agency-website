import {
  DefaultNotImplementedComponent,
  ResolveComponentFunction,
  ResolveComponentResult,
} from "@uniformdev/canvas-next-rsc/component";

// Import your existing components
import HeroSection from "@/components/sections/HeroSection";
import CardGridSection from "@/components/sections/CardGridSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ImageTextSection from "@/components/sections/ImageTextSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { PageComponent } from "@/components/Page";

export const resolveComponent: ResolveComponentFunction = ({ component }) => {
  let result: ResolveComponentResult = {
    component: DefaultNotImplementedComponent,
  };

  switch (component.type) {
    case "page":
      result = {
        component: PageComponent,
      };
      break;
    case "heroSection":
      result = {
        component: HeroSection,
      };
      break;
    case "cardGridSection":
      result = {
        component: CardGridSection,
      };
      break;
    case "contactFormSection":
      result = {
        component: ContactFormSection,
      };
      break;
    case "imageTextSection":
      result = {
        component: ImageTextSection,
      };
      break;
    case "marqueeSection":
      result = {
        component: MarqueeSection,
      };
      break;
    case "header":
      result = {
        component: Header,
      };
      break;
    case "footer":
      result = {
        component: Footer,
      };
      break;
  }

  return result;
}; 