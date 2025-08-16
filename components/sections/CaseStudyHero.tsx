"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ComponentProps,
  UniformText,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";
import { LinkParamValue, AssetParamValue } from "@uniformdev/canvas";

type CaseStudyHeroParameters = {
  title?: string;
  subtitle?: string;
  client?: string;
  industry?: string;
  useCase?: string;
  heroImage?: AssetParamValue;
  results?: string;
  challengeTitle?: string;
  challenge?: string;
  solutionTitle?: string;
  solution?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: LinkParamValue;
  secondaryButtonLabel?: string;
  secondaryButtonLink?: LinkParamValue;
  backgroundColor?: string;
};

type CaseStudyHeroSlots = {
  metrics: React.ComponentType<any>[];
};

type CaseStudyHeroProps = ComponentProps<CaseStudyHeroParameters, CaseStudyHeroSlots>;

export default function CaseStudyHero({
  title,
  subtitle,
  client,
  industry,
  useCase,
  heroImage,
  results,
  challengeTitle = "The Challenge",
  challenge,
  solutionTitle = "Our Solution",
  solution,
  primaryButtonLabel,
  primaryButtonLink,
  secondaryButtonLabel,
  secondaryButtonLink,
  backgroundColor = "bg-gradient-to-br from-slate-50 to-white",
  component,
  context,
}: CaseStudyHeroProps) {
  return (
    <section className={`py-16 md:py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {client && (
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
                Client: <UniformText
                  component={component}
                  context={context}
                  parameterId="client"
                  as="span"
                />
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {industry && (
                <Badge variant="outline" className="bg-white/80">
                  <UniformText
                    component={component}
                    context={context}
                    parameterId="industry"
                    as="span"
                  />
                </Badge>
              )}
              {useCase && (
                <Badge variant="secondary" className="bg-slate-100">
                  <UniformText
                    component={component}
                    context={context}
                    parameterId="useCase"
                    as="span"
                  />
                </Badge>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900">
              <UniformText
                component={component}
                context={context}
                parameterId="title"
                as="span"
              />
            </h1>

            {subtitle && (
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                <UniformText
                  component={component}
                  context={context}
                  parameterId="subtitle"
                  as="span"
                />
              </p>
            )}

            {results && (
              <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Results</h3>
                <p className="text-slate-700">
                  <UniformText
                    component={component}
                    context={context}
                    parameterId="results"
                    as="span"
                  />
                </p>
              </div>
            )}

            {/* Metrics Slot */}
            <div className="mb-8">
              <UniformSlot
                component={component}
                context={context}
                slot="metrics"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButtonLabel && (
                <Button size="lg" asChild className="bg-slate-900 hover:bg-slate-800">
                  <Link href={primaryButtonLink?.path || "#"}>
                    <UniformText
                      component={component}
                      context={context}
                      parameterId="primaryButtonLabel"
                      as="span"
                    />
                  </Link>
                </Button>
              )}
              {secondaryButtonLabel && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={secondaryButtonLink?.path || "#"}>
                    <UniformText
                      component={component}
                      context={context}
                      parameterId="secondaryButtonLabel"
                      as="span"
                    />
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {heroImage ? (
              <div className="relative">
                <Image
                  src={heroImage.url || "/placeholder.jpg"}
                  alt={heroImage.alt || title || "Case study hero image"}
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            ) : (
              <div className="bg-slate-200 rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                <p className="text-slate-500">Case Study Image</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Challenge & Solution Section */}
        {(challenge || solution) && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-2 gap-12"
          >
            {challenge && (
              <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  <UniformText
                    component={component}
                    context={context}
                    parameterId="challengeTitle"
                    as="span"
                  />
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <UniformText
                    component={component}
                    context={context}
                    parameterId="challenge"
                    as="span"
                  />
                </p>
              </div>
            )}

            {solution && (
              <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  <UniformText
                    component={component}
                    context={context}
                    parameterId="solutionTitle"
                    as="span"
                  />
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  <UniformText
                    component={component}
                    context={context}
                    parameterId="solution"
                    as="span"
                  />
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}