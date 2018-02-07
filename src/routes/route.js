import React from 'react';
import Main from '../containers/main';
import HomePage from '../containers/Homepage/homepage';

import AllQuestions from '../containers/Questions/questions';
import EachQuestions from '../containers/Questions/eachQuestions';

import { Route, IndexRoute } from "react-router";



export default (
  <Route path="/" component={Main}>

    <IndexRoute component={HomePage}/>

    <Route component={AllQuestions}  >
      <Route component={EachQuestions} path="/questions"/>
    </Route>



  </Route>
);


