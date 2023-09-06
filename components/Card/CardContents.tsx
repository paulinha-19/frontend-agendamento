import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface CardContentsProps {
  children: ReactNode;
}

export const CardContents = ({ children }: CardContentsProps) => {
  return <Box>{children}</Box>;
};
