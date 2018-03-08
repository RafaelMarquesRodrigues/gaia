import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase'

var config = {
	apiKey: "AIzaSyAlLxL9EIUoxfnnCfaG37UDYz_yF8tMnUQ",
    authDomain: "gaia-prototype-dev.firebaseapp.com",
    databaseURL: "https://gaia-prototype-dev.firebaseio.com",
    projectId: "gaia-prototype-dev",
    storageBucket: "",
    messagingSenderId: "477505729022"
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
