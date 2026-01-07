export function createUnreadDivider(): HTMLDivElement {
  const divider = document.createElement('div');
  divider.className = 'unread-divider';
  divider.setAttribute('data-unread', 'true');
  divider.innerHTML = '<span>new messages</span>';
  return divider;
}