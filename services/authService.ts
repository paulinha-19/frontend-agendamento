import { LoginUser } from '../types/z-infer';

export const loginUser = async (
  data: LoginUser
) => {
  try {
    console.log('Loged user', data);
    const authToken = 'token';
    return authToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
