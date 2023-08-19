import React, { useState } from 'react';
import Image from 'next/image';
import { Controller } from 'react-hook-form';
import {
  Button,
  Flex,
  Input,
  Select,
  FormLabel,
  Box,
  Heading,
  Stack,
  FormErrorMessage,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import InputMask from 'react-input-mask';
import {
  CustomButtonPassword,
  NewFormControl
} from '../../styles/customForm';
import { useCep } from '../../hook/useCep';

export const SignUp: React.FC = () => {
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
              <NewFormControl id="name" isInvalid={!!errors.name}>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  {...register('name')}
                  placeholder="Pedro Maia"
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </NewFormControl>
              <NewFormControl id="username" isInvalid={!!errors.username}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  {...register('username')}
                  placeholder="teste-32"
                />
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
              </NewFormControl>
            </Flex>
            <NewFormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                {...register('email')}
                placeholder="teste@gmail.com"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </NewFormControl>
            <Flex
              justify="space-between"
              gap={5}
              display={{ base: 'column', lg: 'flex' }}
            >
              <NewFormControl id="password" isInvalid={!!errors.password}>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    placeholder="*****"
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
              </NewFormControl>
              <NewFormControl
                id="confirm-password"
                isInvalid={!!errors.confirmPassword}
              >
                <FormLabel>Confirmar senha</FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    {...register('confirmPassword')}
                    placeholder="*****"
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
              </NewFormControl>
            </Flex>
            <NewFormControl id="birth" isInvalid={!!errors.birth}>
              <FormLabel>Data de nasciemento</FormLabel>
              <Input
                type="date"
                {...register('birth')}
                placeholder="Insert birth"
              />
              <FormErrorMessage>{errors.birth?.message}</FormErrorMessage>
            </NewFormControl>
            <NewFormControl id="cpf" isInvalid={!!errors.cpf}>
              <FormLabel>Cpf</FormLabel>
              <Controller
                name="cpf"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <div>
                    <InputMask
                      mask="999.999.999-99"
                      placeholder="000.000.000-00"
                      value={value}
                      type="text"
                      onChange={onChange}
                    >
                      {(inputProps: any) => <Input {...inputProps} />}
                    </InputMask>
                    <FormErrorMessage>{errors.cpf?.message}</FormErrorMessage>
                  </div>
                )}
              />
            </NewFormControl>
            <NewFormControl id="phone" isInvalid={!!errors.phone}>
              <FormLabel>Celular</FormLabel>
              <Controller
                name="phone"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <InputMask
                      mask="(99)99999-9999"
                      placeholder="(00)90000-0000"
                      type="text"
                      value={value}
                      onChange={onChange}
                    >
                      {(inputProps: any) => <Input {...inputProps} />}
                    </InputMask>
                    <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                  </>
                )}
              />
            </NewFormControl>
            <NewFormControl id="gender" isInvalid={!!errors.gender}>
              <FormLabel>Genero</FormLabel>
              <Select {...register('gender')}>
                <option value="">Select gender</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Não binário">Não binário</option>
                <option value="Outros">Outros</option>
                <option value="Prefiro não informar">
                  Prefiro não informar
                </option>
              </Select>
              <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
            </NewFormControl>

            <NewFormControl id="zip-code" isInvalid={!!errors.address?.zipCode}>
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
            </NewFormControl>

            <NewFormControl
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
            </NewFormControl>

            <NewFormControl id="city" isInvalid={!!errors.address?.city}>
              <FormLabel>Cidade</FormLabel>
              <Input
                type="text"
                {...register('address.city')}
                placeholder="Cidade"
              />
              <FormErrorMessage>
                {errors.address?.city?.message}
              </FormErrorMessage>
            </NewFormControl>

            <NewFormControl
              id="district"
              isInvalid={!!errors.address?.district}
            >
              <FormLabel>Bairro</FormLabel>
              <Input
                type="text"
                {...register('address.district')}
                placeholder="Bairro"
              />
              <FormErrorMessage>
                {errors.address?.district?.message}
              </FormErrorMessage>
            </NewFormControl>

            <NewFormControl
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
            </NewFormControl>

            <NewFormControl id="state" isInvalid={!!errors.address?.state}>
              <FormLabel>Estado</FormLabel>
              <Input
                type="text"
                {...register('address.state')}
                placeholder="Estado"
              />
              <FormErrorMessage>
                {errors.address?.state?.message}
              </FormErrorMessage>
            </NewFormControl>

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
