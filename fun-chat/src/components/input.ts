import { InputOptions } from '../utils/types';

export function createInput(options: InputOptions): HTMLInputElement {
  const input = document.createElement('input');
  input.type = options.type;
  input.placeholder = options.placeholder || '';
  if (options.required) input.required = true;
  input.id = options.id;
  return input;
}
