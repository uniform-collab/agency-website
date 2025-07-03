import React from "react";
import * as LucideIcons from "lucide-react";
import {
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";

type FeatureParameters = {
  icon?: string;
  label?: string;
};

type FeatureProps = ComponentProps<FeatureParameters>;

export default function Feature({
  icon,
  label,
  component,
  context,
}: FeatureProps) {
  const IconComponent = icon ? LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<any> : null;
  
  return (
    <div className="flex items-center space-x-2 text-blue-600">
      {IconComponent && <IconComponent size={24} />}
      <span className="font-semibold text-slate-700">
        <UniformText
          component={component}
          context={context}
          parameterId="label"
          as="span"
        />
      </span>
    </div>
  );
} 