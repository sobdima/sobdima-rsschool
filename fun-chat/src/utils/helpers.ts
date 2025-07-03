import { InputOptions } from './types';
import { ButtonOptions } from './types';

export function createInput(options: InputOptions): HTMLInputElement {
  const input = document.createElement('input');
  input.type = options.type;
  input.placeholder = options.placeholder;

  if (options.className) {
    input.className = options.className;
  }

  if (options.id) {
    input.id = options.id;
  }

  return input;
}

export function createButton(options: ButtonOptions): HTMLButtonElement {
  const button = document.createElement('button');
  button.textContent = options.text;

  if (options.type) {
    button.type = options.type;
  }

  if (options.className) {
    button.className = options.className;
  }

  if (options.id) {
    button.id = options.id;
  }

  return button;
}

export function createDiv(
  className: string,
  textContent?: string,
): HTMLDivElement {
  const div = document.createElement('div');
  div.className = className;
  if (textContent) {
    div.textContent = textContent;
  }
  return div;
}

export function createSpan(
  className: string,
  textContent: string,
): HTMLSpanElement {
  const span = document.createElement('span');
  span.className = className;
  span.textContent = textContent;
  return span;
}

export function createParagraph(textContent: string): HTMLParagraphElement {
  const p = document.createElement('p');
  p.textContent = textContent;
  return p;
}

export function createListItem(textContent: string): HTMLLIElement {
  const li = document.createElement('li');
  li.textContent = textContent;
  return li;
}

export function createLink(
  className: string,
  href: string,
  textContent: string,
): HTMLAnchorElement {
  const a = document.createElement('a');
  a.className = className;
  a.href = href;
  a.target = '_blank';
  a.textContent = textContent;
  return a;
}
