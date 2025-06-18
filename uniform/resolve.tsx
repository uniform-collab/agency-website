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
import { UniformButton } from "@/components/ui/UniformButton";
import { Feature } from "@/components/ui/Feature";
import { FormField } from "@/components/ui/FormField";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { MenuItem } from "@/components/ui/MenuItem";
import { SocialLink } from "@/components/ui/SocialLink";
import { LegalLink } from "@/components/ui/LegalLink";

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
    case "button":
      result = {
        component: UniformButton,
      };
      break;
    case "feature":
      result = {
        component: Feature,
      };
      break;
    case "formField":
      result = {
        component: FormField,
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
    case "menuItem":
      result = {
        component: MenuItem,
      };
      break;
    case "socialLink":
      result = {
        component: SocialLink,
      };
      break;
    case "legalLink":
      result = {
        component: LegalLink,
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