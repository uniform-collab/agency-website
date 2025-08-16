import React from "react";
import { Metadata } from "next";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyListSection from "@/components/sections/CaseStudyListSection";
import CaseStudyCard from "@/components/sections/CaseStudyCard";

export const metadata: Metadata = {
  title: "Case Studies | Agency Website",
  description: "Discover how we've helped our clients achieve their goals through strategic design and development solutions.",
  openGraph: {
    title: "Case Studies | Agency Website",
    description: "Discover how we've helped our clients achieve their goals through strategic design and development solutions.",
    type: "website",
  },
};

// Mock data for demonstration - in a real app this would come from Uniform CMS
const featuredCaseStudy = {
  title: "E-commerce Platform Redesign Drives 150% Revenue Growth",
  subtitle: "How we transformed a traditional retail business into a digital powerhouse",
  client: "TechShop Inc.",
  industry: "E-commerce",
  useCase: "Website Redesign",
  heroImage: {
    url: "/placeholder-case-study-hero.jpg",
    alt: "E-commerce platform dashboard showing analytics"
  },
  results: "150% increase in online revenue, 75% improvement in conversion rate, 40% reduction in cart abandonment",
  challenge: "TechShop's outdated website was losing customers to competitors. Poor user experience, slow loading times, and complicated checkout process were major pain points affecting sales.",
  solution: "We redesigned the entire platform with a focus on user experience, implemented a modern tech stack, optimized for mobile, and streamlined the checkout process with advanced analytics integration.",
  primaryButtonLabel: "View Full Case Study",
  primaryButtonLink: { path: "/case-studies/techshop-ecommerce" },
  secondaryButtonLabel: "Contact Us",
  secondaryButtonLink: { path: "/contact" }
};

const caseStudyCards = [
  {
    title: "Mobile App Development for Healthcare Startup",
    description: "Built a HIPAA-compliant mobile application that connects patients with healthcare providers, resulting in improved patient outcomes.",
    client: "HealthConnect",
    industry: "Healthcare",
    useCase: "Mobile App",
    image: {
      url: "/placeholder-healthcare-app.jpg",
      alt: "Healthcare mobile app interface"
    },
    results: "90% patient satisfaction rate, 60% reduction in appointment no-shows",
    tags: "React Native, HIPAA Compliance, UI/UX Design",
    link: { path: "/case-studies/healthconnect-mobile" }
  },
  {
    title: "Digital Transformation for Financial Services",
    description: "Modernized legacy banking systems and created a seamless digital banking experience for customers across all touchpoints.",
    client: "SecureBank",
    industry: "Finance",
    useCase: "Digital Transformation",
    image: {
      url: "/placeholder-banking-app.jpg",
      alt: "Digital banking platform interface"
    },
    results: "45% increase in digital adoption, 30% reduction in operational costs",
    tags: "Fintech, Security, Cloud Migration",
    link: { path: "/case-studies/securebank-transformation" },
    featured: true
  },
  {
    title: "Brand Identity & Website for Non-Profit",
    description: "Created a compelling brand identity and responsive website that increased donations and volunteer engagement for environmental organization.",
    client: "GreenFuture Foundation",
    industry: "Non-profit",
    useCase: "Brand Identity",
    image: {
      url: "/placeholder-nonprofit-website.jpg",
      alt: "Non-profit website homepage"
    },
    results: "200% increase in online donations, 85% growth in volunteer sign-ups",
    tags: "Branding, WordPress, SEO, Social Impact",
    link: { path: "/case-studies/greenfuture-identity" }
  },
  {
    title: "Manufacturing Process Optimization Platform",
    description: "Developed an IoT-connected platform that optimizes manufacturing processes and reduces waste through real-time monitoring and analytics.",
    client: "AutoMaker Corp",
    industry: "Manufacturing",
    useCase: "Digital Transformation",
    image: {
      url: "/placeholder-manufacturing-dashboard.jpg",
      alt: "Manufacturing analytics dashboard"
    },
    results: "25% reduction in production waste, 20% improvement in efficiency",
    tags: "IoT, Analytics, Dashboard Design, Industrial",
    link: { path: "/case-studies/automaker-optimization" }
  },
  {
    title: "EdTech Platform for Online Learning",
    description: "Built a comprehensive learning management system that enhances student engagement through interactive content and personalized learning paths.",
    client: "EduTech Solutions",
    industry: "Education",
    useCase: "Website Redesign",
    image: {
      url: "/placeholder-edtech-platform.jpg",
      alt: "Online learning platform interface"
    },
    results: "95% student completion rate, 40% improvement in test scores",
    tags: "LMS, Interactive Design, Analytics, Accessibility",
    link: { path: "/case-studies/edutech-platform" }
  },
  {
    title: "SEO Strategy for Technology Startup",
    description: "Implemented comprehensive SEO strategy that increased organic traffic and improved search rankings for competitive technology keywords.",
    client: "InnovateTech",
    industry: "Technology",
    useCase: "SEO Optimization",
    image: {
      url: "/placeholder-seo-results.jpg",
      alt: "SEO analytics showing traffic growth"
    },
    results: "300% increase in organic traffic, #1 rankings for 15 target keywords",
    tags: "SEO, Content Strategy, Technical SEO, Analytics",
    link: { path: "/case-studies/innovatetech-seo" }
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      {/* Featured Case Study Hero */}
      <CaseStudyHero
        {...featuredCaseStudy}
        component={{ type: "caseStudyHero", _id: "hero" } as any}
        context={{} as any}
      />
      
      {/* Case Studies List */}
      <CaseStudyListSection
        title="Our Case Studies"
        subtitle="Explore more success stories and discover how we've helped businesses across industries achieve their digital transformation goals."
        showFilters={true}
        backgroundColor="bg-slate-50"
        gridColumns="3"
        showLoadMore={true}
        initialDisplayCount={6}
        component={{ type: "caseStudyListSection", _id: "list" } as any}
        context={{} as any}
      >
        {/* Case Study Cards would be rendered here through Uniform slots in a real implementation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudyCards.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              {...caseStudy}
              component={{ type: "caseStudyCard", _id: `card-${index}` } as any}
              context={{} as any}
            />
          ))}
        </div>
      </CaseStudyListSection>
    </main>
  );
}