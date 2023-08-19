import { z } from 'zod';
import userSchema from '../schema/signup';

export type SignUpForm = z.infer<typeof userSchema>;

export type AddressData = {
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};
