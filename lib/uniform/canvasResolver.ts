import { ComponentInstance } from '@uniformdev/canvas';
import { componentMapping } from './components';

export function resolveRenderer(componentInstance: ComponentInstance) {
  const componentType = componentInstance.type;
  return componentMapping[componentType as keyof typeof componentMapping] || null;
}