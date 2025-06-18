import React from "react";
import * as LucideIcons from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-next-rsc/component";

type ServiceCardParameters = {
  icon?: string;
  iconColor?: string;
  title?: string;
  description?: any;
};

type ServiceCardProps = ComponentProps<ServiceCardParameters>;

export const ServiceCard = ({ component, context }: ServiceCardProps) => {
  const icon = component?.parameters?.icon?.value as string;
  const iconColor = component?.parameters?.iconColor?.value as string || 'text-blue-600';
  const IconComponent = icon ? LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<any> : null;

  return (
    <Card className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-center md:justify-start">
          {IconComponent && (
            <IconComponent
              className={`mb-4 ${iconColor}`}
              size={32}
            />
          )}
        </div>
        <CardTitle className="text-2xl font-semibold text-slate-800">
          <UniformText
            component={component}
            context={context}
            parameterId="title"
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <UniformRichText
          component={component}
          context={context}
          parameterId="description"
          className="text-slate-600"
        />
      </CardContent>
    </Card>
  );
}; 