import React from 'react';

export default function Counter({ block, dataBinding }) {
  return (
    <section className='socialmedia' data-cms-bind={dataBinding}>
      <div className='container socialmedia-container'>
        <h2>{block.title}</h2>
        <div className='socialmedia-row'>
          <a href={block.instagram_url} target='_blank'>
            <i aria-hidden className='fa-brands fa-instagram'></i>
          </a>
          <a href={block.facebook_url} target='_blank'>
            <i aria-hidden className='fa-brands fa-facebook'></i>
          </a>
        </div>
      </div>
    </section>
  );
}
