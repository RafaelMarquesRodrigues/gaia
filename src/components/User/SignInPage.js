import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { SignUpLink } from './SignUpPage'
import { auth } from '../../api'

import * as routes from '../../constants/routes'

import { PasswordForgetLink } from './PasswordForgetPage'

import { Grid, Paper, Button, TextField, Typography } from 'material-ui'

const SignInPage = ({ history }) =>
	<Grid container direction='column' justify='center' alignItems='center'>
		<Paper style={{padding: 30}}>
	    	<SignInForm history={history} />
	    	<PasswordForgetLink />
	    	<SignUpLink />
  		</Paper>
  	</Grid>

const byPropKey = (propertyName, value) => () => ({
  	[propertyName]: value
})

const INITIAL_STATE = {
  	email: '',
  	password: '',
  	error: null
}

class SignInForm extends Component {
  	constructor(props) {
    	super(props)

    	this.state = { ...INITIAL_STATE }
  	}

  	onSubmit = event => {
    	const {
	      	email,
	      	password
    } = this.state

    const {
      	history,
    } = this.props

    auth.doSignInWithEmailAndPassword(email, password)
      	.then(() => {
	        this.setState(() => ({ ...INITIAL_STATE }))
	        history.push(routes.HOME)
      	})
      	.catch(error => {
	        this.setState(byPropKey('error', error))
    	})

    	event.preventDefault()
  	}

	render() {
	    const {
	      	email,
	      	password,
	      	error
	    } = this.state

	    const isInvalid =
	      	password === '' ||
	      	email === ''

	    return (
	      	<form onSubmit={this.onSubmit}>
	      		<Grid container direction='column' justify='center' alignItems='center'>
	      			<Typography variant="title">SignIn</Typography>
					<Grid item>
						<TextField
							value={email}
							onChange={event => this.setState(byPropKey('email', event.target.value))}
							type="text"
							placeholder="Email Adress"
						/>
					</Grid>
					<Grid item>
						<TextField
							value={password}
							onChange={event => this.setState(byPropKey('password', event.target.value))}
							type="password"
							placeholder="Password"
						/>
					</Grid>
						<Button disabled={isInvalid} type="submit">
							Sign In
						</Button>
				</Grid>

		        { error && <p>{error.message}</p> }
	      	</form>
	    )
	}
}

export default withRouter(SignInPage)

export {
  	SignInForm
}