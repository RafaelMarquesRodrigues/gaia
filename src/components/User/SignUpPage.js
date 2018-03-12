import React, { Component } from 'react'
import { 
	Link,
	withRouter
} from 'react-router-dom'

import * as routes from '../../constants/routes'
import { auth, db } from '../../api'

import { Paper, Grid, Button, TextField, Typography } from 'material-ui'

const SignUpPage = ({ history }) =>
	<div>
		<SignUpForm history={history}/>
	</div>

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null
}

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value
})

class SignUpForm extends Component {

	constructor(props){
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	onSubmit = event => {

		const {
			username,
			email,
			passwordOne
		} = this.state

		const {
			history
		} = this.props

		auth.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then(authUser => {

      			db.doCreateUser(authUser.uid, email)
	      		.then(() => {
		        	this.setState(() => ({ ...INITIAL_STATE }))
		        	history.push(routes.HOME)
	      		})
	      		.catch(error => {
		        	this.setState(byPropKey('error', error))
	    		})

      		})
			.catch(err => {
				this.setState(byPropKey('error', err))
			})

		event.preventDefault()
	}

	render(){
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
		} = this.state

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === ''

		return (
			<Grid container direction='column' justify='center' alignItems='center'>
				<Paper style={{padding: 30}}>
					<form onSubmit={this.onSubmit}>
					<Grid container direction='column' justify='center' alignItems='center'>
					<Typography variant="title">SignUp</Typography>
						<Grid item>
						<TextField
							value={username}
							onChange={event => this.setState(byPropKey('username', event.target.value))}
							type="text"
							placeholder="Full Name"
						/>
						</Grid>
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
							value={passwordOne}
							onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
							type="password"
							placeholder="Password"
						/>
						</Grid>
						<Grid item>
						<TextField
							value={passwordTwo}
							onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
							type="password"
							placeholder="Confirm Password"
						/>
						</Grid>
						<Grid item>
						<Button disabled={isInvalid} type="submit">
							Sign Up
						</Button>
						</Grid>

						{error && <p>{error.message}</p>}
					</Grid>
					</form>
				</Paper>
			</Grid>
		)
	}
}

const SignUpLink = () =>
	<p>
		no account ?
		<Link to={routes.SIGN_UP}> Sign Up</Link>
	</p>

export default withRouter(SignUpPage)

export {
	SignUpForm,
	SignUpLink
}