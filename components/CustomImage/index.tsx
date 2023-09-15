import React from 'react';
import Image, { ImageProps } from 'next/image';

type CustomImageProps = ImageProps;

export const CustomImage = ({
  src = '',
  alt = '',
  width = 0,
  height = 0,
  ...props
}: CustomImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
};
