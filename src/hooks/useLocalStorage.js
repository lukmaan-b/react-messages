import { useEffect, useState } from 'react';

const useLocalStorage = (key, initValue) => {
  const PREFIXKEY = 'react-message-' + key;
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(PREFIXKEY);

      if (item != null) return JSON.parse(item);

      if (initValue instanceof Function) return initValue();

      return initValue;
    } catch (error) {
      console.error(error);
      return initValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(PREFIXKEY, JSON.stringify(storedValue));
  }, [PREFIXKEY, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
