import DefaultLayout from '../layouts/default';

export default function Custom404Layout() {
  return (
    <DefaultLayout noFooter={true}>
      <div className='container-404 container'>
        <h1>Ups!</h1>
        <p>Die Seite die Sie suchen existiert nicht oder wurde entfernt.</p>
        <a href={'/'}>
          Zur Startseite
        </a>
      </div>
    </DefaultLayout>
  );
}
