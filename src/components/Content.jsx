import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Documentations from '../pages/Documentations';
import Entities from '../pages/Entities';
import Entity from '../pages/Entity';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Services from '../pages/Services';
import Teste from '../pages/Teste';

export default class Content extends Component {
  render() {
    const { acao: ativaCor } = this.props;
    return (
      <Switch>
        <Route exact path="/" render={(props) => <Home acao={ativaCor} {...props} />} />
        <Route exact path="/entities" component={Entities} />
        <Route exact path="/entities/:entity" component={Entity} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/:service" component={Services} />
        <Route exact path="/docs" component={Documentations} />
        <Route exact path="/teste" component={Teste} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

Content.propTypes = {
  acao: PropTypes.bool.isRequired,
};
