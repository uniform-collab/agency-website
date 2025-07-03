"use client";

import React from "react";
import Image from "next/image";
import {
  ComponentProps,
  UniformText,
  UniformRichText,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

type ImageTextSectionParameters = {
  title?: string;
  content?: any; // Rich text parameter
  image?: AssetParamValue;
  imageAlt?: string;
  variant?: string;
  backgroundColor?: string;
  sectionId?: string;
};

type ImageTextSectionSlots = 'features';

type ImageTextSectionProps = ComponentProps<ImageTextSectionParameters, ImageTextSectionSlots>;

export default function ImageTextSection({
  title,
  content,
  image,
  imageAlt,
  variant = "imageRight",
  backgroundColor,
  sectionId,
  slots,
  component,
  context,
}: ImageTextSectionProps) {
  const sectionClasses = `py-16 md:py-24 ${backgroundColor || ""}`;
  
  const contentOrder =
    variant === "imageLeft" ? "md:order-2" : "md:order-1";
  const imageOrder = variant === "imageLeft" ? "md:order-1" : "md:order-2";

  // Handle the image asset
  const imageAsset = flattenValues(image, { toSingle: true });

  return (
    <section id={sectionId} className={sectionClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={contentOrder}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
              {title && title.split(" ").map((word, index) => {
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
            <div className="text-slate-600 text-lg mb-4">
              <UniformRichText
                component={component}
                context={context}
                parameterId="content"
              />
            </div>
            <div className="flex space-x-6 mt-6">
              <UniformSlot 
                context={context} 
                data={component} 
                slot={slots.features} 
              />
            </div>
          </div>
          <div className={imageOrder}>
            {imageAsset && (
              <Image
                src={imageAsset.url}
                alt={imageAlt || "Section image"}
                width={imageAsset.width || 600}
                height={imageAsset.height || 450}
                className="rounded-lg shadow-2xl border-4 border-white"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
