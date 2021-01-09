import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageLoading } from './components';

const HomePageLazy = lazy(() =>
  Promise.all([
    import('./routes/HomePage'),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([module]) => module)
);

const OptionChainsLazy = lazy(() =>
  Promise.all([
    import('./routes/OptionChains'),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([module]) => module)
);

const ErrorPageLazy = lazy(() =>
  Promise.all([
    import('./routes/ErrorPage'),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([module]) => module)
);

const App: FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePageLazy} />
          <Route exact path="/optionchain" component={OptionChainsLazy} />
          <Route component={ErrorPageLazy} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
