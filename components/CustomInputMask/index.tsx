import { forwardRef, ChangeEvent } from 'react';
import { mask as masker, unMask } from 'remask';
import { InputProps } from '../../types/masked-input';
import { Input } from '@chakra-ui/react';

export const CustomInputMask = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', mask = '', onChange, value, ...props }, ref) => {
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const valueWithoutMask = unMask(ev.target.value);
        onChange(valueWithoutMask);
      }
    };
    const handleValueWithMask = masker(value || '', mask);

    return (
      <Input
        type={type}
        name={name}
        ref={ref}
        value={handleValueWithMask}
        onChange={handleChange}
        {...props}
        bg=""
      />
    );
  }
);
