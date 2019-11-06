import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Link } from '@reach/router';
// import { Link } from '@reach/router';

const Login = () => {
  // const { name, animal, breed, media, location, id } = props;

  // let hero = "http://placecorgi.com/300/300";

  // if (media.length) {
  //   hero = media[0].small;
  // }

  return (
    <div id={'login'} className="login">
      {/* The action attribute defines the location (URL) where the form's collected data should be sent when it is submitted.*/}
      {/* The method attribute defines which HTTP method to send the data with (it can be "get" or "post").*/}
      <form action="/form-handler" method="post">
        <div>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="user-name"
            name="user_name"
            placeholder={'enter your user name'}
          />
        </div>
        <div>
          <label htmlFor="mail">E-mail:</label>
          <input
            type="email"
            id="user-email"
            name="user_mail"
            placeholder={'example@mail.com'}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
