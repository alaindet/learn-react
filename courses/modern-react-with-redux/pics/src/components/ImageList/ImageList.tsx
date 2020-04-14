import React from 'react';

import './ImageList.scss';
import ImageCard from './../ImageCard/ImageCard';
import ImageListProps from './ImageListProps.interface';

export default function ImageList(props: ImageListProps) {
  return (
    <div className="image-list">
      {props.images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};
