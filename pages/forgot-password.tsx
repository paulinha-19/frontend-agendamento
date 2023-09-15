import React from 'react';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { CustomLink } from '../components/CustomLink';
import { useForms } from '../hook/useForms';
import EmailSchema from '../schema/email';
import { EmailForm } from '../types/z-infer';
import { LayoutBackgroundColor } from '../layout/LayoutBackgroundColor';
import { CustomImage } from '../components/CustomImage';
import { Flex } from '@chakra-ui/react';

const ForgotPassword = () => {
  const { errors, register, isSubmitting, reset, handleSubmit } =
    useForms<EmailForm>({
      schema: EmailSchema,
      defaultValues: {}
    });

  const onSubmitForm = async (data: EmailForm) => {
    try {
      console.log('Submitted email', data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  {
    console.log('ERROS', errors.email);
  }
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
            <Card.Title title="Esqueceu sua senha?" />
            <Card.Subtitle
              subtitle="Digite o endereço de e-mail para o qual deseja que suas informações de redefinição de senha sejam enviadas"
              color="#668CB4"
              fontSize="sm"
              py="3"
            />
          </Card.Contents>
          <Form.Root<EmailForm>
            onSubmitForm={onSubmitForm}
            handleSubmit={handleSubmit}
          >
            <Form.Input
              id="email"
              label="Email"
              name="email"
              placeholder="Insira seu email"
              register={register}
              errors={errors}
            />
            <Form.Actions>
              <Form.Action
                isSubmitting={isSubmitting}
                text="Solicitar link"
                pt="5"
                pb="8"
              />
            </Form.Actions>
          </Form.Root>
          <CustomLink />
        </Card.Root>
      </Flex>
    </LayoutBackgroundColor>
  );
};

export default ForgotPassword;
