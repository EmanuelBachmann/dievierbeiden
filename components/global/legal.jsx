import React from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Legal({ block, dataBinding }) {
  return (
    <section
      className='legal container-md'
      data-cms-bind={dataBinding}
      id={block.anchor}
    >
      <h1>{block.title}</h1>
      <div
        className='legal-content'
        dangerouslySetInnerHTML={{
          __html: md.render(block.text_markdown),
        }}
      ></div>
    </section>
  );
}
