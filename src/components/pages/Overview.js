import React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import axios from 'axios';
// import config from 'config';
// const serverPath = config.get('serverPath');
const serverPath = 'http://localhost:3000';

import AddRecipeCard from '../AddRecipeCard';
import Filters from '../Filters';
import RecipeCard from '../RecipeCard';

import '../../assets/CSS/pages/Overview.scss';

import mockData from '../../assets/data/data';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    // this.getDataFromDbUsingFetch();
    this.getDataFromDbUsingAxios();
  }

  // fetch data from database
  getDataFromDbUsingFetch = () => {
    fetch(`${serverPath}/user/all`)
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  getDataFromDbUsingAxios = async () => {
    try {
      const result = await axios.get(`${serverPath}/user/all`);
      console.log(result);
      this.setState({ data: result });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  render() {
    // const { recipes } = this.state;

    return (
      <div id={'overview'} className={'recipes-and-filter'}>
        {/* TODO: Filter will need to be passed props from user */}
        <Filters />

        <article id="recipes" className={'user-recipes'}>
          <h2>
            Your Recipes <span>{mockData.user.recipes.length} in total</span>
          </h2>

          <div className={'recipe-grid'}>
            <AddRecipeCard />

            {mockData.user.recipes.map((recipe, index) => {
              return (
                <RecipeCard
                  img={recipe.img}
                  title={recipe.title}
                  favourite={recipe.favourite}
                  key={
                    recipe.title.toLowerCase().replace(/\s/g, '') + '_' + index
                  }
                />
              );
            })}
          </div>
        </article>
      </div>
    );
  }
}

export default Overview;
