import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup
} from '@chakra-ui/react';
import { CustomInput } from '../../components/CustomInput';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  name: string;
  color?: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  children?: React.ReactNode;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = 'text',
  name,
  color = '#163D66',
  placeholder,
  register,
  errors,
  children
}) => {
  return (
    <FormControl id={id} isInvalid={!!errors[name]}>
      <FormLabel color={color}>{label}</FormLabel>
      <InputGroup>
        <CustomInput
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
        {children}
      </InputGroup>
      <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};
