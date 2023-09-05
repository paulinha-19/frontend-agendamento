import { Text } from '@chakra-ui/react';
import { TextProps } from '../../types/text-props';

export const CardContentSubtitle = ({
  subtitle = '',
  color = '#163D66',
  ...props
}: TextProps) => {
  return (
    <Text color={color} py={3} {...props}>
      {subtitle}
    </Text>
  );
};
