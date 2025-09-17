export function createSpan(className?: string, text?: string): HTMLSpanElement {
  const span = document.createElement('span');
  if (className) span.className = className;
  if (text) span.textContent = text;
  return span;
}