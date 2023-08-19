import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#1984F7',
      500: '#0052AC',
      900: '#002E5E'
    },
    secondary: {
      100: '',
      500: '',
      900: ''
    },
    error: {
      100: '#FED7D7',
      500: '#E53E3E',
      900: '#63171B'
    },
    warning: {
      100: '#ffb74d',
      500: '#ffa726',
      900: '#f57c00'
    },
    info: {
      100: '#B2F5EA',
      500: '#319795',
      900: '#1D4044'
    },
    success: {
      100: '#81c784',
      500: '#66bb6a',
      900: '#388e3c'
    }
  }
});
