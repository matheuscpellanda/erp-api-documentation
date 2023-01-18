import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './css/Home.css';
import example01 from '../images/example_01.png';
import example02 from '../images/example_02.png';
import example03 from '../images/example_03.png';
import example04 from '../images/example_04.png';
import example05 from '../images/example_05.png';
import example06 from '../images/example_06.png';
import example07 from '../images/example_07.png';
import example08 from '../images/example_08.png';
import paymentResponse from '../assets/examples/payment_response.json';
import orderCreationResponse from '../assets/examples/order_creation_response.json';
import shippingTrackingResponse from '../assets/examples/shipping_response.json';
import CodeBox from '../components/CodeBox';

const selectPaymentResponse = (code) => {
  switch (code) {
    case '200':
      return paymentResponse['200'];
    case '400':
      return paymentResponse['400'];
    case '401':
      return paymentResponse['401'];
    case '405':
      return paymentResponse['405'];
    default:
      return paymentResponse['200'];
  }
};

const selectOrderCreationResponse = (code) => {
  switch (code) {
    case '200':
      return orderCreationResponse['200'];
    case '400':
      return orderCreationResponse['400'];
    case '401':
      return orderCreationResponse['401'];
    case '405':
      return orderCreationResponse['405'];
    default:
      return orderCreationResponse['200'];
  }
};

const selectShippingTrackingResponse = (code) => {
  switch (code) {
    case '200':
      return shippingTrackingResponse['200'];
    case '400':
      return shippingTrackingResponse['400'];
    case '401':
      return shippingTrackingResponse['401'];
    case '405':
      return shippingTrackingResponse['405'];
    default:
      return shippingTrackingResponse['200'];
  }
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPaymentResponse: '200',
      showOrderCreationResponse: '200',
    };
  }

  showResponsePayment = ({ target: { innerText } }) => {
    this.setState({
      showPaymentResponse: innerText,
    });
  };

  showResponseOrderCreation = ({ target: { innerText } }) => {
    this.setState({
      showOrderCreationResponse: innerText,
    });
  };

  showResponseShippingTracking = ({ target: { innerText } }) => {
    this.setState({
      showShippingTrackingResponse: innerText,
    });
  };

  render() {
    const {
      showPaymentResponse,
      showOrderCreationResponse,
      showShippingTrackingResponse,
    } = this.state;
    return (
      <>
        <Header />
        <div className="home">
          <div className="wallpaper">
            <h1 className="home-title">
              A simple way to organize
              {' '}
              <color>...business...</color>
            </h1>
            <div className="row-get-started">
              <button type="button" className="home-get-started">Get Started</button>
              <h2 className="home-last-updated">Last Update: 18/01/2023</h2>
            </div>
          </div>
          <h2 className="title-example">Example of Order Creation</h2>
          <div className="row-example">
            <div className="row-images">
              <img className="image-example" src={example03} alt="Exemplo código 03" />
              <img className="image-example" src={example04} alt="Exemplo código 04" />
              <img className="image-example" src={example05} alt="Exemplo código 05" />
              <img className="image-example" src={example06} alt="Exemplo código 06" />
            </div>
            <div className="column">
              <div className="response-header">
                Response Example
                <button type="button" onClick={this.showResponseOrderCreation}>200</button>
                <button type="button" onClick={this.showResponseOrderCreation}>400</button>
                <button type="button" onClick={this.showResponseOrderCreation}>401</button>
                <button type="button" onClick={this.showResponseOrderCreation}>405</button>
              </div>
              <CodeBox
                data={selectOrderCreationResponse(showOrderCreationResponse)}
              />
            </div>
          </div>
          <h2 className="title-example">Example of Payment Consult</h2>
          <div className="row-example">
            <div className="row gap">
              <div className="row-images">
                <img className="image-example" src={example01} alt="Exemplo código 01" />
                <img className="image-example" src={example02} alt="Exemplo código 02" />
              </div>
            </div>
            <div className="column">
              <div className="response-header">
                Response Example
                <button type="button" onClick={this.showResponsePayment}>200</button>
                <button type="button" onClick={this.showResponsePayment}>400</button>
                <button type="button" onClick={this.showResponsePayment}>401</button>
                <button type="button" onClick={this.showResponsePayment}>405</button>
              </div>
              <CodeBox
                data={selectPaymentResponse(showPaymentResponse)}
              />
            </div>
          </div>
          <h2 className="title-example">Example of Shipping Tracking</h2>
          <div className="row-example">
            <div className="row-images">
              <img className="image-example" src={example07} alt="Exemplo código 07" />
              <img className="image-example" src={example08} alt="Exemplo código 08" />
            </div>
            <div className="column">
              <div className="response-header">
                Response Example
                <button type="button" onClick={this.showResponseShippingTracking}>200</button>
                <button type="button" onClick={this.showResponseShippingTracking}>400</button>
                <button type="button" onClick={this.showResponseShippingTracking}>401</button>
                <button type="button" onClick={this.showResponseShippingTracking}>405</button>
              </div>
              <CodeBox
                data={selectShippingTrackingResponse(showShippingTrackingResponse)}
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
