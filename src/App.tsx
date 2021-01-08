import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageLoading } from './components';

const LazyHomePage = React.lazy(() => import('./routes/HomePage'));
const LazyOptionChains = React.lazy(() => import('./routes/OptionChains'));
const LazyErrorPage = React.lazy(() => import('./routes/ErrorPage'));

const App: FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Router>
        <Switch>
          <Route exact path="/" component={LazyHomePage} />
          <Route exact path="/optionchain" component={LazyOptionChains} />
          <Route component={LazyErrorPage} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
