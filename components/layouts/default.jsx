import Head from 'next/head';
import { NextSeo } from 'next-seo';
// import Navigation from './navigation';
// import Footer from './footer';
import data from '../../lib/data';
import { useEffect, useState } from 'react';
import Navigation from './navigation';
import Footer from './footer';

export default function DefaultLayout({ children, page, noFooter = false }) {
  const title = data.site.site_title;
  const description = data.site.description;
  const image = data.site.image;
  const image_alt = data.site.image_alt;

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>
      <NextSeo
        noindex={!page || page.data.title !== 'Home'}
        title={title}
        description={description}
        openGraph={
          page && {
            url: data.site.baseurl,
            title: title,
            description: description,
            type: `${page.data.seo?.open_graph_type || 'website'}`,
            images: [
              {
                url: image,
                alt: image_alt,
              },
            ],
          }
        }
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `${data.site.favicon_image}`,
            type: 'image/x-icon',
          },
          {
            rel: 'shortcut icon',
            href: `${data.site.favicon_icon}`,
            type: 'image/x-icon',
          },
          {
            rel: 'apple-touch-icon',
            href: `${data.site.favicon_image}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: `${data.site.favicon_image}`,
          },
        ]}
      />
      <Navigation />
      {children}
      {!noFooter && <Footer />}
    </>
  );
}
