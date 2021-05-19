import { useEffect } from 'react';

export const useSubscription = ({ request, next }, deps) => {
  useEffect(() => {
    if (deps) {
      console.log('this is request subscribe send');
      const { unsubscribe } = request.subscribe({
        next: ({ data }) => {
          if (!data) {
            return;
          }
  
          next(data);
        },
      });
  
      return () => unsubscribe();
    }
  }, deps);
};
