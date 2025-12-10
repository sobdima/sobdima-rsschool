import { createDiv } from "../components/div";
import './utils.css';

export function showAlreadyLoggedInModal(): void {
  const overlay = createDiv('already-logged-overlay');
  const modal = createDiv('already-logged-dialog');

  modal.innerText = 'You are already logged in another tab.';

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}