import { Box, Button } from '@chakra-ui/react';
import { ButtonProps } from '../../types/button-props';

export const CardAction = ({
  text = '',
  type = 'submit',
  colorScheme = 'blue',
  ...props
}: ButtonProps) => {
  return (
    <Box pt={5} pb={8}>
      <Button type={type} {...props} colorScheme={colorScheme} minW="100%">
        {text}
      </Button>
    </Box>
  );
};
