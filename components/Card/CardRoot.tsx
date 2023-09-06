import { ReactNode } from 'react';
import Image from 'next/image';
import { Flex, Box } from '@chakra-ui/react';

interface CardRootProps {
  children: ReactNode;
}

const imageStyle = {
  marginTop: 30
};

export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <Box bg="primary.100" minH="100vh" px={5}>
      <Flex flex={1} justify="center">
        <Image
          alt="logo"
          src="/logo.svg"
          width={100}
          height={100}
          unoptimized
          priority={false}
          style={imageStyle}
        />
      </Flex>
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
        mt={8}
        border="1px solid #E2E8F0"
        borderRadius="15px"
        boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      >
        {children}
      </Box>
    </Box>
  );
};
