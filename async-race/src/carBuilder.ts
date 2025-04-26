import type { CarData } from './types';

export class Car {
  public id: number;
  public name: string;
  public color: string;
  public element: HTMLElement | null = null;

  constructor(data: CarData) {
    this.id = data.id;
    this.name = data.name;
    this.color = data.color;
  }

  render(): HTMLElement {
    const carElement = document.createElement('div');
    carElement.classList.add('car');
    carElement.dataset.carId = this.id.toString();

    const uniqueIdSuffix = `-${this.id}`;
    const carSvgId = `car-svg-icon${uniqueIdSuffix}`;

    carElement.innerHTML = `
        <div class="car-road-container" data-id="${this.id}">
          <span class="car-icon" data-id="${this.id}">
            <svg id="${carSvgId}" class="car-svg-icon" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" fill="${this.color}"
              aria-labelledby="carTitle" role="img">
              <title id="carTitle">Simple Car Icon</title>
              <g class="car-icon">
                <path class="car-body"
                  d="M5 50 L 20 50 L 25 35 L 45 35 L 55 25 L 70 25 L 70 35 L 95 35 L 95 50 Z" />

                <path class="car-window" d="M47 34 L 55 27 L 68 27 L 68 34 Z" fill="white" stroke="currentColor"
                  stroke-width="1" />

                <circle class="car-wheel wheel-left" fill="black" cx="32" cy="50" r="7" />
                <circle class="car-wheel wheel-right" fill="black" cx="80" cy="50" r="7" />
              </g>
            </svg>
          </span>
          <span class="flag-icon">
            <img class="flag-png-icon" src="./flag.png" alt="Finish flag for ${this.name}">
          </span>
        </div>
        <div class="car-controls">
          <button class="car-start-btn" data-id="${this.id}">Start</button>
          <button class="car-stop-btn" data-id="${this.id}" disabled>Stop</button>
          <button class="car-select-btn" data-id="${this.id}">Select</button>
          <button class="car-remove-btn" data-id="${this.id}">Remove</button>
          <span class="car-name">${this.name}</span>
        </div>
      `;

    this.element = carElement;
    return this.element;
  }
}
