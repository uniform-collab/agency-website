import React from "react";
import * as LucideIcons from "lucide-react";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";

type FeatureParameters = {
  icon?: string;
  label?: string;
};

type FeatureProps = ComponentProps<FeatureParameters>;

export const Feature = ({ component, context }: FeatureProps) => {
  const icon = component?.parameters?.icon?.value as string;
  const IconComponent = icon ? LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<any> : null;

  return (
    <div className="flex items-center space-x-2 text-blue-600">
      {IconComponent && <IconComponent size={24} />}
      <UniformText
        component={component}
        context={context}
        parameterId="label"
        as="span"
        className="font-semibold text-slate-700"
      />
    </div>
  );
}; 