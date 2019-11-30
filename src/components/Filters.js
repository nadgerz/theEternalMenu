import React from 'react';
import InputRange from 'react-input-range';

import { CookingTimeIcon, ServingSizeIcon } from '../assets/SVG/svg';

// import 'react-input-range/lib/css/index.css';
import '../assets/CSS/components/Filters.scss';
import '../assets/CSS/components/inputRange.css';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    // const maxVal = 45;
    // const minVal = 0;

    this.state = {
      // min is for the left thumb
      value: { min: 0, max: 20 },
      servingSizeValue: { min: 0, max: 4 },
      cookingTimeValue: { min: 0, max: 20 },
    };
  }

  render() {
    return (
      <aside id={'recipe-filter'}>
        <h2>Filters</h2>

        <form action="submit">
          <div className={'cooking-time'}>
            <div className="filter-title icon-with-text">
              <CookingTimeIcon />
              <label htmlFor="filter-cooking-time">
                <h6>Cooking Time</h6>
              </label>
            </div>

            <div className="filter-slider">
              <InputRange
                name="filter-cooking-time"
                formatLabel={value => `${value}m`}
                step={5}
                //{/* max/min should be extracted from the user's recipes */}
                maxValue={45}
                minValue={0}
                defaultValue={10}
                value={this.state.cookingTimeValue}
                onChange={cookingTimeValue =>
                  this.setState({ cookingTimeValue })
                }
                allowSameValues={true}
                aria-labelledby={String}
              />
            </div>
          </div>

          <div className={'serving-size'}>
            <div className="filter-title icon-with-text">
              <ServingSizeIcon />
              <label htmlFor="filter-serving-size">
                <h6>Serving Size</h6>
              </label>
            </div>
            <div className="filter-slider">
              <InputRange
                name="filter-serving-size"
                // formatLabel={value => `${value}`}
                step={1}
                //{/* max/min should be extracted from the user's recipes */}
                maxValue={8}
                minValue={0}
                value={this.state.servingSizeValue}
                onChange={servingSizeValue =>
                  this.setState({ servingSizeValue })
                }
                allowSameValues={true}
                aria-labelledby={String}
              />
            </div>
          </div>
        </form>
      </aside>
    );
  }
}

export default Filters;
