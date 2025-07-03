"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";

type ServiceCardParameters = {
  icon?: string;
  iconColor?: string;
  title?: string;
  description?: string;
};

type ServiceCardProps = ComponentProps<ServiceCardParameters>;

export default function ServiceCard({
  icon,
  iconColor = "text-purple-400",
  title,
  description,
  component,
  context,
}: ServiceCardProps) {
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
            placeholder="Service title"
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-600">
          <UniformText
            component={component}
            context={context}
            parameterId="description"
            placeholder="Service description"
          />
        </CardDescription>
      </CardContent>
    </Card>
  );
}