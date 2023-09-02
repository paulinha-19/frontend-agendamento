export const zipCodeMask = (cep: string): string => {
  const numericCep = cep.replace(/\D/g, '');
  const maskedCep = numericCep.replace(/(\d{5})(\d{3})/, '$1-$2');
  return maskedCep;
};

export const cpfMask = (value: string) => {
  const cpf = value.replace(/\D/g, '');
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const phoneMask = (value: string) => {
  const phone = value.replace(/\D/g, '');
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
};
