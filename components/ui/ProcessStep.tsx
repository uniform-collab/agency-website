import React from "react";
import * as LucideIcons from "lucide-react";
import { ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-next-rsc/component";

type ProcessStepParameters = {
  icon?: string;
  iconColor?: string;
  title?: string;
  description?: any;
};

type ProcessStepProps = ComponentProps<ProcessStepParameters>;

export const ProcessStep = ({ component, context }: ProcessStepProps) => {
  const icon = component?.parameters?.icon?.value as string;
  const iconColor = component?.parameters?.iconColor?.value as string || 'text-blue-600';
  const IconComponent = icon ? LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<any> : null;

  return (
    <div className="text-center p-6 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-lg">
      <div className="flex justify-center mb-4">
        {IconComponent && (
          <IconComponent className={`w-8 h-8 ${iconColor}`} />
        )}
      </div>
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
        className="text-sm text-slate-600"
      />
    </div>
  );
}; 