/* Copyright G. Hemingway, 2015 - All rights reserved */
"use strict";


// Necessary modules
import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'
import Index from './index.jsx'
import About from './about.jsx'
import Projects from './projects.jsx'
import Resume from './resume.jsx'
import Contact from './contact.jsx'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
require('./styles.css');

/*************************************************************************/

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'));


      // <IndexRoute name="index" component={Index}/>
      // <Route path="about" component={About}/>
      // <Route path="projects" component={Projects}/>
      // <Route path="resume" component={Resume}/>
      // <Route path="contact" component={Contact}/>