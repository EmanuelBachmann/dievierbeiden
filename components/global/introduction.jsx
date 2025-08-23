import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Introduction({ block, dataBinding }) {
  return (
    <section className='introduction container' data-cms-bind={dataBinding}>
      <h1>{block.title}</h1>
      <p>{block.description}</p>
      {/* <Image className='hero-image' src={block.background_image} alt={block.background_alt} /> */}
    </section>
  );
}
