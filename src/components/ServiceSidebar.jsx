import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/ServiceSidebar.css';
import servicesFunctions from '../assets/services/services.json';

const buildTitle = (name) => {
  let newName = name;
  if (name) {
    newName = name[0].toUpperCase();
    newName += name.slice(1);
  }
  return newName;
};

export default class ServiceSidebar extends Component {
  DEFAULT_ROUTE = [];

  updateServicesNames = () => {
    this.DEFAULT_ROUTE.length = 0;
    const services = Object.keys(servicesFunctions);
    services.forEach((service) => {
      this.DEFAULT_ROUTE.push(buildTitle(service));
    });
  };

  render() {
    const { selected } = this.props;
    this.updateServicesNames();
    const services = [...this.DEFAULT_ROUTE];
    return (
      <div className="service-sidebar">
        {
          services.map((service) => (
            <Link
              key={service}
              className={selected === service.toLowerCase() ? 'link-sidebar selected' : 'link-sidebar'}
              to={`/entities/${service.toLowerCase()}`}
            >
              { service }
            </Link>
          ))
        }
      </div>
    );
  }
}

ServiceSidebar.propTypes = {
  selected: PropTypes.string.isRequired,
};
