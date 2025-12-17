import React from 'react';
import GalleryMobileItem from './components/GalleryMobileItem';

export default function Gallery({ block, dataBinding }) {
  return (
    <section className='gallery' data-cms-bind={dataBinding}>
      {block.images.map((imageItem, index) => (
        <GalleryMobileItem imageItem={imageItem} key={index} />
      ))}
    </section>
  );
}
