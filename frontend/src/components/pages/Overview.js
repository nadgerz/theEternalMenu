import React from 'react';
// import config from 'config';
// const serverPath = config.get('serverPath');
import axios from 'axios';

const serverPath = 'http://localhost:3000';

import { AXIOS, createKey } from '../../utils/util';
import AddRecipeCard from '../AddRecipeCard';
import Filters from '../Filters';
import RecipeCard from '../RecipeCard';

import '../../assets/CSS/pages/Overview.scss';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      // TODO: Spinner component
      isLoading: false,
      recipes: [],
      recipeImages: [],
    };

    this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
  }

  componentDidMount() {
    // console.log('did mount');
    // this.getDataFromDbUsingFetch();
    this.fetchData();
  }

  fetchData = async () => {
    try {
      let res;

      // fetch user
      res = await AXIOS.user.GET_ALL;
      const user = res.data[0];

      // get recipes of user
      const recipes = await this.getRecipes(user);

      // get imgs for recipes
      const recipeImages = await this.getImages(recipes);

      this.setState({ user, recipes, recipeImages });
    } catch (err) {
      console.error(err.message);
    }
  };

  // fetch data from database
  getDataFromDbUsingFetch = () => {
    fetch(`${serverPath}/user/all`)
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  getImages = async recipes => {
    const promisedImages = recipes.map(async recipe => {
      const res = await axios
        .get(`${serverPath}/recipe/${recipe._id}/img/${recipe.img}`, {
          responseType: 'arraybuffer',
        })
        .then(res => Buffer.from(res.data, 'binary').toString('base64'));

      return res;
    });
    return Promise.all(promisedImages);
  };

  getRecipes = async user => {
    const promisedRecipes = user.recipes.map(async recipeId => {
      const res = await axios.get(`${serverPath}/recipe/${recipeId}`);
      return res.data;
    });
    return Promise.all(promisedRecipes);
  };

  async handleFilterUpdate(recipes) {
    if (recipes.length === 0) {
      //  TODO: UI error message for NO results
    }
    console.log(recipes[0].img);
    const images = await this.getImages(recipes);
    console.log(images);

    this.setState({ recipes, images });
  }

  render() {
    const { recipes, recipeImages } = this.state;

    return (
      <div id={'overview'} className={'recipes-and-filter'}>
        <Filters handleFilterUpdate={this.handleFilterUpdate} data={recipes} />

        <article id="recipes" className={'user-recipes'}>
          <h2>
            Your Recipes <span>{recipes.length} found</span>
          </h2>

          <div className={'recipe-grid'}>
            <AddRecipeCard />

            {recipes.map((recipe, index) => {
              return (
                <RecipeCard
                  id={recipe._id}
                  img={recipeImages[index]}
                  title={recipe.title}
                  favourite={recipe.favourite}
                  key={createKey(recipe.title, index)}
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
