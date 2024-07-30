import { ReactElement } from 'react';

export interface ToastItemProps {
  id: string;
  type: 'error' | 'success' | 'info';
  hide?: boolean;
  message: ReactElement;
  duration: number;
}

export type ToastOptions = Partial<
  Omit<ToastItemProps, 'id' | 'type' | 'hide'>
>;

export type ToastFunction = (
  message: ToastItemProps['message'],
  options?: ToastOptions
) => void;

export interface ToastType {
  error: ToastFunction;
  success: ToastFunction;
  info: ToastFunction;
}

export enum ToastContainerItemClass {
  'error' = 'errorBody',
  'success' = 'successBody',
  'info' = '',
}

export enum ToastIconClass {
  'error' = 'errorIcon',
  'success' = 'successIcon',
  'info' = '',
}

export enum ToastDefaultDuration {
  'error' = 10000,
  'info' = 8000,
  'success' = 5000,
}
