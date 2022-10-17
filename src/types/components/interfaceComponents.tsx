import {ReactNode} from 'react';

export interface IComponentsBox {
  width: number;
  margin: string;
  children: ReactNode;
}

export interface IComponentsButton {
  submit: () => void;
  disabled: boolean;
  text: string;
}

export interface IComponentsTextField {
  error: boolean;
  label: string;
  inputProps: {
    type: string;
  };
  onChange: (e: string) => void;
}

export interface IComponentsTypography {
  variant:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  textAlign: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  text: string;
  color?: string;
}
