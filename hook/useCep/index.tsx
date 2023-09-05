import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import userSchema from '../../schema/signup';
import { registerUser } from '../../services/user-service';
import { SignUpForm, AddressData } from '../../types/signup-form';
import { zipCodeMask } from '../../utils/input-mask';

import { useToast } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

export const useCep = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting }
  } = useForm<SignUpForm>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      birth: undefined,
      cpf: '',
      phone: '',
      gender: undefined,
      address: {
        zipCode: '',
        logradouro: '',
        city: '',
        state: '',
        complement: '',
        district: ''
      }
    }
  });
  const zipCode = watch('address.zipCode');

  const toast = useToast();

  const handleFormSubmit = async (data: SignUpForm) => {
    try {
      await registerUser(data);
      console.log('Submitted data', data);
      reset();
      // router.push('/login');
    } catch (error) {
      console.error('Error submitting form:', error.response.data.message);
      toast({
        title: 'Erro ao submeter os dados.',
        description: `${error.response.data.message}`,
        status: 'error',
        duration: 20000,
        isClosable: true,
        position: 'top-left'
      });
    }
  };
  const handleSetData = useCallback(
    (data: AddressData) => {
      setValue('address.logradouro', data.logradouro);
      setValue('address.complement', data.complemento);
      setValue('address.district', data.bairro);
      setValue('address.city', data.localidade);
      setValue('address.state', data.uf);
      trigger();
    },
    [setValue, trigger]
  );
  const getAddressData = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );
      handleSetData(data);
    },
    [handleSetData]
  );
  useEffect(() => {
    setValue('address.zipCode', zipCodeMask(zipCode));
    if (zipCode.length !== 9) return;
    getAddressData(zipCode);
  }, [getAddressData, setValue, zipCode]);

  return {
    errors,
    register,
    control,
    watch,
    isSubmitting,
    handleSubmit,
    handleFormSubmit
  };
};
