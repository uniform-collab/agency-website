# Uniform CMS Integration

This directory contains the integration files for Uniform CMS components.

## ContactFormSection Component

The `ContactFormSection` component has been successfully registered with Uniform CMS and is ready to use.

### Files Created/Modified:

1. **`components.ts`** - Component mapping that registers the ContactFormSection with Uniform
2. **`componentDefinitions.json`** - Component definition for Uniform CMS that defines the component structure and parameters
3. **`canvasResolver.ts`** - Resolver function to handle component rendering
4. **`components/sections/ContactFormSection.tsx`** - Updated to extend Uniform's ComponentProps

### Component Registration:

```typescript
// Component ID: contactFormSection
// Component Name: Contact Form Section
// Icon: 📞
```

### Parameters:

- **title** (text, required) - The main title of the contact section
- **subtitle** (text, required) - The subtitle/description text
- **form** (json, required) - Form configuration object containing fields and submit button
- **id** (text, optional) - HTML section ID for anchoring
- **className** (text, optional) - Additional CSS classes

### Usage in Uniform CMS:

1. The component is registered with the ID `contactFormSection`
2. You can add it to any page composition in Uniform CMS
3. Configure the parameters through the Uniform visual editor
4. The component will render with the configured data

### Example Component Data Structure:

```json
{
  "title": "Ready to Build Your Digital Legacy?",
  "subtitle": "Let's discuss your project. Submit your details, and our engineers will be in touch to draft the blueprint for your success.",
  "form": {
    "fields": [
      {
        "name": "name",
        "label": "Full Name",
        "type": "text",
        "required": true,
        "gridColumn": "half"
      },
      {
        "name": "email",
        "label": "Email Address",
        "type": "email",
        "required": true,
        "gridColumn": "half"
      }
    ],
    "submitButton": {
      "label": "Initiate Collaboration"
    }
  }
}
```

### Testing:

Visit `/uniform-example` to see the component in action and verify the registration is working correctly.

### Next Steps:

1. **Setup Uniform Project**: Create a Uniform project and import the component definitions
2. **Configure API Keys**: Add your Uniform project API keys to environment variables
3. **Canvas Integration**: Implement full Canvas integration for visual editing
4. **Content Management**: Start managing content through Uniform CMS interface