import React from 'react';

export default function Dates({ block, dataBinding }) {
  return (
    <section className='dates' data-cms-bind={dataBinding}>
      <div className='container'>
        <h2 className='dates-title'>{block.title}</h2>
        <p className='dates-text'>{block.text}</p>

        <div className='dates-items'>
          {block.dates.map((date, index) => {
            const isRight = index % 2 == 0;
            const isFirst = index == 0;
            const isLast = index == block.dates.length - 1;
            return (
              <>
                <div
                  key={'date-' + index}
                  className={`dates-item ${
                    isRight ? 'dates-item-left' : 'dates-item-right'
                  }`}
                >
                  <div
                    className={`dates-item-node-container ${
                      isFirst ? 'is-first' : isLast ? 'is-last' : ''
                    }`}
                  >
                    <img src={block.icon} alt='Logo Datum' />
                  </div>
                  <div className='dates-item-content-container'>
                    <h3>{date.title}</h3>
                    <div className='dates-item-content-icon-container'>
                      <i aria-hidden className='fa-solid fa-calendar'></i>
                      <p>{date.date}</p>
                    </div>
                    <div className='dates-item-content-icon-container'>
                      <i aria-hidden className='fa-solid fa-location-dot'></i>
                      <p>{date.location}</p>
                    </div>
                  </div>
                </div>
                {!isLast && (
                  <div className='dates-item-line'>
                    <div className='dates-item-line-container line-sm'>
                      <div
                        className={`line-corner ${
                          isRight ? 'top-to-right' : 'right-to-bottom'
                        }`}
                      ></div>
                    </div>
                    <div className='dates-item-line-container line-lg'>
                      <hr />
                    </div>
                    <div className='dates-item-line-container line-sm'>
                      <div
                        className={`line-corner ${
                          isRight ? 'left-to-bottom' : 'top-to-left'
                        }`}
                      ></div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
