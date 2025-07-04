"use client";

import React from "react";
import Image from "next/image";
import {
  ComponentProps,
  UniformText,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

type MarqueeSectionParameters = {
  title?: string;
  backgroundColor?: string;
  speed?: string;
  sectionId?: string;
  logoHeight?: number;
  logoSpacing?: string;
  showTitle?: boolean;
};

type MarqueeSectionSlots = 'logos';

type MarqueeSectionProps = ComponentProps<MarqueeSectionParameters, MarqueeSectionSlots>;

export default function MarqueeSection({
  title,
  backgroundColor,
  speed = "normal",
  sectionId,
  logoHeight = 50,
  logoSpacing = "mx-8 md:mx-12 lg:mx-16",
  showTitle = true,
  slots,
  component,
  context,
}: MarqueeSectionProps) {
  const sectionClasses = `py-12 md:py-16 ${backgroundColor || "bg-white/30"}`;
  
  const getAnimationSpeed = (speed: string) => {
    switch (speed) {
      case "slow":
        return "animate-marquee-slow";
      case "fast":
        return "animate-marquee-fast";
      default:
        return "animate-marquee";
    }
  };

  // Fallback logos for when no logos are provided in slots
  const logoCount = 10;
  const fallbackLogos = [...Array(logoCount)].map((_, i) => (
    <div key={i} className={`flex-shrink-0 ${logoSpacing}`}>
      <Image
        src={`/placeholder-logo.svg?height=${logoHeight}&width=150&query=tech+company+logo+${i + 1}`}
        alt={`Client Logo ${i + 1}`}
        width={150}
        height={logoHeight}
        className="opacity-60 hover:opacity-100 transition-opacity"
      />
    </div>
  ));

  return (
    <section id={sectionId} className={sectionClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && title && (
          <h3 className="text-center text-xl font-semibold text-slate-600 mb-8">
            <UniformText
              component={component}
              context={context}
              parameterId="title"
              as="span"
            />
          </h3>
        )}
        <div className="relative overflow-hidden">
          <div className={`flex ${getAnimationSpeed(speed)}`}>
            {/* Check if we have logos in slots, otherwise show fallback */}
            {slots?.logos ? (
              <UniformSlot 
                context={context} 
                data={component} 
                slot={slots.logos} 
              />
            ) : (
              fallbackLogos
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
