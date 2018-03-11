import React, { Component } from 'react';

import ChartView from './components/ChartView/ChartView'
import ItemView from './components/ItemView/ItemView'
import SignInPage from './components/User/SignInPage'
import SignUpPage from './components/User/SignUpPage'
import PasswordForgetPage from './components/User/PasswordForgetPage'
import Account from './components/User/Account'
import HomePage from './components/HomePage'
import Navigation from './components/Navigation'

import withAuthentication from './withAuthentication'

import { db } from './api'

import * as routes from './constants/routes'

import blueGrey from 'material-ui/colors/blueGrey'

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            data: null,
            users: null,
            unsubscribeData: null,
            unsubscribeUsers: null,
            currentItemId: null,
            currentSearchItems: null,
            showDetails: false,
        }

        this.addItem = this.addItem.bind(this)
        this.showDetails = this.showDetails.bind(this)
        this.verifyItem = this.verifyItem.bind(this)
        this.searchItem = this.searchItem.bind(this)
    }

    componentDidMount(){
        let listener = db.listenToCollection('products', products => {
            this.setState({
                data: products
            })
        }, err => console.log(err))


        let usersListener = db.listenToCollection('users', users => {
            this.setState({
                users
            })
        }, err => console.log(err))

        this.setState({
          unsubscribeData: listener,
          unsubscribeUsers: usersListener
        })
    } 

    componentWillUnmount(){
        this.state.unsubscribeData()
        this.state.unsubscribeUsers()
    }

    verifyItem(id) {
        db.updateItem('products', id, {'verified': true})
        .catch(err => console.log(err))
    }

    addItem(type, brand){
        db.addToCollection('products', type, brand)
        .then(() => console.log('added !test'))
        .catch((err) => console.log('error adding product ' + err))
    }

    searchItem(id){
        db.searchByField('products', 'id', id).then(snapshot => {
            let items = []

            snapshot.forEach(doc => items.push(doc.data()))

            this.setState({
                currentSearchItems: items && items.length > 0 ? items : null,
                currentItemId: items[0].id
            })

        }).catch(err => console.log(err))


    }

    showDetails(id){
        db.search('products', id).then(item => {

        this.setState({
            currentItemId: item.data().id,
            showDetails: true
        })
  
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <Router>
                <div style={{overflow: 'hidden', height: "100vh", background: blueGrey[50]}}>
                    <Navigation/>

                    <Route path={routes.HOME}
                        render={() => {
                            return (
                                <HomePage />
                            )
                        }}
                    />

                    <Route path={routes.SIGN_IN}
                        render={() => {
                            return (
                                <SignInPage />
                            )
                        }}
                    />
                    
                    <Route path={routes.SIGN_UP}
                        render={() => {
                            return (
                                <SignUpPage />
                            )
                        }}
                    />
                    
                    <Route path={routes.PASSWORD_FORGET}
                        render={() => {
                            return (
                                <PasswordForgetPage />
                            )
                        }}
                    />

                    <Route path={routes.ACCOUNT}
                        render={() => {
                            return (
                                <Account />
                            )
                        }}
                    />

                    <Route path={routes.ITEMS_VIEW}
                        render={() => {
                            return (
                                <ItemView addItem={this.addItem}
                                        data={this.state.data}
                                        showDetails={this.showDetails}
                                        verifyItem={this.verifyItem}
                                        searchItem={this.searchItem}
                                        currentItem={this.state.currentItemId ? 
                                                this.state.data.find(n => n.id === this.state.currentItemId)
                                                : null }
                                />
                            )
                        }}
                    />

                    <Route path={routes.CHARTS_VIEW}
                        render={() => {
                            return(
                                <ChartView data={this.state.data} />
                            )
                        }}
                    />
                </div>
            </Router>
        )
    }
}


export default withAuthentication(App);
