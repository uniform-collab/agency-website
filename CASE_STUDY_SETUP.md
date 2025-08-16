# Case Study Component System Setup Guide

This guide explains how to set up the complete Case Study system in Uniform CMS, including content types, components, and patterns.

## 🎯 Overview

The Case Study system includes:
- **Components**: CaseStudyHero, CaseStudyListSection, CaseStudyCard, Metric
- **Content Type**: Case Study entries for data management
- **Page**: Dedicated case studies showcase page
- **Features**: Filtering by industry and use case, responsive design, SEO optimization

## 📋 Prerequisites

1. Uniform project with API access
2. Environment variables configured:
   ```bash
   UNIFORM_API_KEY=uf_...
   UNIFORM_PROJECT_ID=...
   UNIFORM_PREVIEW_SECRET=hello-world
   ```

## 🗄️ Step 1: Create Case Study Content Type

Create a content type called "Case Study" with the following fields:

### Content Type: Case Study
**Public ID**: `caseStudy`

#### Fields:
```typescript
// Basic Information
title: text (required) - "Case Study Title"
subtitle: text - "Brief description or tagline"
client: text (required) - "Client Name"
description: richText - "Detailed case study description"

// Categorization (for filtering)
industry: select (required) - "Industry Category"
  Options: Technology, Healthcare, E-commerce, Finance, Education, Manufacturing, Non-profit

useCase: select (required) - "Use Case Type"
  Options: Website Redesign, Mobile App, Digital Transformation, Brand Identity, SEO Optimization, Content Strategy, User Experience

// Visual Content
heroImage: asset - "Main case study image"
image: asset - "Card/thumbnail image"

// Content Sections
challenge: richText - "The challenge description"
solution: richText - "Our solution description"
results: text - "Key results and metrics"

// Metadata
tags: text - "Comma-separated tags"
featured: checkbox - "Mark as featured case study"
publishDate: date - "Publication date"

// Links
caseStudyUrl: text - "Link to full case study"
```

## 🧩 Step 2: Register Components in Uniform

Create the following component definitions:

### Component: Case Study Hero
**Public ID**: `caseStudyHero`

#### Parameters:
```typescript
title: text - "Hero Title"
subtitle: text - "Hero Subtitle"
client: text - "Client Name"
industry: text - "Industry"
useCase: text - "Use Case"
heroImage: asset - "Hero Background Image"
results: text - "Key Results Summary"
challengeTitle: text - "Challenge Section Title" (default: "The Challenge")
challenge: richText - "Challenge Description"
solutionTitle: text - "Solution Section Title" (default: "Our Solution")
solution: richText - "Solution Description"
primaryButtonLabel: text - "Primary CTA Label"
primaryButtonLink: link - "Primary CTA Link"
secondaryButtonLabel: text - "Secondary CTA Label"
secondaryButtonLink: link - "Secondary CTA Link"
backgroundColor: text - "Background CSS Classes"
```

#### Slots:
```typescript
metrics: {
  allowedComponents: ["metric"],
  minComponents: 0,
  maxComponents: 4,
  allowAllComponents: true,
  inheritAllowedComponents: false,
  patternsInAllowedComponents: false
}
```

### Component: Case Study List Section
**Public ID**: `caseStudyListSection`

#### Parameters:
```typescript
title: text - "Section Title"
subtitle: text - "Section Subtitle"
showFilters: checkbox - "Show Filter Controls"
backgroundColor: text - "Background CSS Classes"
gridColumns: select - "Grid Layout"
  Options: "2", "3", "4"
showLoadMore: checkbox - "Show Load More Button"
initialDisplayCount: number - "Initial Items to Display"
```

#### Slots:
```typescript
caseStudies: {
  allowedComponents: ["caseStudyCard"],
  minComponents: 0,
  maxComponents: 50,
  allowAllComponents: true,
  inheritAllowedComponents: false,
  patternsInAllowedComponents: false
}
```

### Component: Case Study Card
**Public ID**: `caseStudyCard`

#### Parameters:
```typescript
title: text - "Card Title"
description: text - "Card Description"
client: text - "Client Name"
industry: text - "Industry"
useCase: text - "Use Case"
image: asset - "Card Image"
link: link - "Case Study Link"
tags: text - "Comma-separated Tags"
results: text - "Key Results"
featured: checkbox - "Featured Card"
```

### Component: Metric
**Public ID**: `metric`

#### Parameters:
```typescript
value: text - "Metric Value"
label: text - "Metric Label"
icon: text - "Icon/Emoji"
color: select - "Color Theme"
  Options: "blue", "green", "purple", "orange", "red", "slate"
```

## 🎨 Step 3: Create Component Patterns

