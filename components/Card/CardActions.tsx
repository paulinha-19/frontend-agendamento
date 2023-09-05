import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface CardActionsProps {
  children: ReactNode;
}

export const CardActions = ({ children }: CardActionsProps) => {
  return <Box>{children}</Box>;
};
