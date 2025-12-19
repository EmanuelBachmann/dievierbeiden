import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Bohemian({ block, dataBinding }) {
  function scrollToContact() {
    if (typeof document === 'undefined') return;

    const el = document.getElementById('kontakt');
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth' });

    // remove hash from URL without reloading
    history.replaceState(null, '', window.location.pathname);
  }

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
            <button onClick={() => scrollToContact()}>
              {block.button_text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
