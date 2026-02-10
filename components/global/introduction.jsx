import React from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });
import ShimmerImage from '../shared/shimmer_image';

export default function Introduction({ block, dataBinding }) {
  return (
    <section
      className='introduction'
      data-cms-bind={dataBinding}
      id={block.anchor}
    >
      <div className='introduction-content'>
        <div className='container-lg'>
          <h1>{block.title}</h1>
        </div>
        <div className='introduction-grid container-xl'>
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
      </div>
    </section>
  );
}
