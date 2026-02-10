import React from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Setlist({ block, dataBinding }) {
  return (
    <section
      className='setlist container'
      data-cms-bind={dataBinding}
      id={block.anchor}
    >
      <h2>{block.title}</h2>
      <div
        className='setlist-text'
        dangerouslySetInnerHTML={{
          __html: md.render(block.text),
        }}
      ></div>
      <div className='setlist-button-row'>
        <a href={block.setlist} target='_blank' rel='noreferrer'>
          <i aria-hidden className='fa-solid fa-download'></i>
          {block.button_text}
        </a>
      </div>
    </section>
  );
}
