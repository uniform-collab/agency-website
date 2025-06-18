"use client";

import React from "react";
import cmsData from "../cms.json";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ImageTextSection from "@/components/sections/ImageTextSection";
import CardGridSection from "@/components/sections/CardGridSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function AgencyLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200 text-slate-800 scroll-smooth">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-[-1] bg-gradient-radial from-white via-slate-100 to-slate-300" />

      {/* Header */}
      <Header
        brand={cmsData.navigation.brand}
        menuItems={cmsData.navigation.menuItems}
        ctaButton={cmsData.navigation.ctaButton}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title={cmsData.hero.title}
          subtitle={cmsData.hero.subtitle}
          primaryButton={cmsData.hero.primaryButton}
          secondaryButton={cmsData.hero.secondaryButton}
        />

        {/* Client Logos Section */}
        <MarqueeSection
          title={cmsData.clientLogos.title}
          logoCount={cmsData.clientLogos.logoCount}
        />

        {/* About Section */}
        <ImageTextSection
          id="about"
          title={cmsData.aboutSection.title}
          paragraphs={cmsData.aboutSection.paragraphs}
          features={cmsData.aboutSection.features}
          image={cmsData.aboutSection.image}
          variant="imageRight"
        />

        {/* Mission Section */}
        <ImageTextSection
          id="mission"
          title={cmsData.missionSection.title}
          paragraphs={cmsData.missionSection.paragraphs}
          features={cmsData.missionSection.features}
          image={cmsData.missionSection.image}
          variant="imageLeft"
          backgroundColor="bg-white/30"
        />

        {/* Services Section */}
        <CardGridSection
          id="services"
          title={cmsData.servicesSection.title}
          subtitle={cmsData.servicesSection.subtitle}
          variant="services"
          items={cmsData.servicesSection.services}
        />

        {/* Portfolio Section */}
        <CardGridSection
          id="work"
          title={cmsData.portfolioSection.title}
          subtitle={cmsData.portfolioSection.subtitle}
          variant="portfolio"
          items={cmsData.portfolioSection.projects}
          backgroundColor="bg-white/30"
        />

        {/* Process Section */}
        <CardGridSection
          id="process"
          title={cmsData.processSection.title}
          subtitle={cmsData.processSection.subtitle}
          variant="process"
          items={cmsData.processSection.steps}
        />

        {/* Contact Section */}
        <ContactFormSection
          id="contact"
          title={cmsData.contactSection.title}
          subtitle={cmsData.contactSection.subtitle}
          form={cmsData.contactSection.form}
        />
      </main>

      {/* Footer */}
      <Footer
        brand={cmsData.footer.brand}
        copyright={cmsData.footer.copyright}
        socialLinks={cmsData.footer.socialLinks}
        legalLinks={cmsData.footer.legalLinks}
      />
    </div>
  );
}
