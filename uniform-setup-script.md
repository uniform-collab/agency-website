# Uniform Case Study Setup Script

## Prerequisites
Your Uniform MCP server is configured with:
- API Key: `uf18l8m9t86kz9fm8cwd2gxjengwj7cdly4c2refehqq3xz9ml6gww3j5ad0vtllnnffs4e38xh6gdwcw6jv3hn7qe4c6u0py`
- Project ID: `f6498f5e-ba99-4267-adb3-20721aee9442`

## Step 1: Create Case Study Content Type

```json
{
  "name": "Case Study",
  "publicId": "caseStudy",
  "fields": [
    {
      "name": "Title",
      "publicId": "title",
      "type": "text",
      "required": true,
      "localizable": false
    },
    {
      "name": "Subtitle", 
      "publicId": "subtitle",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Client",
      "publicId": "client", 
      "type": "text",
      "required": true,
      "localizable": false
    },
    {
      "name": "Description",
      "publicId": "description",
      "type": "richText",
      "required": false,
      "localizable": false
    },
    {
      "name": "Industry",
      "publicId": "industry",
      "type": "select",
      "required": true,
      "localizable": false,
      "selectOptions": [
        { "text": "Technology", "value": "technology" },
        { "text": "Healthcare", "value": "healthcare" },
        { "text": "E-commerce", "value": "ecommerce" },
        { "text": "Finance", "value": "finance" },
        { "text": "Education", "value": "education" },
        { "text": "Manufacturing", "value": "manufacturing" },
        { "text": "Non-profit", "value": "nonprofit" }
      ]
    },
    {
      "name": "Use Case",
      "publicId": "useCase",
      "type": "select", 
      "required": true,
      "localizable": false,
      "selectOptions": [
        { "text": "Website Redesign", "value": "website-redesign" },
        { "text": "Mobile App", "value": "mobile-app" },
        { "text": "Digital Transformation", "value": "digital-transformation" },
        { "text": "Brand Identity", "value": "brand-identity" },
        { "text": "SEO Optimization", "value": "seo-optimization" },
        { "text": "Content Strategy", "value": "content-strategy" },
        { "text": "User Experience", "value": "user-experience" }
      ]
    },
    {
      "name": "Hero Image",
      "publicId": "heroImage",
      "type": "asset",
      "required": false,
      "localizable": false
    },
    {
      "name": "Card Image",
      "publicId": "image",
      "type": "asset", 
      "required": false,
      "localizable": false
    },
    {
      "name": "Challenge",
      "publicId": "challenge",
      "type": "richText",
      "required": false,
      "localizable": false
    },
    {
      "name": "Solution", 
      "publicId": "solution",
      "type": "richText",
      "required": false,
      "localizable": false
    },
    {
      "name": "Results",
      "publicId": "results",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Tags",
      "publicId": "tags",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Featured",
      "publicId": "featured",
      "type": "checkbox",
      "required": false,
      "localizable": false
    },
    {
      "name": "Publish Date",
      "publicId": "publishDate", 
      "type": "date",
      "required": false,
      "localizable": false
    },
    {
      "name": "Case Study URL",
      "publicId": "caseStudyUrl",
      "type": "text",
      "required": false,
      "localizable": false
    }
  ]
}
```

## Step 2: Create Components

### 2.1 Case Study Hero Component

