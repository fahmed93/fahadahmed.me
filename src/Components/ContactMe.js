import React, { Component } from 'react';
import axios from 'axios';

export default class ContactMe extends Component {
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactEmail: '',
      contactSubject: '',
      contactMessage: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const contactData = {
      contactName: this.state.contactName,
      contactEmail: this.state.contactEmail,
      contactSubject: this.state.contactSubject,
      contactMessage: this.state.contactMessage
    };
    axios
      .post(
        'https://p12u3yqy1a.execute-api.us-east-1.amazonaws.com/default/appendSpreadsheet',
        contactData
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns" />
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size={35}
                      id="contactName"
                      name="contactName"
                      value={this.state.value}
                      onChange={this.onChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size={35}
                      id="contactEmail"
                      name="contactEmail"
                      value={this.state.value}
                      onChange={this.onChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      size={35}
                      id="contactSubject"
                      name="contactSubject"
                      value={this.state.value}
                      onChange={this.onChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols={50}
                      rows={15}
                      id="contactMessage"
                      name="contactMessage"
                      value={this.state.value}
                      onChange={this.onChange}
                    />
                  </div>
                  <div>
                    <button className="submit" onSubmit={this.onSubmit}>
                      Submit
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>{' '}
              {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning"> Error boy</div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />
                Your message was sent, thank you!
                <br />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
