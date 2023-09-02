import { useBreakpointValue } from '@chakra-ui/react';

export const useBreakpoint = () => {
  const isLgScreen = useBreakpointValue({ base: false, lg: true });
  return {
    isLgScreen
  };
};
