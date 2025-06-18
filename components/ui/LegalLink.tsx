import React from "react";
import Link from "next/link";
import { ComponentProps, UniformText } from "@uniformdev/canvas-next-rsc/component";
import { LinkParamValue } from "@uniformdev/canvas";

type LegalLinkParameters = {
  label?: string;
  link?: LinkParamValue;
};

type LegalLinkProps = ComponentProps<LegalLinkParameters>;

export const LegalLink = ({ component, context }: LegalLinkProps) => {
  const link = component?.parameters?.link?.value as any;

  if (!link?.path) {
    return (
      <span className="hover:text-slate-800">
        <UniformText
          component={component}
          context={context}
          parameterId="label"
        />
      </span>
    );
  }

  return (
    <Link href={link.path} className="hover:text-slate-800">
      <UniformText
        component={component}
        context={context}
        parameterId="label"
      />
    </Link>
  );
}; 