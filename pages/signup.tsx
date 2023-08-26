import Image from 'next/image';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

import CustomInputMask from '../components/MaskedInput';

import { useCep } from '../hook/useCep';
import { CustomButtonPassword } from '../styles/customForm';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  useToast
} from '@chakra-ui/react';

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    errors,
    register,
    control,
    isSubmitting,
    handleSubmit,
    handleFormSubmit
  } = useCep();

  const toast = useToast();

  return (
    <Stack w="full" minH="100vh" direction={{ md: 'row' }}>
      <Flex
        flex={1}
        justifyContent="center"
        display={{ base: 'none', md: 'flex' }}
        bg="primary.900"
      >
        <Image
          alt="Sign up Image"
          src="/signup.svg"
          width={500}
          height={500}
          unoptimized
          priority={false}
        />
      </Flex>
      <Flex flex={1} w="full" align="center" justify="center">
        <Stack w="full" maxW="xl" p={6}>
          <Heading fontSize="2xl" mb={5} color="white">
            Create your account
          </Heading>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Flex
              justify="space-between"
              gap={5}
              display={{ base: 'column', lg: 'flex' }}
            >
              <FormControl id="name" isInvalid={!!errors.name}>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  {...register('name')}
                  placeholder="Pedro Maia"
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="username" isInvalid={!!errors.username}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  {...register('username')}
                  placeholder="teste-32"
                />
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                {...register('email')}
                placeholder="teste@gmail.com"
                autoComplete="on"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <Flex
              justify="space-between"
              gap={5}
              display={{ base: 'column', lg: 'flex' }}
            >
              <FormControl id="password" isInvalid={!!errors.password}>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    placeholder="*****"
                    autoComplete="on"
                  />
                  <InputRightElement h={'full'}>
                    <CustomButtonPassword
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </CustomButtonPassword>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <FormControl
                id="confirm-password"
                isInvalid={!!errors.confirmPassword}
              >
                <FormLabel>Confirmar senha</FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    {...register('confirmPassword')}
                    placeholder="*****"
                    autoComplete="on"
                  />
                  <InputRightElement h={'full'}>
                    <CustomButtonPassword
                      onClick={() =>
                        setShowConfirmPassword(
                          (showConfirmPassword) => !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </CustomButtonPassword>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.confirmPassword?.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
            <FormControl id="birth" isInvalid={!!errors.birth}>
              <FormLabel>Data de nascimento</FormLabel>
              <Input
                type="date"
                {...register('birth')}
                placeholder="Insert birth"
              />
              <FormErrorMessage>{errors.birth?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="cpf" isInvalid={!!errors.cpf}>
              <FormLabel>Cpf</FormLabel>
              <Controller
                name="cpf"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInputMask
                    maxLength={14}
                    type="text"
                    placeholder="000.000.000-00"
                    mask="999.999.999-99"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <FormErrorMessage>{errors.cpf?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="phone" isInvalid={!!errors.phone}>
              <FormLabel>Celular</FormLabel>
              <Controller
                name="phone"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <CustomInputMask
                    maxLength={14}
                    type="text"
                    placeholder="(00)90000-0000"
                    mask="(99)99999-9999"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="gender" isInvalid={!!errors.gender}>
              <FormLabel>Gênero</FormLabel>
              <Select {...register('gender')}>
                <option value="">Selecione uma opção</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Não binário">Não binário</option>
                <option value="Outros">Outros</option>
                <option value="Prefiro não informar">
                  Prefiro não informar
                </option>
              </Select>
              <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
            </FormControl>

            <FormControl id="zip-code" isInvalid={!!errors.address?.zipCode}>
              <FormLabel>Cep</FormLabel>
              <Input
                type="text"
                {...register('address.zipCode')}
                placeholder="00000000"
                maxLength={9}
              />
              <FormErrorMessage>
                {errors.address?.zipCode?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              id="logradouro"
              isInvalid={!!errors.address?.logradouro}
            >
              <FormLabel>Logradouro</FormLabel>
              <Input
                type="text"
                {...register('address.logradouro')}
                placeholder="Rua santa tereza"
              />
              <FormErrorMessage>
                {errors.address?.logradouro?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="city" isInvalid={!!errors.address?.city}>
              <FormLabel>Cidade</FormLabel>
              <Input
                type="text"
                {...register('address.city')}
                placeholder="Cidade"
              />
              <FormErrorMessage>
                {errors.address?.city?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="district" isInvalid={!!errors.address?.district}>
              <FormLabel>Bairro</FormLabel>
              <Input
                type="text"
                {...register('address.district')}
                placeholder="Bairro"
              />
              <FormErrorMessage>
                {errors.address?.district?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              id="complement"
              isInvalid={!!errors.address?.complement}
            >
              <FormLabel>Complemento</FormLabel>
              <Input
                type="text"
                {...register('address.complement')}
                placeholder="Complemento"
              />
              <FormErrorMessage>
                {errors.address?.complement?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="state" isInvalid={!!errors.address?.state}>
              <FormLabel>Estado</FormLabel>
              <Input
                type="text"
                {...register('address.state')}
                placeholder="Estado"
              />
              <FormErrorMessage>
                {errors.address?.state?.message}
              </FormErrorMessage>
            </FormControl>

            <Box minW="100%">
              <Button
                colorScheme="blue"
                variant="solid"
                type="submit"
                width="100%"
              >
                {isSubmitting ? 'Creating account' : 'Create account'}
              </Button>
            </Box>
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default SignUp;
