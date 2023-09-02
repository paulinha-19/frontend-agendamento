import { forwardRef } from 'react';
import { InputProps, Input } from '@chakra-ui/react';

export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', ...props }, ref) => {
    return (
      <Input
        type={type}
        name={name}
        ref={ref}
        {...props}
        bg=""
        minHeight="3rem" // Defina uma altura mínima para o campo
      />
    );
  }
);
