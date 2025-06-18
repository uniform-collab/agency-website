"use client";

import React from "react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface ServiceCard {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

interface ProjectCard {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  tags: string[];
}

interface ProcessStep {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

interface CardGridSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  variant: "services" | "portfolio" | "process";
  items: ServiceCard[] | ProjectCard[] | ProcessStep[];
  backgroundColor?: string;
  className?: string;
}

export default function CardGridSection({
  id,
  title,
  subtitle,
  variant,
  items,
  backgroundColor,
  className = "",
}: CardGridSectionProps) {
  const sectionClasses = `py-16 md:py-24 ${backgroundColor || ""} ${className}`;

  const getGridColumns = () => {
    switch (variant) {
      case "services":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case "portfolio":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case "process":
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  const renderServiceCard = (item: ServiceCard, index: number) => {
    const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
    
    return (
      <Card
        key={index}
        className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <CardHeader>
          <div className="flex justify-center md:justify-start">
            {IconComponent && (
              <IconComponent
                className={`mb-4 ${item.iconColor}`}
                size={32}
              />
            )}
          </div>
          <CardTitle className="text-2xl font-semibold text-slate-800">
            {item.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-slate-600">
            {item.description}
          </CardDescription>
        </CardContent>
      </Card>
    );
  };

  const renderPortfolioCard = (item: ProjectCard, index: number) => {
    return (
      <Card
        key={index}
        className="bg-white border border-slate-200 overflow-hidden group shadow-lg rounded-xl"
      >
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={600}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-slate-800">
            {item.title}
          </h3>
          <p className="text-slate-600 mb-4 text-sm">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderProcessStep = (item: ProcessStep, index: number) => {
    const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
    
    return (
      <div
        key={index}
        className="text-center p-6 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-lg"
      >
        <div className="flex justify-center mb-4">
          {IconComponent && (
            <IconComponent className={`w-8 h-8 ${item.iconColor}`} />
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-slate-800">
          {item.title}
        </h3>
        <p className="text-sm text-slate-600">{item.description}</p>
      </div>
    );
  };

  const renderCard = (item: any, index: number) => {
    switch (variant) {
      case "services":
        return renderServiceCard(item as ServiceCard, index);
      case "portfolio":
        return renderPortfolioCard(item as ProjectCard, index);
      case "process":
        return renderProcessStep(item as ProcessStep, index);
      default:
        return null;
    }
  };

  return (
    <section id={id} className={sectionClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {variant === "process" && (
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent transform -translate-y-1/2 -z-10"></div>
            <div className={`grid gap-8 ${getGridColumns()}`}>
              {items.map((item, index) => renderCard(item, index))}
            </div>
          </div>
        )}
        
        {variant !== "process" && (
          <div className={`grid gap-8 ${getGridColumns()}`}>
            {items.map((item, index) => renderCard(item, index))}
          </div>
        )}
      </div>
    </section>
  );
}
