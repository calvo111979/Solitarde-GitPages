import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
//

import 'semantic-ui-css/semantic.min.css';
import FavIcon from './containers/images/simple_logo.png'
import Favicon from 'react-favicon';

const App = () => (
  <Router>
    <div>
      {/* <Favicon url={Favicon} /> */}
      {/* <nav>
        <Link exact to="/">Solitrade</Link>
      </nav> */}
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
