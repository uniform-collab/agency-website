"use client";

import React from "react";
import Image from "next/image";

interface MarqueeSectionProps {
  title: string;
  logoCount: number;
  className?: string;
}

export default function MarqueeSection({
  title,
  logoCount,
  className = "",
}: MarqueeSectionProps) {
  return (
    <section className={`py-12 md:py-16 bg-white/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl font-semibold text-slate-600 mb-8">
          {title}
        </h3>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {[...Array(logoCount)].map((_, i) => (
              <div key={i} className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16">
                <Image
                  src={`/placeholder-logo.svg?height=50&width=150&query=tech+company+logo+${
                    i + 1
                  }`}
                  alt={`Client Logo ${i + 1}`}
                  width={150}
                  height={50}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[...Array(logoCount)].map((_, i) => (
              <div
                key={`duplicate-${i}`}
                className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16"
              >
                <Image
                  src={`/placeholder-logo.svg?height=50&width=150&query=tech+company+logo+${
                    i + 1
                  }`}
                  alt={`Client Logo ${i + 1}`}
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
