import React from 'react';
import { CookingTimeIcon, ServingSizeIcon } from '../assets/SVG/svg';

const Filters = () => {
  return (
    <aside id={'recipe-filter'}>
      <h2>Filter</h2>
      <div className={'cooking-time'}>
        <div className="filter-title">
          <CookingTimeIcon />
          <h6>Cooking Time</h6>
        </div>
        <div className="filter-slider"></div>
      </div>
      <div className={'serving-size'}>
        <div className="filter-title">
          <ServingSizeIcon />
          <h6>Serving Size</h6>
        </div>
        <div className="filter-slider"></div>
      </div>
    </aside>
  );
};

export default Filters;
