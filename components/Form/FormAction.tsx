import { Box, Button } from '@chakra-ui/react';
import { ButtonProps } from '../../types/button-props';

interface FormActionProps extends ButtonProps {
  isSubmitting: boolean;
}

export const FormAction = ({
  text = '',
  type = 'submit',
  colorScheme = 'blue',
  isSubmitting,
  ...props
}: FormActionProps) => {
  return (
    <Box pt={5} pb={8}>
      <Button type={type} {...props} colorScheme={colorScheme} minW="100%">
        {isSubmitting ? 'Enviando...' : text}
      </Button>
    </Box>
  );
};