### Pattern: Featured Case Study Hero
**Type**: `caseStudyHero`
**Public ID**: `featuredCaseStudyHero`

#### Parameter Values:
```typescript
title: "E-commerce Platform Redesign Drives 150% Revenue Growth" (overridable: true)
subtitle: "How we transformed a traditional retail business into a digital powerhouse" (overridable: true)
client: "TechShop Inc." (overridable: true)
industry: "E-commerce" (overridable: true)
useCase: "Website Redesign" (overridable: true)
results: "150% increase in online revenue, 75% improvement in conversion rate" (overridable: true)
challenge: "TechShop's outdated website was losing customers to competitors..." (overridable: true)
solution: "We redesigned the entire platform with a focus on user experience..." (overridable: true)
primaryButtonLabel: "View Full Case Study" (overridable: true)
secondaryButtonLabel: "Contact Us" (overridable: true)
```

#### Metrics Slot Content:
Add 3-4 Metric components with sample data:
- Revenue Growth: "150%" / "Revenue Increase" / green
- Conversion Rate: "75%" / "Better Conversions" / blue
- Cart Abandonment: "40%" / "Reduction in Abandonment" / purple

### Pattern: Case Study Gallery
**Type**: `caseStudyListSection`
**Public ID**: `caseStudyGallery`

#### Parameter Values:
```typescript
title: "Our Case Studies" (overridable: true)
subtitle: "Discover how we've helped our clients achieve their goals" (overridable: true)
showFilters: true (overridable: false)
backgroundColor: "bg-slate-50" (overridable: true)
gridColumns: "3" (overridable: true)
showLoadMore: true (overridable: true)
initialDisplayCount: 6 (overridable: true)
```

## 📄 Step 4: Create Case Studies Page Composition

### Composition Definition: Case Studies Page
**Public ID**: `caseStudiesPage`
**Route Pattern**: `/case-studies`

#### Structure:
```typescript
content: {
  allowedComponents: ["caseStudyHero", "caseStudyListSection"],
  components: [
    // Featured Case Study Hero Pattern
    {
      type: "caseStudyHero",
      pattern: "featuredCaseStudyHero"
    },
    // Case Studies Gallery Pattern
    {
      type: "caseStudyListSection", 
      pattern: "caseStudyGallery"
    }
  ]
}
```

## 🔄 Step 5: Sync Configuration

Update your `uniform.config.ts`:

```typescript
import { uniformConfig } from "@uniformdev/cli/config";

export default uniformConfig({
  preset: "none",
  config: {
    serialization: {
      entitiesConfig: {
        component: {},
        componentPattern: { publish: true },
        contentType: {},
        entry: {},
        composition: {},
      },
    },
  },
});
```

## 🚀 Step 6: Pull and Deploy

After setting up all components and patterns in Uniform:

```bash
# Pull the latest Uniform data
npm run uniform:pull

# Start development server
npm run dev
```

## 📊 Usage Examples

### Adding New Case Studies

1. **Create Entry**: In Uniform, create a new Case Study entry with all required fields
2. **Add to Gallery**: In the Case Studies page composition, add a new CaseStudyCard component to the gallery slot
3. **Bind Data**: Use data binding to connect the CaseStudyCard parameters to the Case Study entry fields

### Customizing Filters

Update the filter arrays in `CaseStudyListSection.tsx`:

```typescript
const INDUSTRIES = [
  "All Industries",
  "Your Custom Industry",
  // ... add more
];

const USE_CASES = [
  "All Use Cases", 
  "Your Custom Use Case",
  // ... add more
];
```

## 🎯 Best Practices

1. **Content Strategy**: Create 6-12 case studies across different industries
2. **Image Assets**: Use consistent image dimensions (600x400 for cards, 800x600 for hero)
3. **SEO**: Fill out all metadata fields and use descriptive URLs
4. **Performance**: Optimize images and use appropriate loading strategies
5. **Accessibility**: Ensure all images have proper alt text

## 🔧 Troubleshooting

### Common Issues:

1. **Components not appearing**: Check component registration in `uniform/resolve.ts`
2. **Styling issues**: Verify Tailwind classes and component imports
3. **Data not displaying**: Ensure UniformText components are properly configured
4. **Filter not working**: Check data binding between entries and card components

### Support Files Created:
- ✅ `components/sections/CaseStudyCard.tsx`
- ✅ `components/sections/CaseStudyHero.tsx` 
- ✅ `components/sections/CaseStudyListSection.tsx`
- ✅ `components/sections/Metric.tsx`
- ✅ `components/ui/badge.tsx`
- ✅ `app/case-studies/page.tsx`
- ✅ `uniform/resolve.ts` (updated)

Visit `/case-studies` to see the complete implementation in action!