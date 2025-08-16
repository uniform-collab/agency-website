import {
  DefaultNotImplementedComponent,
  ResolveComponentFunction,
  ResolveComponentResult,
} from "@uniformdev/canvas-next-rsc/component";

// Import your existing components
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ImageTextSection from "@/components/sections/ImageTextSection";
import CardGridSection from "@/components/sections/CardGridSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import PageComponent from "@/components/Page";
import Feature from "@/components/sections/Feature";

// Import new case study components
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyListSection from "@/components/sections/CaseStudyListSection";
import Metric from "@/components/sections/Metric";

export const resolveComponent: ResolveComponentFunction = ({ component }) => {
  let result: ResolveComponentResult = {
    component: DefaultNotImplementedComponent,
  };

  // Map Uniform component types to React components
  switch (component.type) {
    case "page":
      result = {
        component: PageComponent,
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
    case "heroSection":
      result = {
        component: HeroSection,
      };
      break;
    case "marqueeSection":
      result = {
        component: MarqueeSection,
      };
      break;
    case "imageTextSection":
      result = {
        component: ImageTextSection,
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
    case "feature":
      result = {
        component: Feature,
      };
      break;
    // Case Study Components
    case "caseStudyCard":
      result = {
        component: CaseStudyCard,
      };
      break;
    case "caseStudyHero":
      result = {
        component: CaseStudyHero,
      };
      break;
    case "caseStudyListSection":
      result = {
        component: CaseStudyListSection,
      };
      break;
    case "metric":
      result = {
        component: Metric,
      };
      break;
    default:
      // Return default not implemented component
      break;
  }

  return result;
}; 