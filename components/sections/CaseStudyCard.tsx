"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ComponentProps,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";
import { LinkParamValue, AssetParamValue } from "@uniformdev/canvas";

type CaseStudyCardParameters = {
  title?: string;
  description?: string;
  client?: string;
  industry?: string;
  useCase?: string;
  image?: AssetParamValue;
  link?: LinkParamValue;
  tags?: string;
  results?: string;
  featured?: boolean;
};

type CaseStudyCardProps = ComponentProps<CaseStudyCardParameters>;

export default function CaseStudyCard({
  title,
  description,
  client,
  industry,
  useCase,
  image,
  link,
  tags,
  results,
  featured = false,
  component,
  context,
}: CaseStudyCardProps) {
  const tagList = tags ? tags.split(",").map(tag => tag.trim()) : [];
  const cardVariant = featured ? "featured" : "default";

  const cardClasses = featured
    ? "bg-gradient-to-br from-slate-50 to-white border-slate-300 shadow-xl hover:shadow-2xl"
    : "bg-white border-slate-200 shadow-lg hover:shadow-xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Card className={`${cardClasses} overflow-hidden transition-all duration-300 h-full flex flex-col`}>
        {image && (
          <div className="relative overflow-hidden">
            <Image
              src={image.url || "/placeholder.jpg"}
              alt={image.alt || title || "Case study image"}
              width={600}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {featured && (
              <Badge className="absolute top-4 left-4 bg-slate-900 text-white">
                Featured
              </Badge>
            )}
          </div>
        )}
        
        <CardHeader className="pb-3">
          {client && (
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              <UniformText
                component={component}
                context={context}
                parameterId="client"
                as="span"
              />
            </p>
          )}
          
          <CardTitle className={`${featured ? "text-xl" : "text-lg"} font-semibold text-slate-900 line-clamp-2`}>
            <UniformText
              component={component}
              context={context}
              parameterId="title"
              as="span"
            />
          </CardTitle>
          
          <CardDescription className="text-slate-600 line-clamp-3">
            <UniformText
              component={component}
              context={context}
              parameterId="description"
              as="span"
            />
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between">
          {results && (
            <div className="mb-4 p-3 bg-slate-50 rounded-lg">
              <p className="text-sm font-medium text-slate-700 mb-1">Key Results:</p>
              <p className="text-sm text-slate-600">
                <UniformText
                  component={component}
                  context={context}
                  parameterId="results"
                  as="span"
                />
              </p>
            </div>
          )}
          
          <div className="space-y-3">
            {(industry || useCase) && (
              <div className="flex flex-wrap gap-2">
                {industry && (
                  <Badge variant="outline" className="text-xs">
                    <UniformText
                      component={component}
                      context={context}
                      parameterId="industry"
                      as="span"
                    />
                  </Badge>
                )}
                {useCase && (
                  <Badge variant="secondary" className="text-xs">
                    <UniformText
                      component={component}
                      context={context}
                      parameterId="useCase"
                      as="span"
                    />
                  </Badge>
                )}
              </div>
            )}
            
            {tagList.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tagList.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {link && (
              <Link
                href={link.path || "#"}
                className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors group"
              >
                <span>Read Case Study</span>
                <svg
                  className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}