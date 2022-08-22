import { useState } from 'react';

import { InputType } from '../types/CustomInputType';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const UsePasswordInput = (type: InputType) => {
  const [isWatchPassword, setIsWatchPassword] = useState<boolean>(false);

  const typeInputValue = isWatchPassword ? 'password' : 'text';

  const onWatchPassword = (): void => {
    setIsWatchPassword(!isWatchPassword);
  };

  const isEyeIcon = type === 'password';
  const isSearchIcon = type === 'search';
  const isEyeOpenIcon = type === 'password' && isWatchPassword;

  return { typeInputValue, onWatchPassword, isEyeIcon, isEyeOpenIcon, isSearchIcon };
};
