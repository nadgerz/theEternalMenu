import React from 'react';
// import config from 'config';
// const serverPath = config.get('serverPath');
import axios from 'axios';

const serverPath = 'http://localhost:3000';

import { AXIOS } from '../../utils/util';
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
      // res = await axios.get(`${serverPath}/user/all`);
      res = await AXIOS.user.GET_ALL;
      const user = res.data[0];

      // get recipes of user
      const promisedRecipes = user.recipes.map(async recipeId => {
        res = await axios.get(`${serverPath}/recipe/${recipeId}`);
        return res.data;
      });
      const recipes = await Promise.all(promisedRecipes);

      // get imgs for recipes
      const promisedImages = recipes.map(async recipe => {
        res = await axios
          .get(`${serverPath}/recipe/${recipe._id}/img/${recipe.img}`, {
            responseType: 'arraybuffer',
          })
          .then(res => Buffer.from(res.data, 'binary').toString('base64'));

        return res;
      });
      const recipeImages = await Promise.all(promisedImages);

      this.setState({ user, recipes, recipeImages });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  handleFilterUpdate(recipes) {

    if (recipes.length === 0) {
      //  TODO: UI error message for NO results
    }

    this.setState({ recipes: recipes });
  }


  render() {
    const { recipes, recipeImages } = this.state;

    return (
      <div id={'overview'} className={'recipes-and-filter'}>

        <Filters handleFilterUpdate={this.handleFilterUpdate}
                 data={recipes}/>

        <article id="recipes" className={'user-recipes'}>
          <h2>
            Your Recipes <span>{recipes.length} found</span>
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
