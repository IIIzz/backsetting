import React, { Component } from 'react';
import { Route, 
  HashRouter as Router,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';
import App from '../App';
import Login from '../Component/Login/Login';
import Loginbake from '../Component/Loginbake/loginbake';
import NotFound from '../Component/NotFound/NotFound';
import Home from '../Component/Home/Home';
import Resume from '../Component/Resume/resume';
import User from '../Component/User/User';
 class Entrance extends Component {
  render() {
    return (
      // basename="/console"
      <Router >
        <Switch>
        <Route  exact path="/" render={() => <Redirect to="/app/home" push />}/>
         <Route path="/app" component={App} />
        <Route  path="/loginbake" component={Login} />
        <Route  path="/login" component={Loginbake} />
        <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
export default Entrance