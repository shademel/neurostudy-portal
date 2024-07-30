import { ReactElement } from 'react';

export interface ToastItemProps {
  id: string;
  type: 'error' | 'success';
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
}

export enum ToastContainerItemClass {
  'error' = 'errorBody',
  'success' = 'successBody',
}

export enum ToastIconClass {
  'error' = 'errorIcon',
  'success' = 'successIcon',
}

export enum ToastDefaultDuration {
  'error' = 10000,
  'success' = 5000,
}
