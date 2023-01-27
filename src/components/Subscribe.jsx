import React from 'react';
import { motion } from 'framer-motion';
import './css/Subscribe.css';

const boxFeatures = {
  className: 'subscribe',
  whileHover: () => ({
    scale: 1.1,
    background: 'linear-gradient(90deg, var(--color-secondary) 0%, var(--color-primary) 70%)',
    transition: { duration: 0.2 },
  }),
};

function Subscribe() {
  return (
    <motion.div {...boxFeatures}>
      <h1>Subscribe to receive newsletters</h1>
      <div className="subscribe-info">
        <input type="email" name="email" id="email-subscribe" placeholder="Enter your email" />
        <button type="button">Subscribe</button>
      </div>
    </motion.div>
  );
}

export default Subscribe;
