import React from 'react';
import { motion } from 'framer-motion';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function Dates({ block, dataBinding }) {
  const cardVariants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };
  return (
    <section className='dates' data-cms-bind={dataBinding} id={block.anchor}>
      <div className='dates-container'>
        <div className='container'>
          <h2 className='dates-title'>{block.title}</h2>
          <div
            className='dates-text'
            dangerouslySetInnerHTML={{
              __html: md.render(block.text),
            }}
          ></div>
        </div>
        <div className='dates-items container-lg'>
          {block.dates.map((date, index) => {
            const isRight = index % 2 == 0;
            const isFirst = index == 0;
            const isLast = index == block.dates.length - 1;
            return (
              <div key={index}>
                <div
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
                  <motion.div
                    // key={'motion-' + index}
                    variants={cardVariants}
                    initial={isRight ? 'hiddenRight' : 'hiddenLeft'}
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.4 }}
                    className='dates-item-content-container'
                  >
                    <h3>{date.title}</h3>
                    <div className='dates-item-content-icon-container'>
                      <i aria-hidden className='fa-solid fa-calendar'></i>
                      <p>{date.date}</p>
                    </div>
                    <div className='dates-item-content-icon-container'>
                      <i aria-hidden className='fa-solid fa-location-dot'></i>
                      <p>{date.location}</p>
                    </div>
                  </motion.div>
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
                      <div className='line'></div>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
