import React, { Component } from 'react';
import Bars from 'react-bars';
export default class Resume extends Component {
  render() {
    let educationData = this.props.educationData;
    let workData = this.props.workData;
    let responsibilities = workData.responsibilities
      .split('\\n')
      .map((item, i) => {
        return <p key={i}>{item}</p>;
      });
    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>{educationData.school}</h3>
                  <p className="info">
                    {educationData.degree} <span>•</span>{' '}
                    <em className="major">{educationData.major}</em>{' '}
                    <span>•</span>{' '}
                    <em className="date">{educationData.year}</em>
                  </p>
                  <h5>Relevant Courses</h5>
                  <p>{educationData.classes.join(' | ')}</p>
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>{workData.company}</h3>
                  <p className="info">
                    {workData.title} <span>•</span>{' '}
                    <em className="date">{workData.years}</em>
                  </p>
                  {responsibilities}
                </div>
              </div>{' '}
              {/* item end */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand javascript" />
                    <em>Javascript</em>
                  </li>
                  <li>
                    <span className="bar-expand java" />
                    <em>Java</em>
                  </li>
                  <li>
                    <span className="bar-expand reactjs" />
                    <em>React.js</em>
                  </li>
                  <li>
                    <span className="bar-expand amazonwebservices" data={50} />
                    <em>Amazon Web Services</em>
                  </li>
                  <li>
                    <span className="bar-expand mongodb" />
                    <em>MongoDB</em>
                  </li>
                  <li>
                    <span className="bar-expand sql" />
                    <em>SQL</em>
                  </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{' '}
            {/* main-col end */}
          </div>{' '}
          {/* End skills */}
        </section>{' '}
        {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
