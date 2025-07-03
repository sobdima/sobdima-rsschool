import { ButtonOptions } from '../utils/types';

export function createButton(options: ButtonOptions): HTMLButtonElement {
  const button = document.createElement('button');
  button.type = options.type || 'button';
  button.textContent = options.text;
  button.id = options.id;
  if (options.onClick) {
    button.addEventListener('click', options.onClick);
  }
  return button;
}
