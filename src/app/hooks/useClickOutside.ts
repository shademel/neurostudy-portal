import { useEffect } from 'react';

const useClickOutside = (onClose: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const dialog = document.querySelector('dialog');
      if (dialog && !dialog.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onClose]);
};

export default useClickOutside;
