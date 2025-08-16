"use client";

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CaseStudyCard from "./CaseStudyCard";
import {
  ComponentProps,
  UniformText,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";

type CaseStudyListSectionParameters = {
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  backgroundColor?: string;
  gridColumns?: "2" | "3" | "4";
  showLoadMore?: boolean;
  initialDisplayCount?: number;
};

type CaseStudyListSectionSlots = {
  caseStudies: React.ComponentType<any>[];
};

type CaseStudyListSectionProps = ComponentProps<CaseStudyListSectionParameters, CaseStudyListSectionSlots>;

// Sample filter data - in a real app this would come from the CMS or API
const INDUSTRIES = [
  "All Industries",
  "Technology",
  "Healthcare",
  "E-commerce",
  "Finance",
  "Education",
  "Manufacturing",
  "Non-profit"
];

const USE_CASES = [
  "All Use Cases",
  "Website Redesign",
  "Mobile App",
  "Digital Transformation",
  "Brand Identity",
  "SEO Optimization",
  "Content Strategy",
  "User Experience"
];

export default function CaseStudyListSection({
  title = "Our Case Studies",
  subtitle = "Discover how we've helped our clients achieve their goals",
  showFilters = true,
  backgroundColor = "bg-white",
  gridColumns = "3",
  showLoadMore = true,
  initialDisplayCount = 6,
  component,
  context,
}: CaseStudyListSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedUseCase, setSelectedUseCase] = useState("All Use Cases");
  const [displayCount, setDisplayCount] = useState(Number(initialDisplayCount));

  const getGridClasses = () => {
    switch (gridColumns) {
      case "2":
        return "grid-cols-1 md:grid-cols-2";
      case "3":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case "4":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  const handleFilterChange = (type: "industry" | "useCase", value: string) => {
    if (type === "industry") {
      setSelectedIndustry(value);
    } else {
      setSelectedUseCase(value);
    }
    setDisplayCount(Number(initialDisplayCount)); // Reset display count when filtering
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + Number(initialDisplayCount));
  };

  const resetFilters = () => {
    setSelectedIndustry("All Industries");
    setSelectedUseCase("All Use Cases");
    setDisplayCount(Number(initialDisplayCount));
  };

  // Filter logic would be applied here if we had real data
  // For now, we'll just show the number based on displayCount

  return (
    <section className={`py-16 md:py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            <UniformText
              component={component}
              context={context}
              parameterId="title"
              as="span"
            />
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              <UniformText
                component={component}
                context={context}
                parameterId="subtitle"
                as="span"
              />
            </p>
          )}
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Filter Case Studies</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetFilters}
                  className="text-slate-600 hover:text-slate-900"
                >
                  Reset Filters
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Industry Filter */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Industry
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INDUSTRIES.map((industry) => (
                      <button
                        key={industry}
                        onClick={() => handleFilterChange("industry", industry)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedIndustry === industry
                            ? "bg-slate-900 text-white"
                            : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Use Case Filter */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Use Case
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {USE_CASES.map((useCase) => (
                      <button
                        key={useCase}
                        onClick={() => handleFilterChange("useCase", useCase)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedUseCase === useCase
                            ? "bg-slate-900 text-white"
                            : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                        }`}
                      >
                        {useCase}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedIndustry !== "All Industries" || selectedUseCase !== "All Use Cases") && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm font-medium text-slate-700 mb-2">Active Filters:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedIndustry !== "All Industries" && (
                      <Badge variant="secondary" className="bg-slate-100">
                        Industry: {selectedIndustry}
                      </Badge>
                    )}
                    {selectedUseCase !== "All Use Cases" && (
                      <Badge variant="secondary" className="bg-slate-100">
                        Use Case: {selectedUseCase}
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Case Studies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`grid gap-8 ${getGridClasses()}`}
        >
          <UniformSlot
            component={component}
            context={context}
            slot="caseStudies"
          />
        </motion.div>

        {/* Load More Button */}
        {showLoadMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={handleLoadMore}
              className="bg-white hover:bg-slate-50 border-slate-300"
            >
              Load More Case Studies
            </Button>
          </motion.div>
        )}

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-slate-500">
            {selectedIndustry !== "All Industries" || selectedUseCase !== "All Use Cases"
              ? `Showing filtered results`
              : `Showing all case studies`
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
}