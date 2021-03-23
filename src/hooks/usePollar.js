import { useEffect } from 'react';
import config from '@utils/config';

export default function usePollar(callback, timeInterval = config.TIME_INTERVAL) {
  useEffect(() => {
    callback();
    const interval = setInterval(callback, timeInterval);
    return () => clearInterval(interval);
  }, [callback]);
}
