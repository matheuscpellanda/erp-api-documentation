import React, { Component } from 'react';
import './css/Documentations.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DocumentationBox from '../components/Documentations/DocumentationCategory';
import documentationJson from '../assets/documentations/documentations.json';

export default class Documentations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: 'closed',
      toCloseMenu: false,
    };
  }

  render() {
    const { menuState, toCloseMenu } = this.state;
    return (
      <>
        <Header
          acao
          openMenu={() => { this.setState({ menuState: 'opened' }); }}
          toCloseMenu={toCloseMenu}
        />
        <div
          className="documentations"
          onFocus={() => {
            if (menuState === 'opened') this.setState({ toCloseMenu: true });
          }}
          onPointerMove={() => {
            if (menuState === 'opened') this.setState({ toCloseMenu: true });
          }}
        >
          <span className="label">Documentations</span>
          <h1 className="doc-title">Welcome to the ERP API reference documentation!</h1>
          <p>
            This ERP is a NOT comercial Application, designed
            and created by a very applied and hardworking student,
            in order to improve his knowledge and maybe even develop something great.
          </p>
          <p>
            Links to this application&apos;s docs will be provided below.
          </p>
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
          <hr className="doc-separator" />
          {
            documentationJson.map((obj) => (
              <DocumentationBox key={obj.id} data={obj} />))
          }
        </div>
        <Footer />
      </>
    );
  }
}
