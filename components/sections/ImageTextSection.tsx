"use client";

import React from "react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";

interface Feature {
  icon: string;
  label: string;
}

interface ImageData {
  src: string;
  alt: string;
}

interface ImageTextSectionProps {
  id?: string;
  title: string;
  paragraphs: string[];
  features: Feature[];
  image: ImageData;
  variant?: "imageLeft" | "imageRight";
  backgroundColor?: string;
  className?: string;
}

export default function ImageTextSection({
  id,
  title,
  paragraphs,
  features,
  image,
  variant = "imageRight",
  backgroundColor,
  className = "",
}: ImageTextSectionProps) {
  const sectionClasses = `py-16 md:py-24 ${backgroundColor || ""} ${className}`;
  
  const contentOrder =
    variant === "imageLeft" ? "md:order-2" : "md:order-1";
  const imageOrder = variant === "imageLeft" ? "md:order-1" : "md:order-2";

  return (
    <section id={id} className={sectionClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={contentOrder}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
              {title.split(" ").map((word, index) => {
                // Apply gradient to the last two words if they exist
                const words = title.split(" ");
                const isLastTwoWords = index >= words.length - 2;
                
                return (
                  <React.Fragment key={index}>
                    {isLastTwoWords ? (
                      <span className="bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                    {index < words.length - 1 && " "}
                  </React.Fragment>
                );
              })}
            </h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 text-lg mb-4">
                {paragraph}
              </p>
            ))}
            <div className="flex space-x-6 mt-6">
              {features.map((feature, index) => {
                const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
                return (
                  <div key={index} className="flex items-center space-x-2 text-blue-600">
                    {IconComponent && <IconComponent size={24} />}
                    <span className="font-semibold text-slate-700">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={imageOrder}>
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={450}
              className="rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
