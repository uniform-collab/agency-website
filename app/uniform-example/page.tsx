"use client";

import React from "react";
import { resolveRenderer } from '@/lib/uniform/canvasResolver';
import ContactFormSection from '@/components/sections/ContactFormSection';
import cmsData from '../../cms.json';

export default function UniformExamplePage() {
  return (
    <div className="min-h-screen bg-slate-200">
      <div className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Uniform Canvas Example
          </h1>
          <p className="text-lg text-slate-600">
            This page demonstrates the ContactFormSection component registered with Uniform CMS
          </p>
        </div>
        
        {/* Example of using the component directly with Uniform-style props */}
        <ContactFormSection
          title={cmsData.contactSection.title}
          subtitle={cmsData.contactSection.subtitle}
          form={cmsData.contactSection.form}
          id="contact"
          className="bg-slate-100"
        />
        
        <div className="mt-16 p-6 bg-white/50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Component Registration Info</h3>
          <p className="text-gray-700 mb-2">
            <strong>Component ID:</strong> contactFormSection
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Registered with Uniform:</strong> ✅ Yes
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Component Definition:</strong> Available in lib/uniform/componentDefinitions.json
          </p>
          <p className="text-gray-700">
            <strong>Component Mapping:</strong> Available in lib/uniform/components.ts
          </p>
        </div>
      </div>
    </div>
  );
}