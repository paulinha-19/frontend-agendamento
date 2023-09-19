import { z } from 'zod';

const LoginUserSchema = z.object({
  email: z.string().nonempty('Email é obrigatório').email('Email inválido'),
  password: z
    .string()
    .nonempty('Senha é obrigatório')
    .min(8, 'The name must have at least 8 characters')
    .max(32, 'The name must have a maximum of 32 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/
    )
});
export default LoginUserSchema;
