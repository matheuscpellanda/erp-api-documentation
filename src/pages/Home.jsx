import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { motion } from 'framer-motion';
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
import Subscribe from '../components/Subscribe';

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
  animationTitles = {
    className: 'home-title',
    whileInView: () => {
      const { toOpen } = this.state;
      if (!toOpen) {
        this.setState({
          toOpen: true,
        });
      }
    },
    transition: { type: 'tween', duration: 2 },
    initial: { x: -200 },
    animate: () => {
      const { toOpen } = this.state;
      let resp = {};
      if (toOpen) {
        resp = { x: [-200, 0] };
      }
      return resp;
    },
  };

  animationButtonStarted = {
    className: 'button-get-started',
    animate: () => {
      const { toOpen } = this.state;
      let resp = {};
      if (toOpen) {
        resp = {
          scale: 1,
          x: [40, 0],
        };
        return resp;
      }
      return resp;
    },
    transition: { type: 'tween', duration: 2 },
    whileHover: () => ({ scale: 1.1, transition: { duration: 0.2 } }),
    initial: { x: 40 },
    onClick: () => {
      const { history } = this.props;
      setTimeout(() => {
        history.push('/entities');
      }, 150);
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      showPaymentResponse: '200',
      showOrderCreationResponse: '200',
      toOpen: undefined,
      menuState: 'closed',
      toCloseMenu: false,
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
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
      menuState,
      toCloseMenu,
    } = this.state;
    const { acao: ativaCor } = this.props;
    return (
      <>
        <Header acao={ativaCor} openMenu={() => { this.setState({ menuState: 'opened' }); }} toCloseMenu={toCloseMenu} />
        <div
          className="home"
          onFocus={() => {
            if (menuState === 'opened') this.setState({ toCloseMenu: true });
          }}
          onPointerMove={() => {
            if (menuState === 'opened') this.setState({ toCloseMenu: true });
          }}
        >
          <span className="get-started">
            <motion.h1
              {...this.animationTitles}
            >
              A simple way
            </motion.h1>
            <motion.h1
              {...this.animationTitles}
            >
              to organize business
            </motion.h1>
            <div className="row-get-started">
              <motion.h2
                {...{ ...this.animationTitles, className: 'home-last-updated' }}
              >
                Last Update: 23/01/2023
              </motion.h2>
              <motion.button
                {...this.animationButtonStarted}
              >
                Get Started
              </motion.button>
            </div>
          </span>
          <div className="wallpaper" />
          <UseCaseExample
            title="Order Creation"
            data={selectOrderCreationResponse(showOrderCreationResponse)}
            showResponse={this.showResponseOrderCreation}
            image={example03}
          />
          <UseCaseExample
            title="Payment Check"
            data={selectPaymentResponse(showPaymentResponse)}
            showResponse={this.showResponsePayment}
            image={example01}
          />
          <UseCaseExample
            title="Shipping Tracking"
            data={selectShippingTrackingResponse(showShippingTrackingResponse)}
            showResponse={this.showResponseShippingTracking}
            image={example07}
          />
        </div>
        <Subscribe />
        <Footer />
      </>
    );
  }
}

Home.propTypes = {
  acao: PropTypes.bool.isRequired,
  history: PropTypes.shape().isRequired,
};
