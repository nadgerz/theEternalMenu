import React from 'react';

import { CookingTimeIcon, ServingSizeIcon } from '../assets/SVG/svg';

import '../assets/CSS/components/Filters.css';

const Filters = () => {
  return (
    <aside id={'recipe-filter'}>
      <h2>Filters</h2>

      <div className={'cooking-time'}>
        <div className="filter-title icon-with-text">
          <CookingTimeIcon />
          <label htmlFor="filter-cooking-time">
            <h6>Cooking Time</h6>
          </label>
        </div>

        <div className="filter-slider">
          <input
            id="filter-cooking-time"
            name="filter-cooking-time"
            type="range"
            min={10}
            max={100}
            // TODO: Below needs to be updated
            // needs `onChange` handler
            // value={}
            defaultValue={0}
            data-sizing="px"
          />
        </div>
      </div>

      <div className={'serving-size'}>
        <div className="filter-title">
          <ServingSizeIcon />
          <label htmlFor="filter-serving-size">
            <h6>Serving Size</h6>
          </label>
        </div>
        <div className="filter-slider">
          <input
            id="filter-serving-size"
            name="filter-serving-size"
            type="range"
            min={10}
            max={100}
            // TODO: Below needs to be updated
            // needs `onChange` handler
            // value={}
            defaultValue={0}
            data-sizing="px"
          />
        </div>
      </div>
    </aside>
  );
};

export default Filters;
