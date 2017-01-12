import React from 'react';
import $ from 'jquery';
'use strict'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="about" id="about">
          <div className="about part-one">
            <div className="bio-text">
              <div className="welcome">
                Nice to meet you, I'm Yoko.
              </div>
              <div className="bio">
                I'm a senior at Vanderbilt University, studying Neuroscience and Computer Science.
                If I'm not drowning in coursework, you can find me cooking, volunteering, singing, <a href="https://open.spotify.com/user/yokooooooooo">looking for music</a>, or sleeping off the semester in my lovely hometown of Palo Alto.
              </div>
            </div>
            <img className="bio-pic" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/15542208_10154857158763679_5913327125144980838_n.jpg?oh=694b745817f1e5f23e2b7597ea076904&oe=591CB45B" />
          </div>
        </div>
      );
    }
}

export default About;