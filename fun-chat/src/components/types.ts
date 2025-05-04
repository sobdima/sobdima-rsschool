export interface InputOptions {
  type: string;
  placeholder: string;
  className?: string;
  id?: string;
}

export interface ButtonOptions {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  id?: string;
}

export type MessageHandler = (data: any) => void;