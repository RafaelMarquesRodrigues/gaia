import React, { Fragment } from 'react'
import 'material-ui/TextField'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

export default props => {
		let search = ''

    return (
    	<Fragment>
        <div>
          <TextField
	          id="search"
	          label="Search field"
	          type="search"
	          margin="normal"
        	/>
         <Button variant="fab" mini color="secondary" aria-label="add" onClick={() => console.log(this.search)}>
          <i className="material-icons">search</i>
        </Button>
        </div>
      </Fragment>
    )
}