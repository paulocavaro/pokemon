import React from "react";
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main/';
import Pokemon from '../pages/Pokemon/';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main}/>
    <Route path="/pokemon/:name" component={Pokemon}/>
  </Switch>
)

export default Routes;