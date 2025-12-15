import { createDiv } from "../components/div";
import './utils.css';

export type ConfirmOptions = {
  message?: string;
  yesText?: string;
  noText?: string;
}

export type ConfirmDialog = {
  element: HTMLDivElement;
  show: () => void;
  hide: () => void;
  onYes: (handler: () => void) => void;
  onNo: (handler: () => void) => void;
}

export function createConfirmDialog(opts: ConfirmOptions = {}): ConfirmDialog {
  const {
    message = 'Delete message?',
    yesText = 'Yes',
    noText = 'No',
  } = opts;

  const overlay = document.createElement('div');
  overlay.className = 'confirm-overlay';

  const dialog = document.createElement('div');
  dialog.className = 'confirm-dialog';

  dialog.innerHTML = `
    <div class="confirm-message">${message}</div>
    <div class="confirm-actions">
      <button class="confirm-yes" type="button">${yesText}</button>
      <button class="confirm-no" type="button">${noText}</button>
    </div>
  `;

  overlay.appendChild(dialog);

  const yesBtn = dialog.querySelector('.confirm-yes') as HTMLButtonElement;
  const noBtn = dialog.querySelector('.confirm-no') as HTMLButtonElement;

  let yesHandler: (() => void) | null = null;
  let noHandler: (() => void) | null = null;

  const show = () => {
    document.body.appendChild(overlay);
    document.addEventListener('keydown', handleEscape);
    getComputedStyle(overlay).opacity;
    overlay.classList.add('visible');
  };

  const hide = () => {
    document.removeEventListener('keydown', handleEscape);
    overlay.classList.remove('visible');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') hide();
  };

  yesBtn.addEventListener('click', () => {
    yesHandler?.();
    hide();
  });

  noBtn.addEventListener('click', () => {
    noHandler?.();
    hide();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hide();
  });

  return {
    element: overlay,
    show,
    hide,
    onYes(handler: () => void) {
      yesHandler = handler;
    },
    onNo(handler: () => void) {
      noHandler = handler;
    },
  }
}

export function showAlreadyLoggedInModal(): void {
  const overlay = createDiv('already-logged-overlay');
  const modal = createDiv('already-logged-dialog');

  modal.innerText = 'You are already logged in another tab.';

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

export function showReconnectModal(attempt: number, maxAttempts: number, delay: number, isFailed: boolean = false) {
  const existingModal = document.querySelector('.reconnect-modal');
  if (existingModal) {
    existingModal.remove();
  }

  const modal = createDiv('reconnect-modal');

  const title = document.createElement('h2');
  title.classList.add('reconnect-title');
  title.textContent = 'Connection to server interrupted';

  const message = document.createElement('p');
  message.classList.add('reconnect-message');
  if (isFailed) {
    message.textContent = `Max reconnection attempts reached (${maxAttempts}/${maxAttempts})`;
  } else {
    message.textContent = `Attempting to reconnect (${attempt}/${maxAttempts}) in ${delay}ms...`;
  }

  const overlay = createDiv('reconnect-overlay');

  modal.appendChild(title);
  modal.appendChild(message);
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
}

export function closeReconnectModal() {
  const modal = document.querySelector('.reconnect-modal');
  const overlay = document.querySelector('.reconnect-overlay');
  if (modal) modal.remove();
  if (overlay) overlay.remove();
}