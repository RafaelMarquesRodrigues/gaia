import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { firebase } from './api'
import * as routes from './constants/routes'

const withAuthorization = (authCondition) => (Component) => {
  	class WithAuthorization extends React.Component {

	  	componentDidMount(){
	  		firebase.auth.onAuthStateChanged(authUser => {
	  			if(authUser){
	  				console.log(firebase.auth.currentUser.uid)
	  				console.log(firebase.auth.currentUser.role)
	  			}

	  			if(!authCondition(authUser)){
	  				this.props.history.push(routes.SIGN_IN)
	  			}
	  		})
	  	}

	    render() {
	      	return this.context.authUser ? <Component /> : null
	    }
  	
  	}

  	WithAuthorization.contextTypes = {
	  	authUser: PropTypes.object,
  	}

  	return withRouter(WithAuthorization)
}

export default withAuthorization