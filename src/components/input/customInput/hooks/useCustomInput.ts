import { useState } from 'react';

type UseCustomInputReturnType = {
  value: string;
  setValue: (value: any) => void;
};

export const UseCustomInput = (initialValue: string): UseCustomInputReturnType => {
  const [value, setValue] = useState(initialValue);

  return { value, setValue };
};
