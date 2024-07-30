import { ToastType } from '@/app/utilities/toaster/constants';

const defaultFn = () => {
  if (process.env.NODE_ENV === 'development') {
    throw new Error("'toast' hasn't been initialized yet.");
  }
  return void 0;
};

const toast: ToastType = {
  error: defaultFn,
  success: defaultFn,
  info: defaultFn,
};

const defaultToast: ToastType = { ...toast };

export const constructToast = (newToast: ToastType) => {
  Object.assign(toast, newToast);
};

export const destructToast = () => {
  Object.assign(toast, defaultToast);
};

export default toast;
