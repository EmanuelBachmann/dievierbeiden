import React, { useState, useEffect } from 'react';
import data from '../../lib/data';

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
    >
      <div className='home-hero-container'>
        <div className='home-hero-container-header'>
          <img src={data.navigation.logo}></img>
        </div>
        <div className='home-hero-container-content'>
          <h1>Die vier beiden</h1>
        </div>
        <div className='home-hero-container-footer'>
          <div className='container-md'>
            <a href={`mailto:${data.footer.email}`}>
              <i class='fa-solid fa-phone'></i>
              <span>{data.footer.email}</span>
            </a>
            <a href={`tel:${data.footer.phone}`}>
              <i class='fa-solid fa-envelope'></i>
              <span>{data.footer.phone}</span>
            </a>
            <a href={data.footer.instagram} target='_blank'>
              <i className='fa-brands fa-instagram'></i>
              <span>{data.footer.instagram}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
