import { useEffect, useRef, useState } from 'react';

const GalleryMobileItem = ({ imageItem }) => {
  const itemRef = useRef(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    // Mobile only
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCentered(entry.intersectionRatio > 0.6);
      },
      {
        threshold: [0, 0.6, 1],
        rootMargin: '-30% 0px -30% 0px',
      }
    );

    if (itemRef.current) observer.observe(itemRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`gallery-mobile-item ${isCentered ? 'is-centered' : ''}`}
    >
      <img
        className='hero-image hero-image-mobile'
        src={imageItem.image}
        alt={imageItem.title}
      />
      <div className='gallery-mobile-item-overlay'>
        <h3>{imageItem.title}</h3>
      </div>
    </div>
  );
};

export default GalleryMobileItem;
