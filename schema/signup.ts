import { z } from 'zod';

const userSchema = z
  .object({
    name: z
      .string()
      .nonempty('Nome é obrigatório')
      .trim()
      .min(4, 'The name must have at least 4 characters')
      .max(60, 'The name must have a maximum of 60 characters')
      .regex(
        /^[a-zA-Z\s]+$/,
        'Fullname can only contain letters and a space between each name'
      )
      .transform((name) =>
        name
          .replace(/\s+/g, ' ')
          .trim()
          .toLowerCase()
          .replace(/\b\w/g, (match) => match.toUpperCase())
      ),
    username: z
      .string()
      .nonempty('Username é obrigatório')
      .trim()
      .min(4, 'The username must have at least 4 characters')
      .max(18, 'The username must have a maximum of 18 characters')
      .regex(/^[a-z][a-z0-9-]*[a-z0-9]$/),
    email: z.string().nonempty('Email é obrigatório').email('Email invalid'),
    password: z
      .string()
      .nonempty('Senha é obrigatório')
      .min(8, 'The name must have at least 8 characters')
      .max(32, 'The name must have a maximum of 32 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/
      ),
    confirmPassword: z.string(),
    birth: z.coerce
      .date()
      .min(new Date('01-01-1900'), {
        message: 'The minimum date of birth is 01/01/1900'
      })
      .max(new Date(), {
        message: 'The maximum date cannot be May than today'
      }),
    cpf: z
      .string()
      .nonempty('Cpf é obrigatório')
      .regex(/^[0-9]{11}$/, 'Insert 11 numbers')
      .transform((cpf) => cpf.replace(/\D/g, '')),
    gender: z.enum(
      [
        'Feminino',
        'Masculino',
        'Não binário',
        'Outros',
        'Prefiro não informar'
      ],
      {
        errorMap: () => {
          return {
            message: `Selecione Feminino, Masculino, Não binário, Outros ou Prefiro não informar`
          };
        }
      }
    ),
    phone: z
      .string()
      .nonempty('Celular é obrigatório')
      .regex(/^\d{2}9\d{8}$/, 'Invalid phone format. Insert (ddd)90000-0000')
      .transform((phone) => phone.replace(/\D/g, '')),
    address: z.object({
      zipCode: z
        .string()
        .nonempty('CEP é obrigatório')
        .regex(/^[0-9]{5}-[0-9]{3}$/, 'CEP must contain at least 8 numbers')
        .transform((zipCode) => zipCode.replace(/\D/g, '')),
      logradouro: z
        .string()
        .nonempty('Logradouro é obrigatório')
        .min(4, 'Logradouro must have at least 4 characters ')
        .max(40, 'Logradouro must have a maximum of 30 characters'),
      city: z
        .string()
        .nonempty('Cidade é obrigatório')
        .min(2, 'Logradouro must have at least 2 characters ')
        .max(20, 'Logradouro must have a maximum of 20 characters'),
      state: z
        .string()
        .nonempty('Estado é obrigatório')
        .min(2, 'Logradouro must have at least 2 characters ')
        .max(15, 'Logradouro must have a maximum of 15 characters'),
      complement: z
        .string()
        .max(50, 'Logradouro must have a maximum of 50 characters'),
      district: z
        .string()
        .nonempty('Bairro é obrigatório')
        .min(2, 'Logradouro must have at least 2 characters ')
        .max(20, 'Logradouro must have a maximum of 20 characters')
    })
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmPassword']
  });

export default userSchema;
