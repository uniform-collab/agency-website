import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";
import { LinkParamValue } from "@uniformdev/canvas";

type SocialLinkParameters = {
  icon?: string;
  link?: LinkParamValue;
  label?: string;
};

type SocialLinkProps = ComponentProps<SocialLinkParameters>;

export const SocialLink = ({ component, context }: SocialLinkProps) => {
  const icon = component?.parameters?.icon?.value as string;
  const link = component?.parameters?.link?.value as any;
  const label = component?.parameters?.label?.value as string || 'Social Link';
  
  const IconComponent = icon ? LucideIcons[icon as keyof typeof LucideIcons] as React.ComponentType<any> : null;

  if (!link?.path) {
    return (
      <span className="text-slate-500 hover:text-blue-600 transition-colors">
        {IconComponent && <IconComponent size={20} />}
      </span>
    );
  }

  return (
    <Link
      href={link.path}
      className="text-slate-500 hover:text-blue-600 transition-colors"
      aria-label={label}
    >
      {IconComponent && <IconComponent size={20} />}
    </Link>
  );
}; 