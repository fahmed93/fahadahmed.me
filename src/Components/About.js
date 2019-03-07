import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let aboutData = this.props.aboutData;
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{aboutData.aboutMe}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{aboutData.name}</span>
                    <br />
                    <span>{aboutData.email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="/documents/resume.pdf" className="button">
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>{' '}
              {/* end row */}
            </div>{' '}
            {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
