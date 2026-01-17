import React from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Wysiwyg({ block, dataBinding }) {
  return (
    <section className='wysiwyg' data-cms-bind={dataBinding} id={block.anchor}>
      <div
        className='container socialmedia-container'
        dangerouslySetInnerHTML={{
          __html: md.render(block.text),
        }}
      ></div>
    </section>
  );
}
