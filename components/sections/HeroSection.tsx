"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface HeroTitle {
  line1: string;
  line2: string;
}

interface HeroButton {
  label: string;
  href: string;
}

interface HeroSectionProps {
  title: HeroTitle;
  subtitle: string;
  primaryButton: HeroButton;
  secondaryButton: HeroButton;
}

export default function HeroSection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight overflow-visible">
            <span className="block leading-tight">{title.line1}</span>
            <span className="block bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text leading-tight">
              {title.line2}
            </span>
          </h1>
          <p className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-lg hover:brightness-105 active:brightness-95 transition-all px-8 py-3 text-lg"
            >
              <Link href={primaryButton.href}>{primaryButton.label}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-slate-500 text-slate-700 hover:bg-white/50 hover:text-slate-900 px-8 py-3 text-lg"
            >
              <Link href={secondaryButton.href}>{secondaryButton.label}</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
} 