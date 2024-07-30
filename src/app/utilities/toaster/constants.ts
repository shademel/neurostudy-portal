export interface ToastItemProps {
  type: 'error' | 'success';
  message: string;
}

export interface ToastType {
  error: (props: string | Omit<ToastItemProps, 'type'>) => void;
  success: (props: string | Omit<ToastItemProps, 'type'>) => void;
}

export enum ToastContainerItemClass {
  'error' = 'errorBody',
  'success' = 'successBody',
}

export enum ToastIconClass {
  'error' = 'errorIcon',
  'success' = 'successIcon',
}
