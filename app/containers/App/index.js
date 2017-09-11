/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router';
import firebase from 'firebase';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor() {
    super();
    const config = {
      apiKey: 'AIzaSyDUDxTvw-3yjt5XSKIzMubfbu8AkVskZGM',
      authDomain: 'messidge-6419a.firebaseapp.com',
      databaseURL: 'https://messidge-6419a.firebaseio.com/',
    };
    firebase.initializeApp(config);
  }


  render() {
    return (
      <div>
        <Link to="/">
          <h1 style={{ position: 'fixed' }}>
            Messidge
          </h1>
        </Link>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
