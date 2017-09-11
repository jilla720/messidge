import React, { PropTypes } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import GoogleButton from 'assets/btn_google_light_normal_ios.svg';
import FacebookButton from 'assets/FB-f-Logo__blue_144.png';

import { AuthContainer } from './styled';
import SignUpForm from './SignUpForm';

class Auth extends React.Component {

  getUser() {
    const user = firebase.auth().currentUser;
    console.log('current user', user);
  }

  logOut() {
    firebase.auth().signOut()
    .then(() => {
      // Sign-out successful.
      console.log('signout');
      this.props.router.push('/');
    });
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user.uid;

      this.props.router.push('/messidge');

      console.log(`token: ${token}\n user: ${user}`);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
  }

  signUpWithEmail(values) {
    // print the form values to the console
    const [email, password] = [values.get('email'), values.get('password')];
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
  }

  render() {
    return (
      <AuthContainer>

        <button onClick={() => this.getUser()}>
          get USer
        </button>
        <button onClick={() => this.logOut()}>
          logout
        </button>

        <button
          onClick={() => this.signInWithGoogle()}
        >
          <img role="presentation" src={FacebookButton} width="23" height="23" />
          Continue with Facebook
        </button>
        <button
          onClick={() => this.signInWithGoogle()}
        >
          <img role="presentation" src={GoogleButton} /> Continue with Google
        </button>
        <SignUpForm onSubmit={(values) => this.signUpWithEmail(values)} />

      </AuthContainer>
    );
  }
}

Auth.propTypes = {
  router: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Auth));
