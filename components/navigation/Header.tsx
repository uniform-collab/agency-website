"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
}

interface Brand {
  name: string;
  icon: string;
}

interface CtaButton {
  label: string;
  href: string;
}

interface HeaderProps {
  brand: Brand;
  menuItems: MenuItem[];
  ctaButton: CtaButton;
}

export default function Header({ brand, menuItems, ctaButton }: HeaderProps) {
  const IconComponent = LucideIcons[brand.icon as keyof typeof LucideIcons] as React.ComponentType<any>;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-xl border-b border-white/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-slate-900"
          >
            {IconComponent && <IconComponent className="h-8 w-8 text-blue-600" />}
            <span>{brand.name}</span>
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            className="hidden md:inline-flex bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-md hover:brightness-105 active:brightness-95 transition-all"
          >
            <Link href={ctaButton.href}>{ctaButton.label}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
