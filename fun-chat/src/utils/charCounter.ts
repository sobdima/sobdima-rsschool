interface ICharCounter {
  input: HTMLInputElement | null;
  counter: HTMLSpanElement | null;
  max: number;
  handler: (() => void) | null;
  update(): void;
  enableEvent(): void;
  disableEvent(): void;
  open(): void;
  close(): void;
  reset(): void;
  editMode(text?: string): void;
  exitEditMode(): void;
}


export const CharCounter: ICharCounter = {
  get input() {
    return document.getElementById("message-input") as HTMLInputElement | null;
  },

  get counter() {
    return document.querySelector(".char-counter") as HTMLSpanElement | null;
  },
  max: 200,
  handler: null as (() => void) | null,

  update() {
    if (!this.input || !this.counter) return;

    const len = this.input.value.length;
    this.counter.textContent = `${len}/${this.max}`;

    if (len >= this.max) {
      this.counter.classList.add("limit");
    } else {
      this.counter.classList.remove("limit");
    }
  },

  enableEvent() {
    if (!this.input) return;
    if (this.handler) return;

    this.handler = () => this.update();
    this.input.addEventListener("input", this.handler);
  },

  disableEvent() {
    if (!this.input) return;
    if (!this.handler) return;

    this.input.removeEventListener("input", this.handler);
    this.handler = null;
  },

  open() {
    if (!this.counter) return;

    this.counter.style.display = "block";
    this.update();
    this.enableEvent();
  },

  close() {
    if (!this.counter) return;

    this.reset();
    this.counter.style.display = "none";
    this.disableEvent();
  },

  reset() {
    if (!this.counter) return;

    this.counter.textContent = `0/${this.max}`;
    this.counter.classList.remove("limit");
  },

  editMode(messageText) {
    if (!this.input || !this.counter) return;

    this.counter.textContent = `${messageText?.length}/200`;
    this.counter.style.right = "100px";
    this.update();
    this.enableEvent();
  },

  exitEditMode() {
    if (!this.counter) return;

    this.reset();
    this.counter.style.right = "90px";
    this.disableEvent();
  }
};
