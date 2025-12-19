import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import ShimmerImage from '../shared/shimmer_image';
const md = new MarkdownIt({ html: true });

export default function Introduction({ block, dataBinding }) {
  return (
    <section
      className='introduction container'
      data-cms-bind={dataBinding}
      id={block.anchor}
    >
      <div className='introduction-content'>
        <h1>{block.title}</h1>
        <div
          className='introduction-text introduction-text-top'
          dangerouslySetInnerHTML={{
            __html: md.render(block.text_top),
          }}
        ></div>
        <ShimmerImage
          className='introduction-img'
          src={block.image}
          alt={block.image_alt}
        />
        <div
          className='introduction-text introduction-text-bottom'
          dangerouslySetInnerHTML={{
            __html: md.render(block.text_bottom),
          }}
        ></div>
      </div>
    </section>
  );
}
