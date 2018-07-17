import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from 'routerHistory'

var Main = () => {
  return (
    <Router history={history}>
      <div>
        <div className="grid-container">
          <div className="grid-x align-center">
            <div className="cell medium-6 large-4 small-centered">
              <p>Main component rendered</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
};

module.exports = Main;
