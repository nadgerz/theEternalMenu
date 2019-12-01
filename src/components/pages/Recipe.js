import React from 'react';

import HeartTag from '../HeartTag';
import { CookingTimeIcon, ServingSizeIcon } from '../../assets/SVG/svg';
import '../../assets/CSS/pages/Recipe.scss';

import mockData from '../../assets/data/data';

const Recipe = () => {
  const recipe = mockData.user.recipes[0];
  const version = recipe.versions[0];

  const titles = {
    directions: 'Directions',
    ingredients: 'Ingredients',
    notes: 'Notes',
  };

  return (
    <div id={'recipe'} className={'recipe'}>
      {/*    T O P    */}
      <div className={'top'}>
        <div className="left">
          <h3>{recipe.title}</h3>

          <div className="icons">
            <div className="cooking-time icon-with-text">
              <CookingTimeIcon />
              <h6>
                <span>{version.cookingTime}</span> min
              </h6>
            </div>
          </div>

          <div className="versions">
            <div className="version">
              <HeartTag favourite={recipe.favourite} />
              <h6>Version {recipe.versions.length}</h6>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="img">
            <img src={recipe.img} alt="" />
          </div>
        </div>
      </div>

      {/*  B O T T O M  */}
      {/*  V E R S I O N  A R E A  */}
      <article className="bottom version">
        <div className="left">
          <div className="directions">
            <h4>{titles.directions}</h4>

            <div className="content">
              <ul>
                {version.directions.map((direction, index) => {
                  return (
                    <li className={'direction'} key={`direction_${index}`}>
                      {direction}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="notes">
            <h4>{titles.notes}</h4>
            <div className="content">
              <ul>
                {version.notes.map((note, index) => {
                  return (
                    <li className={'note'} key={`note${index}`}>
                      {note}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="ingredients">
            <h4>{titles.ingredients}</h4>

            <div className="icons">
              <div className="serving-size icon-with-text">
                <ServingSizeIcon />
                <h6>
                  <span>{version.servingSize}</span> Servings
                </h6>
              </div>
            </div>

            <div className="content">
              <ul>
                {version.ingredients.map((ingredient, index) => {
                  return (
                    <li className={'ingredient'} key={`ingredient${index}`}>
                      <input
                        type="checkbox"
                        name="ingredient"
                        id={'ingredient' + 1}
                      />
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Recipe;
