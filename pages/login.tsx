import React from 'react';
import { CustomLink } from '../components';
import { Flex, Box } from '@chakra-ui/react';
import { LayoutBackgroundColor } from '../layout/LayoutBackgroundColor';
import { CustomImage } from '../components/CustomImage';
import { Form } from '../components/Form';
import { LoginUser } from '../types/z-infer';
import { useForms } from '../hook/useForms';
import LoginUserSchema from '../schema/login-user';
import { loginUser } from '../services/authService';
import { CustomCheckbox } from '../components/CustomCheckbox';

const Login = () => {
  const { errors, register, isSubmitting, reset, handleSubmit } =
    useForms<LoginUser>({
      schema: LoginUserSchema,
      defaultValues: {}
    });
  const onSubmitForm = async (data: LoginUser) => {
    try {
      const authToken = await loginUser(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LayoutBackgroundColor>
      <Flex
        flex={1}
        w="full"
        minH="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px="8"
      >
        <CustomImage
          alt="logo"
          src="/logo.svg"
          width={200}
          height={70}
          unoptimized
          priority={false}
        />
        <Box w="full" maxW="md">
          <Form.Root<LoginUser>
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
              color="#2B6CB0"
            />
            <Form.Input
              id="password"
              label="Senha"
              name="password"
              placeholder="Insira sua senha"
              register={register}
              errors={errors}
              color="#2B6CB0"
            />
            <Flex flex={1} justifyContent="space-between" mt={5}>
              <CustomCheckbox borderColor="#71747487">
                Lembrar senha
              </CustomCheckbox>
              <CustomLink
                as="span"
                text="Esqueci minha senha"
                href="/forgot-password"
                color="#040d0da5"
                textDecoration="underline"
              />
            </Flex>
            <Form.Actions>
              <Form.Action isSubmitting={isSubmitting} text="Entrar" mt="8" />
            </Form.Actions>
          </Form.Root>
        </Box>
      </Flex>
    </LayoutBackgroundColor>
  );
};

export default Login;
