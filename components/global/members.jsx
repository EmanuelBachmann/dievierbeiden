import React, { useState } from 'react';

export default function Members({ block, dataBinding }) {
  const { members } = block;
  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () => {
    setActiveIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='members' data-cms-bind={dataBinding}>
      <div className='container'>
        <h2 className='members-title'>{block.title}</h2>
        <p className='members-text'>{block.text}</p>

        <div className='members-cards'>
          {members.map((member, index) => {
            const isActive = index === activeIndex;
            const isNext = index === (activeIndex + 1) % members.length;

            return (
              <article
                key={index}
                className={`members-card ${isActive ? 'active' : ''} ${
                  isNext ? 'next' : 'inactive'
                }`}
                style={{ '--angle': `${Math.random() * 20 - 10}deg` }}
              >
                <img
                  className='members-card-img'
                  src={'/uploads/d4b-hero-mobile-xl.jpg'}
                  alt={`Card ${index}`}
                />
              </article>
            );
          })}

          <div className='members-card-footer'>
            <button onClick={prevCard} aria-label='Previous'>
              &#10094;
            </button>
            <button onClick={nextCard} aria-label='Next'>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
