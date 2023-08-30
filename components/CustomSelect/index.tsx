import { SelectProps, Select } from '@chakra-ui/react';
import { forwardRef } from 'react';

export const CustomSelect = forwardRef<HTMLSelectElement, SelectProps>(
  ({ ...props }, ref) => {
    return <Select ref={ref} {...props} bg=""  />;
  }
);
