import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface LayoutBackgroundColorProps {
  children: ReactNode;
}

export const LayoutBackgroundColor = ({ children }: LayoutBackgroundColorProps) => {
  return (
    <Box bg="primary.100" minH="100vh" px={5}>
      {children}
    </Box>
  );
};
