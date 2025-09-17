export function createDiv(className?: string): HTMLDivElement {
  const div = document.createElement('div');
  if (className) div.className = className;
  return div;
}