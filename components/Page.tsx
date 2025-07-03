import {
  ComponentProps,
  UniformSlot,
} from '@uniformdev/canvas-next-rsc/component';

type PageParameters = {
  metaTitle?: string;
};

type PageSlots = 'content';

type PageProps = ComponentProps<PageParameters, PageSlots>;

export const PageComponent = (props: PageProps) => {
  const { metaTitle, slots, context, component } = props;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Meta title will be handled by Next.js metadata API */}
      <UniformSlot 
        context={context} 
        data={component} 
        slot={slots.content} 
      />
    </div>
  );
};

export default PageComponent; 