import React, { Component } from 'react';
import { Route, 
    BrowserRouter as Router,
    withRouter,
  Switch
} from 'react-router-dom';
import Home from '../Home/Home';
import Resume from '../Resume/resume';
import User from '../User/User';
 class RouterContent extends Component {
  render() {
    return (
      <div
      style={{
        height: 'calc(100vh - 50px)',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        padding: '0 2rem',
      }}
    >
      <Switch>
      <Route exact  path='/' component={Home} />
      <Route exact  path='/resume' component={Resume} />
      <Route exact  path='/user'  component={User} />
      </Switch>
      </div>
    )
  }
}
export default withRouter(RouterContent)