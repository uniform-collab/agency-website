"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import {
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";

type ProcessStepParameters = {
  icon?: string;
  iconColor?: string;
  title?: string;
  description?: string;
};

type ProcessStepProps = ComponentProps<ProcessStepParameters>;

export default function ProcessStep({
  icon,
  iconColor = "text-purple-400",
  title,
  description,
  component,
  context,
}: ProcessStepProps) {
  const IconComponent = icon ? LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<any> : null;
  
  return (
    <div className="text-center p-6 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-lg">
      <div className="flex justify-center mb-4">
        {IconComponent && (
          <IconComponent className={`w-8 h-8 ${iconColor}`} />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800">
        <UniformText
          component={component}
          context={context}
          parameterId="title"
          placeholder="Process step title"
        />
      </h3>
      <p className="text-sm text-slate-600">
        <UniformText
          component={component}
          context={context}
          parameterId="description"
          placeholder="Process step description"
        />
      </p>
    </div>
  );
}