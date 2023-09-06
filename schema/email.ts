import { z } from 'zod';

const EmailSchema = z.object({
  email: z.string().nonempty('Email é obrigatório').email('Email invalid')
});

export default EmailSchema;