```json
{
  "name": "Case Study Hero",
  "publicId": "caseStudyHero",
  "parameters": [
    {
      "name": "Title",
      "publicId": "title",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Subtitle",
      "publicId": "subtitle", 
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Client",
      "publicId": "client",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Industry",
      "publicId": "industry",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Use Case",
      "publicId": "useCase",
      "type": "text", 
      "required": false,
      "localizable": false
    },
    {
      "name": "Hero Image",
      "publicId": "heroImage",
      "type": "asset",
      "required": false,
      "localizable": false
    },
    {
      "name": "Results",
      "publicId": "results",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Challenge Title",
      "publicId": "challengeTitle",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Challenge",
      "publicId": "challenge",
      "type": "richText",
      "required": false,
      "localizable": false
    },
    {
      "name": "Solution Title",
      "publicId": "solutionTitle",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Solution",
      "publicId": "solution",
      "type": "richText",
      "required": false,
      "localizable": false
    },
    {
      "name": "Primary Button Label",
      "publicId": "primaryButtonLabel",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Primary Button Link",
      "publicId": "primaryButtonLink",
      "type": "link",
      "required": false,
      "localizable": false
    },
    {
      "name": "Secondary Button Label",
      "publicId": "secondaryButtonLabel",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Secondary Button Link",
      "publicId": "secondaryButtonLink",
      "type": "link",
      "required": false,
      "localizable": false
    },
    {
      "name": "Background Color",
      "publicId": "backgroundColor",
      "type": "text",
      "required": false,
      "localizable": false
    }
  ],
  "slots": [
    {
      "name": "Metrics",
      "publicId": "metrics",
      "allowedComponents": ["metric"],
      "minComponents": 0,
      "maxComponents": 4,
      "allowAllComponents": true,
      "inheritAllowedComponents": false,
      "patternsInAllowedComponents": false
    }
  ]
}
```

### 2.2 Case Study List Section Component

```json
{
  "name": "Case Study List Section",
  "publicId": "caseStudyListSection",
  "parameters": [
    {
      "name": "Title",
      "publicId": "title",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Subtitle",
      "publicId": "subtitle",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Show Filters",
      "publicId": "showFilters",
      "type": "checkbox",
      "required": false,
      "localizable": false
    },
    {
      "name": "Background Color",
      "publicId": "backgroundColor",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Grid Columns",
      "publicId": "gridColumns",
      "type": "select",
      "required": false,
      "localizable": false,
      "selectOptions": [
        { "text": "2 Columns", "value": "2" },
        { "text": "3 Columns", "value": "3" },
        { "text": "4 Columns", "value": "4" }
      ]
    },
    {
      "name": "Show Load More",
      "publicId": "showLoadMore",
      "type": "checkbox",
      "required": false,
      "localizable": false
    },
    {
      "name": "Initial Display Count",
      "publicId": "initialDisplayCount",
      "type": "number",
      "required": false,
      "localizable": false
    }
  ],
  "slots": [
    {
      "name": "Case Studies",
      "publicId": "caseStudies",
      "allowedComponents": ["caseStudyCard"],
      "minComponents": 0,
      "maxComponents": 50,
      "allowAllComponents": true,
      "inheritAllowedComponents": false,
      "patternsInAllowedComponents": false
    }
  ]
}
```

### 2.3 Case Study Card Component

```json
{
  "name": "Case Study Card",
  "publicId": "caseStudyCard",
  "parameters": [
    {
      "name": "Title",
      "publicId": "title",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Description",
      "publicId": "description",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Client",
      "publicId": "client",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Industry",
      "publicId": "industry",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Use Case",
      "publicId": "useCase",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Image",
      "publicId": "image",
      "type": "asset",
      "required": false,
      "localizable": false
    },
    {
      "name": "Link",
      "publicId": "link",
      "type": "link",
      "required": false,
      "localizable": false
    },
    {
      "name": "Tags",
      "publicId": "tags",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Results",
      "publicId": "results",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Featured",
      "publicId": "featured",
      "type": "checkbox",
      "required": false,
      "localizable": false
    }
  ]
}
```

### 2.4 Metric Component

```json
{
  "name": "Metric",
  "publicId": "metric",
  "parameters": [
    {
      "name": "Value",
      "publicId": "value",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Label",
      "publicId": "label",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Icon",
      "publicId": "icon",
      "type": "text",
      "required": false,
      "localizable": false
    },
    {
      "name": "Color",
      "publicId": "color",
      "type": "select",
      "required": false,
      "localizable": false,
      "selectOptions": [
        { "text": "Blue", "value": "blue" },
        { "text": "Green", "value": "green" },
        { "text": "Purple", "value": "purple" },
        { "text": "Orange", "value": "orange" },
        { "text": "Red", "value": "red" },
        { "text": "Slate", "value": "slate" }
      ]
    }
  ]
}
```

