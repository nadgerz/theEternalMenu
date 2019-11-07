import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Link } from '@reach/router';
// import { Link } from '@reach/router';

const RecipeForm = () => {
  return (
    <div id={'recipe-form'} className="recipe-form">
      <form action="/recipe-form-handler" method="post"></form>
    </div>
  );
};

export default RecipeForm;
