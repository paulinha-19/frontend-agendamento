import { Heading } from '@chakra-ui/react';
import { HeadingProps } from '../../types/heading-props';

export const CardContentTitle = ({
  title = '',
  color = '#163D66',
  as = 'h4',
  size = 'lg',
  ...props
}: HeadingProps) => {
  return (
    <Heading color={color} as={as} size={size} {...props}>
      {title}
    </Heading>
  );
};
