import {
  ComponentProps,
  UniformSlot,
} from '@uniformdev/canvas-next-rsc/component';

type PageParameters = {
  metaTitle?: string;
};

type PageSlots = 'header' | 'content' | 'footer';

type PageProps = ComponentProps<PageParameters, PageSlots>;

export const PageComponent = ({ slots, context, component }: PageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <UniformSlot 
        context={context} 
        data={component} 
        slot={slots.header} 
      />
      <main className="flex-1">
        <UniformSlot 
          context={context} 
          data={component} 
          slot={slots.content} 
        />
      </main>
      <UniformSlot 
        context={context} 
        data={component} 
        slot={slots.footer} 
      />
    </div>
  );
}; 