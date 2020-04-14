import React from 'react';

import './ImageList.scss';
import ImageThumb from './../ImageThumb/ImageThumb';
import ImageListProps from './ImageListProps.interface';

export default function ImageList(props: ImageListProps) {
  return (
    <div className="image-list">
      {props.images.map(image => (
        <ImageThumb
          key={image.id}
          src={image.urls.thumb}
          alt={image.alt_description}
        />
      ))}
    </div>
  );
};
