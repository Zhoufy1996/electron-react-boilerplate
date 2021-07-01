import { createContainer } from 'unstated-next';
import { useState, useCallback } from 'react';

const useCount = () => {
  const [count, setCount] = useState(1);

  const increase = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount((pre) => pre - 1);
  }, []);

  return {
    count,
    increase,
    decrease,
  };
};

const CountContainer = createContainer(useCount);

export default CountContainer;
