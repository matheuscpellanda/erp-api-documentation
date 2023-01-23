import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './css/Home.css';
import example01 from '../images/example_01.png';
// import example02 from '../images/example_02.png';
import example03 from '../images/example_03.png';
// import example04 from '../images/example_04.png';
// import example05 from '../images/example_05.png';
// import example06 from '../images/example_06.png';
import example07 from '../images/example_07.png';
// import example08 from '../images/example_08.png';
import paymentResponse from '../assets/examples/payment_response.json';
import orderCreationResponse from '../assets/examples/order_creation_response.json';
import shippingTrackingResponse from '../assets/examples/shipping_response.json';
import UseCaseExample from '../components/UseCaseExample';

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
    const { acao: ativaCor } = this.props;
    return (
      <>
        <Header acao={ativaCor} />
        <div className="home">
          <span className="get-started">
            <h1 className="home-title">A simple way</h1>
            <h1 className="home-title">to organize business</h1>
            <div className="row-get-started">
              <h2 className="home-last-updated">Last Update: 23/01/2023</h2>
              <button type="button" className="home-get-started">Get Started</button>
            </div>
          </span>
          <div className="wallpaper" />
          <UseCaseExample
            title="Order"
            data={selectOrderCreationResponse(showOrderCreationResponse)}
            showResponse={this.showResponseOrderCreation}
            image={example03}
          />
          <UseCaseExample
            title="Payment"
            data={selectPaymentResponse(showPaymentResponse)}
            showResponse={this.showResponsePayment}
            image={example01}
          />
          <UseCaseExample
            title="Shipping"
            data={selectShippingTrackingResponse(showShippingTrackingResponse)}
            showResponse={this.showResponseShippingTracking}
            image={example07}
          />
        </div>
        <Footer />
      </>
    );
  }
}

Home.propTypes = {
  acao: PropTypes.bool.isRequired,
};
