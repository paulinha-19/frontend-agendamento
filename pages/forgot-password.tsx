import React from 'react';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { CustomLink } from '../components/CustomLink';
import { useForms } from '../hook/useForms';
import userSchema from '../schema/signup';
import { emailSchema } from '../schema/index';
import { SignUpForm } from '../types/signup-form';
import { z } from 'zod';

// type FieldEmailOnly = Pick<SignUpForm, 'email'>;
// const emailSchema = userSchema.pick({ email: true });
type emailSchemaOnly = z.infer<typeof emailSchema>;

const ForgotPassword = () => {
  const { errors, register, isSubmitting, reset, handleSubmit } =
    useForms<emailSchemaOnly>({
      schema: emailSchema,
      defaultValues: {}
    });

  const onSubmitForm = async (data: emailSchemaOnly) => {
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
        <Card.Title title="Esqueceu sua senha?" as="h4" size="lg" />
        <Card.Subtitle
          subtitle="Digite o endereço de e-mail para o qual deseja que suas informações de redefinição de senha sejam enviadas"
          color="#668CB4"
          fontSize="sm"
        />
      </Card.Contents>
      <Form.Root<emailSchemaOnly>
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
