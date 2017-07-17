import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import { firebaseConfig } from './apiConfig';
import Router from './Router';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
    this.auth();
  }

  auth() {
    firebase.auth().signInAnonymously()
      .catch(error => console.error(error))
      .then(user => console.log(user.uid));
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
