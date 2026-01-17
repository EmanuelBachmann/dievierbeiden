import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='de'>
        <Head>
          <script
            src='https://kit.fontawesome.com/61f1b30c9d.js'
            crossOrigin='anonymous'
          ></script>
          {/* <script
            id='Cookiebot'
            src='https://consent.cookiebot.com/uc.js'
            data-cbid='13ce34f7-5e85-49bc-a5c9-56c3ec425c20'
            data-blockingmode='auto'
            type='text/javascript'
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
