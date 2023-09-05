import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string().nonempty('Email é obrigatório').email('Email invalid')
});

