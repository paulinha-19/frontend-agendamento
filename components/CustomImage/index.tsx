import React from 'react';
import Image, { ImageProps } from 'next/image';
import { Box } from '@chakra-ui/react';

type CustomImageProps = ImageProps & {
  mt?: string;
  mb?: string;
};

export const CustomImage = ({
  src = '',
  alt = '',
  width = 0,
  height = 0,
  mt = '',
  mb = '',
  ...props
}: CustomImageProps) => {
  return (
    <Box mt={mt} mb={mb}>
      <Image src={src} alt={alt} width={width} height={height} {...props} />
    </Box>
  );
};
