import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function GlobalParagraph({ block, dataBinding }) {
  return (
    <section
      className={`
        section-paragraph
    `}
      data-cms-bind={dataBinding}
    >
      <div
        className='container'
        dangerouslySetInnerHTML={{
          __html: md.render(block.content),
        }}
      ></div>
    </section>
  );
}
