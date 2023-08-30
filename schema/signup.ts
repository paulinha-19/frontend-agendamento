import { z } from 'zod';

const userSchema = z
  .object({
    name: z
      .string()
      .nonempty('Nome é obrigatório')
      .trim()
      .min(4, 'O nome deve ter entre 4 e 60 caracteres')
      .max(60, 'O nome deve ter entre 4 e 60 caracteres')
      .regex(
        /^[a-zA-Z\s]+$/,
        'O nome completo só pode conter letras e um espaço entre cada nome'
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
      .nonempty('Nome de usuário é obrigatório')
      .trim()
      .min(4, 'O nome de usuário deve ter entre 4 e 18 caracteres')
      .max(18, 'O nome de usuário deve ter entre 4 e 18 caracteres')
      .regex(
        /^[a-z][a-z0-9-]*[a-z0-9]$/,
        'O nome de usuário só pode conter letras e números. Letras maiúsculas não são permitidas'
      ),
    email: z.string().nonempty('Email é obrigatório').email('Email inválido'),
    password: z
      .string()
      .nonempty('Senha é obrigatório')
      .min(8, 'A senha deve conter entre 8 e 32 caracteres')
      .max(32, 'A senha deve conter entre 8 e 32 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/,
        'A senha deve conter caracteres maiúsculos, minúsculos, números e algum dos seguintes caracteres especiais: !@#$%&*-'
      ),
    confirmPassword: z.string(),
    birth: z.coerce
      .date()
      .min(new Date('01-01-1900'), {
        message: 'A data de nascimento não pode ser anterior a 01/01/1900'
      })
      .max(new Date(), {
        message: 'A data de nascimento não pode ser maior que hoje'
      }),
    cpf: z
      .string()
      .nonempty('CPF é obrigatório')
      .regex(/^[0-9]{11}$/, 'Insira 11 números')
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
            message: `Selecione o seu gênero`
          };
        }
      }
    ),
    phone: z
      .string()
      .nonempty('Celular é obrigatório')
      .regex(
        /^\d{2}9\d{8}$/,
        'Formato de telefone inválido. Insira (ddd)90000-0000'
      )
      .transform((phone) => phone.replace(/\D/g, '')),
    address: z.object({
      zipCode: z
        .string()
        .nonempty('CEP é obrigatório')
        .regex(/^[0-9]{5}-[0-9]{3}$/, 'CEP deve conter pelo menos 8 números')
        .transform((zipCode) => zipCode.replace(/\D/g, '')),
      logradouro: z
        .string()
        .nonempty('Logradouro é obrigatório')
        .min(4, 'Logradouro de conter entre 4 e 50 caracteres')
        .max(50, 'Logradouro de conter entre 4 e 50 caracteres'),
      city: z
        .string()
        .nonempty('Cidade é obrigatório')
        .min(2, 'Cidade deve conter entre 2 e 20 caracteres')
        .max(20, 'Cidade deve conter entre 2 e 20 caracteres'),
      state: z
        .string()
        .nonempty('Estado é obrigatório')
        .min(2, 'Estado deve conter entre 2 e 15 caracteres')
        .max(15, 'Estado deve conter entre 2 e 15 caracteres'),
      complement: z
        .string()
        .max(50, 'Logradouro deve conter no máximo 50 caracteres'),
      district: z
        .string()
        .nonempty('Bairro é obrigatório')
        .min(2, 'Bairro deve conter entre 2 e 20 caracteres')
        .max(20, 'Bairro deve conter entre 2 e 20 caracteres')
    })
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmPassword']
  });

export default userSchema;