## Step 3: Create Component Patterns

### 3.1 Featured Case Study Hero Pattern

```json
{
  "name": "Featured Case Study Hero",
  "publicId": "featuredCaseStudyHero",
  "type": "caseStudyHero",
  "parameters": {
    "title": {
      "value": "E-commerce Platform Redesign Drives 150% Revenue Growth",
      "overridable": true
    },
    "subtitle": {
      "value": "How we transformed a traditional retail business into a digital powerhouse",
      "overridable": true
    },
    "client": {
      "value": "TechShop Inc.",
      "overridable": true
    },
    "industry": {
      "value": "E-commerce",
      "overridable": true
    },
    "useCase": {
      "value": "Website Redesign",
      "overridable": true
    },
    "results": {
      "value": "150% increase in online revenue, 75% improvement in conversion rate, 40% reduction in cart abandonment",
      "overridable": true
    },
    "challengeTitle": {
      "value": "The Challenge",
      "overridable": true
    },
    "challenge": {
      "value": "TechShop's outdated website was losing customers to competitors. Poor user experience, slow loading times, and complicated checkout process were major pain points affecting sales.",
      "overridable": true
    },
    "solutionTitle": {
      "value": "Our Solution", 
      "overridable": true
    },
    "solution": {
      "value": "We redesigned the entire platform with a focus on user experience, implemented a modern tech stack, optimized for mobile, and streamlined the checkout process with advanced analytics integration.",
      "overridable": true
    },
    "primaryButtonLabel": {
      "value": "View Full Case Study",
      "overridable": true
    },
    "secondaryButtonLabel": {
      "value": "Contact Us",
      "overridable": true
    }
  }
}
```

### 3.2 Case Study Gallery Pattern

```json
{
  "name": "Case Study Gallery",
  "publicId": "caseStudyGallery", 
  "type": "caseStudyListSection",
  "parameters": {
    "title": {
      "value": "Our Case Studies",
      "overridable": true
    },
    "subtitle": {
      "value": "Discover how we've helped our clients achieve their goals",
      "overridable": true
    },
    "showFilters": {
      "value": true,
      "overridable": false
    },
    "backgroundColor": {
      "value": "bg-slate-50",
      "overridable": true
    },
    "gridColumns": {
      "value": "3",
      "overridable": true
    },
    "showLoadMore": {
      "value": true,
      "overridable": true
    },
    "initialDisplayCount": {
      "value": 6,
      "overridable": true
    }
  }
}
```

## Step 4: Create Case Studies Page Composition

```json
{
  "name": "Case Studies Page",
  "publicId": "caseStudiesPage",
  "route": "/case-studies",
  "content": {
    "allowedComponents": ["caseStudyHero", "caseStudyListSection"],
    "components": [
      {
        "type": "caseStudyHero",
        "pattern": "featuredCaseStudyHero"
      },
      {
        "type": "caseStudyListSection",
        "pattern": "caseStudyGallery"
      }
    ]
  }
}
```

## Manual Setup Instructions

1. **Go to your Uniform dashboard** (Project ID: f6498f5e-ba99-4267-adb3-20721aee9442)
2. **Create Content Type**: Use the JSON definition above
3. **Create Components**: Create each component with the specified parameters and slots
4. **Create Patterns**: Set up the two patterns with the sample content
5. **Create Composition**: Set up the case studies page composition
6. **Test**: Visit the Uniform playground to test your components

## Verification

After setup, you should have:
- ✅ 1 Content Type: Case Study
- ✅ 4 Components: CaseStudyHero, CaseStudyListSection, CaseStudyCard, Metric
- ✅ 2 Patterns: Featured Case Study Hero, Case Study Gallery  
- ✅ 1 Composition: Case Studies Page

All components are already registered in the React codebase and ready to use!