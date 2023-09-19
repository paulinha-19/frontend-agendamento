import { useState } from 'react';

export const useTogglePassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return {
    showPassword,
    showConfirmPassword,
    togglePassword,
    toggleConfirmPassword,
    typePassword: showPassword ? 'text' : 'password',
    typeConfirmPassword: showConfirmPassword ? 'text' : 'password'
  };
};
