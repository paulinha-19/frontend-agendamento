import Link from 'next/link';
import { TextProps, Text } from '@chakra-ui/react';

type CustomLinkProps = TextProps & {
  text?: string;
  color?: string;
  href?: string;
};

export const CustomLink = ({
  text = 'Ir para a home',
  color = '#2B6CB0',
  href = '/',
  ...props
}: CustomLinkProps) => {
  return (
    <Link href={href}>
      <Text
        align="center"
        color={color}
        _hover={{ cursor: 'pointer' }}
        {...props}
      >
        {text}
      </Text>
    </Link>
  );
};
