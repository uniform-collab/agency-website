import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";

type FormFieldParameters = {
  name?: string;
  label?: string;
  type?: string;
  required?: boolean;
  width?: string;
};

type FormFieldProps = ComponentProps<FormFieldParameters>;

export const FormField = ({ component, context }: FormFieldProps) => {
  const name = component?.parameters?.name?.value as string || '';
  const type = component?.parameters?.type?.value as string || 'text';
  const requiredValue = component?.parameters?.required?.value;
  const required = requiredValue === true || requiredValue === 'true';
  const width = component?.parameters?.width?.value as string || 'full';

  const baseClasses = "bg-white/50 border-slate-300 text-slate-900 focus:ring-blue-500 focus:border-blue-500";
  const labelClasses = "block text-sm font-medium text-slate-700 mb-1";
  const containerClasses = width === "half" ? "" : "sm:col-span-2";

  return (
    <div className={containerClasses}>
      <UniformText
        component={component}
        context={context}
        parameterId="label"
        as="label"
        className={labelClasses}
        // @ts-ignore
        htmlFor={name}
      />
      {type === "textarea" ? (
        <Textarea
          name={name}
          id={name}
          rows={4}
          required={required}
          className={baseClasses}
        />
      ) : (
        <Input
          type={type}
          name={name}
          id={name}
          required={required}
          className={baseClasses}
        />
      )}
    </div>
  );
}; 