# Uniform Setup Guide

This project has been configured to work with Uniform CMS. Follow these steps to complete the setup:

## 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Uniform Configuration
UNIFORM_API_KEY=your-uniform-api-key-here
UNIFORM_PROJECT_ID=your-project-id-here
UNIFORM_PREVIEW_SECRET=hello-world
```

Replace `your-uniform-api-key-here` and `your-project-id-here` with your actual Uniform project credentials.

## 2. Available Scripts

The following Uniform CLI scripts have been added to package.json:

- `npm run uniform:pull` - Pull component definitions from Uniform to local files
- `npm run uniform:push` - Push local component definitions to Uniform

## 3. Component Registration

Your existing components have been registered in the Uniform resolver (`uniform/resolve.tsx`):

- `heroSection` → HeroSection
- `cardGridSection` → CardGridSection
- `contactFormSection` → ContactFormSection
- `imageTextSection` → ImageTextSection
- `marqueeSection` → MarqueeSection
- `header` → Header
- `footer` → Footer

## 4. Adapting Components for Uniform

To make your components work with Uniform parameters, you'll need to:

1. **Update prop types** to use Uniform parameter types
2. **Use UniformText/UniformRichText** for editable text content
3. **Handle asset parameters** using `flattenValues`
4. **Add slots** for nested components

Example transformation:

```tsx
// Before (regular React component)
interface HeroProps {
  title: string;
  description: string;
  image: string;
}

// After (Uniform component)
import { ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-next-rsc/component";
import { AssetParamValue, RichTextParamValue, flattenValues } from "@uniformdev/canvas";

type HeroParameters = {
  title?: string;
  description?: RichTextParamValue;
  image?: AssetParamValue;
};

type HeroProps = ComponentProps<HeroParameters>;

export const HeroSection = ({ component, context }: HeroProps) => {
  const image = flattenValues(component?.parameters?.image?.value, { toSingle: true });
  
  return (
    <div>
      <UniformText
        component={component}
        context={context}
        parameterId="title"
        as="h1"
      />
      <UniformRichText
        component={component}
        context={context}
        parameterId="description"
      />
      {image && <img src={image.url} alt={image.title} />}
    </div>
  );
};
```

## 5. Routes

- **Dynamic route**: `app/[[...path]]/page.tsx` handles all Uniform compositions
- **Preview API**: `app/api/preview/route.ts` enables contextual editing
- **Playground**: `app/playground/page.tsx` for previewing patterns

## 6. Next Steps

1. Set up your environment variables
2. Create component definitions in Uniform
3. Adapt your existing components to use Uniform parameters
4. Create component patterns for reusable content
5. Build your first composition in Uniform

The original static page has been renamed to `app/page.tsx.off` to avoid conflicts with the dynamic routing. 