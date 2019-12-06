import React, { Component } from 'react';
import InputRange from 'react-input-range';

const RecipeModel = require('../../../backend/src/models/recipe');
// const getMinMax = require('../utils/util');
import { CookingTimeIcon, ServingSizeIcon } from '../assets/SVG/svg';

import '../assets/CSS/components/Filters.scss';
import '../assets/CSS/components/inputRange.css';

// import Recipe from '../models/recipe';
// console.log(Recipe);

// import bob from './bert'
// console.log(bob)

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // min is for the left thumb
      value: { min: 0, max: 20 },
      servingSizeValue: { min: 0, max: 4 },
      cookingTimeValue: { min: 0, max: 20 },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // const servingSizeMinMax = getMinMax(RecipeModel, 'servingSize');
    // console.log(servingSizeMinMax);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Sth was submitted: ');
    console.log(this.state.servingSizeValue );
    console.log(this.state.cookingTimeValue);
    event.preventDefault();
    
  //  TODO: query databse! with min max!

  }

  render() {
    return (
      <aside id={'recipe-filter'}>
        <h2>Filters</h2>

        {/*<form action="submit">*/}
        <form onSubmit={this.handleSubmit}>

          <div className={'cooking-time'}>
            <div className="filter-title icon-with-text">
              <CookingTimeIcon/>
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
              <ServingSizeIcon/>
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

          <input type="submit" value={'Submit'}/>
        </form>
      </aside>
    );
  }
}

export default Filters;
