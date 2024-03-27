import React from 'react';

export default function Hero({ block, dataBinding }) {
  return (
    <section className='home_hero' data-cms-bind={dataBinding}>
      Hero
    </section>
  );
}
