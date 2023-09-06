import React from 'react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
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
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = 'text',
  name,
  color = '#163D66',
  placeholder,
  register,
  errors
}) => {
  return (
    <FormControl id={id} isInvalid={!!errors[name]}>
      <FormLabel color={color}>{label}</FormLabel>
      <CustomInput type={type} placeholder={placeholder} {...register(name)} />
      {errors[name] && (
        <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};
