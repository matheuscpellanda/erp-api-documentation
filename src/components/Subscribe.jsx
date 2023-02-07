import React from 'react';
import { motion } from 'framer-motion';
// import image from '../images/subscribe-image.png';
import './css/Subscribe.css';

const boxFeatures = {
  className: 'subscribe',
  whileHover: () => ({
    scale: 1.1,
    transition: { duration: 0.2 },
  }),
};

function Subscribe() {
  return (
    <motion.div {...boxFeatures}>
      <div className="box-image-subscribe" />
      <div className="subscribe-box">
        <h1 className="hero-title-subscribe">Subscribe to receive newsletters</h1>
        <div className="subscribe-info">
          <input type="email" name="email" id="email-subscribe" placeholder="Enter your email" />
          <button id="button-subscribe" type="button">Subscribe</button>
        </div>
      </div>
    </motion.div>
  );
}

export default Subscribe;
