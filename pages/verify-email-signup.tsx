import React from 'react';
import { Card } from '../components/Card';
import { Button, Box } from '@chakra-ui/react';
import { LayoutBackgroundColor } from '../layout/LayoutBackgroundColor';
import { CustomImage } from '../components/CustomImage';
import { Flex } from '@chakra-ui/react';

const VerifyEmail = () => {
  const handleVerifyEmail = () => {
    console.log('CLICK');
  };

  return (
    <LayoutBackgroundColor>
      <Flex
        flex={1}
        w="full"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px="5"
      >
        <CustomImage
          alt="logo"
          src="/logo.svg"
          width={150}
          height={70}
          unoptimized
          priority={false}
          mt="10"
          mb="5"
        />
        <Card.Root>
          <Card.Contents>
            <Card.Title
              title="Obrigador por inscrever-se!"
              fontWeight="medium"
              textAlign="center"
            />
            <Card.Subtitle
              subtitle="Você está quase pronto para começar. Clique no botão abaixo para confirmar seu endereço de e-mail e conceder acesso total ao seu perfil."
              color="rgba(22, 61, 102, 0.80)"
              fontSize="md"
              textAlign="center"
              py="4"
            />
          </Card.Contents>
          <Box pt={5} pb={3}>
            <Button
              type="button"
              colorScheme="blue"
              minW="100%"
              onClick={handleVerifyEmail}
            >
              Verificar email
            </Button>
          </Box>
        </Card.Root>
      </Flex>
    </LayoutBackgroundColor>
  );
};

export default VerifyEmail;
