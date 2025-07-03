"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";
import { LinkParamValue } from "@uniformdev/canvas";

type HeroSectionParameters = {
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: LinkParamValue;
  primaryButtonStyle?: string;
  secondaryButtonLabel?: string;
  secondaryButtonLink?: LinkParamValue;
  secondaryButtonStyle?: string;
};

type HeroSectionProps = ComponentProps<HeroSectionParameters>;

export default function HeroSection({
  titleLine1,
  titleLine2,
  subtitle,
  primaryButtonLabel,
  primaryButtonLink,
  primaryButtonStyle = "solid",
  secondaryButtonLabel,
  secondaryButtonLink,
  secondaryButtonStyle = "outline",
  component,
  context,
}: HeroSectionProps) {
  const getButtonClasses = (style: string, isPrimary: boolean) => {
    const baseClasses = "px-8 py-3 text-lg";
    
    switch (style) {
      case "solid":
        return isPrimary 
          ? `${baseClasses} bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-lg hover:brightness-105 active:brightness-95 transition-all`
          : `${baseClasses} bg-slate-800 text-white hover:bg-slate-700 transition-colors`;
      case "outline":
        return `${baseClasses} bg-transparent border-slate-500 text-slate-700 hover:bg-white/50 hover:text-slate-900 transition-colors`;
      case "ghost":
        return `${baseClasses} bg-transparent text-slate-700 hover:bg-white/30 transition-colors`;
      default:
        return baseClasses;
    }
  };

  const getButtonVariant = (style: string) => {
    switch (style) {
      case "outline":
        return "outline";
      case "ghost":
        return "ghost";
      default:
        return "default";
    }
  };

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight overflow-visible">
            <span className="block leading-tight">
              <UniformText
                component={component}
                context={context}
                parameterId="titleLine1"
                as="span"
              />
            </span>
            <span className="block bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text leading-tight">
              <UniformText
                component={component}
                context={context}
                parameterId="titleLine2"
                as="span"
              />
            </span>
          </h1>
          <p className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 mb-10">
            <UniformText
              component={component}
              context={context}
              parameterId="subtitle"
              as="span"
            />
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {primaryButtonLabel && (
              <Button
                size="lg"
                variant={getButtonVariant(primaryButtonStyle)}
                asChild
                className={getButtonClasses(primaryButtonStyle, true)}
              >
                <Link href={primaryButtonLink?.path || "#"}>
                  <UniformText
                    component={component}
                    context={context}
                    parameterId="primaryButtonLabel"
                    as="span"
                  />
                </Link>
              </Button>
            )}
            {secondaryButtonLabel && (
              <Button
                size="lg"
                variant={getButtonVariant(secondaryButtonStyle)}
                asChild
                className={getButtonClasses(secondaryButtonStyle, false)}
              >
                <Link href={secondaryButtonLink?.path || "#"}>
                  <UniformText
                    component={component}
                    context={context}
                    parameterId="secondaryButtonLabel"
                    as="span"
                  />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
