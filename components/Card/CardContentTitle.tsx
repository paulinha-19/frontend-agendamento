import { Heading } from '@chakra-ui/react';
import { HeadingProps } from '../../types/heading-props';

export const CardContentTitle = ({
  title = '',
  color = '#163D66',
  ...props
}: HeadingProps) => {
  return (
    <Heading color={color} {...props}>
      {title}
    </Heading>
  );
};
