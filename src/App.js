import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topics List Page</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic Detail Page: { props.match.params.topicId }</h1>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          component={ HomePage } />
        <Route
          path='/hats'
          component={ HatsPage } />
        <Route
          exact
          path='/topics/'
          component={ TopicsList } />
        <Route
          path='/topics/:topicId'
          component={ TopicDetail } />
      </Switch>
    </div>
  );
}

export default App;
