import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
//import 'firebase/firestore'
import Reboot from 'material-ui/Reboot';

import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyD69WN4UfT9yVlrGsuiRTM-1YkNgEgrqng",
  authDomain: "gaia-prototype.firebaseapp.com",
  projectId: "gaia-prototype",
}

firebase.initializeApp(config)

//var db = firebase.firestore();

ReactDOM.render(
		<div>
			<Reboot />
			<App/>
		</div>, document.getElementById('root'))

registerServiceWorker()
