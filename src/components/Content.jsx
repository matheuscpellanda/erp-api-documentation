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
        <Route exact path="/" component={Home} />
        <Route exact path="/entities" component={Entities} />
        <Route exact path="/entities/:entity" component={Entity} />
        <Route exact path="/docs" component={Documentations} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}
