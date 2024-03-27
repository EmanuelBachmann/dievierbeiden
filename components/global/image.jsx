export default function GlobalImage({ block, dataBinding }) {
  return (
    <section
      className={`
        section-image
        container
    `}
      data-cms-bind={dataBinding}
    >
      <img src={block.image} alt={block.image_alt} />
    </section>
  );
}
