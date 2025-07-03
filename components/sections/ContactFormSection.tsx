"use client";

import React from "react";
import { ComponentProps } from '@uniformdev/canvas-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  gridColumn: string;
  rows?: number;
}

interface SubmitButton {
  label: string;
}

interface ContactForm {
  fields: FormField[];
  submitButton: SubmitButton;
}

interface ContactFormSectionProps extends Partial<ComponentProps> {
  id?: string;
  title: string;
  subtitle: string;
  form: ContactForm;
  className?: string;
}

export default function ContactFormSection({
  id,
  title,
  subtitle,
  form,
  className = "",
}: ContactFormSectionProps) {
  const renderField = (field: FormField) => {
    const baseClasses = "bg-white/50 border-slate-300 text-slate-900 focus:ring-blue-500 focus:border-blue-500";
    const labelClasses = "block text-sm font-medium text-slate-700 mb-1";
    
    if (field.type === "textarea") {
      return (
        <div key={field.name} className={field.gridColumn === "half" ? "" : "sm:col-span-2"}>
          <label htmlFor={field.name} className={labelClasses}>
            {field.label}
          </label>
          <Textarea
            name={field.name}
            id={field.name}
            rows={field.rows || 4}
            required={field.required}
            className={baseClasses}
          />
        </div>
      );
    }

    return (
      <div key={field.name} className={field.gridColumn === "half" ? "" : "sm:col-span-2"}>
        <label htmlFor={field.name} className={labelClasses}>
          {field.label}
        </label>
        <Input
          type={field.type}
          name={field.name}
          id={field.name}
          required={field.required}
          className={baseClasses}
        />
      </div>
    );
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            {title.split(" ").map((word, index) => {
              // Apply gradient to the last two words if they exist
              const words = title.split(" ");
              const isLastTwoWords = index >= words.length - 2;
              
              return (
                <React.Fragment key={index}>
                  {isLastTwoWords ? (
                    <span className="bg-gradient-to-r from-slate-700 to-slate-900 text-transparent bg-clip-text">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                  {index < words.length - 1 && " "}
                </React.Fragment>
              );
            })}
          </h2>
          <p className="text-lg text-slate-600 mb-10">{subtitle}</p>
        </div>
        <Card className="max-w-2xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-xl p-6 md:p-8">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {form.fields.map((field) => renderField(field))}
            </div>
            <div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50 text-slate-800 font-semibold border border-slate-400/50 shadow-lg hover:brightness-105 active:brightness-95 transition-all py-3 text-lg"
              >
                {form.submitButton.label}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
