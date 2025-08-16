"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";

type MetricParameters = {
  value?: string;
  label?: string;
  icon?: string;
  color?: "blue" | "green" | "purple" | "orange" | "red" | "slate";
};

type MetricProps = ComponentProps<MetricParameters>;

export default function Metric({
  value,
  label,
  icon,
  color = "blue",
  component,
  context,
}: MetricProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return "text-green-600 bg-green-50 border-green-200";
      case "purple":
        return "text-purple-600 bg-purple-50 border-purple-200";
      case "orange":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "red":
        return "text-red-600 bg-red-50 border-red-200";
      case "slate":
        return "text-slate-600 bg-slate-50 border-slate-200";
      default:
        return "text-blue-600 bg-blue-50 border-blue-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl border-2 ${getColorClasses(color)} text-center`}
    >
      {icon && (
        <div className="text-2xl mb-2">
          <UniformText
            component={component}
            context={context}
            parameterId="icon"
            as="span"
          />
        </div>
      )}
      
      <div className="text-3xl font-bold mb-2">
        <UniformText
          component={component}
          context={context}
          parameterId="value"
          as="span"
        />
      </div>
      
      <div className="text-sm font-medium opacity-80">
        <UniformText
          component={component}
          context={context}
          parameterId="label"
          as="span"
        />
      </div>
    </motion.div>
  );
}