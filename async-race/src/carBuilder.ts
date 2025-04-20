interface CarData {
  id: number;
  name: string;
  color: string;
}

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
      const flagPngId = `flag-png-icon${uniqueIdSuffix}`;
      const selectBtnId = `car-select-btn${uniqueIdSuffix}`;
      const removeBtnId = `car-remove-btn${uniqueIdSuffix}`;
      const carNameId = `car-name${uniqueIdSuffix}`;

      carElement.innerHTML = `
        <div class="car-road-container">
          <span class="car-icon">
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
            <img id="${flagPngId}" class="flag-png-icon" src="./flag.png" alt="Finish flag for ${this.name}">
          </span>
        </div>
        <div class="car-controls">
          <button id="${selectBtnId}">Select</button>
          <button id="${removeBtnId}">Remove</button>
          <span id="${carNameId}">${this.name}</span>
        </div>
      `;

      this.element = carElement;
      return this.element;
  }
}