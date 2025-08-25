import React from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Counter({ block, dataBinding }) {
  return (
    <section className='counter' data-cms-bind={dataBinding}>
      asdf
    </section>
  );
}
