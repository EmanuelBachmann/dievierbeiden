import React, { useState, useEffect } from 'react';

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
      className={`home-hero  ${init ? 'initialized' : ''}`}
      data-cms-bind={dataBinding}
      style={{ '--var-hero-background-img': `url(${block.background_image})` }}
    ></section>
  );
}
