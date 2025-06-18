"use client";

import React from "react";
import Image from "next/image";
import { ComponentProps, UniformText, UniformRichText, UniformSlot } from "@uniformdev/canvas-next-rsc/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

type ImageTextSectionParameters = {
  title?: string;
  content?: any;
  image?: AssetParamValue;
  variant?: string;
};

type ImageTextSectionSlots = 'features';

type ImageTextSectionProps = ComponentProps<ImageTextSectionParameters, ImageTextSectionSlots>;

export default function ImageTextSection({
  component,
  context,
  slots,
}: ImageTextSectionProps) {
  const imageRaw = component?.parameters?.image?.value;
  const image = imageRaw ? flattenValues(imageRaw as any, { toSingle: true }) : null;
  const variant = component?.parameters?.variant?.value as string || "imageRight";
  
  const contentOrder = variant === "imageLeft" ? "md:order-2" : "md:order-1";
  const imageOrder = variant === "imageLeft" ? "md:order-1" : "md:order-2";

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={contentOrder}>
            <UniformText
              component={component}
              context={context}
              parameterId="title"
              as="h2"
              className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900"
            />
            <UniformRichText
              component={component}
              context={context}
              parameterId="content"
              className="text-slate-600 text-lg mb-6"
            />
            <div className="flex space-x-6 mt-6">
              <UniformSlot 
                context={context} 
                data={component} 
                slot={slots.features} 
              />
            </div>
          </div>
          <div className={imageOrder}>
            {image && (image as any)?.url && (
              <Image
                src={(image as any).url}
                alt={(image as any).title || 'Section image'}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl border-4 border-white"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
