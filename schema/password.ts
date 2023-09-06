import { z } from 'zod';

const PasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty('Senha é obrigatório')
      .min(8, 'The name must have at least 8 characters')
      .max(32, 'The name must have a maximum of 32 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/
      ),
    confirmPassword: z.string()
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmPassword']
  });

export default PasswordSchema;
