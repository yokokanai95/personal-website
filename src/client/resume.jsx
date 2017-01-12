import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
'use strict'

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="resume" id="resume">
          <div className="resume-top">
            <div className="resume-top name">Yoko Kanai</div>
            <div classname="resume-top details">BA, Neuroscience & Computer Science <span className="resume-top separator">|</span> Vanderbilt University</div>
          </div>
          <div className="resume-center">
            <div className="resume-left">
            </div>
            <div className="resume-right">
            </div>
          </div>
          <div className="resume-bottom">
            <div></div>
          </div>
        </div>
      );
    }
}

export default Resume;