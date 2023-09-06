import React from 'react';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { CustomLink } from '../components/CustomLink';
import { useForms } from '../hook/useForms';
import { PasswordForm } from '../types/z-infer';
import PasswordSchema from '../schema/password';
import { useTogglePassword } from '../hook/useTogglePassword';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { InputRightElement } from '@chakra-ui/react';
import { CustomButtonPassword } from '../styles/customForm';

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
    <Card.Root>
      <Card.Contents>
        <Card.Title title="Resetar senha" />
        <Card.Subtitle
          subtitle="A senha deve ter entre 8 e 32 caracteres. Deve ter no mínimo 1 número, 1 letra minúscula, 1 letra maiúscula, 1 caracter especial !@#$%&*- "
          color="rgba(22, 61, 102, 0.80)"
          fontSize="sm"
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
          <InputRightElement h={'full'}>
            <CustomButtonPassword onClick={togglePassword}>
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </CustomButtonPassword>
          </InputRightElement>
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
          <InputRightElement h={'full'}>
            <CustomButtonPassword onClick={toggleConfirmPassword}>
              {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
            </CustomButtonPassword>
          </InputRightElement>
        </Form.Input>
        <Form.Actions>
          <Form.Action isSubmitting={isSubmitting} text="Resetar senha" />
        </Form.Actions>
      </Form.Root>
      <CustomLink />
    </Card.Root>
  );
};

export default ResetPassword;
