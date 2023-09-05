import styled, { css } from 'styled-components';
import {
  FormControl,
  Input,
  Select,
  FormLabel,
  Button,
  ButtonProps,
  Text
} from '@chakra-ui/react';

export const BaseField = css`
  outline: none;
  padding: 10px;
  &:focus {
    outline: none;
    border-color: #1984f7;
  }
`;

export const BaseMargin = css`
  margin-bottom: 20px;
`;

export const NewFormControl = styled(FormControl)`
  ${BaseMargin}
`;

export const CustomInput = styled(Input)`
  ${BaseField}
`;
export const CustomSelect = styled(Select)`
  ${BaseField}
`;
export const CustomLabel = styled(FormLabel)`
  color: #e2e8f0;
`;

export const CustomButtonPassword = styled(Button)<ButtonProps>`
  &:focus {
    box-shadow: none;
    border-color: transparent;
  }
`;
CustomButtonPassword.defaultProps = {
  variant: 'none'
};
