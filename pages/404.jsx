import Custom404Layout from '../components/not_found/custom_404_layout';

export default function Custom404({ page }) {
  return <Custom404Layout />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
