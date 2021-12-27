import { useEffect, useRef } from 'react';

// Thanks to
// https://www.robinwieruch.de/react-useeffect-only-once/
export const useEffectOnce = (callback, dependencies, condition) => {
  const calledOnce = useRef(false);
  useEffect(() => {

    if (calledOnce.current) {
      return;
    }

    if (condition(dependencies)) {
      callback(dependencies);
      calledOnce.current = true;
    }

  }, [callback, condition, dependencies]);
};
