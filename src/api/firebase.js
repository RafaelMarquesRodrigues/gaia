import * as firebase from 'firebase'

const config = {
	apiKey: "AIzaSyAlLxL9EIUoxfnnCfaG37UDYz_yF8tMnUQ",
    authDomain: "gaia-prototype-dev.firebaseapp.com",
    databaseURL: "https://gaia-prototype-dev.firebaseio.com",
    projectId: "gaia-prototype-dev",
	storageBucket: "gaia-prototype-dev.appspot.com",
    messagingSenderId: "477505729022"
}

if(!firebase.apps.length){
	firebase.initializeApp(config)
}

const auth = firebase.auth()

export {
	auth,
}