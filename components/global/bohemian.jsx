import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Bohemian({ block, dataBinding }) {
  return (
    <section
      className={`bohemian`}
      style={{ '--background-image': `url(${block.background_image})` }}
      data-cms-bind={dataBinding}
      id={block.anchor}
    >
      <div className='bohemian-overlay'>
        <div className='container'>
          <div className='bohemian-content'>
            <h2>{block.title}</h2>
            <p>{block.text}</p>
            <a>{block.button_text}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
