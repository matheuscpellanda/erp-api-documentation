import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Documentations from '../pages/Documentations';
import Entities from '../pages/Entities';
import Entity from '../pages/Entity';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/doc-reference-api/" component={Home} />
        <Route exact path="/doc-reference-api/entities" component={Entities} />
        <Route exact path="/doc-reference-api/entities/:entity" component={Entity} />
        <Route exact path="/doc-reference-api/docs" component={Documentations} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}
