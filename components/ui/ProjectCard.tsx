import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-next-rsc/component";
import { AssetParamValue } from "@uniformdev/canvas";

type ProjectCardParameters = {
  image?: AssetParamValue;
  title?: string;
  description?: any;
  tags?: string;
};

type ProjectCardProps = ComponentProps<ProjectCardParameters>;

export const ProjectCard = ({ component, context }: ProjectCardProps) => {
  const image = component?.parameters?.image?.value as any;
  const tags = component?.parameters?.tags?.value as string || '';
  const tagArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);

  return (
    <Card className="bg-white border border-slate-200 overflow-hidden group shadow-lg rounded-xl">
      {image?.url && (
        <Image
          src={image.url || '/placeholder.jpg'}
          alt={image.title || 'Project image'}
          width={600}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <CardContent className="p-6">
        <UniformText
          component={component}
          context={context}
          parameterId="title"
          as="h3"
          className="text-xl font-semibold mb-2 text-slate-800"
        />
        <UniformRichText
          component={component}
          context={context}
          parameterId="description"
          className="text-slate-600 mb-4 text-sm"
        />
        <div className="flex flex-wrap gap-2">
          {tagArray.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}; 