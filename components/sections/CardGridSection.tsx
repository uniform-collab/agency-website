"use client";

import React from "react";
import { ComponentProps, UniformText, UniformRichText, UniformSlot } from "@uniformdev/canvas-next-rsc/component";

type CardGridSectionParameters = {
  title?: string;
  subtitle?: any;
  variant?: string;
};

type CardGridSectionSlots = 'cards';

type CardGridSectionProps = ComponentProps<CardGridSectionParameters, CardGridSectionSlots>;

export default function CardGridSection({
  component,
  context,
  slots,
}: CardGridSectionProps) {
  const variant = component?.parameters?.variant?.value as string || "services";

  const getGridColumns = () => {
    switch (variant) {
      case "services":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case "portfolio":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case "process":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <UniformText
            component={component}
            context={context}
            parameterId="title"
            as="h2"
            className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900"
          />
          <UniformRichText
            component={component}
            context={context}
            parameterId="subtitle"
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          />
        </div>
        
        {variant === "process" && (
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent transform -translate-y-1/2 -z-10"></div>
            <div className={`grid gap-8 ${getGridColumns()}`}>
              <UniformSlot 
                context={context} 
                data={component} 
                slot={slots.cards} 
              />
            </div>
          </div>
        )}
        
        {variant !== "process" && (
          <div className={`grid gap-8 ${getGridColumns()}`}>
            <UniformSlot 
              context={context} 
              data={component} 
              slot={slots.cards} 
            />
          </div>
        )}
      </div>
    </section>
  );
}
