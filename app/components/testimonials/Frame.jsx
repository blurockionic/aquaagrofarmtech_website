
import React from 'react';
import frame from '../../images/testimonials/frame.png';  
import Image from 'next/image';

const Frame = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          opacity: '100%',
        }}
        src={frame}
        alt="Placeholder"
      />
    </div>
  );
};

export default Frame;
