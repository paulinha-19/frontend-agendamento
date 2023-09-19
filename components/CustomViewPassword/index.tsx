import React from 'react';
import { CustomButtonPassword } from '../../styles/customForm';
import { InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface CustomViewPasswordProps {
  onClick: () => void;
  showPassword: boolean;
}

export const CustomViewPassword = ({
  onClick,
  showPassword
}: CustomViewPasswordProps) => {
  return (
    <InputRightElement h={'full'}>
      <CustomButtonPassword onClick={onClick}>
        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
      </CustomButtonPassword>
    </InputRightElement>
  );
};
