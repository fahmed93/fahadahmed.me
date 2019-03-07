import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt src="images/portfolio/gamerconnector.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{portfolioData.projects[0].name}</h5>
                          <p>{portfolioData.projects[0].tag}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{' '}
                {/* item end */}
              </div>{' '}
              {/* portfolio-wrapper end */}
            </div>{' '}
            {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/gamerconnector.jpg"
                alt
              />
              <div className="description-box">
                <h4>{portfolioData.name}</h4>
                <p>{portfolioData.projects[0].description}</p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  {portfolioData.projects[0].tag}
                </span>
              </div>
              <div className="link-box">
                <a href="https://github.com/fahmed93/gamerconnector">Details</a>
                <a
                  style={{ marginLeft: 24 }}
                  href="http://gamerconnector.herokuapp.com/"
                >
                  Demo
                </a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
          </div>{' '}
          {/* row End */}
        </section>
      </React.Fragment>
    );
  }
}
