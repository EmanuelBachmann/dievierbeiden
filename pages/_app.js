import '../styles/theme.scss';

import { CloudCannonConnect } from '@cloudcannon/react-connector';
import { Nunito } from 'next/font/google';
import React, { useEffect } from 'react';

const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add('loaded');

    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
  }, []);

  const AppComponent = CloudCannonConnect(Component, {
    valueOptions: {
      keepMarkdownAsHTML: false,
    },
  });

  return (
    <div className={nunito.className}>
      <AppComponent {...pageProps} />
    </div>
  );
}
