import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface CardRootProps {
  children: ReactNode;
}

export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      maxW="md"
      mx="auto"
      w="full"
      bg="white"
      px={8}
      pt={8}
      pb={5}
      border="1px solid #E2E8F0"
      borderRadius="15px"
      boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      {children}
    </Box>
  );
};
