import React from 'react'
import {Route, Switch} from 'react-router-dom'
import LandingPage from './Welcome'
import Login from './authentication/Login'
import Register from './authentication/Register'


const BaseLayout = (props) =>{
    return(
        <>
            <Switch>
                <Route exact path='/login'>
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="">
                    <LandingPage/>
                </Route>
            </Switch>
        </>
    )
}

export default BaseLayout