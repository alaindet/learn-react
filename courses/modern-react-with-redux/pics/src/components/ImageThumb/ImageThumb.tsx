import React from 'react';
import ImageThumbProps from './ImageThumbProps.interface';

export default function ImageThumb(props: ImageThumbProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
    />
  );
}
