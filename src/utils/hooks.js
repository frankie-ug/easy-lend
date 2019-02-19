import { useEffect, useState } from 'react';

export const useDebounce = (amount, duration) => {
  const [debouncedValue, setDebouncedValue] = useState({
    amount,
    numMonths: duration,
  });

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue({
          amount,
          numMonths: duration,
        });
      }, 400);

      return () => {
        clearTimeout(handler);
      };
    },

    [amount, duration]
  );

  return debouncedValue;
};
