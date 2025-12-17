import React from 'react';
import data from '../../lib/data';

export default function Setlist({ block, dataBinding }) {
  return (
    <section className='setlist container' data-cms-bind={dataBinding}>
      <h2>{block.title}</h2>
      <p className='setlist-text'>{block.text}</p>
      <div className='setlist-button-row'>
        <a href={block.setlist} target='_blank' rel='noreferrer'>
          <i aria-hidden className='fa-solid fa-download'></i>
          {block.button_text}
        </a>
      </div>
    </section>
  );
}
