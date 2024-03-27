export default function GlobalHeader({ block, dataBinding }) {
  function renderTitle(child) {
    switch (block.tag) {
      case 'h2':
        return <h2 className={className}>{child}</h2>;
      case 'h3':
        return <h3 className={className}>{child}</h3>;
      case 'h4':
        return <h4 className={className}>{child}</h4>;
      case 'h5':
        return <h5 className={className}>{child}</h5>;
      case 'h1':
      default:
        return <h1 className={className}>{child}</h1>;
    }
  }

  return (
    <section
      className={`
        section-heading
        container
    `}
      data-cms-bind={dataBinding}
    >
      {renderTitle(block.title)}
    </section>
  );
}
