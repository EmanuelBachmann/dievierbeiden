import Filer from '@cloudcannon/filer';
import DefaultLayout from '../components/layouts/default';
import Blocks from '../components/shared/blocks';
const filer = new Filer({ path: 'content' });

export default function HomePage({ page }) {
  return (
    <DefaultLayout page={page}>
      <Blocks content_blocks={page.data.content_blocks}></Blocks>
    </DefaultLayout>
  );
}

export async function getStaticProps({ params }) {
  const page = await filer.getItem('index.md', {
    folder: 'pages',
  });

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
    },
  };
}
