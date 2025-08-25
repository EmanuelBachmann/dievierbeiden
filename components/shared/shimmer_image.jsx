import React  from 'react';

export default function ShimmerImage({ className, src, alt }) {
  return (
    <div
      className={`shimmer-image-container ${className}`}
    >
      <img className='shimmer-image' src={src} alt={alt} />
    </div>
  );
}
