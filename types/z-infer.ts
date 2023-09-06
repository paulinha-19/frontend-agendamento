import { z } from 'zod';
import userSchema from '../schema/signup';
import Password from '../schema/password';
import EmailSchema from '../schema/email';

export type SignUpForm = z.infer<typeof userSchema>;
export type PasswordForm = z.infer<typeof Password>;
export type EmailForm = z.infer<typeof EmailSchema>;
