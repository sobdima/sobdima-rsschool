export function selectedUserPlaceholder(text: string): HTMLDivElement {
  const placeholder = document.createElement('div');
  placeholder.className = 'main-placeholder';
  placeholder.textContent = text;

  return placeholder;
}