import React, { useEffect, useState } from 'react';

export default function Members({ block, dataBinding }) {
  const [activeState, setActiveState] = useState({
    activeIndex: 0,
    previousIndex: block.members.length - 1,
    direction: 'none',
  });

  const [members, setMembers] = useState([]);
  const [automaticMode, setAutomaticMode] = useState(true);

  useEffect(() => {
    setMembers(
      block.members.map((member) => {
        return {
          ...member,
          angle: Math.random() * 20 - 10,
        };
      })
    );
  }, []);

  useEffect(() => {
    let interval;

    if (automaticMode) {
      interval = setInterval(() => {
        nextCard();
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [automaticMode]);

  const nextCard = () => {
    setActiveState((as) => {
      const i = as.activeIndex;
      const activeIndex = (i + 1) % members.length;
      const previousIndex = (activeIndex - 1 + members.length) % members.length;
      return {
        direction: 'next',
        activeIndex: activeIndex,
        previousIndex: previousIndex,
      };
    });
  };

  const prevCard = () => {
    setActiveState((as) => {
      const i = as.activeIndex;
      const activeIndex = (i - 1 + members.length) % members.length;
      const previousIndex = (activeIndex - 1 + members.length) % members.length;
      return {
        direction: 'prev',
        activeIndex: activeIndex,
        previousIndex: previousIndex,
      };
    });
  };

  const getZIndex = (index) => {
    const length = members.length;
    const distance = (index - activeState.activeIndex + length) % length;
    return length - distance; // higher for more recent
  };

  return (
    <section className='members' data-cms-bind={dataBinding}>
      <div className='container'>
        <h2 className='members-title'>{block.title}</h2>
        <p className='members-text'>{block.text}</p>

        <div className='members-cards'>
          {members.map((member, index) => {
            const isActive = index === activeState.activeIndex;
            const isPrevious = index === activeState.previousIndex;

            let animationClass = '';
            if (isPrevious && activeState.direction === 'next') {
              animationClass = 'fly-out';
            }
            if (isActive && activeState.direction === 'prev') {
              animationClass = 'fly-in';
            }

            return (
              <article
                key={index}
                className={`members-card ${animationClass}`}
                style={{
                  '--angle': `${member.angle}deg`,
                  zIndex: getZIndex(index),
                }}
              >
                <div className='members-card-container'>
                  <img
                    className='members-card-img'
                    src={member.image}
                    alt={members.name}
                  />

                  <div className='members-card-content'>
                    <h3 className='members-card-name'>{member.name}</h3>
                    <p className='members-card-instrument'>
                      {member.instrument}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Buttons rendered once */}
          <footer className='members-card-footer'>
            <button
              onClick={() => {
                prevCard();
                setAutomaticMode(false);
              }}
              aria-label='Previous'
            >
              <i class='fa-solid fa-chevron-left'></i>
            </button>
            <button
              onClick={() => {
                nextCard();
                setAutomaticMode(false);
              }}
              aria-label='Next'
            >
              <i class='fa-solid fa-chevron-right'></i>
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
}
