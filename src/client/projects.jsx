import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
'use strict'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          slide: 1
        }

    }

    lastSlide() {
      this.setState({ slide: (this.state.slide + 2) % 3});
    }

    nextSlide() {
      this.setState({ slide: (this.state.slide + 1) % 3});
    }

    render() {
      let slide = this.state.slide;
      let project = this.props.projects[slide];
      return (
        <div className="projects-section" id="projects">
          <div className="projects-section-title">PROJECTS</div>
          <div className="projects">
            <div className="project-slider" style={{ backgroundImage: 'url(' + project.image + ')' }}>
              <button className="project-button-last" onClick={this.lastSlide.bind(this)}></button>
              <button className="project-button-next" onClick={this.nextSlide.bind(this)}></button>
              <div className="project-overlay">
                <div className="project-text">
                  <div className="project-title">{project.title}</div>
                  <div className="project-description">{project.description}</div>
                  <div className="project-used">{project.used}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

Projects.defaultProps = {
  projects: [
    {
      title: 'CardPlay',
      description: 'As part of my Web-Based Systems Architecture coursework, I built an entire solitaire web-app from scratch',
      used: 'React, Node, Express, Redis, MongoDB, Mongoose, Backbone, Pug, Webpack',
      image: '/img/cardplay.png'
    },
    { title: 'thredUP Account Page',
      description: 'During my internship at thredUP, a popular online thrift store, I helped migrate the customer account page from Ruby on Rails to React/Node/Redux. This required that I become very familiar with the thredUP REST API, as well as create an entirely new Redux ',
      used: 'React, Ruby on Rails, Node, Express, Redux, MartyJS, Gulp, Redis, Docker',
      image: '/img/account-page.png'
    },
    {
      title: 'Cardiology Traffic Control',
      description: 'As part of my Principles of Software Engineering coursework, I built an entire solitaire web-app from scratch',
      used: 'AngularJS, Bower, JHipster, Docker, Java',
      image: '/img/cardiology.png'
    }
  ]
};

export default Projects;