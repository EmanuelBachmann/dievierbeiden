import DefaultLayout from '../layouts/default';

export default function Custom404Layout() {
  return (
    <DefaultLayout>
      <h1 className='container-sm'>
        Ups! Diese Seite konnte nicht gefunden werden.
      </h1>
      <p className='container'>
        Die angeforderte Seite konnte leider nicht auf unserem Server gefunden
        werden. Es ist möglich, dass die URL falsch eingegeben wurde, die Seite
        verschoben oder entfernt wurde. Wir entschuldigen uns für die
        Unannehmlichkeiten. Bitte nutzen Sie die Navigation oder die
        Suchfunktion, um zu den gewünschten Informationen zu gelangen, oder
        kehren Sie zur Startseite zurück. Vielen Dank für Ihr Verständnis.
      </p>
      <div className='container'>
        <button className='btn btn-sm' href={'/'}>
          Zur Startseite
        </button>
      </div>
    </DefaultLayout>
  );
}
