import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";
import { LinkParamValue } from "@uniformdev/canvas";

type ButtonParameters = {
  text?: string;
  link?: LinkParamValue;
  variant?: string;
};

type UniformButtonProps = ComponentProps<ButtonParameters>;

export const UniformButton = ({ component, context }: UniformButtonProps) => {
  const link = component?.parameters?.link?.value as any;
  const variant = component?.parameters?.variant?.value || 'primary';

  const getButtonClasses = () => {
    switch (variant) {
      case 'primary':
        return "bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-lg hover:brightness-105 active:brightness-95 transition-all px-8 py-3 text-lg";
      case 'secondary':
        return "bg-slate-800 text-white hover:bg-slate-700 px-8 py-3 text-lg";
      case 'outline':
        return "bg-transparent border-slate-500 text-slate-700 hover:bg-white/50 hover:text-slate-900 px-8 py-3 text-lg";
      default:
        return "bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-lg hover:brightness-105 active:brightness-95 transition-all px-8 py-3 text-lg";
    }
  };

  if (!link?.path) {
    return (
      <Button
        size="lg"
        variant={variant === 'outline' ? 'outline' : 'default'}
        className={getButtonClasses()}
      >
        <UniformText
          component={component}
          context={context}
          parameterId="text"
        />
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      asChild
      variant={variant === 'outline' ? 'outline' : 'default'}
      className={getButtonClasses()}
    >
      <Link href={link.path || '#'}>
        <UniformText
          component={component}
          context={context}
          parameterId="text"
        />
      </Link>
    </Button>
  );
}; 