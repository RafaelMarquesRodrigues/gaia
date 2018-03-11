import React from 'react';

import { auth } from '../../api';

import { Button } from 'material-ui'

const SignOutButton = () =>
  	<Button
  		style={{justify: 'flex-end'}}
    	type="button"
    	onClick={auth.doSignOut}
	  	>
	    Sign Out
  	</Button>

export default SignOutButton;