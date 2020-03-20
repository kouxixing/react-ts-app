import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import about from '../src/pages/about/about';
import home from '../src/pages/home/home';
ReactDOM.render(
<Router>

<Switch>
  <Route exact path="/" component={home} />
  <Route path="/about" component={about}/>
</Switch>
</Router>,
document.getElementById('root')
)