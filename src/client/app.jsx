import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import Index from './index.jsx'
import About from './about.jsx'
import Projects from './projects.jsx'
'use strict'

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <div className="header">
          <table className="nav-bar">
            <tr>
              <td className="nav-item"><a className="nav-item-text" href='#about'>ABOUT</a></td>
              <td className="nav-item"><a className="nav-item-text" href='#projects'>PROJECTS</a></td>
              <td className="nav-item"><a className="nav-item-text" href='#resume'>RESUME</a></td>
              <td className="nav-item"><a className="nav-item-text" href='#contact'>CONTACT</a></td>
            </tr>
          </table>
        </div>
        <div className="body">
          <Index />
          <About/>
          <Projects />
          <div id="resume" />
          <div id="contact" />
        </div>
      </div>
    );
  }
}

export default App;

