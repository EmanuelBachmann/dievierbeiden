import '../styles/theme.scss';

import { CloudCannonConnect } from '@cloudcannon/react-connector';
import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';
// import AnimatedCursor from 'react-animated-cursor';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const [isTouchdevice, setIsTouchdevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchdevice(window.matchMedia('(hover: none)').matches);
    }
  }, []);

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
    <div className={inter.className}>
      {/* {!isTouchdevice && (
        <AnimatedCursor
          clickables={[
            {
              target: 'a',
              innerScale: 0.5,
              outerScale: 1,
              outerAlpha: 1,
              innerStyle: {
                backgroundColor: '#d9c489',
              },
              outerStyle: {
                backgroundColor: 'transparent',
                mixBlendMode: 'exclusion',
              },
            },
            {
              target: 'button',
              innerScale: 0.5,
              outerScale: 1,
              outerAlpha: 1,
              innerStyle: {
                backgroundColor: '#d9c489',
              },
              outerStyle: {
                backgroundColor: 'transparent',
                mixBlendMode: 'exclusion',
              },
            },
          ]}
          color='#d9c489'
          innerSize={20}
          outerSize={30}
          innerScale={2}
          outerScale={1.5}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#d9c489',
          }}
          outerStyle={{
            backgroundColor: 'transparent',
          }}
        />
      )} */}
      <AppComponent {...pageProps} />
    </div>
  );
}
