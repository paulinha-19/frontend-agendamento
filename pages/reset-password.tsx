import React from 'react';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { CustomLink } from '../components/CustomLink';
import { useForms } from '../hook/useForms';
import { PasswordForm } from '../types/z-infer';
import PasswordSchema from '../schema/password';
import { useTogglePassword } from '../hook/useTogglePassword';
import { LayoutBackgroundColor } from '../layout/LayoutBackgroundColor';
import { CustomImage } from '../components/CustomImage';
import { Flex } from '@chakra-ui/react';
import { CustomViewPassword } from '../components/CustomViewPassword';

const ResetPassword = () => {
  const { errors, register, isSubmitting, reset, handleSubmit } =
    useForms<PasswordForm>({
      schema: PasswordSchema,
      defaultValues: {}
    });
  const {
    showPassword,
    showConfirmPassword,
    togglePassword,
    toggleConfirmPassword,
    typePassword,
    typeConfirmPassword
  } = useTogglePassword();

  const onSubmitForm = async (data: PasswordForm) => {
    try {
      console.log('Submitted senha', data);
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
            <Card.Title title="Resetar senha" />
            <Card.Subtitle
              subtitle="A senha deve ter entre 8 e 32 caracteres. Deve ter no mínimo 1 número, 1 letra minúscula, 1 letra maiúscula, 1 caracter especial !@#$%&*- "
              color="rgba(22, 61, 102, 0.80)"
              fontSize="sm"
              py="3"
            />
          </Card.Contents>
          <Form.Root<PasswordForm>
            onSubmitForm={onSubmitForm}
            handleSubmit={handleSubmit}
          >
            <Form.Input
              id="password"
              label="Senha"
              name="password"
              placeholder="Insira sua senha"
              register={register}
              errors={errors}
              type={typePassword}
            >
              <CustomViewPassword
                onClick={togglePassword}
                showPassword={showPassword}
              />
            </Form.Input>
            <Form.Input
              id="confirm-password"
              label="Confirmar senha"
              name="confirmPassword"
              placeholder="Confirmar senha"
              register={register}
              errors={errors}
              type={typeConfirmPassword}
            >
              <CustomViewPassword
                onClick={toggleConfirmPassword}
                showPassword={showConfirmPassword}
              />
            </Form.Input>
            <Form.Actions>
              <Form.Action
                isSubmitting={isSubmitting}
                text="Resetar senha"
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

export default ResetPassword;
