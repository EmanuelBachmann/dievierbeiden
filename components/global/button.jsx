export default function GlobalButton({ block, dataBinding }) {
  return (
    <section
      className={`
        section-button
        container
    `}
      data-cms-bind={dataBinding}
    >
      <a
        href={block.link}
        className={`btn`}
      >
        {block.text}
      </a>
    </section>
  );
}
