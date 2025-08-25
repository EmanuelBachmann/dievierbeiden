import React from 'react';
import CountUp from 'react-countup';

export default function Counter({ block, dataBinding }) {
  return (
    <section className='counter' data-cms-bind={dataBinding}>
      <div className='container counter-container'>
        {block.items.map((item, index) => {
          return (
            <div key={index} className='counter-item'>
              <p className='counter-item-number'>
                <CountUp
                  end={item.number}
                  duration={4}
                  enableScrollSpy
                  formattingFn={(val) =>
                    val.toLocaleString('de-DE', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })
                  }
                />
              </p>
              <p className='counter-item-text'>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
