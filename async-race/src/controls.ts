export class Controls {
  private container: HTMLElement;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId) || document.body;
  }

  public render(): HTMLElement {
    const controlsElement = document.createElement('div');
    controlsElement.className = 'controls';

    controlsElement.appendChild(this.createFormGroup());
    controlsElement.appendChild(this.updateFormGroup());
    controlsElement.appendChild(this.raceControls());

    return controlsElement;
  }

  private createFormGroup(): HTMLElement {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const nameInput = this.createInput('text', 'create-name', 'New car name');
    const colorInput = this.createInput('color', 'create-color', '', '#ffffff');
    const createButton = this.createButton('create-car-btn', 'Create');

    formGroup.appendChild(nameInput);
    formGroup.appendChild(colorInput);
    formGroup.appendChild(createButton);

    return formGroup;
  }

  private updateFormGroup(): HTMLElement {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const nameInput = this.createInput(
      'text',
      'update-name',
      'Update car name',
      '',
      true,
    );
    const colorInput = this.createInput(
      'color',
      'update-color',
      '',
      '#ffffff',
      true,
    );
    const updateButton = this.createButton('update-car-btn', 'Update', true);

    formGroup.appendChild(nameInput);
    formGroup.appendChild(colorInput);
    formGroup.appendChild(updateButton);

    return formGroup;
  }

  private raceControls(): HTMLElement {
    const controlsGroup = document.createElement('div');
    controlsGroup.className = 'race-controls';

    const raceButton = this.createButton('race-btn', 'Race');
    const resetButton = this.createButton('reset-btn', 'Reset');
    const generateCarsButton = this.createButton(
      'generate-cars-btn',
      'Generate Cars (100)',
    );

    controlsGroup.appendChild(raceButton);
    controlsGroup.appendChild(resetButton);
    controlsGroup.appendChild(generateCarsButton);

    return controlsGroup;
  }

  private createInput(
    type: string,
    id: string,
    placeholder: string,
    value: string = '',
    disabled: boolean = false,
  ): HTMLInputElement {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder;
    if (value) input.value = value;
    input.disabled = disabled;
    return input;
  }

  private createButton(
    id: string,
    text: string,
    disabled: boolean = false,
  ): HTMLButtonElement {
    const button = document.createElement('button');
    button.id = id;
    button.disabled = disabled;
    button.textContent = text;
    return button;
  }
}
