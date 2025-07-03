"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";

type ProjectCardParameters = {
  image?: AssetParamValue;
  imageAlt?: string;
  title?: string;
  description?: string;
  tags?: string;
};

type ProjectCardProps = ComponentProps<ProjectCardParameters>;

export default function ProjectCard({
  image,
  imageAlt,
  title,
  description,
  tags,
  component,
  context,
}: ProjectCardProps) {
  const imageAsset = flattenValues(image, { toSingle: true });
  const tagList = tags ? tags.split(',').map(tag => tag.trim()) : [];

  return (
    <Card className="bg-white border border-slate-200 overflow-hidden group shadow-lg rounded-xl">
      {imageAsset && (
        <Image
          src={imageAsset.url}
          alt={imageAlt || "Project image"}
          width={imageAsset.width || 600}
          height={imageAsset.height || 400}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-slate-800">
          <UniformText
            component={component}
            context={context}
            parameterId="title"
            placeholder="Project title"
          />
        </h3>
        <p className="text-slate-600 mb-4 text-sm">
          <UniformText
            component={component}
            context={context}
            parameterId="description"
            placeholder="Project description"
          />
        </p>
        {tagList.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tagList.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}