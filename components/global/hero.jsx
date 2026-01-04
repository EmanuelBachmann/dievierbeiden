import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Hero({ block, dataBinding }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = block.background_image;
    img.style.display = 'none';
    img.onload = () => {
      setInit(true);
    };
  }, [block.background_image]);

  return (
    <section
      className={`hero  ${init ? 'initialized' : ''}`}
      data-cms-bind={dataBinding}
      id={block.anchor}
    >
      <img
        className='hero-image hero-image-desktop'
        src={block.background_image}
        alt={block.background_alt}
      ></img>
      <img
        className='hero-image hero-image-mobile'
        src={block.background_image_mobile}
        alt={block.background_alt}
      />
      <div className='hero-bottom-gradient' />
    </section>
  );
}
