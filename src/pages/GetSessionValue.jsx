import { useState } from 'react';


function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(sessionStorage.getItem(key));
  if (savedValue) return savedValue;


  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}


export default function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue))


  return [value, setValue]
}
