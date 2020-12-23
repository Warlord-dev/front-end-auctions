import { useEffect } from 'react';

export const useSubscription = ({ request, next }, deps) => {
  useEffect(() => {
    const { unsubscribe } = request.subscribe({
      next: ({ data }) => {
        if (!data) {
          return;
        }

        next(data);
      },
    });

    return () => unsubscribe();
  }, deps);
};
