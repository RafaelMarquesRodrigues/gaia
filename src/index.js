import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
//import * as firebase from 'firebase'
//import 'firebase/firestore'
import Reboot from 'material-ui/Reboot';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gaiaApp from './reducers'

/*
var config = {
	apiKey: "AIzaSyD69WN4UfT9yVlrGsuiRTM-1YkNgEgrqng",
  authDomain: "gaia-prototype.firebaseapp.com",
  projectId: "gaia-prototype",
}

firebase.initializeApp(config);

firebase.firestore();
*/

let store = createStore(gaiaApp)

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Reboot />
			<App />
		</div>
	</Provider>, document.getElementById('root'))

registerServiceWorker()
