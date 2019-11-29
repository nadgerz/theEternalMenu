import React from 'react';

// import { HeartOutlineIcon, HeartFilledIcon } from '../assets/SVG/svg';
import { HeartOutlineIcon } from '../assets/SVG/svg';

const HeartTag = () => {
  return (
    <div className={'heart-tag'}>
      <div className={'heart-outline-icon'}>
        <HeartOutlineIcon />
      </div>
    </div>
  );
};

export default HeartTag;
