import { Builder } from './pageBuilder';
//import { Car } from './carBuilder';
import { createCarOnServerAndRender } from './servFunctions';
import {
  loadAndRenderCarsFromStorage,
  updateGarageCounter,
} from './localStorage';
import '../public/style.css';

const pageBuilder = new Builder();
const appWrapper = document.querySelector<HTMLDivElement>('.app-wrapper');

if (!appWrapper) {
  console.error('app-wrapper DIV element not found!');
} else {
  const appHeader = pageBuilder.header();
  const appMain = pageBuilder.main();

  const garageViewContent = pageBuilder.buildGarageView();
  const carsContainer = pageBuilder.buildCarsContainer();

  appWrapper.appendChild(appHeader);
  appWrapper.appendChild(appMain);
  appMain.appendChild(garageViewContent);
  garageViewContent.appendChild(carsContainer);

  const createCarBtn = document.getElementById(
    'create-car-btn',
  ) as HTMLButtonElement | null;
  const carNameInput = document.getElementById(
    'create-name',
  ) as HTMLInputElement | null;
  const carColorInput = document.getElementById(
    'create-color',
  ) as HTMLInputElement | null;
  const garageCounter = document.getElementById(
    'garage-total-count',
  ) as HTMLElement;

  document.addEventListener('DOMContentLoaded', function () {
    loadAndRenderCarsFromStorage(carsContainer);
    updateGarageCounter(garageCounter);

    const carControlsContainer = document.querySelectorAll('.car-controls');
    console.log(carControlsContainer);
  });

  if (createCarBtn && carNameInput && carColorInput && carsContainer) {
    createCarBtn.addEventListener('click', () => {
      const name = carNameInput.value.trim();
      const color = carColorInput.value;

      if (!name) {
        alert('Please enter a car name.');
        carNameInput.focus();
        return;
      }

      createCarOnServerAndRender(
        name,
        color,
        carsContainer,
        carNameInput,
        carColorInput,
        garageCounter,
      );
    });
  } else {
    console.error(
      'One or more required elements (button, inputs, container) not found in the DOM.',
    );
  }
}
