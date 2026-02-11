import React from 'react';
import data from '../../lib/data';

export default function SocialMedia({ block, dataBinding }) {
  return (
    <section
      className='socialmedia'
      data-cms-bind={dataBinding}
      id={block.anchor}
    >
      <div className='container socialmedia-container'>
        <h2>{block.title}</h2>
        <div className='socialmedia-row'>
          <a href={data.footer.instagram_url} target='_blank'>
            <i aria-hidden className='fa-brands fa-instagram'></i>
          </a>
          <a href={data.footer.facebook_url} target='_blank'>
            <i aria-hidden className='fa-brands fa-facebook'></i>
          </a>
        </div>
      </div>
    </section>
  );
}
