import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './css/Home.css';
import example01 from '../images/example_01.png';
import example02 from '../images/example_02.png';
import paymentResponse200 from '../assets/payment_response.json';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='home'>
          <div className='wallpaper'>
            <h1 className='home-title'>A simple way to organize <color>...business...</color></h1>
            <div className='row-get-started'>
              <button type='button' className='home-get-started'>Get Started</button>
              <h2 className='home-last-updated'>Last updated: 19/12/2022</h2>
            </div>
            <h2 className='title-example-payments'>Consult Payment Method</h2>
            <div className='row-example-payments'>
              <div className='row gap'>
                <img className='image-example-payments' src={ example01 } alt="Exemplo código 01" />
                <img className='image-example-payments' src={ example02 } alt="Exemplo código 02" />
              </div>
              <div className='column'>
                <div className='code-example code-example-payments'>
                <code><color>return</color>aqui vai o código</code>
                </div>
                <div className='code-example code-example-payments'>
                  <pre>{ JSON.stringify(paymentResponse200) }</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
