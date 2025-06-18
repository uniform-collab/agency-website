"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ComponentProps, UniformText, UniformSlot } from "@uniformdev/canvas-next-rsc/component";

type HeaderParameters = {
  brandName?: string;
  brandIcon?: string;
};

type HeaderSlots = 'menuItems' | 'ctaButton';

type HeaderProps = ComponentProps<HeaderParameters, HeaderSlots>;

export default function Header({ component, context, slots }: HeaderProps) {
  const brandName = component?.parameters?.brandName?.value as string || '';
  const brandIcon = component?.parameters?.brandIcon?.value as string || '';
  const IconComponent = brandIcon ? LucideIcons[brandIcon as keyof typeof LucideIcons] as React.ComponentType<any> : null;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-xl border-b border-white/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-slate-900"
          >
            {IconComponent && <IconComponent className="h-8 w-8 text-blue-600" />}
            <UniformText
              component={component}
              context={context}
              parameterId="brandName"
              as="span"
            />
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            <UniformSlot 
              context={context} 
              data={component} 
              slot={slots.menuItems} 
            />
          </nav>
          <div className="hidden md:inline-flex">
            <UniformSlot 
              context={context} 
              data={component} 
              slot={slots.ctaButton} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
