import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyD69WN4UfT9yVlrGsuiRTM-1YkNgEgrqng",
  authDomain: "gaia-prototype.firebaseapp.com",
  projectId: "gaia-prototype",
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
