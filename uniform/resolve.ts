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

// Import card components
import ServiceCard from "@/components/cards/ServiceCard";
import ProjectCard from "@/components/cards/ProjectCard";
import ProcessStep from "@/components/cards/ProcessStep";

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
    case "serviceCard":
      result = {
        component: ServiceCard,
      };
      break;
    case "projectCard":
      result = {
        component: ProjectCard,
      };
      break;
    case "processStep":
      result = {
        component: ProcessStep,
      };
      break;
    default:
      // Return default not implemented component
      break;
  }

  return result;
}; 