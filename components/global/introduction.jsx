import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Introduction({ block, dataBinding }) {

  return (
    <section
      className='introduction'
      data-cms-bind={dataBinding}
    >
      {/* <Image className='hero-image' src={block.background_image} alt={block.background_alt} /> */}
    </section>
  );
}
