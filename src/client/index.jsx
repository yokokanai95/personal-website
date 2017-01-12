import React from 'react';
import $ from 'jquery';
// import About from './about.jsx'
// import Projects from './projects.jsx'
'use strict'

class Index extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <div className="index">
            <div className="name-blast">YOKO KANAI</div>
            <div className="sub-blast">full-stack web developer</div>
            <div className="sub-sub-blast">palo alto | nashville</div>
            <div className="logos">
              <a href="https://www.twitter.com/yokocani"><img className="social-logo" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitter-circle-128.png"/></a>
              <a href="https://www.linkedin.com/in/yokokanai"><img className="social-logo" src="http://marisasanfilippo.com/wp-content/uploads/2015/07/Linkedin_circle.svg_.png"/></a>
              <a href="https://www.github.com/yokokanai95"><img className="social-logo" src="http://image.flaticon.com/icons/svg/25/25231.svg"/></a>
            </div>
          </div>
        </div>
      );
    }
}

export default Index;