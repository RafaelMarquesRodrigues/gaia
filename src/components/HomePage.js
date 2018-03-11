import React, { Component } from 'react'
import withAuthorization from '../withAuthorization'

import { db } from '../api'

class HomePage extends Component {

	constructor(props){
		super(props)

		this.state = {
			users: null
		}
	}

	componentDidMount(){
		db.onceGetUsers().then(snapshot => {
			let u = []

			snapshot.forEach(doc => {
				u.push(doc.data())
			})

			this.setState({users: u})
		})
	}

	render() {
		if(!this.state.users){
			return (<div>no users</div>)
		}
		return (
			<div>
				<h1>home</h1>
				<ul>
				{
					Object.keys(this.state.users).map(key =>
						<li key={key}>{this.state.users[key].email}</li>
					)
				}
				</ul>
			</div>
		)
	}
}

const authCondition = authUser => !!authUser

export default withAuthorization(authCondition)(HomePage)