import {
  ComponentProps,
  UniformSlot,
} from '@uniformdev/canvas-next-rsc/component';

type PageParameters = {
  metaTitle?: string;
};

type PageSlots = 'content';

type PageProps = ComponentProps<PageParameters, PageSlots>;

export const PageComponent = ({ slots, context, component }: PageProps) => {
  return (
    <div>
      <UniformSlot 
        context={context} 
        data={component} 
        slot={slots.content} 
      />
    </div>
  );
}; 