import Filer from '@cloudcannon/filer';
import DefaultLayout from '../components/layouts/default';
import Blocks from '../components/shared/blocks';
const filer = new Filer({ path: 'content' });

export default function Page({ page }) {
  return (
    <DefaultLayout page={page}>
      <Blocks content_blocks={page.data.content_blocks}></Blocks>
    </DefaultLayout>
  );}

export async function getStaticPaths() {
  const slugs = (
    await filer.listItemSlugs('pages')
  ).map((slug) => ({
    params: { slug },
  }));

  const ignored = {
    index: true,
    shop: true,
    resale: true,
    404: true,
  };

  return {
    paths: slugs.filter(({ params }) => !ignored[params.slug]),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = await filer.getItem(`${params.slug}.md`, {
    folder: 'pages',
  });

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
    },
  };
}
