import { useEffect, useState } from 'react';
import { throttle } from '../utilities/common';

const useWindowWidth = (defaultWidth: number = 1150): number => {
  const [windowWidth, setWindowWidth] = useState(defaultWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const updateWidth = throttle(() => {
      setWindowWidth(window.innerWidth)
    })

    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, []);

  return windowWidth
}

export default useWindowWidth