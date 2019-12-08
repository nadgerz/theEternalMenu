import React, { Component } from 'react';
import InputRange from 'react-input-range';

const { getTrueMiddle } = require('../utils/util');
import axios from 'axios';

const serverPath = process.env.REACT_APP_API_URL || 'http://localhost:3000';
import { AXIOS } from '../utils/util';

import { CookingTimeIcon, ServingSizeIcon } from '../assets/SVG/svg';
import '../assets/CSS/components/Filters.scss';
import '../assets/CSS/components/inputRange.css';

class Filters extends Component {
  constructor(props) {
    super(props);

    // console.log(props.cookingTimeValues);
    const {
      minValueCookingTime,
      maxValueCookingTime,
      cookingTimeValue,
    } = props.cookingTimeValues;
    console.log(minValueCookingTime, maxValueCookingTime, cookingTimeValue);

    this.state = {
      minValueCookingTime: props.minValueCookingTime || 0,
      maxValueCookingTime: 120,
      cookingTimeValue: { min: 0, max: 60 },

      minValueServingSize: 1,
      maxValueServingSize: 12,
      servingSizeValue: { min: 1, max: 6 },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sortLowToHigh(array, key) {
    return array.map(item => item[key]).sort((a, b) => a - b);
  }

  getMinMaxValues(array, key) {
    const sorted = array.map(item => item[key]).sort((a, b) => a - b);

    const min = sorted[0];
    const max = sorted[sorted.length - 1];

    return [min, max];
  }

  async componentDidMount() {
    let res = await AXIOS.recipe.GET_ALL;

    const [minValueCookingTime, maxValueCookingTime] = this.getMinMaxValues(
      res.data,
      'cookingTime',
    );
    const [minValueServingSize, maxValueServingSize] = this.getMinMaxValues(
      res.data,
      'servingSize',
    );

    this.setState({
      // minValueCookingTime,
      maxValueCookingTime,

      cookingTimeValue: {
        min: minValueCookingTime,
        max: getTrueMiddle(minValueCookingTime, maxValueCookingTime),
      },

      minValueServingSize,
      maxValueServingSize,

      servingSizeValue: {
        min: minValueServingSize,
        max: getTrueMiddle(minValueServingSize, maxValueServingSize),
      },
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    let query = {
      servingSize: {
        $gte: this.state.servingSizeValue.min,
        $lte: this.state.servingSizeValue.max,
      },
      cookingTime: {
        $gte: this.state.cookingTimeValue.min,
        $lte: this.state.cookingTimeValue.max,
      },
    };

    let res;

    try {
      res = await axios.get(`${serverPath}/recipe/`, {
        params: query,
      });
      console.log('did mount');
      this.props.handleFilterUpdate(res.data);
    } catch (err) {
      // console.error(err);
      res = [];
      this.props.handleFilterUpdate(res);
    }
  }

  render() {
    const {
      cookingTimeValue,
      minValueCookingTime,
      maxValueCookingTime,

      servingSizeValue,
      minValueServingSize,
      maxValueServingSize,
    } = this.state;

    return (
      <aside id={'recipe-filter'}>
        <h2>Filters</h2>

        {/*<form action="submit">*/}
        <form onSubmit={this.handleSubmit}>
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
                step={1}
                minValue={minValueCookingTime}
                maxValue={maxValueCookingTime}
                value={cookingTimeValue}
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
                minValue={minValueServingSize}
                maxValue={maxValueServingSize}
                value={servingSizeValue}
                onChange={servingSizeValue =>
                  this.setState({ servingSizeValue })
                }
                allowSameValues={true}
                aria-labelledby={String}
              />
            </div>
          </div>

          <input type="submit" value={'Submit'} className={'btn primary'} />
        </form>
      </aside>
    );
  }
}

export default Filters;
