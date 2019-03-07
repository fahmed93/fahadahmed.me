import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  <a href={personalData.facebook}>
                    <i className="fa fa-facebook" />
                  </a>
                </li>

                <li>
                  <a href={personalData.linkedin}>
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href={personalData.github}>
                    <i className="fa fa-github" />
                  </a>
                </li>
              </ul>
              <ul className="copyright">
                <li>© Copyright 2014 CeeVee</li>
                <li>
                  Design by{' '}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
