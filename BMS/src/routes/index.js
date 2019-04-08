
import React, { Component } from 'react';
import { Route, Switch ,Redirect} from 'react-router-dom';
 
import App from '../App'; 
import Login from '../pages/Login';
 
class MRoute extends Component {
    render() {
        return (
            <Switch>
                <Route path="/app" component={App}/>
                <Route path="/login" component={Login}/>
                <Redirect from="/" to="/login" />
            </Switch>
        );
  }
}
 
export default MRoute;
