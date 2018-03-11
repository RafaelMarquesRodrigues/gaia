import React from 'react'
import { Button, TextField } from 'material-ui'

import deepOrange from 'material-ui/colors/deepOrange'

export default class AddItem extends React.Component {

    state = {
        type: '',
        brand: '',
        amount: ''
    }

    handleChange = option => event => {
        this.setState({
            [option]: event.target.value,
        })
    }

    render(){
		const { onClick } = this.props

        return (
            <form onSubmit={e => {
                e.preventDefault()

                if((this.state.type && this.state.brand) && 
                  (!this.state.type.trim() || !this.state.brand.trim())){
                  return
                }
                
                onClick(this.state.type, this.state.brand)

                this.setState({
                  type: '',
                  brand: '',
                })

              }}
                >
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <TextField
                        id="with-placeholder"
                        label="Product type"
                        placeholder="Required"
                        margin="none"
                        value={this.state.type}
                        onChange={this.handleChange('type')}
                    />
                    <TextField
                        id="with-placeholder"
                        label="Product brand"
                        margin="none"
                        value={this.state.brand}
                        onChange={this.handleChange('brand')}
                    />
                    <Button 
                        type="submit" variant="raised" style={{background: deepOrange[400]}}>
                        Add  
                    </Button>
                </div>
            </form>
        )
    }
}