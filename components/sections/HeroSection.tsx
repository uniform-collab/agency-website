"use client";

import React from "react";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ComponentProps, UniformText, UniformRichText, UniformSlot } from "@uniformdev/canvas-next-rsc/component";
import { RichTextParamValue } from "@uniformdev/canvas";

type HeroSectionParameters = {
  title?: string;
  subtitle?: RichTextParamValue;
};

type HeroSectionSlots = 'buttons';

type HeroSectionProps = ComponentProps<HeroSectionParameters, HeroSectionSlots>;

export default function HeroSection({
  component,
  context,
  slots,
}: HeroSectionProps) {
  return (
    <AuroraBackground id="home">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-center py-4">
          <UniformText
            component={component}
            context={context}
            parameterId="title"
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight overflow-visible"
          />
          <UniformRichText
            component={component}
            context={context}
            parameterId="subtitle"
            className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 mb-10"
          />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <UniformSlot 
              context={context} 
              data={component} 
              slot={slots.buttons} 
            />
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
