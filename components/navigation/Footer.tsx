"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { ComponentProps, UniformText, UniformSlot } from "@uniformdev/canvas-next-rsc/component";

type FooterParameters = {
  brandName?: string;
  brandIcon?: string;
  copyrightText?: string;
};

type FooterSlots = 'socialLinks' | 'legalLinks';

type FooterProps = ComponentProps<FooterParameters, FooterSlots>;

export default function Footer({ component, context, slots }: FooterProps) {
  const brandName = component?.parameters?.brandName?.value as string || '';
  const brandIcon = component?.parameters?.brandIcon?.value as string || '';
  const BrandIconComponent = brandIcon ? LucideIcons[brandIcon as keyof typeof LucideIcons] as React.ComponentType<any> : null;

  return (
    <footer className="py-12 bg-slate-200/50 border-t border-slate-300/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {BrandIconComponent && <BrandIconComponent className="h-7 w-7 text-blue-600" />}
            <UniformText
              component={component}
              context={context}
              parameterId="brandName"
              as="span"
              className="text-xl font-bold text-slate-800"
            />
          </div>
          <p className="text-sm text-slate-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}{' '}
            <UniformText
              component={component}
              context={context}
              parameterId="copyrightText"
            />
          </p>
          <div className="flex space-x-6">
            <UniformSlot 
              context={context} 
              data={component} 
              slot={slots.socialLinks} 
            />
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-slate-500 space-x-2">
          <UniformSlot 
            context={context} 
            data={component} 
            slot={slots.legalLinks} 
          />
        </div>
      </div>
    </footer>
  );
}
