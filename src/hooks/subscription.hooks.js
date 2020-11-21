import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const useSubscription = ({ request, next }, deps) => {

  useEffect(() => {

    const { unsubscribe } = request.subscribe({
      next({ data, errors }) {

        if (errors) {
          toast.error(`Error: ${JSON.stringify(errors)}`);
        }

        if (!data) {
          return;
        }

        next(data);

      },
    });

    return () => unsubscribe();

  }, deps);
};
