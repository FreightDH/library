import type { ChangeEvent, ComponentProps, Dispatch, FC, ReactElement } from 'react';

import cl from './CardInput.module.scss';

interface CardInputProps extends ComponentProps<'input'> {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
}

export const CardInput: FC<CardInputProps> = ({ placeholder, setValue, value }): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value!);
  };

  return (
    <input
      autoComplete="off"
      className={cl.input}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};
