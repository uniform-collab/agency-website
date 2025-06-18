"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

interface Brand {
  name: string;
  icon: string;
}

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface LegalLink {
  label: string;
  href: string;
}

interface FooterProps {
  brand: Brand;
  copyright: string;
  socialLinks: SocialLink[];
  legalLinks: LegalLink[];
}

export default function Footer({
  brand,
  copyright,
  socialLinks,
  legalLinks,
}: FooterProps) {
  const BrandIconComponent = LucideIcons[brand.icon as keyof typeof LucideIcons] as React.ComponentType<any>;

  return (
    <footer className="py-12 bg-slate-200/50 border-t border-slate-300/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {BrandIconComponent && <BrandIconComponent className="h-7 w-7 text-blue-600" />}
            <span className="text-xl font-bold text-slate-800">
              {brand.name}
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {copyright}
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                  aria-label={link.label}
                >
                  {IconComponent && <IconComponent size={20} />}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-slate-500">
          {legalLinks.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link href={link.href} className="hover:text-slate-800">
                {link.label}
              </Link>
              {index < legalLinks.length - 1 && " | "}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
