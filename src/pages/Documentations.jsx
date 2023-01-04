import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './css/Documentations.css';

export default class Documentations extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="documentations">
          <article>
            <span>Documentations</span>
            <h1>📄️ API Documentations</h1>
            <hr />
            <h2>Testes</h2>
            <section>
              <Link className="doc-box" to="/doc-reference-api/services">
                <div className="row">
                  📄️
                  <h2>Teste 1</h2>
                </div>
                <hr />
                <h3>Show all teste1 documentations</h3>
              </Link>
              <Link className="doc-box" to="/doc-reference-api/services">
                <div className="row">
                  📄️
                  <h2>Teste 2</h2>
                </div>
                <hr />
                <h3>Show all teste2 documentations</h3>
              </Link>
              <hr />
            </section>
            <h2>Testes</h2>
            <section>
              <Link className="doc-box" to="/doc-reference-api/entities">
                <div className="row">
                  📄️
                  <h2>Entities</h2>
                </div>
                <hr />
                <h3>Show all entities documentations</h3>
              </Link>
              <Link className="doc-box" to="/doc-reference-api/usecases">
                <div className="row">
                  📄️
                  <h2>Use Cases</h2>
                </div>
                <hr />
                <h3>Show all use cases documentations</h3>
              </Link>
              <Link className="doc-box" to="/doc-reference-api/providers">
                <div className="row">
                  📄️
                  <h2>Providers</h2>
                </div>
                <hr />
                <h3>Show all providers documentations</h3>
              </Link>
              <Link className="doc-box" to="/doc-reference-api/repositories">
                <div className="row">
                  📄️
                  <h2>Repositories</h2>
                </div>
                <hr />
                <h3>Show all repositories documentations</h3>
              </Link>
              <Link className="doc-box" to="/doc-reference-api/services">
                <div className="row">
                  📄️
                  <h2>Services</h2>
                </div>
                <hr />
                <h3>Show all services documentations</h3>
              </Link>
            </section>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}
