import { Controls } from './controls';

export class Builder {
  header(): HTMLElement {
    const headerElement = document.createElement('header');
    const navElement = document.createElement('nav');

    const garageButton = document.createElement('button');
    garageButton.id = 'nav-garage-btn';
    garageButton.classList.add('nav-button', 'active');
    garageButton.textContent = 'Garage';

    const winnersButton = document.createElement('button');
    winnersButton.id = 'nav-winners-btn';
    winnersButton.classList.add('nav-button');
    winnersButton.textContent = 'Winners';

    navElement.appendChild(garageButton);
    navElement.appendChild(winnersButton);
    headerElement.appendChild(navElement);

    return headerElement;
  }

  main(): HTMLElement {
    const mainElement = document.createElement('main');
    mainElement.id = 'main-content';
    return mainElement;
  }

  buildGarageView(): HTMLElement {
    const garageViewDiv = document.createElement('div');
    garageViewDiv.id = 'garage-view';
    garageViewDiv.classList.add('view', 'active-view');

    const title = document.createElement('h2');
    title.innerHTML = 'Garage (<span id="garage-total-count">0</span>)';
    const pageInfo = document.createElement('p');
    pageInfo.innerHTML = 'Page #<span id="garage-current-page">1</span>';

    const controls = new Controls('app-wrapper');
    const controlsElement = controls.render();

    garageViewDiv.appendChild(title);
    garageViewDiv.appendChild(pageInfo);
    garageViewDiv.appendChild(controlsElement);

    return garageViewDiv;
  }

  buildCarsContainer(): HTMLElement {
    const carsContainerDiv = document.createElement('div');
    carsContainerDiv.id = 'car-list-container';
    carsContainerDiv.className = 'car-list-container';

    return carsContainerDiv;
  }
}
