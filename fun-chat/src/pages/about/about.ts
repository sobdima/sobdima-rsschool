import { isAuthenticated } from "../../api/auth";
import { createButton } from "../../components/button";
import { createDiv } from "../../components/div";
import { handleRouting } from "../../router/router";
import { initializeChatPage } from "../../api/ws";

export function createAboutPage(): HTMLElement {
  const container = createDiv('about-container');

  const aboutText = document.createElement('span');
  aboutText.className = 'about-text';
  aboutText.textContent = 'Author: Dima Sob — frontend developer and enthusiast. I built this chat client to learn and demonstrate real-time web technologies and TypeScript best practices.';

  const link = document.createElement('a');
  link.className = 'about-link'
  link.href = 'https://github.com/sobdima';
  link.target = '_blank'
  link.rel = 'noopener noreferrer';
  link.textContent = "Author's github"

  const backButton = createButton({
    text: 'Go Back',
    type: 'button',
    id: 'back-button',
    onClick: async () => {
      if (isAuthenticated()) {
        window.location.hash = '#chat';
        handleRouting();
        await initializeChatPage();
      } else {
        window.location.hash = '#login';
        handleRouting();
      }
    },
  });

  container.append(aboutText, backButton, link);

  return container;
}