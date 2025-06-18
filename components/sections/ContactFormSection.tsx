"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ComponentProps, UniformText, UniformRichText, UniformSlot } from "@uniformdev/canvas-next-rsc/component";

type ContactFormSectionParameters = {
  title?: string;
  subtitle?: any;
  submitButtonText?: string;
};

type ContactFormSectionSlots = 'fields';

type ContactFormSectionProps = ComponentProps<ContactFormSectionParameters, ContactFormSectionSlots>;

export default function ContactFormSection({
  component,
  context,
  slots,
}: ContactFormSectionProps) {
  const submitButtonText = component?.parameters?.submitButtonText?.value as string || 'Send Message';

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <UniformText
            component={component}
            context={context}
            parameterId="title"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900"
          />
          <UniformRichText
            component={component}
            context={context}
            parameterId="subtitle"
            className="text-lg text-slate-600 mb-10"
          />
        </div>
        <Card className="max-w-2xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-xl p-6 md:p-8">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <UniformSlot 
                context={context} 
                data={component} 
                slot={slots.fields} 
              />
            </div>
            <div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-lg hover:brightness-105 active:brightness-95 transition-all py-3 text-lg"
              >
                {submitButtonText}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
