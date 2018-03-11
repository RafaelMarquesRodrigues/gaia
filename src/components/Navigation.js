import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SignOutButton from './User/SignOutPage'

import * as routes from '../constants/routes'

import { Button, AppBar, Toolbar, Typography } from 'material-ui'

import lime from 'material-ui/colors/lime'

const Navigation = (props, { authUser }) => {

	return (
    	<div>
            { 
            	authUser 
                ? <NavigationAuth />
                : <NavigationNonAuth />
            }
        </div>
    )
}

const styles = {
    appBar: {
        background: lime['400'],
        marginBottom: 10
    }
}

const NavigationAuth = () =>
    <div style={{overflow: 'hidden'}}>
        <AppBar position="static" style={styles.appBar}>
            <Toolbar>
                <Typography variant="title" color="inherit" style={{flex: 1}}>
                    item voting
                </Typography>
                <Button style={{justify: 'flex-end'}} component={Link} to={routes.HOME}>  home  </Button>
                <Button style={{justify: 'flex-end'}} component={Link} to={routes.ACCOUNT}>  account  </Button>
		        <Button style={{justify: 'flex-end'}} component={Link} to={routes.ITEMS_VIEW}>
		        	item view  </Button>
                <Button style={{justify: 'flex-end'}} component={Link} to={routes.CHARTS_VIEW}>
                    chart  </Button>                    
				<SignOutButton />
            </Toolbar>
        </AppBar>
    </div>

const NavigationNonAuth = () =>
	<div style={{overflow: 'hidden'}}>
        <AppBar position="static" style={styles.appBar}>
            <Toolbar>
                <Typography variant="title" color="inherit" style={{flex: 1}}>
                    item voting
                    </Typography>
    		    <Button style={{justify: 'flex-end'}} component={Link} to={routes.SIGN_IN}>  sign in  </Button>
        		<Button style={{justify: 'flex-end'}} component={Link} to={routes.SIGN_UP}>  sign up  </Button>
            </Toolbar>
        </AppBar>
    </div>

Navigation.contextTypes = {
    authUser: PropTypes.object
}

export default Navigation