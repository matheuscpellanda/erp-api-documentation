import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './css/Documentations.css';
import { Header, Footer } from '../components';
import DocumentationCategory from '../components/Documentations';
import documentationJson from '../assets/documentations/documentations.json';

export default class Documentations extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <Header acao />
        <div className="documentations">
          <span className="label">Documentations</span>
          <div className="doc-primary">
            <div className="doc-resume">
              <h1 className="doc-title">Welcome to the ERP API reference documentation!</h1>
              <p>
                This ERP is a NOT comercial Application, designed
                and created by a very applied and hardworking student,
                in order to improve his knowledge and maybe even develop something great.
              </p>
              <p>
                Links to this application&apos;s docs will be provided below.
              </p>
            </div>
            <div className="doc-resume">
              <p>
                All documentation has been separated into topics:
              </p>
              <ul>
                <li>
                  <strong>Flowcharts</strong>
                  : Some flowcharts were specially prepared to
                  illustrate and better demonstrate the entire
                  process flow of this application main functions.
                </li>
                <li>
                  <strong>Entities</strong>
                  : All JavaScript entities created and used in this API
                  are shown in this section.
                </li>
                <li>
                  <strong>Use Cases</strong>
                  : In this section, only the global application
                  functionalities are presented, in other words,
                  only the Use Cases that can be accessed externally.
                </li>
              </ul>
            </div>
          </div>
          <hr className="doc-separator" />
          {
            documentationJson.map((obj) => (
              <DocumentationCategory key={obj.id} data={obj} history={history} />))
          }
        </div>
        <Footer />
      </>
    );
  }
}

Documentations.propTypes = {
  history: PropTypes.shape().isRequired,
};
