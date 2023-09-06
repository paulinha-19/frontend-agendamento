import React from 'react';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { CustomLink } from '../components/CustomLink';
import { useForms } from '../hook/useForms';
import EmailSchema from '../schema/email';
import { EmailForm } from '../types/z-infer';

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
    <Card.Root>
      <Card.Contents>
        <Card.Title title="Esqueceu sua senha?" />
        <Card.Subtitle
          subtitle="Digite o endereço de e-mail para o qual deseja que suas informações de redefinição de senha sejam enviadas"
          color="#668CB4"
          fontSize="sm"
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
          <Form.Action isSubmitting={isSubmitting} text="Solicitar link" />
        </Form.Actions>
      </Form.Root>
      <CustomLink />
    </Card.Root>
  );
};

export default ForgotPassword;
