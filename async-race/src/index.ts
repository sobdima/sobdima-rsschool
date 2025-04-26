import { Builder } from './pageBuilder';
import { renderGarageCars } from './garageView';
import { handleCreateCar } from './createCarHandler';
import { handleDeleteCar } from './deleteCarHandler';
import '../public/style.css';
import { handleUpdateCar } from './updateCarHandler';
import { carAnimations } from './types';
import { handleStopEngine, handleStartEngine } from './engineHandler';

function initializeApp() {
  const appWrapper = document.querySelector('.app-wrapper');
  if (!appWrapper) {
    console.error(
      'Fatal Error: App wrapper ".app-wrapper" not found in the DOM.',
    );
    return;
  }

  const pageBuilder = new Builder();
  const headerElement = pageBuilder.buildHeaderButtons();
  const mainElement = pageBuilder.buildMainTag();
  const garageViewElement = pageBuilder.buildGarageView();
  const carsContainerElement = pageBuilder.buildCarsContainer();

  garageViewElement.appendChild(carsContainerElement);
  mainElement.appendChild(garageViewElement);

  appWrapper.innerHTML = '';
  appWrapper.appendChild(headerElement);
  appWrapper.appendChild(mainElement);

  renderGarageCars(carsContainerElement).catch((error) => {
    console.error('Error rendering garage cars:', error);

    if (carsContainerElement) {
      carsContainerElement.innerHTML =
        '<p>Failed to load cars. Try to refresh the page.</p>';
    }
  });

  // Garage & Winners Buttons in the HEADER
  /* const garageBtn = document.getElementById('nav-garage-btn');
  const winnersBtn = document.getElementById('nav-winners-btn'); */

  //CONTROLS Button
  const createNameInput = document.getElementById(
    'create-name',
  ) as HTMLInputElement;
  const createColorInput = document.getElementById(
    'create-color',
  ) as HTMLInputElement;
  const createButton = document.getElementById(
    'create-car-btn',
  ) as HTMLButtonElement;
  const updateNameInput = document.getElementById(
    'update-name',
  ) as HTMLInputElement;
  const updateColorInput = document.getElementById(
    'update-color',
  ) as HTMLInputElement;
  const updateButton = document.getElementById(
    'update-car-btn',
  ) as HTMLButtonElement;

  if (
    !createNameInput ||
    !createColorInput ||
    !createButton ||
    !updateNameInput ||
    !updateColorInput ||
    !updateButton
  ) {
    console.error(
      'Error: One or more elements for car creation form not found. Check IDs: #create-name, #create-color, #create-car-btn',
    );
  } else {
    createButton.addEventListener('click', () =>
      handleCreateCar(createNameInput, createColorInput, carsContainerElement),
    );

    updateButton.addEventListener('click', () => {
      handleUpdateCar(
        selectedCarId,
        updateNameInput,
        updateButton,
        updateColorInput,
        carsContainerElement,
      );
    });
  }

  let selectedCarId: number | null = null;

  carsContainerElement.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;
    const carId = Number(target.dataset.id);
    const carElement = target.closest('.car');
    const carName = carElement?.querySelector('.car-name')?.textContent || '';
    const carColor =
      carElement?.querySelector('.car-svg-icon')?.getAttribute('fill') ||
      '#ffffff';

    if (target.classList.contains('car-remove-btn')) {
      if (carAnimations.has(carId)) {
        await handleStopEngine(carId, carsContainerElement);
      }
      if (!isNaN(carId)) {
        handleDeleteCar(carId, carsContainerElement);
      }
    }

    if (target.classList.contains('car-select-btn')) {
      if (selectedCarId === carId) {
        selectedCarId = null;
        updateNameInput.value = '';
        updateColorInput.value = '#ffffff';
        updateNameInput.disabled = true;
        updateButton.disabled = true;
        target.style.backgroundColor = '';
      } else {
        selectedCarId = carId;
        updateNameInput.value = carName;
        updateColorInput.value = carColor;
        updateNameInput.disabled = false;
        updateButton.disabled = false;

        const allButtons =
          carsContainerElement.querySelectorAll('.car-select-btn');
        allButtons.forEach(
          (btn) => ((btn as HTMLElement).style.backgroundColor = ''),
        );
        target.style.backgroundColor = '#bdef6f';
      }
    }

    if (target.classList.contains('car-stop-btn')) {
      await handleStopEngine(carId, carsContainerElement);
    }
    if (target.classList.contains('car-start-btn')) {
      await handleStartEngine(carId, carsContainerElement);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});
