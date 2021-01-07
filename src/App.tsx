import React, { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import OptionChains from './routes/OptionChains';
import ErrorPage from './routes/ErrorPage';

const App: FC = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/optionchain" component={OptionChains} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </AnimatePresence>
  );
};

export default App;
