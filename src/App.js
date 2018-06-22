import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
//

import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <Router>
    <div>
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
