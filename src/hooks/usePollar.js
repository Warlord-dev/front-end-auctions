import { useEffect } from 'react';
import config from '@utils/config';

export default function usePollar(callback) {
  useEffect(() => {
    callback();
    const interval = setInterval(callback, config.TIME_INTERVAL);
    return () => clearInterval(interval);
  }, [callback]);
}
