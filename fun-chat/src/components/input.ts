export interface InputOptions {
  type: string;
  placeholder: string;
  className?: string;
  id: string;
  required?: boolean;
}

export function createInput(options: InputOptions): HTMLInputElement {
  const input = document.createElement('input');
  input.type = options.type;
  input.placeholder = options.placeholder || '';
  if (options.required) input.required = true;
  input.id = options.id;
  return input;
}
