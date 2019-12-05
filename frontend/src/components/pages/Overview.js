import React from 'react';
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
      user: null,
      // TODO: Spinner component
      isLoading: false,
      recipes: [],
      recipeImages: [],
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
      let res;
      // fetch user
      res = await axios.get(`${serverPath}/user/all`);
      const user = res.data[0];

      // get recipes of user
      const promisedRecipes = user.recipes.map(async (recipeId) => {
        res = await axios.get(`${serverPath}/recipe/${recipeId}`);
        return res.data;
      });
      const recipes = await Promise.all(promisedRecipes);

      // get imgs for recipes
      const promisedImages = recipes.map(async (recipe) => {
        res = await axios
          .get(`${serverPath}/recipe/${recipe._id}/img/${recipe.img}`, {
            responseType: 'arraybuffer',
          })
          .then(res => Buffer.from(res.data, 'binary').toString('base64'));

        return (res);
      });
      const recipeImages = await Promise.all(promisedImages);

      this.setState({ user, recipes, recipeImages });

    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  render() {
    const { recipes, recipeImages } = this.state;

    return (
      <div id={'overview'} className={'recipes-and-filter'}>
        <Filters/>

        <article id="recipes" className={'user-recipes'}>
          <h2>
            Your Recipes <span>{recipes.length} in total</span>
          </h2>

          <div className={'recipe-grid'}>
            <AddRecipeCard/>

            {recipes.map((recipe, index) => {
              return (
                <RecipeCard
                  img={recipeImages[index]}
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
