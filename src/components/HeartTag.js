import React from 'react';

import { HeartOutlineIcon, HeartFilledIcon } from '../assets/SVG/svg';

const fill = '#fff';

const HeartTag = ({ favourite }) => {
  return (
    <div className={'heart-tag'}>
      <div className={'heart-outline-icon'}>
        {favourite ? (
          <HeartFilledIcon fill={fill} />
        ) : (
          <HeartOutlineIcon fill={fill} />
        )}
      </div>
    </div>
  );
};

export default HeartTag;
