"use client";

import React from "react";
import Image from "next/image";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

type MarqueeSectionParameters = {
  title?: string;
  logos?: AssetParamValue;
};

type MarqueeSectionProps = ComponentProps<MarqueeSectionParameters>;

export default function MarqueeSection({
  component,
  context,
}: MarqueeSectionProps) {
  // Use flattenValues properly for multi-asset parameter
  const logosRaw = component?.parameters?.logos?.value;
  const logos = logosRaw ? (flattenValues(logosRaw as any) || []) : [];
  
  return (
    <section className="py-12 md:py-16 bg-white/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <UniformText
          component={component}
          context={context}
          parameterId="title"
          as="h3"
          className="text-center text-xl font-semibold text-slate-600 mb-8"
        />
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {logos.map((logo: any, i: number) => (
              <div key={i} className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16">
                <Image
                  src={logo.url}
                  alt={logo.title || `Client Logo ${i + 1}`}
                  width={150}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
