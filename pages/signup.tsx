import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Controller } from 'react-hook-form';
import {
  Button,
  Flex,
  FormLabel,
  FormControl,
  Box,
  Heading,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Stack,
  Text
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { CustomInputMask, CustomInput, CustomSelect } from '../components';
import { CustomButtonPassword, CustomText } from '../styles/customForm';
import { useCep, useBreakpoint } from '../hook';

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
  const { isLgScreen } = useBreakpoint();
  return (
    <Flex flex={1} w="full" bg="primary.100" minH="100vh" justify="center">
      <Box
        w="full"
        maxW="800px"
        borderColor={isLgScreen ? '#DADCCE' : undefined} // Apply borderColor only on lg screen
        borderWidth={isLgScreen ? '1px' : undefined} // Apply borderWidth only on lg screen
        borderRadius={isLgScreen ? '8px' : undefined} // Apply borderRadius only on lg screen
        my={5}
        p={5}
      >
        <Flex justify="center">
          <Image
            alt="logo"
            src="/logo.svg"
            width={100}
            height={100}
            unoptimized
            priority={false}
          />
        </Flex>
        <Heading fontSize="2xl" color="black" textAlign="center">
          Cria a sua conta
        </Heading>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Flex
            justify="space-between"
            gap={5}
            display={{ base: 'column', lg: 'flex' }}
          >
            <FormControl id="name" isInvalid={!!errors.name}>
              <FormLabel>Nome</FormLabel>
              <CustomInput
                type="text"
                {...register('name')}
                placeholder="Pedro Maia"
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="username" isInvalid={!!errors.username}>
              <FormLabel>Username</FormLabel>
              <CustomInput
                type="text"
                {...register('username')}
                placeholder="teste-32"
              />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl id="email" isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <CustomInput
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
                <CustomInput
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
                <CustomInput
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
            <FormLabel>Data de nasciemento</FormLabel>
            <CustomInput
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
            <FormLabel>Genero</FormLabel>
            <CustomSelect {...register('gender')}>
              <option value="">Select gender</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Não binário">Não binário</option>
              <option value="Outros">Outros</option>
              <option value="Prefiro não informar">Prefiro não informar</option>
            </CustomSelect>
            <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="zip-code" isInvalid={!!errors.address?.zipCode}>
            <FormLabel>Cep</FormLabel>
            <CustomInput
              type="text"
              {...register('address.zipCode')}
              placeholder="00000000"
              maxLength={9}
            />
            <FormErrorMessage>
              {errors.address?.zipCode?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl id="logradouro" isInvalid={!!errors.address?.logradouro}>
            <FormLabel>Logradouro</FormLabel>
            <CustomInput
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
            <CustomInput
              type="text"
              {...register('address.city')}
              placeholder="Cidade"
            />
            <FormErrorMessage>{errors.address?.city?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="district" isInvalid={!!errors.address?.district}>
            <FormLabel>Bairro</FormLabel>
            <CustomInput
              type="text"
              {...register('address.district')}
              placeholder="Bairro"
            />
            <FormErrorMessage>
              {errors.address?.district?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl id="complement" isInvalid={!!errors.address?.complement}>
            <FormLabel>Complemento</FormLabel>
            <CustomInput
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
            <CustomInput
              type="text"
              {...register('address.state')}
              placeholder="Estado"
            />
            <FormErrorMessage>
              {errors.address?.state?.message}
            </FormErrorMessage>
          </FormControl>

          <Stack minW="100%">
            <Button
              colorScheme="blue"
              variant="solid"
              type="submit"
              width="100%"
              mt={8}
              mb={3}
            >
              {isSubmitting ? 'Criando conta...' : 'Criar conta'}
            </Button>
            <Text align="center">
              Já tem uma conta?{' '}
              <Link href="/login">
                <CustomText as="span">Conecte-se</CustomText>
              </Link>
            </Text>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default SignUp;
