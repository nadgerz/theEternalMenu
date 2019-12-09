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

    this.state = {
      cookingTimeValues: {
        min: 0,
        max: 120,
        sliderMinMax: { min: 0, max: 60 },
      },

      servingSizeValues: {
        min: 1,
        max: 12,
        sliderMinMax: { min: 1, max: 6 },
      },
    };
  }

  async componentDidMount() {
    let res = await AXIOS.recipe.GET_ALL;

    const cookingTimeValues = this.findValues(res.data, 'cookingTime');
    const servingSizeValues = this.findValues(res.data, 'servingSize');

    this.setState({
      cookingTimeValues,
      servingSizeValues,
    });
  }

  findValues = (array, key) => {
    const sorted = array.map(item => item[key]).sort((a, b) => a - b);

    const min = sorted[0];
    const max = sorted[sorted.length - 1];

    const sliderMinMax = {
      min,
      max: getTrueMiddle(min, max),
    };

    return { min, max, sliderMinMax };
  };

  // handleChange = (event) => {
  //   console.log('handle change');
  //   this.setState({ value: event.target.value });
  // };

  handleSubmit = async (event) => {
    event.preventDefault();

    const cookingTimeSlider = this.state.cookingTimeValues.sliderMinMax;
    const servingSizeSlider = this.state.servingSizeValues.sliderMinMax;


    let query = {
      cookingTime: {
        $gte: cookingTimeSlider.min,
        $lte: cookingTimeSlider.max,
      },
      servingSize: {
        $gte: servingSizeSlider.min,
        $lte: servingSizeSlider.max,
      },
    };

    let res;

    try {
      res = await axios.get(`${serverPath}/recipe/`, {
        params: query,
      });
      await this.props.handleFilterUpdate(res.data);

    } catch (err) {
      // console.error(err);

      // if NO results, pass up an empty array
      res = [];
      await this.props.handleFilterUpdate(res);
    }
  }

  render() {
    const {
      servingSizeValues,
      cookingTimeValues,
    } = this.state;

    return (
      <aside id={'recipe-filter'}>
        <h2>Filters</h2>

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
                step={1}
                minValue={cookingTimeValues.min}
                maxValue={cookingTimeValues.max}
                value={cookingTimeValues.sliderMinMax}
                onChange={value => {
                  // setState doesn't handle nested updates, so the component's state
                  // is replaced with the updated object
                  const cookingTimeValues = { ...this.state.cookingTimeValues };
                  cookingTimeValues.sliderMinMax = value;
                  this.setState({ cookingTimeValues });
                }}
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
                minValue={servingSizeValues.min}
                maxValue={servingSizeValues.max}
                value={servingSizeValues.sliderMinMax}
                onChange={value => {
                  const servingSizeValues = { ...this.state.servingSizeValues };
                  servingSizeValues.sliderMinMax = value;
                  this.setState({ servingSizeValues });
                }}
                allowSameValues={true}
                aria-labelledby={String}
              />
            </div>
          </div>

          <input type="submit" value={'Submit'} className={'btn primary'}/>
        </form>
      </aside>
    );
  }
}

export default Filters;
