import '../pages/main/confirmDialog.css';

export type ConfirmOptions = {
  title?: string;
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
    title = 'Confirm',
    message = 'Delete message?',
    yesText = 'Yes',
    noText = 'No',
  } = opts;

  const overlay = document.createElement('div');
  overlay.className = 'confirm-overlay';

  const dialog = document.createElement('div');
  dialog.className = 'confirm-dialog';

  dialog.innerHTML = `
    <div class="confirm-title">${title}</div>
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
    getComputedStyle(overlay).opacity;
    overlay.classList.add('visible');
  };

  const hide = () => {
    overlay.classList.remove('visible');
    overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
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