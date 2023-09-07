import React from 'react';
import { Card } from '../components/Card';
import { Button, Box } from '@chakra-ui/react';

const VerifyEmail = () => {
  const handleVerifyEmail = () => {
    console.log('CLICK');
  };

  return (
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
  );
};

export default VerifyEmail;
