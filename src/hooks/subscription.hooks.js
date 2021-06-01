import { useEffect } from 'react';

export const useSubscription = ({ request, next }, deps) => {
  useEffect(() => {
    if (deps || typeof deps === 'undefined') {
      const { unsubscribe } = request.subscribe({
        next: ({ data }) => {
          if (!data) {
            return;
          }
          if (Object.keys(data).filter((key) => key.includes('V2')).length) {
            const keys = Object.keys(data);
            const parsedData = {};
            for (let i = 0; i < keys.length; i += 1) {
              if (keys[i].includes('V2S')) {
                parsedData[keys[i].replace('V2S', 's')] = data[keys[i]];
              } else if (keys[i].includes('V2')) {
                parsedData[keys[i].replace('V2', '')] = data[keys[i]];
              }
            }
            next(parsedData);
          } else {
            next(data);
          }
        },
      });

      return () => unsubscribe();
    }
  }, deps);
};
