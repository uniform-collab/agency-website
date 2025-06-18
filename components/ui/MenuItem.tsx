import React from "react";
import Link from "next/link";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";
import { LinkParamValue } from "@uniformdev/canvas";

type MenuItemParameters = {
  label?: string;
  link?: LinkParamValue;
};

type MenuItemProps = ComponentProps<MenuItemParameters>;

export const MenuItem = ({ component, context }: MenuItemProps) => {
  const link = component?.parameters?.link?.value as any;

  if (!link?.path) {
    return (
      <span className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
        <UniformText
          component={component}
          context={context}
          parameterId="label"
        />
      </span>
    );
  }

  return (
    <Link
      href={link.path}
      className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
    >
      <UniformText
        component={component}
        context={context}
        parameterId="label"
      />
    </Link>
  );
}; 